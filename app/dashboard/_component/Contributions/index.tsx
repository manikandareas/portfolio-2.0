"use client";
import Link from "next/link";
import { BsGithub as GithubIcon } from "react-icons/bs";

import SectionHeading from "@/app/common/components/SectionHeading";
import SectionSubHeading from "@/app/common/components/SectionSubHeading";

import Calendar from "./Calendar";
import Overview from "./Overview";
import { useQuery } from "@tanstack/react-query";
import { getGithubUser } from "@/app/services/github";

type ContributionsProps = {
  username: string;
  type: string;
  endpoint: string;
};

const Contributions = ({ username }: ContributionsProps) => {
  const { data } = useQuery({
    queryKey: ["github-user-profile"],
    queryFn: async () => {
      const response = await getGithubUser("personal");
      return response;
    },
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const contributionCalendar =
    data?.data.contributionsCollection.contributionCalendar;
  console.log(contributionCalendar);

  return (
    <section className="flex flex-col gap-y-2">
      <SectionHeading
        title="Contributions"
        icon={<GithubIcon className="mr-1" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">
          My contributions from last year on github.
        </p>
        <Link
          href={`https://github.com/${username}`}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          @{username}
        </Link>
      </SectionSubHeading>

      {!data && <div className="dark:text-neutral-400">No Data</div>}

      {data && (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  );
};

export default Contributions;
