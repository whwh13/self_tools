import type { ReactNode } from 'react';

interface ToolCardProps {
  children: ReactNode;
  className?: string;
}

export function ToolCard({ children, className = '' }: ToolCardProps) {
  return (
    <div className={`rounded-3xl bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

interface ToolHeaderProps {
  title: string;
  subtitle?: ReactNode;
  icon: string;
  gradient: string;
}

export function ToolHeader({ title, subtitle, icon, gradient }: ToolHeaderProps) {
  return (
    <div className={`relative px-6 py-5 text-white bg-gradient-to-r ${gradient} overflow-hidden`}>
      <div className="pointer-events-none absolute -top-10 -right-6 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 right-24 h-24 w-24 rounded-full bg-white/10 blur-xl" />
      <div className="relative flex items-center gap-3">
        <span className="text-2xl leading-none drop-shadow">{icon}</span>
        <div>
          <h2 className="text-lg font-bold tracking-wide">{title}</h2>
          {subtitle && <p className="mt-0.5 text-xs text-white/80">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}