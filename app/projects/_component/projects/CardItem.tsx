import { Skeleton } from "@/app/common/components/ui/skeleton";
import React from "react";
import CardSectionTech from "./CardSectionTech";
import { cn } from "@/app/common/libs/utils";
import { jakartaSans } from "@/app/common/libs/fonts";
import { Pin } from "lucide-react";
import { ProjectItemProps } from "@/app/common/definition/projects";

type CardItemProps = ProjectItemProps & {};

export default function CardItem(props: CardItemProps) {
  const {
    created_at,
    description,
    image,
    is_featured,
    is_show,
    slug,
    stacks,
    title,
    updated_at,
    content,
    link_demo,
    link_github,
  } = props;
  return (
    <article className="sm:w-[23.5rem] w-[19.75rem] h-[22.77rem] rounded-lg overflow-hidden flex flex-col relative">
      <div className="absolute right-0 top-0 flex items-center p-1.5 gap-1.5 bg-[#bef264] rounded-bl-lg z-10">
        <Pin size={14} color="black " className="rotate-45" />
        <span className="text-sm text-black">Featured</span>
      </div>
      <Skeleton className="w-full h-[12rem]"></Skeleton>
      <div
        className={cn(
          "flex-1 bg-primary-foreground p-4 space-y-3",
          jakartaSans.className
        )}
      >
        <h1 className="font-semibold text-primary">{title}</h1>
        <p className="text-muted-foreground tracking-[3px]s">{description}</p>
        <CardSectionTech icon={stacks} />
      </div>
    </article>
  );
}

// 364.267
