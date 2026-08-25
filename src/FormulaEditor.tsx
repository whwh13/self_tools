import { useCallback, useEffect, useRef, useState } from 'react';
import type { DetailedHTMLProps, FormEvent, HTMLAttributes } from 'react';
import type { MathfieldElement } from 'mathlive';
import { ToolCard, ToolHeader } from './ui';
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

const toolbarButtons: { label: string; snippet: string }[] = [
  { label: 'a/b', snippet: '\\frac{ }{ }' },
  { label: '√', snippet: '\\sqrt{ }' },
  { label: 'x^', snippet: '^{ }' },
  { label: 'x_', snippet: '_{ }' },
  { label: '∑', snippet: '\\sum_{i=1}^{n} ' },
  { label: '∫', snippet: '\\int_{a}^{b} ' },
  { label: 'π', snippet: '\\pi ' },
  { label: 'θ', snippet: '\\theta ' },
  { label: '·', snippet: '\\cdot ' },
];

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
    <ToolCard>
      <ToolHeader title="公式编辑器 → LaTeX" subtitle="基于 MathLive 的可视化公式编辑" icon="∑" gradient="from-violet-500 to-fuchsia-500" />
      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50/70 p-4 ring-1 ring-slate-100">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-600">可视化编辑</h3>
              {!ready && <span className="text-xs text-slate-400">正在加载编辑器…</span>}
            </div>

            <div className="mb-3 flex flex-wrap gap-1.5">
              {toolbarButtons.map((btn) => (
                <button
                  key={btn.snippet}
                  onClick={() => insertLatex(btn.snippet)}
                  className="min-w-10 rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-violet-500 hover:text-white hover:ring-violet-500 active:scale-95"
                >
                  {btn.label}
                </button>
              ))}
              <button
                onClick={() => setLatexValue('')}
                className="rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-100 active:scale-95"
              >
                清空
              </button>
            </div>

            <div className="min-h-20 rounded-xl border border-slate-200 bg-white p-3">
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
                  className="h-20 w-full rounded-lg border border-slate-200 bg-white p-2 font-mono text-sm"
                  placeholder="MathLive 加载中…临时输入 LaTeX 也可"
                  value={latex}
                  onChange={(e) => setLatex(e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-slate-50/70 p-4 ring-1 ring-slate-100">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-600">LaTeX 与预览</h3>
              <button
                onClick={copyLatex}
                disabled={!latex}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                  copied
                    ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/40'
                    : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-sm shadow-violet-500/30 hover:shadow-md disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none'
                }`}
              >
                {copied ? '已复制' : '复制 LaTeX'}
              </button>
            </div>

            <label className="mb-1 text-xs text-slate-400">LaTeX 代码</label>
            <textarea
              readOnly
              rows={6}
              value={latex}
              className="w-full rounded-xl border border-slate-200 bg-white p-3 font-mono text-sm text-slate-700"
            />

            <label className="mb-1 mt-4 text-xs text-slate-400">预览</label>
            <div className="min-h-20 flex-1 rounded-xl border border-slate-200 bg-white p-3">
              {ready ? (
                <math-field read-only className="w-full text-lg" value={latex} />
              ) : (
                <div className="text-xs text-slate-400">编辑器初始化后显示预览</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ToolCard>
  );
}