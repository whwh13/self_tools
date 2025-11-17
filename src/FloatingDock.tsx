import { useState, useEffect, useRef } from 'react';

interface DockButton {
  id: string;
  label: string;
}

const buttons: DockButton[] = [
  { id: 'pomodoro', label: '番茄钟' },
  { id: 'calculator', label: '计算器' },
  { id: 'eyedropper', label: '取色器' },
  { id: 'ocr', label: 'OCR识别' },
  { id: 'formula-editor', label: '公式编辑器' }, // 新增
];

// 简单的防抖
// 已移除拖动功能，防抖工具不再需要

export default function FloatingDock() {
  const dockRef = useRef<HTMLDivElement | null>(null);
  const top = 16; // 固定高度，不可拖动
  const [side, setSide] = useState<'left' | 'right'>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('floatingDockSide');
      if (saved === 'left' || saved === 'right') return saved;
    }
    return 'right';
  });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // 持久化侧边偏好
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('floatingDockSide', side);
    }
  }, [side]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div
      ref={dockRef}
      className="fixed z-50 select-none cursor-pointer group"
      style={side === 'left' ? { top, left: 8 } : { top, right: 8 }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* 最小化状态：仅显示圆形图标 */}
      {!hovering && (
        <button
          aria-label="展开工具导航"
          onFocus={() => setHovering(true)}
          onDoubleClick={() => {
            const next = side === 'left' ? 'right' : 'left';
            setSide(next);
            if (typeof window !== 'undefined') window.localStorage.setItem('floatingDockSide', next);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') { setSide('left'); window.localStorage.setItem('floatingDockSide','left'); }
            else if (e.key === 'ArrowRight') { setSide('right'); window.localStorage.setItem('floatingDockSide','right'); }
            else if (e.key === 'Enter') { setHovering(true); }
          }}
          className={`h-11 w-11 rounded-full shadow-lg border border-gray-300 bg-white/90 backdrop-blur flex items-center justify-center hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${side === 'left' ? 'origin-left' : 'origin-right'}`}
        >
          <span className="text-lg" role="img" aria-label="工具">🛠️</span>
        </button>
      )}
      {/* 展开面板 */}
      {hovering && (
        <div
          aria-label="工具快捷导航浮动面板"
          className="shadow-lg rounded-xl border border-gray-300 bg-white/95 backdrop-blur-sm transition-all w-48 overflow-hidden"
        >
          <div className="px-3 py-2 border-b border-gray-200">
            <span className="text-xs font-semibold text-gray-600">工具导航</span>
          </div>
          <ul className="flex flex-col p-2 gap-2">
            {buttons.map(b => (
              <li key={b.id}>
                <button
                  className="w-full text-left text-sm px-3 py-2 rounded-md bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={(e) => { e.stopPropagation(); scrollTo(b.id); }}
                  aria-label={`跳转到 ${b.label}`}
                >
                  {b.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
