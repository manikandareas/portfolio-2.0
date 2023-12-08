"use client";
import { Separator } from "@/app/common/components/ui/separator";
import EducationList from "./EducationList";
import Skills from "@/app/_component/Skills";
import Story from "./Story";

const About = () => {
  return (
    <>
      <Story />
      <Separator className="my-8" />
      <Skills />
      <Separator className="my-8" />

      <EducationList />
    </>
  );
};

export default About;
