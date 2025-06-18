"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, stagger, useAnimate } from "motion/react";

const Hero = () => {
  const text = "Intelligent Automation for Modern Businesses.";
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = async () => {
    await animate(
      "h1",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 1,
        ease: "easeInOut",
        delay: stagger(0.2),
      },
    );
    animate(
      "p",
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
      {
        delay: 0.5,
        ease: "easeInOut",
      },
    );
  };

  return (
    <div className="relative inset-0 h-full w-full">
      <div
        className="absolute inset-0 top-[30%] left-[40%] -z-10 h-80 w-80 animate-[spin_5s_linear_infinite] rounded-full blur-md"
        style={{
          backgroundImage:
            "linear-gradient(229deg,var(--token-cd9ad879-0340-4881-8da6-7efa110062d4, #df7afe) 13%,rgba(201,110,240,0) 35.0235827429153%,rgba(164,92,219,0) 64.17244225559735%,var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200)) 88%)",
        }}
      ></div>
      <div
        className="absolute inset-0 top-[35%] left-[42%] -z-10 h-60 w-60 animate-[spin_5s_linear_infinite_reverse] rounded-full blur-md"
        style={{
          backgroundImage:
            "linear-gradient(229deg,var(--token-cd9ad879-0340-4881-8da6-7efa110062d4, #df7afe) 13%,rgba(201,110,240,0) 35.0235827429153%,rgba(164,92,219,0) 64.17244225559735%,var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200)) 88%)",
        }}
      ></div>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 py-40">
        <div className="rounded-full border border-neutral-900 pr-2 font-semibold">
          <span className="rounded-full bg-[#814ac8] px-2">New</span> Automated
          Lead Generation
        </div>
        <div
          ref={scope}
          className="flex h-screen w-1/2 flex-col items-center justify-center gap-6 text-center"
        >
          <div>
            {text.split(" ").map((word, idx) => (
              <motion.h1
                key={word + idx}
                className="inline-block text-center text-6xl font-semibold tracking-tight"
                style={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 10,
                }}
              >
                {word}&nbsp;
              </motion.h1>
            ))}
          </div>
          <motion.p
            style={{
              opacity: 0,
              y: 10,
              filter: "blur(10px)",
            }}
          >
            Xtract brings AI automation to your fingertips & streamline tasks.
          </motion.p>
          <div className="flex gap-6">
            <Button className="cursor-pointer">Get in touch</Button>
            <Button className="cursor-pointer">View services</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
