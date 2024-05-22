"use client";
import {
  Bell,
  ChevronLeft,
  FlaskConical,
  Menu,
  PieChart,
  Rows3,
  Timer,
  User2Icon,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import SidebarLink from "~/components/nav/SidebarLink";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { useMediaQuery } from "~/hooks/use-media-query";
import { cn } from "~/lib/utils";

const links: {
  href: string;
  Icon: React.ElementType;
  label: string;
}[] = [
  { href: "/", Icon: Timer, label: "Timer" },
  { href: "/stats", Icon: PieChart, label: "Stats" },
  { href: "/trainer", Icon: FlaskConical, label: "Trainer" },
  { href: "/sessions", Icon: Rows3, label: "Sessions" },
  { href: "/settings", Icon: Wrench, label: "Settings" },
];

export default function SideBar() {
  const [active, setActive] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  if (isMobile) {
    return (
      <Sheet open={active} onOpenChange={setActive}>
        <SheetTrigger>
          <Button
            onClick={() => setActive(!active)}
            className={cn(
              "absolute left-3 top-3 h-8 w-8 p-0 shadow-lg",
              active ? "hidden" : "",
            )}
            variant={"simple"}
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="absolute min-h-dvh max-w-[350px] border-black bg-[#0e0f18] px-3 transition-all"
          side={"left"}
        >
          <SheetHeader className="mb-8">
            <Button
              onClick={() => setActive(!active)}
              className={cn(
                "absolute left-[105%] top-3 h-8 w-8 p-0 shadow-lg sm:hidden",
              )}
              variant={"simple"}
            >
              <ChevronLeft />
            </Button>
            <div className="flex items-center justify-between">
              <Image
                src="https://cdn.cubedesk.io/static/images/cube_desk_logo_white.svg"
                alt="CubeDesk"
                width={100}
                height={100}
                className="hidden lg:block"
              />
              <Image
                src="/logo_white.svg"
                alt="CubeDesk"
                width={40}
                height={42}
                className="block lg:hidden"
              />
              <div className="flex items-center justify-center gap-5">
                <Bell className="h-4 w-4 stroke-background" />
                <User2Icon className="h-8 w-8 rounded-full border-2 stroke-background" />
              </div>
            </div>
          </SheetHeader>
          <nav>
            <ul className="[&>*:not(:last-child)]:mb-7">
              {links.map((link) => (
                <li key={link.href}>
                  <SidebarLink {...link} />
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <aside className={cn("min-h-dvh  bg-[#0e0f18] px-3 transition-all")}>
      <div className="flex flex-col justify-between gap-5 py-8  lg:flex-row">
        <Image
          src="https://cdn.cubedesk.io/static/images/cube_desk_logo_white.svg"
          alt="CubeDesk"
          width={100}
          height={100}
          className="hidden lg:block"
        />
        <Image
          src="/logo_white.svg"
          alt="CubeDesk"
          width={40}
          height={42}
          className="block lg:hidden"
        />
        <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
          <Bell className="h-4 w-4 stroke-background" />
          <User2Icon className="h-8 w-8 rounded-full border-2 stroke-background" />
        </div>
      </div>
      <nav>
        <ul className="[&>*:not(:last-child)]:mb-7">
          {links.map((link) => (
            <li key={link.href}>
              <SidebarLink {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
