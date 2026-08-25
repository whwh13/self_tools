import FloatingDock from './FloatingDock';
import SectionDivider from './SectionDivider';
import { tools } from './tools';

export default function App() {
  return (
    <div className="relative">
      <FloatingDock />
      <div className="grid grid-cols-1 gap-8 w-full min-w-[200px]">
        {tools.map((tool, index) => (
          <div key={tool.id}>
            <div id={tool.id} className="scroll-mt-4">
              <tool.Component />
            </div>
            {index < tools.length - 1 && <SectionDivider />}
          </div>
        ))}
      </div>
    </div>
  );
}