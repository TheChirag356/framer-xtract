"use client";

import React from "react";
import { motion } from "motion/react";

export type BoxContent = {
  icon: React.ReactNode;
  text: string;
  description: string;
};

const Box = ({ icon, text, description }: BoxContent) => {
  return (
    <motion.div
      style={{
        y: 20,
        opacity: 0,
      }}
      className="box relative flex h-[12rem] flex-col items-start justify-center gap-2 overflow-hidden rounded-md border border-neutral-800 px-4 py-2"
    >
      <div className="z-10 aspect-square">{icon}</div>
      <h1 className="z-10 text-2xl font-medium">{text}</h1>
      <p className="text-md z-10">{description}</p>
      <div className="absolute top-1/2 left-1/2 -z-10 aspect-square w-2/3 -translate-x-1/2 -translate-y-1 rounded-full bg-purple-950 mask-radial-from-10% mask-radial-to-60% mask-radial-at-center" />
    </motion.div>
  );
};

export default Box;
