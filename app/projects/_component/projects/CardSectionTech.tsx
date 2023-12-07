import React from "react";
import { STACKS } from "@/app/common/constant/stacks";
type CardSectionTechProps = {
  icon: JSX.Element[];
};

export default function CardSectionTech({ icon }: CardSectionTechProps) {
  return (
    <ul className="flex gap-4">
      {icon.map((tech, index) => {
        return <li key={index}>{tech}</li>;
      })}
    </ul>
  );
}
