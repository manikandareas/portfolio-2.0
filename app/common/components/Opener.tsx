"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";

import TypeIt from "typeit-react";

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
          className="fixed w-screen h-screen flex items-center justify-center bg-zinc-950 space-y-2 z-[9999] flex-col px-4 text-center text-6xl font-semibold"
        >
          <TypeIt
            options={{
              afterComplete: () => delay(() => setOpenerIsOpen(false), 1000),
            }}
            getBeforeInit={(instance) => {
              instance
                .type("Viti Andares", { delay: 100 })
                .move(-1, { delay: 100 })
                .type("a", { delay: 400 })
                .move(-8, { delay: 100 })
                .delete(1)
                .type("o", { delay: 100 })
                .move(null, { to: "END" })
                .type('<em><strong class="manik"> Malik.</strong></em>', {
                  speed: 100,
                })
                .pause(500)
                .delete(".manik", { delay: 800, instant: true })
                .type('<em><strong class="manik"> Manik.</strong></em>', {
                  speed: 100,
                });
              return instance;
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
