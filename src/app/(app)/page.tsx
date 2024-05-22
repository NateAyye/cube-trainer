"use client";
import { useState } from "react";
import Timer from "~/components/Cubing/Timer";
import { ToolsDrawer } from "~/components/Cubing/ToolsDrawer";
import { getNewScramble } from "~/lib/utils";

export default function HomePage() {
  const [scramble, setScramble] = useState<string>(getNewScramble("3x3"));

  return (
    <main className="flex flex-1 flex-col gap-2 p-2">
      <div id="cube-mat" className="flex flex-1 items-center justify-center">
        <Timer scramble={scramble} setScramble={setScramble} />
      </div>
      <ToolsDrawer scramble={scramble} />
    </main>
  );
}
