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
    <Link href={href} className="flex items-center justify-start gap-3">
      <Icon
        className={cn(
          "m-0 h-7 w-7 sm:m-auto lg:m-0",
          href === pathname
            ? "stroke-primary-foreground"
            : "stroke-muted-foreground",
        )}
      />
      <span
        className={cn(
          "font-degular text-2xl font-[500] leading-4 sm:hidden lg:block",
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
