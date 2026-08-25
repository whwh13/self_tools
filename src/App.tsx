import FloatingDock from './FloatingDock';
import SectionDivider from './SectionDivider';
import { tools } from './tools';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-800">
      <FloatingDock />
      <main className="mx-auto max-w-5xl px-4 py-10">
        {tools.map((tool, index) => (
          <section key={tool.id} id={tool.id} className="scroll-mt-24">
            <tool.Component />
            {index < tools.length - 1 && <SectionDivider />}
          </section>
        ))}
      </main>
    </div>
  );
}