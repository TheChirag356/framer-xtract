import React from "react";
import { Button } from "./ui/button";

const CtaCard = () => {
  return (
    <div className="flex h-[30dvw] w-full items-center justify-center">
      <div className="relative mx-auto flex h-2/3 w-1/2 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-neutral-950 text-center">
        <h1 className="w-2/3 text-5xl font-semibold">
          Let AI do the Work so you can Scale Faster
        </h1>
        <p>Book a Call Today and Start Automating</p>
        <Button>Book a free call</Button>
        <div className="absolute aspect-square w-full translate-x-1/2 translate-y-1/4 rounded-full bg-purple-950 mask-radial-from-0% mask-radial-to-40%" />
        <div className="absolute aspect-square w-full -translate-x-1/2 -translate-y-1/4 rounded-full bg-purple-950 mask-radial-from-0% mask-radial-to-40%" />
      </div>
    </div>
  );
};

export default CtaCard;
