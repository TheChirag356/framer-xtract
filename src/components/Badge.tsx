import React from "react";

const Badge = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center rounded-sm border border-neutral-900 px-2 py-1 text-[14px] text-white">
      {text}
    </div>
  );
};

export default Badge;
