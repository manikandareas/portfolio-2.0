import { Suspense } from "react";
import PageHeading from "../common/components/PageHeading";
import Dashboard from "./_component/Dashboard";
import ContributionsLoading from "./_component/Contributions/ContributionsLoading";
import { fetchGithubUser } from "@/app/services/github";
import { generateMetadata } from "../common/libs/metadata";
import { Metadata } from "next";

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

export const metadata: Metadata = generateMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const DashboardPage = async () => {
  const cahcedGithubUser = await fetchGithubUser();
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Suspense fallback={<ContributionsLoading />}>
        <Dashboard data={cahcedGithubUser.data} />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
