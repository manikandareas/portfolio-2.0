import React from "react";
import PageHeading from "../common/components/PageHeading";
import Contact from "./_component/Contact";
import { Metadata } from "next";
import { generateMetadata } from "../common/libs/metadata";

const PAGE_TITLE = "Contact";
const PAGE_DESCRIPTION =
  "Feel free to get in touch and let's have a discussion about how we can work together.";

export const metadata: Metadata = generateMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});
export default function ContactPage() {
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Contact />
    </div>
  );
}
