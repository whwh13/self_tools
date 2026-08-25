import { useState, useEffect } from 'react';
import { tools } from './tools';

const SIDE_STORAGE_KEY = 'floatingDockSide';
type Side = 'left' | 'right';

function isSide(value: string | null): value is Side {
  return value === 'left' || value === 'right';
}

export default function FloatingDock() {
  const [side, setSide] = useState<Side>(() => {
    const saved = window.localStorage.getItem(SIDE_STORAGE_KEY);
    return isSide(saved) ? saved : 'right';
  });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(SIDE_STORAGE_KEY, side);
  }, [side]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div
      className="fixed z-50 select-none cursor-pointer group"
      style={side === 'left' ? { top: 16, left: 8 } : { top: 16, right: 8 }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {!hovering && (
        <button
          aria-label="展开工具导航"
          onFocus={() => setHovering(true)}
          onDoubleClick={() => setSide(side === 'left' ? 'right' : 'left')}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setSide('left');
            else if (e.key === 'ArrowRight') setSide('right');
            else if (e.key === 'Enter') setHovering(true);
          }}
          className={`h-11 w-11 rounded-full shadow-lg border border-gray-300 bg-white/90 backdrop-blur flex items-center justify-center hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${side === 'left' ? 'origin-left' : 'origin-right'}`}
        >
          <span className="text-lg" role="img" aria-label="工具">🛠️</span>
        </button>
      )}
      {hovering && (
        <div
          aria-label="工具快捷导航浮动面板"
          className="shadow-lg rounded-xl border border-gray-300 bg-white/95 backdrop-blur-sm transition-all w-48 overflow-hidden"
        >
          <div className="px-3 py-2 border-b border-gray-200">
            <span className="text-xs font-semibold text-gray-600">工具导航</span>
          </div>
          <ul className="flex flex-col p-2 gap-2">
            {tools.map((tool) => (
              <li key={tool.id}>
                <button
                  className="w-full text-left text-sm px-3 py-2 rounded-md bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => scrollTo(tool.id)}
                  aria-label={`跳转到 ${tool.label}`}
                >
                  {tool.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}