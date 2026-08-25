import { useState, useEffect } from 'react';
import { ToolCard, ToolHeader } from './ui';

interface ColorData {
  r: number;
  g: number;
  b: number;
}

interface EyeDropperResult {
  sRGBHex: string;
}

interface EyeDropperInstance {
  open: () => Promise<EyeDropperResult>;
}

interface EyeDropperConstructor {
  new (): EyeDropperInstance;
}

declare global {
  interface Window {
    EyeDropper?: EyeDropperConstructor;
  }
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('').toUpperCase();
}

function hexToRgb(hex: string): ColorData {
  let hexValue = hex.replace('#', '');
  if (hexValue.length === 3) {
    hexValue = hexValue.split('').map((c) => c + c).join('');
  }
  return {
    r: parseInt(hexValue.substring(0, 2), 16),
    g: parseInt(hexValue.substring(2, 4), 16),
    b: parseInt(hexValue.substring(4, 6), 16),
  };
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (await copyToClipboard(textToCopy)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      alert('复制失败。');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
        copied
          ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/40'
          : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100'
      }`}
    >
      {copied ? '已复制!' : '复制'}
    </button>
  );
}

function ColorDisplay({ color }: { color: ColorData | null }) {
  if (!color) {
    return (
      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold text-slate-500">选中颜色</h3>
        <div className="flex h-32 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-400">
          尚未拾取颜色
        </div>
      </div>
    );
  }

  const { r, g, b } = color;
  const hex = rgbToHex(r, g, b);
  const rgbString = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="mt-6">
      <h3 className="mb-3 text-sm font-semibold text-slate-500">选中颜色</h3>
      <div className="mb-5 h-32 rounded-2xl ring-1 ring-slate-900/10 shadow-inner" style={{ backgroundColor: rgbString }} />
      <div className="flex flex-col gap-3">
        {[
          { label: 'HEX', value: hex },
          { label: 'RGB', value: rgbString },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-2.5 ring-1 ring-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{row.label}</span>
            <code className="flex-1 text-right font-mono text-sm font-medium text-slate-700">{row.value}</code>
            <CopyButton textToCopy={row.value} />
          </div>
        ))}
      </div>
    </div>
  );
}

const ERROR_HTTPS = 'EyeDropper API 需要安全上下文，请通过 HTTPS 访问本站后再试。';
const ERROR_UNSUPPORTED = '您的浏览器不支持 EyeDropper API。请尝试使用最新的 Chrome 或 Edge 浏览器。';

export default function EyeDropper() {
  const [pickedColor, setPickedColor] = useState<ColorData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const [isPicking, setIsPicking] = useState(false);

  useEffect(() => {
    if (!window.isSecureContext) {
      setError(ERROR_HTTPS);
      return;
    }
    if (window.EyeDropper) {
      setIsSupported(true);
    } else {
      setError(ERROR_UNSUPPORTED);
    }
  }, []);

  const handlePickColor = async () => {
    if (!window.isSecureContext) {
      setError(ERROR_HTTPS);
      return;
    }
    if (!window.EyeDropper) {
      setError('EyeDropper API 不被支持。');
      return;
    }

    setIsPicking(true);
    setError(null);

    const eyeDropper = new window.EyeDropper();
    try {
      const result = await eyeDropper.open();
      setPickedColor(hexToRgb(result.sRGBHex));
    } catch (e) {
      console.error(e);
      setError('取色已取消。');
    } finally {
      setIsPicking(false);
    }
  };

  return (
    <ToolCard>
      <ToolHeader title="屏幕取色器" subtitle="拾取屏幕任意位置的颜色" icon="🎨" gradient="from-indigo-500 to-violet-500" />
      <div className="p-6">
        <button
          onClick={handlePickColor}
          disabled={!isSupported || isPicking}
          className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-center font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/40 active:scale-[0.98] disabled:bg-gradient-to-r disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none disabled:cursor-not-allowed"
        >
          {isPicking ? '正在拾取...' : '启动取色器 (吸管)'}
        </button>

        <ColorDisplay color={pickedColor} />

        {error && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            <p>{error}</p>
            {error === ERROR_UNSUPPORTED && (
              <p className="mt-2 font-mono text-xs text-red-400">
                secure={String(window.isSecureContext)} · dropper={String('EyeDropper' in window)} ·{' '}
                {navigator.userAgent}
              </p>
            )}
          </div>
        )}
        {!isSupported && !error && (
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-600">
            正在检查浏览器支持...
          </div>
        )}
      </div>
    </ToolCard>
  );
}