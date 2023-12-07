import Image from "next/image";
import { STACKS } from "@/app/common/constant/stacks";
import { ProjectItemProps } from "@/app/common/definition/projects";

// import ProjectLink from './ProjectLink';
import { Tooltip } from "@/app/common/components/Tooltip";
import ProjectLink from "./ProjectLink";

const ProjectDetail = ({
  title,
  image,
  stacks,
  link_demo,
  link_github,
  content,
}: ProjectItemProps) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between">
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-[15px] mb-1 text-neutral-700 dark:text-neutral-300">
            Tech Stack :
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {stacks?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack} icon={STACKS[stack]} />
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo}
          link_github={link_github}
        />
      </div>
      <Image
        src={image}
        width={800}
        height={400}
        alt={title}
        className="hover:scale-105 transition-all ease-in-out"
      />
      {content && (
        <div className="space-y-6 leading-[1.8] dark:text-neutral-300 mt-5"></div>
      )}
    </div>
  );
};

export default ProjectDetail;
