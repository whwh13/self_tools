import React, { useState, useEffect } from 'react';

// --- 类型定义 ---

interface ColorData {
  r: number;
  g: number;
  b: number;
  a: number; // 将始终为 255，因为 sRGBHex 不含 alpha
}

// --- 帮助函数 ---

/**
 * 将 RGB 颜色转换为 Hex 字符串
 */
function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
}

/**
 * 将 Hex 字符串 (#RRGGBB) 转换为 ColorData
 */
function hexToRgba(hex: string): ColorData {
  let hexValue = hex.replace('#', '');

  // 处理缩写 (例如 #03F)
  if (hexValue.length === 3) {
    hexValue = hexValue.split('').map(char => char + char).join('');
  }

  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  return { r, g, b, a: 255 }; // sRGBHex 不包含 alpha
}

/**
 * 将文本复制到剪贴板（兼容 iFrame）
 */
function copyToClipboard(text: string): boolean {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  
  // 设置为不可见并添加到 DOM
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  
  textarea.select();
  textarea.focus(); // 确保选中
  
  try {
    // 使用 document.execCommand
    const success = document.execCommand('copy');
    return success;
  } catch (err) {
    console.error('无法复制文本: ', err);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

// --- 扩展 window 类型以包含 EyeDropper ---
declare global {
  interface Window {
    EyeDropper: any; // 使用 any 来简化，因为类型定义可能不存在
  }
}

/**
 * CopyButton 组件
 */
const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copyToClipboard(textToCopy)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒后重置状态
    } else {
      alert("复制失败。");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded ${
        copied
          ? 'bg-green-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } transition-all`}
    >
      {copied ? '已复制!' : '复制'}
    </button>
  );
};


/**
 * ColorDisplay 组件用于显示颜色信息
 */
const ColorDisplay: React.FC<{ color: ColorData | null }> = ({ color }) => {
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

  const { r, g, b} = color;
  const hex = rgbToHex(r, g, b);
  // EyeDropper API 总是返回不透明的颜色, 所以 alpha 是 1.
  // 我们将显示更简单的 rgb() 字符串。
  const rgbString = `rgb(${r},${g},${b})`;
  const background = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg text-gray-700 mb-2">选中颜色</h3>
      <div 
        className="w-full h-24 border border-gray-300 rounded-md shadow-inner mb-4"
        style={{ backgroundColor: background }}
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
};

/**
 * 主应用组件
 */
export default function EyeDropper() {
  // --- State ---
  const [pickedColor, setPickedColor] = useState<ColorData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const [isPicking, setIsPicking] = useState(false);

  // --- 检查 API 支持 ---
  useEffect(() => {
    if ('EyeDropper' in window) {
      setIsSupported(true);
    } else {
      setError("您的浏览器不支持 EyeDropper API。请尝试使用最新的 Chrome 或 Edge 浏览器。");
    }
  }, []);

  // --- 事件处理 ---

  /**
   * 处理点击取色按钮
   */
  const handlePickColor = async () => {
    if (!isSupported) {
      setError("EyeDropper API 不被支持。");
      return;
    }

    setIsPicking(true);
    setError(null);
    
    // 创建 EyeDropper 实例
    const eyeDropper = new window.EyeDropper();

    try {
      // 打开取色器
      const result = await eyeDropper.open();
      // result.sRGBHex 包含了像 #aabbcc 这样的颜色值
      setPickedColor(hexToRgba(result.sRGBHex));
    } catch (e) {
      console.error(e);
      // 用户按 ESC 键取消
      setError("取色已取消。");
    } finally {
      setIsPicking(false);
    }
  };

  // --- 渲染 ---

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="w-full max-w-md mx-auto mt-8 bg-gray-100 p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          屏幕取色器
        </h1>
        
        {/* --- 取色按钮 --- */}
        <button
          onClick={handlePickColor}
          disabled={!isSupported || isPicking}
          className="mb-6 w-full cursor-pointer rounded-md bg-blue-500 px-4 py-3 text-center font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isPicking ? '正在拾取...' : '启动取色器 (吸管)'}
        </button>

        {/* --- 颜色显示 --- */}
        <ColorDisplay color={pickedColor} />

        {/* --- 错误/状态信息 --- */}
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