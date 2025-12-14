import PomodoroTimer from "./PomodoroTimer.tsx";
import Calculator from "./Calculator.tsx";
import EyeDropper from "./Eyedropper.tsx";
import SectionDivider from "./SectionDivider.tsx";
import FloatingDock from "./FloatingDock.tsx";
import OcrComponent from "./OcrComponent.tsx";
import FormulaEditor from "./FormulaEditor.tsx";
// --- Simple Pomodoro Timer Component (TypeScript) ---



// --- Main Dashboard Layout ---
export default function App() {
  return (
    // <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="relative">
        <FloatingDock />
        <div className="grid grid-cols-1 gap-8 w-full min-w-[200px]">
          <div id="pomodoro" className="scroll-mt-4">
            <PomodoroTimer />
          </div>
          <SectionDivider />
          <div id="calculator" className="scroll-mt-4">
            <Calculator />
          </div>
          <SectionDivider />
          <div id="eyedropper" className="scroll-mt-4">
            <EyeDropper />
          </div>
          <SectionDivider />
          <div id="ocr" className="scroll-mt-4">
            <OcrComponent />
          </div>
          <SectionDivider />
          <div id="formula-editor" className="scroll-mt-4">
            <FormulaEditor />
          </div>
        </div>
      </div>
    // </div>
  );
}
