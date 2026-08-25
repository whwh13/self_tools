import { useState } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import { ToolCard, ToolHeader } from './ui';

const ZERO_DIVISION_ERROR = '不能除以 0';
const MAX_DIGITS = 16;

interface CalcState {
  sign: string;
  num: number | string;
  res: number | string;
}

interface ScreenProps {
  primary: string | number;
  secondary: string | number;
}

interface ButtonProps {
  className?: string;
  value: string | number;
  onClick: () => void;
  onMouseDown?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (e: MouseEvent<HTMLButtonElement>) => void;
  onTouchStart?: (e: TouchEvent<HTMLButtonElement>) => void;
  onTouchEnd?: (e: TouchEvent<HTMLButtonElement>) => void;
}

const formatWithSpaces = (num: number | string): string =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

const removeSpaces = (num: number | string): string => num.toString().replace(/\s/g, '');

function math(a: number, b: number, sign: string): number {
  switch (sign) {
    case '+':
      return a + b;
    case '−':
      return a - b;
    case '×':
      return a * b;
    case '÷':
      return a / b;
    default:
      return b;
  }
}

function Screen({ primary, secondary }: ScreenProps) {
  return (
    <div className="flex h-36 flex-col items-end justify-end break-all bg-gradient-to-br from-slate-700 to-slate-900 p-5 text-white">
      <span className="mb-1 h-6 max-w-full truncate text-xl font-light text-slate-400 opacity-90">{secondary}</span>
      <span className="text-4xl font-light leading-tight">{primary}</span>
    </div>
  );
}

function Button({ className, value, onClick, onMouseDown, onMouseUp, onTouchStart, onTouchEnd }: ButtonProps) {
  return (
    <button
      className={`flex h-14 items-center justify-center rounded-xl text-xl font-medium transition-colors duration-100 sm:h-16 ${className}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {value === 'BKSP' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75L14.25 12m0 0l2.25 2.25M16.5 9.75L14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
          />
        </svg>
      ) : (
        value
      )}
    </button>
  );
}

const btnValues: (string | number)[][] = [
  ['HEX', 'BKSP', 'AC', '÷'],
  [7, 8, 9, '×'],
  [4, 5, 6, '−'],
  [1, 2, 3, '+'],
  ['+-', 0, '.', '='],
];

export default function Calculator() {
  const [calc, setCalc] = useState<CalcState>({ sign: '', num: 0, res: 0 });
  const [history, setHistory] = useState<string[]>([]);
  const [isHexView, setIsHexView] = useState(false);
  const [hexDisplay, setHexDisplay] = useState('0');

  const numClickHandler = (btn: number | string) => {
    const value = btn.toString();
    if (removeSpaces(calc.num).length >= MAX_DIGITS) return;

    const current = removeSpaces(calc.num);
    let next: string;
    if (calc.num === 0 && value === '0') {
      next = '0';
    } else if (Number(current) % 1 === 0 && !calc.num.toString().includes('.')) {
      next = formatWithSpaces(Number(current + value));
    } else {
      next = formatWithSpaces(current + value);
    }
    setCalc({ ...calc, num: next, res: !calc.sign ? 0 : calc.res });
  };

  const commaClickHandler = () => {
    if (calc.num.toString().includes('.')) return;
    setCalc({ ...calc, num: `${calc.num}.` });
  };

  const signClickHandler = (btn: string) => {
    if (calc.sign && calc.num && calc.res) {
      const result = math(Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign);
      setCalc({ ...calc, sign: btn, res: formatWithSpaces(result), num: 0 });
    } else {
      setCalc({ ...calc, sign: btn, res: calc.num ? calc.num : calc.res, num: 0 });
    }
  };

  const equalsClickHandler = () => {
    if (!calc.sign || !calc.num) return;

    const result =
      calc.num === '0' && calc.sign === '÷'
        ? ZERO_DIVISION_ERROR
        : formatWithSpaces(math(Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign));

    setCalc({ ...calc, res: result, sign: '', num: 0 });

    if (result !== ZERO_DIVISION_ERROR) {
      const expression = `${removeSpaces(calc.res)} ${calc.sign} ${removeSpaces(calc.num)} = ${result}`;
      setHistory([expression, ...history]);
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? formatWithSpaces(Number(removeSpaces(calc.num)) * -1) : 0,
      res: calc.res ? formatWithSpaces(Number(removeSpaces(calc.res)) * -1) : 0,
    });
  };

  const resetClickHandler = () => {
    setCalc({ sign: '', num: 0, res: 0 });
  };

  const backspaceClickHandler = () => {
    if (!calc.num || calc.num === 0) return;
    const numStr = removeSpaces(calc.num).slice(0, -1);
    setCalc({ ...calc, num: numStr.length === 0 ? 0 : formatWithSpaces(numStr) });
  };

  const hexPressHandler = () => {
    const valueToConvert = Number(removeSpaces(calc.num ? calc.num : calc.res));
    const intValue = Math.trunc(valueToConvert);
    setHexDisplay('0x' + intValue.toString(16).toUpperCase());
    setIsHexView(true);
  };

  const hexReleaseHandler = () => {
    setIsHexView(false);
  };

  const buttonClickHandler = (btn: string | number) => {
    if (calc.res === ZERO_DIVISION_ERROR && btn !== 'AC') {
      resetClickHandler();
      return;
    }

    switch (btn) {
      case 'AC':
        resetClickHandler();
        break;
      case '+-':
        invertClickHandler();
        break;
      case 'BKSP':
        backspaceClickHandler();
        break;
      case '=':
        equalsClickHandler();
        break;
      case '÷':
      case '×':
      case '−':
      case '+':
        signClickHandler(btn);
        break;
      case '.':
        commaClickHandler();
        break;
      default:
        if (typeof btn === 'number' || !Number.isNaN(Number(btn))) {
          numClickHandler(btn);
        }
    }
  };

  const getButtonClassName = (btn: string | number): string => {
    switch (btn) {
      case 'AC':
        return 'bg-orange-400 text-white hover:bg-orange-500 active:bg-orange-600';
      case '=':
        return 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700';
      case '+':
      case '−':
      case '×':
      case '÷':
        return 'bg-slate-100 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-200';
      case '+-':
      case 'HEX':
      case 'BKSP':
        return 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300';
      default:
        return 'bg-white ring-1 ring-slate-100 hover:bg-slate-50 active:bg-slate-100';
    }
  };

  const getPrimaryDisplay = (): string => {
    if (isHexView) return hexDisplay;
    if (calc.sign) return calc.num === 0 ? '\u00A0' : String(calc.num);
    return calc.num ? String(calc.num) : String(calc.res);
  };

  return (
    <ToolCard>
      <ToolHeader title="计算器" subtitle="支持历史记录与十六进制转换" icon="🧮" gradient="from-slate-600 to-slate-800" />
      <div className="px-4 py-6 sm:px-6">
        <div className="mx-auto w-full max-w-[750px] overflow-x-auto">
          <div className="grid min-w-[640px] grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
              <Screen
                primary={getPrimaryDisplay()}
                secondary={calc.sign && !isHexView ? `${calc.res} ${calc.sign}` : ''}
              />
              <div className="grid grid-cols-4 gap-1.5 bg-white p-1.5">
                {btnValues.flat().map((btn, i) => (
                  <Button
                    key={i}
                    className={`text-slate-700 ${getButtonClassName(btn)}`}
                    value={btn}
                    onClick={() => buttonClickHandler(btn)}
                    onMouseDown={btn === 'HEX' ? hexPressHandler : undefined}
                    onMouseUp={btn === 'HEX' ? hexReleaseHandler : undefined}
                    onTouchStart={btn === 'HEX' ? hexPressHandler : undefined}
                    onTouchEnd={btn === 'HEX' ? hexReleaseHandler : undefined}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <h3 className="mb-4 text-lg font-bold text-slate-700">历史记录</h3>
              {history.length === 0 ? (
                <p className="flex flex-1 items-center justify-center text-sm text-slate-400">暂无计算历史</p>
              ) : (
                <ul className="flex-1 space-y-2.5 overflow-y-auto pr-1">
                  {history.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-xl bg-white px-4 py-2.5 text-right text-base text-slate-600 ring-1 ring-slate-100 shadow-sm break-words"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </ToolCard>
  );
}