"use client";
import { GITHUB_ACCOUNTS } from "@/app/common/constant/github";

import Contributions from "./Contributions";

type DashboardProps = {
  data: {
    contributionsCollection: { contributionCalendar: any };
  };
};

const Dashboard = ({ data }: DashboardProps) => {
  return (
    <>
      <div className="space-y-10">
        {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
          (account, index) => (
            <Contributions
              key={index}
              username={account?.username}
              type={account?.type}
              endpoint={account?.endpoint}
              data={data}
            />
          )
        )}
      </div>
    </>
  );
};

export default Dashboard;
