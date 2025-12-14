import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as ocr from '@paddlejs-models/ocr';

const OcrComponent: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    
    // 新增：模型是否加载完成的状态
    const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false);
    
    const [isDragging, setIsDragging] = useState(false); 

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // --- 初始化 PaddleOCR 模型 ---
    useEffect(() => {
        const loadModel = async () => {
            try {
                // 初始化模型（会自动从 CDN 下载模型文件，约 10MB+）
                await ocr.init();
                setIsModelLoaded(true);
                console.log('PaddleOCR 模型加载完成');
            } catch (err) {
                console.error('PaddleOCR 模型加载失败:', err);
                setText('错误：模型加载失败，请检查网络连接（需要访问百度 CDN）。');
            }
        };

        loadModel();
        // Paddle.js 是单例，不需要手动销毁
    }, []);

    // --- 图片加载逻辑 (保持不变) ---
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

                // 保持原图分辨率
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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) loadImageFromFile(file);
    };

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

    // 粘贴支持
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

    // --- 核心：执行 OCR 识别 ---
    const runOcr = async () => {
        // 检查条件
        if (!imageLoaded || !canvasRef.current) {
            console.warn('请先加载图片');
            return;
        }
        if (!isModelLoaded) {
            console.warn('模型尚未加载完成');
            return;
        }

        setLoading(true);
        setText('');

        try {
            // Paddle.js 识别调用
            // recognize 接收 HTMLImageElement 或 HTMLCanvasElement
            const res = await ocr.recognize(canvasRef.current);

            // 处理结果
            // Paddle 返回的结果结构可能包含 text 字段，或者是 text 数组
            if (res.text) {
                // 如果是数组则换行拼接，如果是字符串则直接使用
                const resultText = Array.isArray(res.text) 
                    ? res.text.join('\n') 
                    : res.text;
                setText(resultText);
            } else {
                setText('未识别到文字');
            }
        } catch (err) {
            console.error('OCR 识别失败:', err);
            setText('识别过程中发生错误，请查看控制台。');
        } finally {
            setLoading(false);
        }
    };

    const handleDropzoneClick = () => {
        if (!imageLoaded) fileInputRef.current?.click();
    };

    const clearImage = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        setImageLoaded(false);
        setText('');
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow rounded">
            <header className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-t text-center">
                <h1 className="text-3xl font-bold">OCR识别 (PaddleOCR)</h1>
                <p className="text-green-100 mt-1">
                    基于百度飞桨 Paddle.js - 中文识别更精准
                </p>
            </header>

            <main className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    {/* 投放区/预览区 */}
                    <div
                        onClick={handleDropzoneClick}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`flex-1 border-2 border-dashed rounded transition-colors relative overflow-hidden ${
                            isDragging ? 'border-green-600 bg-green-50' : 'border-gray-300 bg-gray-50'
                        }`}
                    >
                        {imageLoaded && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation(); // 防止触发文件选择
                                    clearImage();
                                }}
                                className="absolute top-2 left-2 z-10 h-8 w-8 leading-8 text-center text-white bg-black/50 hover:bg-black/70 rounded-full"
                            >
                                ×
                            </button>
                        )}

                        <canvas
                            ref={canvasRef}
                            className={`w-full block ${imageLoaded ? '' : 'hidden'}`}
                        />

                        {!imageLoaded && (
                            <div className="h-64 flex items-center justify-center px-4 text-center cursor-pointer select-none">
                                <div>
                                    <p className="mb-2">拖拽或粘贴图片到此，或点击选择</p>
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
                        // 只有当图片已加载 且 模型已初始化完成时，按钮才可用
                        disabled={loading || !imageLoaded || !isModelLoaded}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded disabled:bg-gray-400 disabled:cursor-not-allowed h-fit sm:self-start whitespace-nowrap"
                    >
                        {loading 
                            ? '识别中...' 
                            : (isModelLoaded ? '开始识别' : '模型加载中...')}
                    </button>
                </div>

                {loading && (
                    <div className="my-5">
                        <p className="text-center text-green-600">正在进行深度学习计算...</p>
                    </div>
                )}

                {!loading && text && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">识别结果:</h3>
                        <textarea 
                            readOnly 
                            rows={15} 
                            value={text} 
                            className="w-full p-4 border rounded font-mono bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        />
                    </div>
                )}
            </main>
        </div>
    );
};

export default OcrComponent;