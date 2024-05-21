import React from "react";
import type { Cube } from "react-rubiks-cube-utils";
import { DisplayCube, applyScramble } from "react-rubiks-cube-utils";

interface ScrambleDisplayProps {
  event: string;
  scramble: string;
}

const ScrambleDisplay: React.FC<ScrambleDisplayProps> = ({
  event = "3x3",
  scramble,
}) => {
  const myCube: Cube = applyScramble({ type: event, scramble: scramble });
  return (
    <div>
      <DisplayCube size={10} cube={myCube} />
    </div>
  );
};

export default ScrambleDisplay;
