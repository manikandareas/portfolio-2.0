"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TypeIt from "typeit-react";
import AnimatedTitle from "./AnimatedTitle";
import { Button } from "./ui/button";

export default function Opener() {
  const [openerIsOpen, setOpenerIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpenerIsOpen(true);
  }, []);
  return (
    <AnimatePresence>
      {openerIsOpen ? (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed w-screen h-screen flex items-center justify-center bg-neutral-50/80 dark:bg-zinc-950/80 backdrop-blur space-y-2 z-[9999] flex-col px-4 text-center lg:text-6xl text-4xl font-semibold font-mono"
        >
          <div className="items-end justify-end flex flex-1">
            <AnimatedTitle action={setOpenerIsOpen} />
          </div>
          <div className=" flex-1 flex items-center">
            <Button variant={"ghost"} onClick={() => setOpenerIsOpen(false)}>
              <span className="animate-pulse">Skip intro</span>
            </Button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
