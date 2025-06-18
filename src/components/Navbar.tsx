"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, stagger, useAnimate, AnimatePresence } from "motion/react";

const links = ["Home", "About", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="fixed z-50 flex h-[4rem] w-dvw items-center justify-between border-b-[0.5px] border-neutral-900 px-12 py-4 backdrop-blur-md lg:px-42">
        <div className="text-[15px] font-black">XTRACT</div>
        <div className="hidden items-center justify-center gap-4 text-[14px] sm:flex">
          {links.map((item, idx) => (
            <span
              key={idx}
              className="rounded-sm px-2 py-1 hover:bg-neutral-900"
            >
              {item}
            </span>
          ))}
          <Button>Book a call</Button>
        </div>
        <div className="flex items-center justify-center sm:hidden">
          {!open && (
            <motion.button
              layoutId="hamburger-menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="aspect-square h-8" />
            </motion.button>
          )}
          {open && (
            <motion.button
              layoutId="hamburger-menu"
              onClick={() => setOpen(false)}
            >
              <X className="aspect-square h-8" />
            </motion.button>
          )}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute z-20 flex h-[8rem] w-screen flex-col gap-2 bg-black px-2"
            initial={{
              y: -200,
            }}
            animate={{
              y: 64,
            }}
            exit={{
              y: -200,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {links.map((item, idx) => (
              <div
                id="menu-item"
                key={idx}
                className="rounded-sm px-2 py-1 hover:bg-neutral-900"
              >
                {item}
              </div>
            ))}
            <Button id="menu-item">Book a call</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
