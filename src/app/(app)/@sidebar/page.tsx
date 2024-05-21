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
  return (
    <div>
      <Button
        onClick={() => setActive(!active)}
        className="absolute left-3 top-3 h-8 w-8 p-0 shadow-lg sm:hidden"
        variant={"simple"}
      >
        <Menu />
      </Button>
      <aside
        className={cn(
          "absolute min-h-dvh bg-[#0e0f18] px-3 transition-all sm:relative",
          active ? "left-0" : " -left-full sm:left-0",
        )}
      >
        <Button
          onClick={() => setActive(!active)}
          className={cn(
            "absolute left-[105%] top-3 h-8 w-8 p-0 shadow-lg sm:hidden",
            active ? "" : "hidden",
          )}
          variant={"simple"}
        >
          <ChevronLeft />
        </Button>
        <div className="flex justify-between gap-5 py-5 sm:flex-col lg:flex-row">
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
          <div className="flex items-center justify-center gap-2 sm:flex-col lg:flex-row">
            <Bell className="h-4 w-4 stroke-background" />
            <User2Icon className="h-8 w-8 rounded-full border-2 stroke-background" />
          </div>
        </div>
        <nav>
          <ul className="[&>*:not(:last-child)]:mb-4">
            {links.map((link) => (
              <li key={link.href}>
                <SidebarLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
