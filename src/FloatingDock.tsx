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
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-lg shadow-slate-900/10 backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 ${side === 'left' ? 'origin-left' : 'origin-right'}`}
        >
          <span className="text-lg leading-none" role="img" aria-label="工具">🛠️</span>
        </button>
      )}
      {hovering && (
        <div
          aria-label="工具快捷导航浮动面板"
          className="w-52 overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-2xl shadow-slate-900/10 backdrop-blur-xl"
        >
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-transparent px-4 py-2.5">
            <span className="text-xs font-semibold tracking-wide text-slate-500">工具导航</span>
          </div>
          <ul className="flex flex-col gap-1 p-2">
            {tools.map((tool) => (
              <li key={tool.id}>
                <button
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-slate-600 transition-colors hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white"
                  onClick={() => scrollTo(tool.id)}
                  aria-label={`跳转到 ${tool.label}`}
                >
                  <span>{tool.label}</span>
                  <span className="text-xs opacity-60">›</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}