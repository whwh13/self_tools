import { useCallback, useEffect, useRef, useState } from 'react';
import type { ChangeEvent, DragEvent } from 'react';
import { ToolCard, ToolHeader } from './ui';

type PaddleOcrService = import('ppu-paddle-ocr/web').PaddleOcrService;

export default function OcrComponent() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const serviceRef = useRef<PaddleOcrService | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let active = true;
    let service: PaddleOcrService | null = null;

    (async () => {
      try {
        const { PaddleOcrService } = await import('ppu-paddle-ocr/web');
        service = new PaddleOcrService();
        await service.initialize();
        if (!active) return;
        serviceRef.current = service;
        setReady(true);
      } catch (err) {
        console.error('PaddleOCR 初始化失败:', err);
        if (active) setInitError('OCR 识别模型加载失败，请刷新页面重试。');
      }
    })();

    return () => {
      active = false;
      service?.destroy().catch(() => {});
    };
  }, []);

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

  const runOcr = async () => {
    const service = serviceRef.current;
    if (!imageLoaded || !canvasRef.current || !service) return;

    setLoading(true);
    setText('');

    try {
      const result = await service.recognize(canvasRef.current, { flatten: true });
      setText(result.text.trim());
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
      <ToolHeader
        title="OCR 文字识别"
        subtitle="基于 PaddleOCR · 中英文识别 · 支持拖拽 / 粘贴 / 选择图片"
        icon="🔍"
        gradient="from-sky-500 to-blue-600"
      />
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
            disabled={loading || !imageLoaded || !ready}
            className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl hover:shadow-sky-500/40 active:scale-[0.98] disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none sm:py-4"
          >
            {loading ? '识别中...' : ready ? '开始识别' : '加载模型中...'}
          </button>
        </div>

        {!ready && (
          <div className="my-6 flex items-center justify-center gap-2 text-sky-600">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
            <p className="text-sm">{initError ?? '正在下载识别模型（首次约 5-20MB），请稍候...'}</p>
          </div>
        )}

        {initError && (
          <div className="my-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{initError}</div>
        )}

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