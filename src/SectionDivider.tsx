// React 18+ + TSX: 不需要显式引入 React，如果使用了旧版 JSX 转译可恢复该行。

/**\n * 更美观的分割线组件\n * 说明：默认使用渐变 + 细线 + 中央淡色点。可以根据需要替换下方注释中的不同风格。\n * 可选风格示例：\n * 1) 简洁渐变线： h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent\n * 2) 阴影窄条： h-1 rounded bg-gray-200 shadow-inner\n * 3) 虚线： border-t border-dashed border-gray-300\n * 4) 彩色渐变： h-1 bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200 rounded\n */
export default function SectionDivider() {
  return (
    <div className="relative my-6">
      {/* 主体渐变线 */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      {/* 中央装饰圆点 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-2 w-2 rounded-full bg-gray-300/70 shadow [box-shadow:0_0_0_3px_rgba(255,255,255,0.8)]" />
      </div>
    </div>
  );
}
