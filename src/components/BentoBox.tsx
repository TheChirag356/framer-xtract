import { cn } from "@/lib/utils";
import React from "react";

const BentoBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex max-w-[30rem] flex-1 flex-col items-start justify-start gap-2 rounded-md border border-neutral-900 bg-[#0a0a0a] px-6 py-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default BentoBox;
