export default function SectionDivider() {
  return (
    <div className="relative my-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-2 w-2 rounded-full bg-slate-300/70 shadow-[0_0_0_3px_rgba(255,255,255,0.9)]" />
      </div>
    </div>
  );
}