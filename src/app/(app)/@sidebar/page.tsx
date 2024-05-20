"use client";
import {
  Bell,
  FlaskConical,
  PieChart,
  Rows3,
  Timer,
  User2Icon,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import SidebarLink from "~/components/nav/SidebarLink";

export default function SideBar() {
  return (
    <aside className="h-screen w-min bg-slate-900 px-3 py-5 md:w-[250px] shadow-xl">
      <div className="flex flex-col items-center justify-between gap-3 md:flex md:flex-row">
        <Image
          src="https://cdn.cubedesk.io/static/images/cube_desk_logo_white.svg"
          alt="CubeDesk"
          width={100}
          height={100}
          className="hidden md:block"
        />
        <Image
          src="/logoipsum.svg"
          alt="CubeDesk"
          width={70}
          height={70}
          className="block md:hidden"
        />
        <div className="mb-4 flex flex-col items-center justify-center gap-2 md:flex md:flex-row">
          <Bell className="stroke-background h-4 w-4" />
          <User2Icon className="stroke-background h-8 w-8 rounded-full border-2" />
        </div>
      </div>
      <nav>
        <ul className="flex flex-col items-center md:block [&>*:not(:last-child)]:mb-3">
          <li>
            <SidebarLink href="/" Icon={Timer} label="Timer" />
          </li>
          <li>
            <SidebarLink href="/stats" Icon={PieChart} label="Stats" />
          </li>
          <li>
            <SidebarLink href="/trainer" Icon={FlaskConical} label="Trainer" />
          </li>
          <li>
            <SidebarLink href="/sessions" Icon={Rows3} label="Sessions" />
          </li>
          <li>
            <SidebarLink href="/settings" Icon={Wrench} label="Settings" />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
