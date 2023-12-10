"use client";

import React, { useEffect, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../libs/utils";
import { firaCode } from "../libs/fonts";

export default function Opener() {
  const [openerIsOpen, setOpenerIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpenerIsOpen(true);

    setTimeout(() => {
      setOpenerIsOpen(false);
    }, 3000);
  }, []);
  return (
    <AnimatePresence>
      {openerIsOpen ? (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed w-screen h-screen flex items-center justify-center bg-zinc-950 space-y-2 z-[9999] flex-col px-4 text-center"
        >
          <AnimatedTitle text="Vito&nbsp;Andareas&nbsp;Manik" />
          <motion.div
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 500 }}
            transition={{ delay: 1, type: "spring", bounce: 0.5 }}
            className={cn(
              firaCode.className,
              "font-serif text-7xl text-center font-bold text-neutral-50"
            )}
          >
            Welcome!
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
