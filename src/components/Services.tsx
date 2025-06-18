"use client";

import Badge from "@/components/Badge";
import { stagger, useAnimate } from "motion/react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

const Services = () => {
  const [scope, animate] = useAnimate();

  const text = "AI Solutions That Take Your Business to the Next Level";

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
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacityValue = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const yValue = useTransform(scrollYProgress, [0.4, 0.6], [10, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("latest", latest);
  });

  return (
    <div className="min-h-screen w-screen">
      <motion.div
        style={{
          opacity: opacityValue,
          y: yValue,
        }}
        transition={{
          duration: 0.5,
        }}
        className="mx-auto flex h-full w-3/4 flex-col items-center justify-start"
      >
        <Badge text="Our Services" />
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
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
