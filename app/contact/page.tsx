import React from "react";
import PageHeading from "../common/components/PageHeading";
import Contact from "./_component/Contact";

type Props = {};
const PAGE_TITLE = "Contact";
const PAGE_DESCRIPTION =
  "Feel free to get in touch and let's have a discussion about how we can work together.";
export default function ContactPage({}: Props) {
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Contact />
    </div>
  );
}
