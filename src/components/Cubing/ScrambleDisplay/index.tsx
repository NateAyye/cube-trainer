import React from "react";
import type { Cube } from "react-rubiks-cube-utils";
import { DisplayCube, applyScramble } from "react-rubiks-cube-utils";
import type { CubingEvent } from "~/types/cubing";

interface ScrambleDisplayProps {
  event: CubingEvent;
  scramble: string;
}

const ScrambleDisplay: React.FC<ScrambleDisplayProps> = ({
  event = "3x3",
  scramble,
}) => {
  const myCube: Cube = applyScramble({ type: event, scramble: scramble });
  return (
    <div>
      <DisplayCube size={15} cube={myCube} />
    </div>
  );
};

export default ScrambleDisplay;
