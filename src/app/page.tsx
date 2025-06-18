import TrustedBy from "@/components/TrustedBy";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { useEffect } from "react";
import Lenis from "lenis";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import CtaCard from "@/components/CtaCard";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden font-[family-name:var(--font-figtree)]">
      <Navbar />
      <Hero />
      <TrustedBy />
      {/* <Services /> */}
      <Process />
      <Benefits />
      <CtaCard />
      <Footer />
    </div>
  );
}
