export default function SectionDivider() {
  return (
    <div className="relative my-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-2 w-2 rounded-full bg-gray-300/70 shadow [box-shadow:0_0_0_3px_rgba(255,255,255,0.8)]" />
      </div>
    </div>
  );
}