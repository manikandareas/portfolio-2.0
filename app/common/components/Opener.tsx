"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";

import TypeIt from "typeit-react";
import AnimatedTitle from "./AnimatedTitle";

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
          className="fixed w-screen h-screen flex items-center justify-center bg-zinc-950/80 backdrop-blur space-y-2 z-[9999] flex-col px-4 text-center lg:text-6xl text-4xl font-semibold font-mono"
        >
          <AnimatedTitle action={setOpenerIsOpen} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
