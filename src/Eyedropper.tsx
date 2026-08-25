import { useState, useEffect } from 'react';

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
      className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded ${
        copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } transition-all`}
    >
      {copied ? '已复制!' : '复制'}
    </button>
  );
}

function ColorDisplay({ color }: { color: ColorData | null }) {
  if (!color) {
    return (
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-gray-700 mb-2">选中颜色</h3>
        <div className="w-full h-24 bg-gray-200 border rounded-md flex items-center justify-center text-gray-500">
          N/A
        </div>
      </div>
    );
  }

  const { r, g, b } = color;
  const hex = rgbToHex(r, g, b);
  const rgbString = `rgb(${r},${g},${b})`;

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg text-gray-700 mb-2">选中颜色</h3>
      <div
        className="w-full h-24 border border-gray-300 rounded-md shadow-inner mb-4"
        style={{ backgroundColor: rgbString }}
      ></div>
      <div className="mb-2">
        <label className="text-xs font-medium text-gray-500">HEX</label>
        <div className="relative font-mono bg-gray-100 p-2 rounded">
          <code>{hex}</code>
          <CopyButton textToCopy={hex} />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-gray-500">RGB</label>
        <div className="relative font-mono bg-gray-100 p-2 rounded">
          <code>{rgbString}</code>
          <CopyButton textToCopy={rgbString} />
        </div>
      </div>
    </div>
  );
}

export default function EyeDropper() {
  const [pickedColor, setPickedColor] = useState<ColorData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const [isPicking, setIsPicking] = useState(false);

  useEffect(() => {
    if (window.EyeDropper) {
      setIsSupported(true);
    } else {
      setError('您的浏览器不支持 EyeDropper API。请尝试使用最新的 Chrome 或 Edge 浏览器。');
    }
  }, []);

  const handlePickColor = async () => {
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
    <div className="bg-white font-sans text-gray-800 py-4">
      <div className="w-full max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">屏幕取色器</h1>
        <button
          onClick={handlePickColor}
          disabled={!isSupported || isPicking}
          className="mb-6 w-full cursor-pointer rounded-md bg-blue-500 px-4 py-3 text-center font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isPicking ? '正在拾取...' : '启动取色器 (吸管)'}
        </button>
        <ColorDisplay color={pickedColor} />
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md text-sm">
            {error}
          </div>
        )}
        {!isSupported && !error && (
          <div className="mt-4 p-3 bg-yellow-100 text-yellow-700 border border-yellow-300 rounded-md text-sm">
            正在检查浏览器支持...
          </div>
        )}
      </div>
    </div>
  );
}