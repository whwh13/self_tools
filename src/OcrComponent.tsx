import { useState, useRef, useEffect, useCallback } from 'react';
import type { ChangeEvent, DragEvent } from 'react';
import { createWorker } from 'tesseract.js';
import type { Worker as TesseractWorker } from 'tesseract.js';

export default function OcrComponent() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [worker, setWorker] = useState<TesseractWorker | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) loadImageFromFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) loadImageFromFile(file);
  };

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

  useEffect(() => {
    let active = true;
    let localWorker: TesseractWorker | null = null;

    (async () => {
      try {
        localWorker = await createWorker('eng+chi_sim', 1);
        if (active) setWorker(localWorker);
      } catch (err) {
        console.error('初始化 Tesseract Worker 失败:', err);
      }
    })();

    return () => {
      active = false;
      localWorker?.terminate().catch(() => {});
    };
  }, []);

  const runOcr = async () => {
    if (!imageLoaded || !canvasRef.current || !worker) {
      console.warn('OCR 条件未满足：请确保已选择图片并且识别核心已加载。');
      return;
    }

    setLoading(true);
    setText('');

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

  const handleDropzoneClick = () => {
    if (!imageLoaded) fileInputRef.current?.click();
  };

  const clearImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    setImageLoaded(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow rounded">
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
          <div
            onClick={handleDropzoneClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex-1 border-2 border-dashed rounded transition-colors relative overflow-hidden ${
              isDragging ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-gray-50'
            }`}
          >
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

            <canvas ref={canvasRef} className={`w-full block ${imageLoaded ? '' : 'hidden'}`} />

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
            {loading ? '识别中...' : worker ? '开始识别' : '加载中...'}
          </button>
        </div>

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
}