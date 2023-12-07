import React from "react";
import { MenuItemProps } from "../../definition/menu";
import Link from "next/link";
import { cn } from "../../libs/utils";
import { FaArrowRight } from "react-icons/fa";

export default function MenuItem({
  href,
  icon,
  title,
  pathname,
}: MenuItemProps & { pathname: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-neutral-700 group hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-100 flex items-center justify-between px-4 py-2 rounded-lg hover:bg-neutral-800/20 dark:hover:bg-neutral-900 hover:scale-105 transition-all ease-in-out",
        pathname === href &&
          "!text-neutral-800 dark:!text-neutral-100 bg-neutral-800/20 dark:bg-neutral-900"
      )}
    >
      <div className="flex items-center gap-1.5">
        <i className="group-hover:-rotate-12 transition-all ease-in-out">
          {icon}
        </i>
        <span>{title}</span>
      </div>
      {pathname === href ? (
        <FaArrowRight size={12} className={"text-neutral-700 animate-pulse"} />
      ) : null}
    </Link>
  );
}
