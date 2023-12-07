import React from "react";
import CardItem from "./CardItem";
import { projects } from "@/app/common/constant/projects";

type Props = {};

export default function Project({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
      {projects?.map((project, index) => {
        return <CardItem key={index} {...project} />;
      })}
    </div>
  );
}
