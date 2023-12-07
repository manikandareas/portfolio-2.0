import clsx from "clsx";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { useWindowSize } from "usehooks-ts";

import useHasMounted from "../../hooks/useHasMounted";

import { usePathname } from "next/navigation";
import Sidebar from "../sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={clsx("max-w-6xl mx-auto lg:px-8")}>
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:py-4 xl:pb-8">
          <Sidebar />
          <main className="lg:w-4/5 max-w-[854px] transition-all duration-300">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
