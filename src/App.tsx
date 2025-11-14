import PomodoroTimer from "./PomodoroTimer.tsx";
import Calculator from "./Calculator.tsx";
import EyeDropper from "./Eyedropper.tsx";
import SectionDivider from "./SectionDivider.tsx";
// --- Simple Pomodoro Timer Component (TypeScript) ---



// --- Main Dashboard Layout ---
export default function App() {
  return (
    // <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="grid grid-cols-1 gap-4 w-full min-w-[200px]">

  <PomodoroTimer />
  <SectionDivider />
  <Calculator />
  <SectionDivider />
  <EyeDropper />

      </div>
    // </div>
  );
}
