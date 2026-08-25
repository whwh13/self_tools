import type { ComponentType } from 'react';
import PomodoroTimer from './PomodoroTimer';
import Calculator from './Calculator';
import EyeDropper from './Eyedropper';
import OcrComponent from './OcrComponent';
import FormulaEditor from './FormulaEditor';

export interface ToolDef {
  id: string;
  label: string;
  Component: ComponentType;
}

export const tools: ToolDef[] = [
  { id: 'pomodoro', label: '番茄钟', Component: PomodoroTimer },
  { id: 'calculator', label: '计算器', Component: Calculator },
  { id: 'eyedropper', label: '取色器', Component: EyeDropper },
  { id: 'ocr', label: 'OCR识别', Component: OcrComponent },
  { id: 'formula-editor', label: '公式编辑器', Component: FormulaEditor },
];