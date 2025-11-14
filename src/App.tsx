import PomodoroTimer from "./PomodoroTimer.tsx";
import Calculator from "./Calculator.tsx";
// --- Simple Pomodoro Timer Component (TypeScript) ---



// --- Main Dashboard Layout ---
export default function App() {
  return (
    // <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="grid grid-cols-1 gap-4 w-full min-w-[200px]">

        <PomodoroTimer />
        <div className="border-t border-gray-300 my-2" />
        <Calculator />

      </div>
    // </div>
  );
}
