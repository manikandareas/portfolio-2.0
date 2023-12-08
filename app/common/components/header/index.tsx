"use client";
import { useEffect, useState } from "react";
import { MENU_ITEMS } from "../../constant/menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../ModeToggle";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { cn } from "../../libs/utils";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import useIsMobile from "../../hooks/useIsMobile";
type Props = {};

export default function Header({}: Props) {
  const filteredMenu = MENU_ITEMS.filter((item) => item.isShow);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setIsDropdownOpen(false);
    }
  }, [isMobile]);
  return (
    <>
      {isMobile && (
        <header
          className={cn(
            "bg-background flex items-center sticky top-0 z-50 border-b"
          )}
        >
          <div className="flex justify-between w-full p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/vitomanik.jpg" alt="Manik" />
                <AvatarFallback>Manik</AvatarFallback>
              </Avatar>

              <div className="flex items-center gap-x-1.5">
                <h1 className="font-bold">Vito Andareas Manik </h1>
                <VerifiedIcon
                  size={18}
                  className="text-blue-400"
                  data-aos="flip-right"
                />
              </div>
            </div>

            <div className={cn("flex gap-4 items-center")}>
              <ModeToggle />
              <Sheet open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                <SheetTrigger aria-label="Open menu">
                  <FaBars
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setIsDropdownOpen(true)}
                  />
                </SheetTrigger>
                <SheetContent side={"top"} className="h-full">
                  <SheetHeader>
                    <SheetTitle className="flex justify-between">
                      <div className="flex-col flex gap-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src="/vitomanik.jpg" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex items-center gap-x-1.5">
                          <h1 className="font-bold">Vito Manik </h1>
                          <VerifiedIcon
                            size={18}
                            className="text-blue-400"
                            data-aos="flip-right"
                            key={"verified"}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 h-full justify-between items-end">
                        <div className="h-16">
                          <FaTimes
                            size={28}
                            className="cursor-pointer"
                            onClick={() => setIsDropdownOpen(false)}
                          />
                        </div>

                        <ModeToggle />
                      </div>
                    </SheetTitle>
                    <Separator />
                    <div className="w-full flex-col flex gap-1">
                      {filteredMenu?.map((item, index) => (
                        <Link
                          key={index + item.title}
                          href={item.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className={cn(
                            "text-neutral-700 group hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-100 flex items-center justify-between px-4 py-2 rounded-lg hover:bg-neutral-800/20 dark:hover:bg-neutral-900 hover:scale-105 transition-all ease-in-out",
                            pathname === item.href &&
                              "!text-neutral-800 dark:!text-neutral-100 bg-neutral-800/20 dark:bg-neutral-900"
                          )}
                        >
                          <div className="flex items-center gap-1.5">
                            <i className="group-hover:-rotate-12 transition-all ease-in-out">
                              {item.icon}
                            </i>
                            <span>{item.title}</span>
                          </div>
                          {pathname === item.href ? (
                            <FaArrowRight
                              size={12}
                              className={"text-neutral-700 animate-pulse"}
                            />
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
