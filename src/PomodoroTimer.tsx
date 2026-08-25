import { useState, useEffect } from 'react';

const INITIAL_WORK = 25;
const INITIAL_BREAK = 5;

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

  return (
    <div className="p-4 rounded-2xl bg-white flex flex-col items-center gap-3 w-full relative">
      <div className="absolute top-4 left-10 flex flex-col gap-2 text-sm">
        <label>
          工作时间 (分钟):{' '}
          <input
            type="number"
            min={1}
            value={workMinutes}
            onChange={(e) => handleWorkChange(Number(e.target.value))}
            className="border rounded px-2 py-1 w-16 text-center"
          />
        </label>
        <label>
          休息时间 (分钟):{' '}
          <input
            type="number"
            min={1}
            value={breakMinutes}
            onChange={(e) => handleBreakChange(Number(e.target.value))}
            className="border rounded px-2 py-1 w-16 text-center"
          />
        </label>
      </div>

      <h2 className="text-xl font-bold">番茄钟</h2>
      <div className="text-4xl font-mono">{format(timeLeft)}</div>
      <div className="text-sm font-bold text-yellow-600">工作时间</div>

      <button
        className="px-4 py-2 rounded-xl shadow bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? '暂停' : '开始'}
      </button>

      <button
        className="px-4 py-2 rounded-xl shadow bg-gray-100 hover:bg-gray-200"
        onClick={reset}
      >
        重置
      </button>
    </div>
  );
}