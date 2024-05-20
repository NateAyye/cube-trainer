"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import HomeLink from "~/components/nav/HomeLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import useScroll from "~/hooks/use-scroll";
import { cn } from "~/lib/utils";

interface HomePageLayoutProps {
  children: React.ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  const { precentage } = useScroll();
  return (
    <div>
      <nav
        className={cn(
          "bg-background fixed left-0 top-0 z-[10000] flex h-min w-full justify-between px-2 transition-colors",
          precentage > 0 ? "border-accent/60 border-b-2" : "",
        )}
      >
        <HomeLink />
        <div className="flex items-center justify-center gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger className="font-degular text-muted-foreground font-bold underline decoration-2 underline-offset-[2px] transition-all hover:underline-offset-[8px]">
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Link href={"/about"}>About</Link>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            className="font-degular text-muted-foreground font-bold underline decoration-2 underline-offset-[2px] transition-all hover:underline-offset-[8px]"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="font-degular text-muted-foreground font-bold underline decoration-2 underline-offset-[2px] transition-all hover:underline-offset-[8px]"
            href={"/signup"}
          >
            Sign up
          </Link>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default HomePageLayout;
