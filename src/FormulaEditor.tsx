import { useCallback, useEffect, useRef, useState } from 'react';
import type { DetailedHTMLProps, FormEvent, HTMLAttributes } from 'react';
import type { MathfieldElement } from 'mathlive';
import './mathlive-static.css';

type MathFieldProps = DetailedHTMLProps<HTMLAttributes<MathfieldElement>, MathfieldElement> & {
  value?: string;
  placeholder?: string;
  'virtual-keyboard-mode'?: 'manual' | 'onfocus' | 'off' | string;
  'read-only'?: boolean;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'math-field': MathFieldProps;
    }
  }
}

export default function FormulaEditor() {
  const [ready, setReady] = useState(false);
  const [latex, setLatex] = useState('');
  const [copied, setCopied] = useState(false);
  const mfRef = useRef<MathfieldElement | null>(null);

  useEffect(() => {
    let mounted = true;
    import('mathlive')
      .then(() => {
        if (mounted) setReady(true);
      })
      .catch(() => {
        if (mounted) setReady(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const handleInput = useCallback((e: FormEvent<MathfieldElement>) => {
    setLatex(e.currentTarget.value);
  }, []);

  const insertLatex = (snippet: string) => {
    const mf = mfRef.current;
    if (!mf) return;
    mf.insert(snippet);
    mf.focus();
    setLatex(mf.value);
  };

  const setLatexValue = (v: string) => {
    const mf = mfRef.current;
    if (mf) {
      mf.value = v;
      mf.focus();
    }
    setLatex(v);
  };

  const copyLatex = async () => {
    if (!latex) return;
    try {
      await navigator.clipboard.writeText(latex);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = latex;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <header className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white p-5 rounded-lg shadow mb-5 text-center">
        <h2 className="text-xl font-bold">公式可视化编辑器 → LaTeX</h2>
        <p className="text-xs text-violet-100 mt-1">
          基于
          <a
            href="https://github.com/arnog/mathlive"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-1 hover:text-white"
          >
            MathLive
          </a>
          可视化编辑并导出 LaTeX
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-700">可视化编辑</h3>
            {!ready && <span className="text-xs text-gray-500">正在加载编辑器…</span>}
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('\\frac{ }{ }')}>a/b</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('\\sqrt{ }')}>√</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('^{ }')}>x^</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('_{ }')}>x_</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('\\sum_{i=1}^{n} ')}>∑</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('\\int_{a}^{b} ')}>∫</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('\\pi ')}>π</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('\\theta ')}>θ</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => insertLatex('\\cdot ')}>·</button>
            <button className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200" onClick={() => setLatexValue('')}>清空</button>
          </div>

          <div className="border rounded bg-gray-50 p-3 min-h-[64px]">
            {ready ? (
              <math-field
                ref={mfRef}
                onInput={handleInput}
                virtual-keyboard-mode="manual"
                className="w-full text-lg"
                style={{ width: '100%' }}
                placeholder="在此输入/编辑公式，或使用上方工具栏插入结构"
              />
            ) : (
              <textarea
                className="w-full h-20 p-2 border rounded text-sm font-mono bg-white"
                placeholder="MathLive 加载中…临时输入 LaTeX 也可"
                value={latex}
                onChange={(e) => setLatex(e.target.value)}
              />
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-700">LaTeX 与预览</h3>
            <button
              onClick={copyLatex}
              disabled={!latex}
              className="px-3 py-1 rounded bg-green-600 text-white text-xs disabled:bg-gray-300"
            >
              {copied ? '已复制' : '复制 LaTeX'}
            </button>
          </div>

          <label className="text-xs text-gray-500 mb-1">LaTeX 代码</label>
          <textarea
            readOnly
            rows={6}
            value={latex}
            className="w-full p-2 border rounded font-mono text-sm bg-gray-50"
          />

          <label className="text-xs text-gray-500 mt-4 mb-1">预览</label>
          <div className="border rounded bg-gray-50 p-3 min-h-[64px]">
            {ready ? (
              <math-field read-only className="w-full text-lg" value={latex} />
            ) : (
              <div className="text-xs text-gray-400">编辑器初始化后显示预览</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}