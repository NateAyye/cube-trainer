"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";
import ScrambleDisplay from "../ScrambleDisplay";
import Session from "../Session";
import Stats from "../Stats";
import type { CubingEvent } from "~/types/cubing";

interface ToolsContainerProps {
  tool: string;
  className?: string;
  scramble: string;
  event: CubingEvent;
}

const Tools: {
  name: string;
  Component: (
    opts?: { scramble: string; event: CubingEvent } | undefined,
  ) => React.ReactNode;
}[] = [
  { name: "Session", Component: () => <Session /> },
  { name: "Stats", Component: () => <Stats sessionTimes={[""]} /> },
  { name: "Last Solve", Component: () => <div>Last Solve</div> },
  {
    name: "Scramble",
    Component(opts) {
      return <ScrambleDisplay event={opts!.event} scramble={opts!.scramble} />;
    },
  },
  { name: "Consistency", Component: () => <div>Consistency</div> },
  { name: "Time Graph", Component: () => <div>Time Graph</div> },
  { name: "Time Distribution", Component: () => <div>Time Distribution</div> },
  { name: "None", Component: () => <div>None</div> },
];

const ToolsContainer: React.FC<ToolsContainerProps> = ({
  scramble,
  tool = "Session",
  className,
  event = "3x3",
}) => {
  const [selectValue, setSelectValue] = useState(tool);
  const renderTool = Tools.find(({ name }) => name === selectValue)?.Component;
  return (
    <div className={cn("relative flex-1 text-black", className)}>
      <div className="absolute right-2 top-2 z-50">
        <Select onValueChange={setSelectValue} value={selectValue}>
          <SelectTrigger className=" w-fit">
            <div>{selectValue}</div>
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              {Tools.map(({ name }) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        {renderTool ? (
          renderTool(
            selectValue === "Scramble" ? { scramble, event } : undefined,
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ToolsContainer;
