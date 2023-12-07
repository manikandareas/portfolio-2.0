import { Suspense } from "react";
import PageHeading from "../common/components/PageHeading";
import Dashboard from "./_component/Dashboard";
import ContributionsLoading from "./_component/Contributions/ContributionsLoading";
const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

const DashboardPage = () => {
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Suspense fallback={<ContributionsLoading />}>
        <Dashboard />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
