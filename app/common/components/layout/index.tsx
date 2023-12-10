import { ReactNode } from "react";

import Sidebar from "../sidebar";
import { cn } from "../../libs/utils";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={cn("max-w-6xl mx-auto lg:px-8")}>
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
