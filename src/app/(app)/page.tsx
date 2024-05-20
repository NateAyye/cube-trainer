import {
  DisplayCube,
  applyScramble,
  generateScramble,
  type Cube,
} from "react-rubiks-cube-utils";
import SessionTimes from "~/components/Cubing/SessionTimes";
import Timer from "~/components/Cubing/Timer";

export default async function HomePage() {
  const myScramble = generateScramble({ type: "3x3" });
  const myCube: Cube = applyScramble({ type: "3x3", scramble: myScramble });
  return (
    <main className="flex flex-1 flex-col gap-2 p-2">
      <div id="cube-mat" className="flex flex-1 items-center justify-center">
        <Timer scramble={myScramble} />
      </div>
      <div id="toolbar" className="min-h-[325px] rounded-md bg-gray-800">
        <div>
          <DisplayCube size={10} cube={myCube} />
        </div>
        <SessionTimes />
      </div>
    </main>
  );
}
