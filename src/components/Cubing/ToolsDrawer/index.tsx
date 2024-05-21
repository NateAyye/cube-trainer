"use client";
import * as React from "react";

import { ChevronUp } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";
import { useMediaQuery } from "~/hooks/use-media-query";
import ScrambleDisplay from "../ScrambleDisplay";
import SessionTimes from "../SessionTimes";

export function ToolsDrawer({ scramble }: { scramble: string }) {
  const [open, setOpen] = React.useState(false);
  const isTablet = useMediaQuery("(min-width: 640px)");

  if (isTablet) {
    return (
      <div id="toolbar" className=" rounded-md bg-gray-800 sm:min-h-[325px]">
        <ScrambleDisplay event="3x3" scramble={scramble} />
        <SessionTimes />
      </div>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <ChevronUp className="text-background  w-full " />
      </DrawerTrigger>
      <DrawerContent>
        <ScrambleDisplay event="3x3" scramble={scramble} />
        <SessionTimes />
      </DrawerContent>
    </Drawer>
  );
}
