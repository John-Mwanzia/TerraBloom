import React from "react";
import HeroSection from "./components/HomeLanding/HeroSection";
import AboutSection from "./components/HomeLanding/AboutSection";
import FeaturesSection from "./components/HomeLanding/FeaturesSection";
import Testimonial from "./components/HomeLanding/Testimonial";
import Footer from "./components/HomeLanding/Footer";
import { auth } from "@clerk/nextjs";
import ScrollToTop from "./components/HomeLanding/ScrollToTop";
import { getUserFromClerkID } from "@/modules/auth";

export default async function page() {
interface Admin{
       id: string,
       isAdmin: boolean

  }

  const { userId } = auth();
  let admin:Admin = {
    id: "",
    isAdmin: false
  }
  if(userId){
     const user = await getUserFromClerkID();
     admin = user
  }

  return (
    <div className="bg-light-gray/40  font- flex justify-center items-center flex-col overflow-x-hidden">
      <HeroSection userId={userId} admin = {admin} />
      <AboutSection />
      <FeaturesSection />
      <Testimonial />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
