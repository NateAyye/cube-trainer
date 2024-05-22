"use client";
import * as React from "react";

import { ChevronUp } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";
import { useMediaQuery } from "~/hooks/use-media-query";
import ToolsContainer from "../InterchangableToolContainer";
import ScrambleDisplay from "../ScrambleDisplay";
import SessionTimes from "../Session";

export function ToolsDrawer({ scramble }: { scramble: string }) {
  const [open, setOpen] = React.useState(false);
  const isTablet = useMediaQuery("(min-width: 640px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isTablet) {
    return (
      <div id="toolbar" className="flex h-[325px] rounded-md bg-gray-800">
        <ToolsContainer scramble={scramble} event="3x3" tool="Session" />
        <ToolsContainer
          scramble={scramble}
          event="3x3"
          className={"rounded-md border-2 border-muted"}
          tool="Stats"
        />
        {isDesktop && (
          <ToolsContainer scramble={scramble} event="3x3" tool="Scramble" />
        )}
      </div>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <ChevronUp className="w-full  text-background " />
      </DrawerTrigger>
      <DrawerContent>
        <ScrambleDisplay event="3x3" scramble={scramble} />
        <SessionTimes />
      </DrawerContent>
    </Drawer>
  );
}
