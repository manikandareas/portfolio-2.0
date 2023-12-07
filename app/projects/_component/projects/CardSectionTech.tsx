import React from "react";
import { STACKS } from "@/app/common/constant/stacks";
import { Tooltip } from "@/app/common/components/Tooltip";
type CardSectionTechProps = {
  stacks: string[];
};

export default function CardSectionTech({ stacks }: CardSectionTechProps) {
  return (
    <ul className="flex gap-4">
      {stacks.map((tech, index) => {
        return (
          <li title={tech} key={index + tech}>
            <Tooltip icon={STACKS[tech]} title={tech} />
          </li>
        );
      })}
    </ul>
  );
}
