import React from "react";
import HeroSection from "./components/HomeLanding/HeroSection";
import AboutSection from "./components/HomeLanding/AboutSection";
import FeaturesSection from "./components/HomeLanding/FeaturesSection";
import Testimonial from "./components/HomeLanding/Testimonial";
import Footer from "./components/HomeLanding/Footer";
import { auth } from "@clerk/nextjs";

export default function page() {
  const { userId } = auth();

  return (
    <div className="bg-light-gray/40  font- flex justify-center items-center flex-col overflow-x-hidden">
      <HeroSection user={userId} />
      <AboutSection />
      <FeaturesSection />
      <Testimonial />
      <Footer />
    </div>
  );
}
