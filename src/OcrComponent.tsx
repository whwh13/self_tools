import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createWorker, type Worker as TesseractWorker } from 'tesseract.js';

/**
 * 说明：
 * 这个版本修复了将函数（logger）传递到 Worker 导致的 DataCloneError 问题。
 * 原因是：Web Worker 的 postMessage/structured clone 不支持函数的克隆。
 * 因此我们**不要把函数直接作为选项传给 createWorker**。
 *
 * 实际策略：
 * - 不再把 logger 函数传入 createWorker。
 * - 保持组件 UI/交互不变，当无法获取精确进度时，使用不带百分比的“处理中”指示。
 * - 在识别开始/结束时合理更新状态，并在组件卸载时正确 terminate worker。
 *
 * 如果你希望恢复进度条（百分比），有两种可行方案：
 *  1) 在 worker 端实现 progress -> postMessage 到主线程（需要修改 worker 源），
 *  2) 使用支持将 logger 在 worker 内部执行的 tesseract.js 内部 API（需确认版本并避免把函数从主线程传入）。
 * 这两个方案都需要在 worker 和主线程之间通过可序列化的数据（消息）通信，而不是直接传递函数。
 */

const OcrComponent: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    // 已移除：const [progress, setProgress] = useState<number>(0);
    // const [copied, setCopied] = useState<boolean>(false);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [worker, setWorker] = useState<TesseractWorker | null>(null);
    const [isDragging, setIsDragging] = useState(false); // 拖拽高亮状态

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null); // 隐藏文件输入的引用

    // 抽取：从文件加载图片到 canvas
    const loadImageFromFile = useCallback((file: File) => {
        if (!file.type.startsWith('image/')) {
            console.warn('请选择图片文件');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            const image = new Image();
            image.onload = () => {
                const canvas = canvasRef.current;
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                // 以图片的自然分辨率设置 canvas，保证识别质量
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                setImageLoaded(true);
                setText('');
            };
            if (typeof e.target?.result === 'string') {
                image.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }, []);

    // 处理 <input type="file">
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) loadImageFromFile(file);
    };

    // 拖拽事件
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        setIsDragging(true);
    };
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) loadImageFromFile(file);
    };

    // 全局粘贴图片支持（Ctrl+V）
    useEffect(() => {
        const onPaste = (e: ClipboardEvent) => {
            const items = e.clipboardData?.items;
            if (!items) return;
            for (const item of items) {
                if (item.type.startsWith('image/')) {
                    const file = item.getAsFile();
                    if (file) {
                        loadImageFromFile(file);
                        e.preventDefault();
                        break;
                    }
                }
            }
        };
        window.addEventListener('paste', onPaste);
        return () => window.removeEventListener('paste', onPaste);
    }, [loadImageFromFile]);

    // 初始化 worker（不传函数）
    const initializeWorker = async (): Promise<TesseractWorker> => {
        const w = await createWorker('eng+chi_sim', 1);
        return w;
    };

    // 在组件挂载时创建 worker，并在卸载时 terminate
    useEffect(() => {
        let active = true;
        let localWorker: TesseractWorker | null = null;

        (async () => {
            try {
                localWorker = await initializeWorker();
                if (active) setWorker(localWorker);
            } catch (err) {
                console.error('初始化 Tesseract Worker 失败:', err);
            }
        })();

        return () => {
            active = false;
            if (localWorker && typeof localWorker.terminate === 'function') {
                localWorker.terminate().catch(() => {});
            }
        };
    }, []);

    const runOcr = async () => {
        if (!imageLoaded || !canvasRef.current || !worker) {
            console.warn('OCR 条件未满足：请确保已选择图片并且识别核心已加载。');
            return;
        }

        setLoading(true);
        setText('');
       // setCopied(false);

        try {
            const { data: { text: resultText } } = await worker.recognize(canvasRef.current);
            setText(resultText);
        } catch (err) {
            console.error('OCR 识别失败:', err);
            setText('识别失败，请查看控制台日志。');
        } finally {
            setLoading(false);
        }
    };

    // const handleCopy = () => {
    //     if (!text) return;
    //     if (navigator.clipboard) {
    //         navigator.clipboard.writeText(text).then(() => {
    //             setCopied(true);
    //             setTimeout(() => setCopied(false), 2000);
    //         }).catch(err => {
    //             console.error('复制失败:', err);
    //             fallbackCopy(text);
    //         });
    //     } else {
    //         fallbackCopy(text);
    //     }
    // };

    // const fallbackCopy = (textToCopy: string) => {
    //     try {
    //         const textArea = document.createElement('textarea');
    //         textArea.value = textToCopy;
    //         textArea.style.position = 'fixed';
    //         textArea.style.top = '0';
    //         textArea.style.left = '0';
    //         textArea.style.opacity = '0';
    //         document.body.appendChild(textArea);
    //         textArea.select();
    //         document.execCommand('copy');
    //         document.body.removeChild(textArea);
    //         setCopied(true);
    //         setTimeout(() => setCopied(false), 2000);
    //     } catch (err) {
    //         console.error('后备复制方法失败:', err);
    //     }
    // };

    // 点击投放区，打开文件选择（仅在未加载图片时启用）
    const handleDropzoneClick = () => {
        if (!imageLoaded) fileInputRef.current?.click();
    };

    // 清除当前图片并返回投放区
    const clearImage = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        setImageLoaded(false);
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow rounded ">
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t text-center">
                <h1 className="text-3xl font-bold">OCR识别（中英识别）</h1>
                <p className="text-blue-100 mt-1">
                  基于{' '}
                  <a
                    href="https://github.com/Balearica/tesseract.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                  >
                    tesseract.js
                  </a>
                </p>
            </header>

            <main className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    {/* 合并后的投放区/预览区 */}
                    <div
                        onClick={handleDropzoneClick}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`flex-1 border-2 border-dashed rounded transition-colors relative overflow-hidden ${
                            isDragging ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-gray-50'
                        }`}
                    >
                        {/* 预览清除按钮 */}
                        {imageLoaded && (
                            <button
                                type="button"
                                onClick={clearImage}
                                title="清除图片"
                                aria-label="清除图片"
                                className="absolute top-2 left-2 z-10 h-8 w-8 leading-8 text-center text-white bg-black/50 hover:bg-black/70 rounded-full"
                            >
                                ×
                            </button>
                        )}

                        {/* 画布：始终挂载，未加载时隐藏，已加载时充满容器宽度 */}
                        <canvas
                            ref={canvasRef}
                            className={`w-full block ${imageLoaded ? '' : 'hidden'}`}
                        />

                        {/* 投放区内容：仅在未加载图片时显示 */}
                        {!imageLoaded && (
                            <div className="h-64 flex items-center justify-center px-4 text-center cursor-pointer select-none">
                                <div>
                                    <p className="mb-2">拖拽或粘贴图片到此，或点击此区域选择图片</p>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={runOcr}
                        disabled={loading || !imageLoaded || !worker}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded disabled:bg-gray-400"
                    >
                        {loading ? '识别中...' : (worker ? '开始识别' : '加载中...')}
                    </button>
                </div>

                {/* 去掉单独的预览区块 */}

                {loading && (
                    <div className="my-5">
                        <p className="text-center text-blue-600">正在处理，请稍候...</p>
                    </div>
                )}

                {!loading && text && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">识别结果:</h3>
                        <textarea readOnly rows={15} value={text} className="w-full p-4 border rounded font-mono bg-gray-50" />
                    </div>
                )}
            </main>
        </div>
    );
};

export default OcrComponent;