import PageHeading from "../common/components/PageHeading";
import Dashboard from "./_component/Dashboard";
const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

const DashboardPage = () => {
  return (
    <div data-aos="fade-up" className="space-y-6 p-8">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
