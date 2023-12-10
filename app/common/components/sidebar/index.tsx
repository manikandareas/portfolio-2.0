"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { motion } from "framer-motion";
import { ModeToggle } from "../ModeToggle";
import { Separator } from "../ui/separator";
import { cn } from "../../libs/utils";
import { soraSans } from "../../libs/fonts";
import useIsMobile from "../../hooks/useIsMobile";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import { MenuItemProps } from "../../definition/menu";
import { MENU_ITEMS } from "../../constant/menu";
import Copyright from "../Copyright";

export default function Sidebar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const filteredMenu = MENU_ITEMS.filter((item) => item.isShow);
  return (
    <>
      {isMobile ? null : (
        <aside className="lg:sticky transition-all bg-background lg:bg-transparent duration-300 top-0 z-10 flex flex-col gap-4 lg:py-8 lg:px-0 md:p-8">
          <header className="space-y-4">
            <div>
              <Avatar className="w-[6rem] h-[6rem] ">
                <AvatarImage
                  src="/vitomanik.webp"
                  width={96}
                  height={96}
                  alt="Manik"
                  className="hover:scale-105 transition-all ease-in-out"
                />
                <AvatarFallback>Vito Manik</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex justify-between items-center space-x-6">
              <div>
                <h1 className="font-semibold text-xl">Vito Andareas Manik</h1>
                <span
                  className={cn(
                    soraSans.className,
                    "text-sm text-muted-foreground"
                  )}
                >
                  @ vitomanik
                </span>
              </div>
              <VerifiedIcon
                size={18}
                className="text-blue-400"
                data-aos="flip-right"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <span
                  className={cn(
                    soraSans.className,
                    "text-sm  text-neutral-600 dark:text-neutral-400 font-sora "
                  )}
                >
                  available for hire
                </span>
              </div>
              <ModeToggle />
            </div>
          </header>
          <Separator />
          <main className="space-y-2">
            {filteredMenu?.map((item: MenuItemProps, idx: number) => (
              <MenuItem {...item} pathname={pathname} key={idx} />
            ))}
          </main>
          <Separator />
          <Copyright />
        </aside>
      )}
    </>
  );
}
