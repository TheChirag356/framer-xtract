"use client";
import React from "react";
import Badge from "@/components/Badge";
import BentoBox from "@/components/BentoBox";
import { Shield, Cpu, Gauge, Repeat, BicepsFlexed } from "lucide-react";

const Process = () => {
  return (
    <div className="flex min-h-[100dvh] w-[100dvw] flex-col items-center justify-start">
      <div className="flex h-[20rem] w-1/3 flex-col items-center justify-start gap-4 text-center">
        <Badge text="Our Process" />
        <h1 className="text-5xl font-semibold">
          Our Simple, Smart, and Scalable Process
        </h1>
        <p className="text-md font-medium text-neutral-400">
          We design, develop, and implement automation tools that help you work
          smarter, not harder
        </p>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2">
        <BentoBox>
          <Badge text="Step 1" />
          <h1 className="text-2xl text-neutral-200">Smart Analyzing</h1>
          <p className="text-md text-neutral-400">
            We assess your needs and identify AI solutions to streamline
            workflows and improve efficiency.
          </p>
          <div className="mt-2 flex w-full items-center justify-between">
            <div className="flex h-full w-[13rem] flex-col items-center justify-center gap-4 border border-neutral-800">
              <div className="flex aspect-square w-[8rem] items-center justify-center rounded-full border border-neutral-700">
                <div className="h-11/12 w-11/12 rotate-90 animate-[spin_4s_linear_infinite] rounded-full bg-purple-800 [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.1))] [clip-path:polygon(100%_75%,50%_50%,100%_100%)]" />
              </div>
              <p className="text-[12px]">Analyzing current workflow...</p>
            </div>
            <div className="flex h-full w-[13rem] flex-col items-center justify-center border border-neutral-800 py-2">
              {[
                {
                  icon: (
                    <Shield className="aspect-square h-5 text-neutral-400" />
                  ),
                  text: "System Check",
                },
                {
                  icon: <Cpu className="aspect-square h-5 text-neutral-400" />,
                  text: "Process check",
                },
                {
                  icon: (
                    <Gauge className="aspect-square h-5 text-neutral-400" />
                  ),
                  text: "Speed check",
                },
                {
                  icon: (
                    <BicepsFlexed className="aspect-square h-5 text-neutral-400" />
                  ),
                  text: "Manual work",
                },
                {
                  icon: (
                    <Repeat className="aspect-square h-5 text-neutral-400" />
                  ),
                  text: "Repetative task",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`mx-auto mt-2 flex w-[12rem] items-center border border-neutral-800 px-1 py-1 text-[12px] ${idx === 0 ? "bg-neutral-800" : ""}`}
                >
                  {item.icon} &nbsp; {item.text}
                </div>
              ))}
            </div>
          </div>
        </BentoBox>
        <BentoBox>
          <Badge text="Step 2" />
          <h1 className="text-2xl text-neutral-200">AI Development</h1>
          <p className="text-md text-neutral-400">
            Our team builds intelligent automation systems tailored to your
            business processes.
          </p>
        </BentoBox>
        <BentoBox>
          <Badge text="Step 3" />
          <h1 className="text-2xl text-neutral-200">Seamless Integration</h1>
          <p className="text-md text-neutral-400">
            We smoothly integrate AI solutions into your existing infrastructure
            with minimal disruption.
          </p>
        </BentoBox>
        <BentoBox>
          <Badge text="Step 4" />
          <h1 className="text-2xl text-neutral-200">Continuous Optimization</h1>
          <p className="text-md text-neutral-400">
            We refine performance, analyze insights, and enhance automation for
            long-term growth.
          </p>
        </BentoBox>
      </div>
    </div>
  );
};

export default Process;
