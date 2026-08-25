import { useState, useEffect } from 'react';
import { ToolCard, ToolHeader } from './ui';

const INITIAL_WORK = 45;
const INITIAL_BREAK = 15;
const RADIUS = 116;

export default function PomodoroTimer() {
  const [workMinutes, setWorkMinutes] = useState(INITIAL_WORK);
  const [breakMinutes, setBreakMinutes] = useState(INITIAL_BREAK);
  const [timeLeft, setTimeLeft] = useState(INITIAL_WORK * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t > 0) return t - 1;
        setIsRunning(false);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  function handleWorkChange(minutes: number) {
    setWorkMinutes(minutes);
    setTimeLeft(minutes * 60);
  }

  function handleBreakChange(minutes: number) {
    setBreakMinutes(minutes);
    setTimeLeft(minutes * 60);
  }

  function reset() {
    setIsRunning(false);
    setTimeLeft(workMinutes * 60);
  }

  const format = (sec: number): string => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const total = workMinutes * 60;
  const progress = total > 0 ? timeLeft / total : 0;
  const circumference = 2 * Math.PI * RADIUS;
  const dashOffset = circumference * (1 - progress);

  return (
    <ToolCard>
      <ToolHeader title="番茄钟" subtitle="专注工作，劳逸结合" icon="🍅" gradient="from-rose-500 to-red-500" />
      <div className="px-6 py-8 flex flex-col items-center gap-6">
        <div className="relative h-72 w-72">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 280 280">
            <circle cx="140" cy="140" r={RADIUS} fill="none" stroke="#eef2f7" strokeWidth="14" />
            <circle
              cx="140"
              cy="140"
              r={RADIUS}
              fill="none"
              stroke="url(#pomodoroGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="transition-[stroke-dashoffset] duration-500 ease-linear"
            />
            <defs>
              <linearGradient id="pomodoroGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-6xl font-semibold tracking-tight text-slate-800">{format(timeLeft)}</span>
            <span className="mt-2 text-sm font-semibold text-rose-500">工作时间</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <label className="flex items-center gap-2">
            工作
            <input
              type="number"
              min={1}
              value={workMinutes}
              onChange={(e) => handleWorkChange(Number(e.target.value))}
              className="w-16 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-center font-medium text-slate-700 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
            分
          </label>
          <label className="flex items-center gap-2">
            休息
            <input
              type="number"
              min={1}
              value={breakMinutes}
              onChange={(e) => handleBreakChange(Number(e.target.value))}
              className="w-16 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-center font-medium text-slate-700 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
            分
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="rounded-full bg-gradient-to-r from-rose-500 to-red-500 px-8 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition-all hover:shadow-xl hover:shadow-rose-500/40 active:scale-95"
          >
            {isRunning ? '暂停' : '开始'}
          </button>
          <button
            onClick={reset}
            className="rounded-full bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-200 active:scale-95"
          >
            重置
          </button>
        </div>
      </div>
    </ToolCard>
  );
}