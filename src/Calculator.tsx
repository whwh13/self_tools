import { useState } from 'react';
import type { MouseEvent, ReactNode, TouchEvent } from 'react';

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

function Wrapper({ children }: { children: ReactNode }) {
  return <div className="w-full bg-white border border-gray-300 rounded-2xl overflow-hidden">{children}</div>;
}

function Screen({ primary, secondary }: ScreenProps) {
  return (
    <div className="bg-gray-800 text-white text-right p-6 h-40 flex flex-col items-end justify-end break-all">
      <span className="text-2xl font-light text-gray-400 mb-1 opacity-75 h-8 truncate max-w-full">
        {secondary}
      </span>
      <span className="text-5xl font-light">{primary}</span>
    </div>
  );
}

function ButtonBox({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-4 gap-px bg-gray-300">{children}</div>;
}

function Button({ className, value, onClick, onMouseDown, onMouseUp, onTouchStart, onTouchEnd }: ButtonProps) {
  return (
    <button
      className={`text-2xl font-medium focus:outline-none transition-colors duration-150 flex items-center justify-center h-16 sm:h-20 ${className}`}
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
          className="w-6 h-6 mx-auto"
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
        return 'bg-orange-400 hover:bg-orange-500 active:bg-orange-600';
      case '=':
        return 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700';
      case '+':
      case '−':
      case '×':
      case '÷':
        return 'bg-gray-200 hover:bg-gray-300 active:bg-orange-500';
      case '+-':
      case 'HEX':
      case 'BKSP':
        return 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400';
      default:
        return 'bg-white hover:bg-gray-200 active:bg-gray-300';
    }
  };

  const fixedCalcHeight = 'h-[484px] sm:h-[560px]';

  const getPrimaryDisplay = (): string => {
    if (isHexView) return hexDisplay;
    if (calc.sign) return calc.num === 0 ? '\u00A0' : String(calc.num);
    return calc.num ? String(calc.num) : String(calc.res);
  };

  return (
    <div className="bg-white px-4 sm:px-6 py-4 font-sans">
      <div className="w-full max-w-[750px] mx-auto overflow-x-auto">
        <div className="grid gap-8 grid-cols-2 min-w-[640px]">
          <div className="w-full flex flex-col min-w-[200px]">
            <Wrapper>
              <Screen
                primary={getPrimaryDisplay()}
                secondary={calc.sign && !isHexView ? `${calc.res} ${calc.sign}` : ''}
              />
              <ButtonBox>
                {btnValues.flat().map((btn, i) => (
                  <Button
                    key={i}
                    className={`text-black ${getButtonClassName(btn)}`}
                    value={btn}
                    onClick={() => buttonClickHandler(btn)}
                    onMouseDown={btn === 'HEX' ? hexPressHandler : undefined}
                    onMouseUp={btn === 'HEX' ? hexReleaseHandler : undefined}
                    onTouchStart={btn === 'HEX' ? hexPressHandler : undefined}
                    onTouchEnd={btn === 'HEX' ? hexReleaseHandler : undefined}
                  />
                ))}
              </ButtonBox>
            </Wrapper>
          </div>

          <div className="w-full flex flex-col min-w-[200px]">
            <div className={`bg-gray-200 rounded-2xl p-6 ${fixedCalcHeight} border border-gray-300 flex flex-col`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">历史记录</h2>
              {history.length === 0 ? (
                <p className="text-gray-500 text-center flex-1 flex items-center justify-center">暂无计算历史</p>
              ) : (
                <ul className="flex-1 overflow-y-auto space-y-3 pr-2">
                  {history.map((item, index) => (
                    <li key={index} className="p-2 rounded-lg text-gray-700 text-right text-lg break-words">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}