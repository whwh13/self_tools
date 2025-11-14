import { useState, useEffect } from "react";

function PomodoroTimer() {
  const [workMinutes, setWorkMinutes] = useState<number>(25); // 默认工作25分钟
  const [breakMinutes, setBreakMinutes] = useState<number>(5); // 默认休息5分钟
  const [timeLeft, setTimeLeft] = useState<number>(workMinutes * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isWork] = useState<boolean>(true);

  // 当工作或休息时间修改时，重置倒计时
  useEffect(() => {
    if (isWork) {
      setTimeLeft(workMinutes * 60);
    } else {
      setTimeLeft(breakMinutes * 60);
    }
  }, [workMinutes, breakMinutes, isWork]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t > 0) return t - 1;

        // 倒计时结束后暂停
        setIsRunning(false);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const format = (sec: number): string => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="p-4 rounded-2xl bg-white flex flex-col items-center gap-3 w-full relative">
      {/* 左上角输入框 */}
      <div className="absolute top-4 left-10 flex flex-col gap-2 text-sm">
        <label>
          工作时间 (分钟):{" "}
          <input
            type="number"
            min={1}
            value={workMinutes}
            onChange={(e) => setWorkMinutes(Number(e.target.value))}
            className="border rounded px-2 py-1 w-16 text-center"
          />
        </label>
        <label>
          休息时间 (分钟):{" "}
          <input
            type="number"
            min={1}
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(Number(e.target.value))}
            className="border rounded px-2 py-1 w-16 text-center"
          />
        </label>
      </div>

      {/* 中间倒计时 */}
      <h2 className="text-xl font-bold">番茄钟</h2>
      <div className="text-4xl font-mono">{format(timeLeft)}</div>
      <div className={`text-sm font-bold ${isWork ? "text-yellow-600" : "text-green-600"}`}>{isWork ? "工作时间" : "休息时间"}</div>

      {/* 控制按钮 */}
      <button
        className="px-4 py-2 rounded-xl shadow bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "暂停" : "开始"}
      </button>

      <button
        className="px-4 py-2 rounded-xl shadow bg-gray-100 hover:bg-gray-200"
        onClick={() => {
          setIsRunning(false);
          setTimeLeft(isWork ? workMinutes * 60 : breakMinutes * 60);
        }}
      >
        重置
      </button>
    </div>
  );
}

export default PomodoroTimer;
