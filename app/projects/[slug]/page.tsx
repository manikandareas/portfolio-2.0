import PageHeading from "@/app/common/components/PageHeading";
import { ProjectItemProps } from "@/app/common/definition/projects";
import Link from "next/link";
import React from "react";
import { FiArrowLeftCircle as BackButtonIcon } from "react-icons/fi";
import ProjectDetail from "./_component/ProjectDetail";
import { projects } from "@/app/common/constant/projects";
import { Metadata, ResolvingMetadata } from "next";

type ProjectsDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: ProjectsDetailPageProps): Promise<Metadata> {
  const project = projects.filter((item) => item.slug === params.slug)[0];

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectsDetailPage({
  params,
}: ProjectsDetailPageProps) {
  const project = projects.filter((item) => item.slug === params.slug)[0];
  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;

  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <Link href={"/projects"}>
        <div className="flex gap-2 w-max hover:gap-3 items-center mb-6 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer">
          <BackButtonIcon /> <span>Back</span>
        </div>
      </Link>

      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...project} />
    </div>
  );
}

// { params }: { params: { slug: string } }
