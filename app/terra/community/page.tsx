import CTA from "@/app/components/community/CTA";
import Conversation from "@/app/components/community/Conversation";
import FAQ from "@/app/components/community/FAQ";
import Features from "@/app/components/community/Features";
import HeroSection from "@/app/components/community/HeroSection";
import StatsSection from "@/app/components/community/StatsSection";

import React from "react";

export default function page() {
  return (
    <>
      <main className=" bg-black">
        <section className="flex justify-center  pt-4 ">
          <HeroSection />
        </section>

        <section className="flex justify-center mt-44 pb-40">
          <Conversation />
        </section>
        <section className="flex justify-center  pb-40">
          <Features />
        </section>

        <section className="flex justify-center mt-24  mb-40 ">
          <StatsSection />
        </section>

        <section className="flex justify-center mt-24  pb-40 ">
          <CTA />
        </section>

        <section className="flex justify-center mt-24  pb-40 ">
          <FAQ />
        </section>
      </main>
    </>
  );
}
