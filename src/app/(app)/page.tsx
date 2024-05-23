import Timer from "~/components/Cubing/Timer";
import { ToolsDrawer } from "~/components/Cubing/ToolsDrawer";

export default async function HomePage() {

  return (
    <main className="flex flex-1 flex-col gap-2 p-2">
      <div className="relative flex-1">
        <Timer />
      </div>
      <ToolsDrawer />
    </main>
  );
}
