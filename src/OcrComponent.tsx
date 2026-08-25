import { useState, useRef, useEffect, useCallback } from 'react';
import type { ChangeEvent, DragEvent } from 'react';
import { createWorker } from 'tesseract.js';
import type { Worker as TesseractWorker } from 'tesseract.js';
import { ToolCard, ToolHeader } from './ui';

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
    <ToolCard>
      <ToolHeader title="OCR 文字识别" subtitle="中英文识别 · 支持拖拽 / 粘贴 / 选择图片" icon="🔍" gradient="from-sky-500 to-blue-600" />
      <div className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <div
            onClick={handleDropzoneClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative flex-1 overflow-hidden rounded-2xl border-2 border-dashed transition-colors ${
              isDragging
                ? 'border-sky-500 bg-sky-50'
                : 'border-slate-200 bg-slate-50 hover:border-sky-400 hover:bg-sky-50/50'
            }`}
          >
            {imageLoaded && (
              <button
                type="button"
                onClick={clearImage}
                title="清除图片"
                aria-label="清除图片"
                className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/50 text-white backdrop-blur transition-colors hover:bg-slate-900/70"
              >
                ×
              </button>
            )}

            <canvas ref={canvasRef} className={`block w-full ${imageLoaded ? '' : 'hidden'}`} />

            {!imageLoaded && (
              <div className="flex h-64 cursor-pointer select-none flex-col items-center justify-center gap-2 px-4 text-center">
                <span className="text-3xl">🖼️</span>
                <p className="text-sm text-slate-500">拖拽或粘贴图片到此，或点击此区域选择图片</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            )}
          </div>

          <button
            onClick={runOcr}
            disabled={loading || !imageLoaded || !worker}
            className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl hover:shadow-sky-500/40 active:scale-[0.98] disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none sm:py-4"
          >
            {loading ? '识别中...' : worker ? '开始识别' : '加载中...'}
          </button>
        </div>

        {loading && (
          <div className="my-6 flex items-center justify-center gap-2 text-sky-600">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
            <p className="text-sm">正在处理，请稍候...</p>
          </div>
        )}

        {!loading && text && (
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold text-slate-500">识别结果</h3>
            <textarea
              readOnly
              rows={12}
              value={text}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-relaxed text-slate-700 focus:outline-none"
            />
          </div>
        )}
      </div>
    </ToolCard>
  );
}