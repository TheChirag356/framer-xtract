import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  const links: string[] = [
    "Services",
    "Process",
    "Case studies",
    "Benefits",
    "Pricing",
  ];
  const pages: string[] = ["Home", "About", "Blog", "Contact", "404"];
  const socials: string[] = ["Instagram", "Facebook", "Linkedin", "Twitter"];

  return (
    <div className="relative mx-auto flex h-[50dvh] w-[100dvw] items-center justify-evenly overflow-hidden border-t-[1px] border-t-neutral-700">
      <div className="flex h-[35dvh] w-fit flex-col gap-4">
        <h1 className="text-5xl font-black">XTRACT</h1>
        <p className="text-md w-2/3">
          Xtract - Automate Smarter, Optimize Faster, and Grow Stronger.
        </p>
        <h2>Join our newsletter</h2>
        <form
          action=""
          className="flex w-fit rounded-sm border border-neutral-700 pl-2"
        >
          <input type="text" placeholder="name@email.com" className="" />
          <Button className="">Subscribe</Button>
        </form>
      </div>
      <div className="flex h-[35dvh] w-[80dvh] items-start justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-medium">Links</h2>
          {links.map((item, idx) => (
            <h3 className="text-md text-neutral-400" key={item + idx}>
              {item}
            </h3>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-medium">Pages</h2>
          {pages.map((item, idx) => (
            <h3 className="text-md text-neutral-400" key={item + idx}>
              {item}
            </h3>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-medium">Socials</h2>
          {socials.map((item, idx) => (
            <h3 className="text-md text-neutral-400" key={item + idx}>
              {item}
            </h3>
          ))}
        </div>
      </div>
      <div className="absolute -z-20 aspect-square w-[100dvw] -translate-x-1 -translate-y-1/3 rounded-full bg-purple-950 mask-radial-from-10% mask-radial-to-70% mask-radial-at-center"></div>
    </div>
  );
};

export default Footer;
