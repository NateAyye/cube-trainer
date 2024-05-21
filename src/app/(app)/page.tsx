import { generateScramble } from "react-rubiks-cube-utils";
import Timer from "~/components/Cubing/Timer";
import { ToolsDrawer } from "~/components/Cubing/ToolsDrawer";

export default async function HomePage() {
  const myScramble = generateScramble({ type: "3x3" });
  return (
    <main className="flex flex-1 flex-col gap-2 p-2">
      <div id="cube-mat" className="flex flex-1 items-center justify-center">
        <Timer scramble={myScramble} />
      </div>
      <ToolsDrawer scramble={myScramble} />
    </main>
  );
}
