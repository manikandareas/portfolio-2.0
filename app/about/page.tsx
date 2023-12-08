import { Metadata } from "next";
import PageHeading from "../common/components/PageHeading";
import { generateMetadata } from "../common/libs/metadata";
import About from "./_component/About";

const PAGE_TITLE = "About";
const PAGE_DESCRIPTION =
  "A short story of me, not important but seem better than nothing.";

export const metadata: Metadata = generateMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const AboutPage = async () => {
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <About />
    </div>
  );
};

export default AboutPage;
