import React from "react";
import PageHeading from "../common/components/PageHeading";
import Project from "./_component/projects";
import { Metadata } from "next";
import { generateMetadata } from "../common/libs/metadata";

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION =
  "Several projects that I have worked on, both private and open source.";

export const metadata: Metadata = generateMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

export default function ProjectsPage({}) {
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Project />
    </div>
  );
}
