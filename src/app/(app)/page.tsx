import Timer from "~/components/Cubing/Timer";
import { ToolsDrawer } from "~/components/Cubing/ToolsDrawer";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col gap-2 p-2">
      <div id="cube-mat" className="flex flex-1 items-center justify-center">
        <Timer />
      </div>
      <ToolsDrawer />
    </main>
  );
}
