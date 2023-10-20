import Conversation from "@/app/components/community/Conversation";
import Features from "@/app/components/community/Features";
import HeroSection from "@/app/components/community/HeroSection";

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
        <section className="flex justify-center mt-44 pb-40">
          <Features />
        </section>
      </main>
    </>
  );
}
