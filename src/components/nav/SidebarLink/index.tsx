"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "~/lib/utils";

interface SidebarLinkProps {
  href: string;
  Icon: React.ElementType;
  label?: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  Icon,
  label = "Label",
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className="flex items-center gap-3">
      <Icon
        className={cn(
          "h-6 w-6",
          href === pathname
            ? "stroke-primary-foreground"
            : "stroke-muted-foreground",
        )}
      />
      <span
        className={cn(
          "font-degular font-[500] leading-4 hidden md:block ",
          href === pathname
            ? "text-primary-foreground"
            : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </Link>
  );
};

export default SidebarLink;
