import React from "react";
import PageHeading from "../common/components/PageHeading";
import Project from "./_component/projects";

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION =
  "Several projects that I have worked on, both private and open source.";

type Props = {};

export default function ProjectsPage({}: Props) {
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Project />
    </div>
  );
}
