import React, { useState } from "react";
import type { MouseEvent } from "react";

// --- 类型定义 ---

/**
 * 计算器状态的接口
 */
interface CalcState {
  sign: string; // 当前的运算符
  num: number | string; // 当前输入的数字
  res: number | string; // 计算结果
}

/**
 * 屏幕组件的 Props
 */
interface ScreenProps {
  primary: string | number; // 主显示 (大字体)
  secondary: string | number; // 辅助显示 (小字体, 顶部)
}

/**
 * 容器组件的 Props (用于 Wrapper 和 ButtonBox)
 */
interface WrapperProps {
  children: React.ReactNode;
}

/**
 * 按钮组件的 Props
 */
interface ButtonProps {
  className?: string;
  value: string | number;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void; // 保持 MouseEvent 类型
  onMouseDown?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (e: MouseEvent<HTMLButtonElement>) => void;
  onTouchStart?: (e: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchEnd?: (e: React.TouchEvent<HTMLButtonElement>) => void;
}

// --- 帮助函数 ---

/**
 * 将数字格式化为带空格的本地字符串 (例如 1000 -> "1 000")
 */
const toLocaleString = (num: number | string): string =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

/**
 * 移除数字字符串中的空格 (例如 "1 000" -> "1000")
 */
const removeSpaces = (num: number | string): string =>
  num.toString().replace(/\s/g, "");

/**
 * 执行数学运算
 */
const math = (a: number, b: number, sign: string): number => {
  switch (sign) {
    case "+":
      return a + b;
    case "−": // 使用减号
      return a - b;
    case "×": // 使用乘号
      return a * b;
    case "÷": // 使用除号
      return a / b;
    default:
      // 默认情况，可能不应该发生，但作为回退
      return b; 
  }
};

const zeroDivisionError = "不能除以 0";

// --- 组件 ---

/**
 * 白色背景的容器
 */
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-300 rounded-2xl overflow-hidden">
      {children}
    </div>
  );
};

/**
 * 显示屏组件
 */
const Screen: React.FC<ScreenProps> = ({ primary, secondary }) => {
  return (
    <div className="bg-gray-800 text-white text-right p-6 h-40 flex flex-col items-end justify-end break-all">
      {/* 辅助显示 (顶部) */}
      <span className="text-2xl font-light text-gray-400 mb-1 opacity-75 h-8 truncate max-w-full">
        {secondary}
      </span>
      {/* 主显示 (底部) */}
      <span className="text-5xl font-light">
        {primary}
      </span>
    </div>
  );
};

/**
 * 按钮容器组件
 */
const ButtonBox: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-px bg-gray-300">
      {children}
    </div>
  );
};

/**
 * 按钮组件
 */
const Button: React.FC<ButtonProps> = ({
  className,
  value,
  onClick,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
}) => {
  return (
    <button
      className={`text-2xl font-medium focus:outline-none transition-colors duration-150 flex items-center justify-center h-16 sm:h-20 ${className}`} // ** 调整高度 **
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* 如果值是 "BKSP", 渲染SVG图标 */}
      {value === "BKSP" ? (
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
};

// --- 主应用组件 ---

const Calculator: React.FC = () => {
  // 按钮布局 (使用新的数学符号)
  const btnValues = [
    ["HEX", "BKSP", "AC", "÷"],
    [7, 8, 9, "×"],
    [4, 5, 6, "−"],
    [1, 2, 3, "+"],
    ["+-", 0, ".", "="],
  ];

  const [calc, setCalc] = useState<CalcState>({
    sign: "",
    num: 0,
    res: 0,
  });

  const [history, setHistory] = useState<string[]>([]);
  const [isHexView, setIsHexView] = useState(false);
  const [hexDisplay, setHexDisplay] = useState("0");

  /**
   * 数字点击处理
   */
  const numClickHandler = (btn: number | string) => { // 接收 btn 值
    const value = btn.toString();
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : Number(removeSpaces(calc.num)) % 1 === 0 &&
              !calc.num.toString().includes(".")
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  /**
   * 小数点点击处理
   */
  const comaClickHandler = (btn: number | string) => { // 接收 btn 值
    const value = btn.toString();
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  /**
   * 运算符点击处理
   */
  const signClickHandler = (btn: number | string) => { // 接收 btn 值
    const sign = btn.toString();
    // 连续运算处理：如果已有num和res，先计算
    if (calc.sign && calc.num && calc.res) {
      const result = math(
        Number(removeSpaces(calc.res)),
        Number(removeSpaces(calc.num)),
        calc.sign
      );
      setCalc({
        ...calc,
        sign: sign,
        res: toLocaleString(result),
        num: 0,
      });
    } else {
      // 正常情况
      setCalc({
        ...calc,
        sign: sign,
        res: calc.num ? calc.num : calc.res, // res = (calc.num || calc.res)
        num: 0,
      });
    }
  };

  /**
   * 等号点击处理
   */
  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const result =
        calc.num === "0" && calc.sign === "÷"
          ? zeroDivisionError
          : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            );

      setCalc({
        ...calc,
        res: result,
        sign: "",
        num: 0,
      });

      // 添加到历史记录
      if (result !== zeroDivisionError) {
        const expression = `${removeSpaces(calc.res)} ${calc.sign} ${removeSpaces(
          calc.num
        )} = ${result}`;
        setHistory([expression, ...history]);
      }
    }
  };

  /**
   * 正负号点击处理
   */
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(Number(removeSpaces(calc.num)) * -1) : 0,
      res: calc.res ? toLocaleString(Number(removeSpaces(calc.res)) * -1) : 0,
    });
  };

  /**
   * 清除 (AC) 点击处理
   */
  const resetClickHandler = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  /**
   * 退格 (BKSP) 点击处理
   */
  const backspaceClickHandler = () => {
    if (calc.num && calc.num !== 0) {
      const numStr = removeSpaces(calc.num).slice(0, -1);
      setCalc({
        ...calc,
        num: numStr.length === 0 ? 0 : toLocaleString(numStr),
      });
    }
  };

  /**
   * HEX 键按下处理
   */
  const hexPressHandler = () => {
    const valueToConvert = Number(removeSpaces(calc.num ? calc.num : calc.res));
    // 确保是整数
    const intValue = Math.trunc(valueToConvert);
    // 转换为16进制，转大写，并添加 "0x" 前缀
    setHexDisplay("0x" + intValue.toString(16).toUpperCase());
    setIsHexView(true);
  };

  /**
   * HEX 键松开处理
   */
  const hexReleaseHandler = () => {
    setIsHexView(false);
  };

  /**
   * 统一的按钮点击分发器
   */
  const buttonClickHandler = (btn: string | number) => { // 接收 btn 值
    if (calc.res === zeroDivisionError && btn !== "AC") {
      return resetClickHandler();
    }

    // *** 修复：不再使用 e.currentTarget.innerHTML，而是直接使用 btn ***
    switch (btn) {
      case "AC":
        return resetClickHandler();
      case "+-":
        return invertClickHandler();
      case "BKSP":
        return backspaceClickHandler();
      case "=":
        return equalsClickHandler();
      case "÷":
      case "×":
      case "−":
      case "+":
        return signClickHandler(btn); // 直接传递 btn
      case ".":
        return comaClickHandler(btn); // 直接传递 btn
      // 默认情况 (数字)
      default:
        // 确保是数字
        if (typeof btn === "number" || !isNaN(Number(btn))) {
          return numClickHandler(btn); // 直接传递 btn
        }
    }
  };

  /**
   * 根据按钮值获取样式类
   */
  const getButtonClassName = (btn: string | number): string => {
    const baseClasses = "text-black"; // 所有文字为黑色

    switch (btn) {
      case "AC":
        return `${baseClasses} bg-orange-400 hover:bg-orange-500 active:bg-orange-600`;
      case "=":
        return `${baseClasses} bg-blue-500 hover:bg-blue-600 active:bg-blue-700`;
      case "+":
      case "−":
      case "×":
      case "÷":
        return `${baseClasses} bg-gray-200 hover:bg-gray-300 active:bg-orange-500`; // 极浅灰色, 按下橙色
      case "+-":
      case "HEX":
      case "BKSP":
        return `${baseClasses} bg-gray-200 hover:bg-gray-300 active:bg-gray-400`; // 极浅灰色
      default: // 数字 和 "."
        return `${baseClasses} bg-white hover:bg-gray-200 active:bg-gray-300`; // 白色背景
    }
  };

  // (h-40 screen) + (5 * h-16 button) = 10rem + 20rem = 30rem = 480px
  // (h-40 screen) + (5 * sm:h-20 button) = 10rem + 25rem = 35rem = 560px
  const fixedCalcHeight = "h-[484px] sm:h-[560px]";

  return (
    <div className="bg-white px-4 sm:px-6 py-2 flex justify-center font-sans">
      <div className="flex flex-row flex-nowrap gap-8 w-full max-w-5xl overflow-x-auto">
        {/* 计算器主体 */}
       <div className="flex-1 md:max-w-md min-w-[225px] shrink-0">
          <Wrapper>
            {/* 主显示说明保持不变 */}
            <Screen
              primary={
                isHexView
                  ? hexDisplay
                  : calc.sign
                  ? calc.num === 0
                    ? "\u00A0"
                    : calc.num
                  : calc.num
                  ? calc.num
                  : calc.res
              }
              secondary={(calc.sign && !isHexView) ? `${calc.res} ${calc.sign}` : ""}
            />
            <ButtonBox>
              {btnValues.flat().map((btn, i) => (
                <Button
                  key={i}
                  className={getButtonClassName(btn)}
                  value={btn}
                  onClick={() => buttonClickHandler(btn)}
                  onMouseDown={btn === "HEX" ? hexPressHandler : undefined}
                  onMouseUp={btn === "HEX" ? hexReleaseHandler : undefined}
                  onTouchStart={btn === "HEX" ? hexPressHandler : undefined}
                  onTouchEnd={btn === "HEX" ? hexReleaseHandler : undefined}
                />
              ))}
            </ButtonBox>
          </Wrapper>
        </div>

        {/* 历史记录面板 */}
       <div className="flex-1 md:max-w-sm min-w-[225px] shrink-0">
         <div className={`bg-gray-200 rounded-2xl p-6 ${fixedCalcHeight} border border-gray-300 flex flex-col`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">历史记录</h2>
           {history.length === 0 ? (
             <p className="text-gray-500 text-center flex-1 flex items-center justify-center">
               暂无计算历史
             </p>
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
  );
};

export default Calculator;