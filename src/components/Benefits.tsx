"use client";

import { CloudLightning } from "lucide-react";
import Badge from "./Badge";
import Box, { BoxContent } from "@/components/Box";
import { useEffect, useRef } from "react";
import { useAnimate, useInView } from "motion/react";
const Benefits = () => {
  const box: BoxContent[] = [
    {
      icon: <CloudLightning />,
      text: "Increased Productivity",
      description:
        "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    },
    {
      icon: <CloudLightning />,
      text: "Better Customer Experience",
      description:
        "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    },
    {
      icon: <CloudLightning />,
      text: "24/7 Availability",
      description:
        "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    },
    {
      icon: <CloudLightning />,
      text: "Cost Reduction",
      description:
        "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    },
    {
      icon: <CloudLightning />,
      text: "Data-Driven Insights",
      description:
        "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    },
    {
      icon: <CloudLightning />,
      text: "Scalability & Growth",
      description:
        "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    },
  ];

  const [scrollRef, animate] = useAnimate();
  const isInView = useInView(scrollRef, { once: true });

  useEffect(() => {
    if (isInView) {
      startAnimating();
    }
  }, [isInView]);

  function startAnimating() {
    animate(
      ".box",
      {
        y: 0,
        opacity: 1,
      },
      { delay: 0.5 },
    );
  }

  return (
    <div className="my-12 flex h-[100dvh] w-[100dvw] flex-col items-center justify-start lg:mt-20">
      <div className="flex h-[20rem] w-1/3 flex-col items-center justify-start gap-4 text-center">
        <Badge text="Benefits" />
        <h1 className="text-5xl font-semibold">
          The Key Benefits of AI for Your Business Growth
        </h1>
        <p className="text-md font-medium text-neutral-400">
          Discover how AI automation enhances efficiency, reduces costs, and
          drives business growth with smarter, faster processes.
        </p>
      </div>
      <div
        className="flex w-[80rem] flex-col gap-8 md:grid md:grid-cols-3 md:grid-rows-2"
        ref={scrollRef}
      >
        {box.map((item, idx) => (
          <Box
            key={idx}
            icon={item.icon}
            text={item.text}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
