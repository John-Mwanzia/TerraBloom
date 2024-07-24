"use client";

import { UserButton } from "@clerk/nextjs";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection(userId) {
  const links = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Market prices",
      link: "/market-prices",
    },
    {
      name: "Crop Details",
      link: "/crop-details",
    },
    {
      name: "Farmer Community",
      link: "/terra/community",
    },
  ];

  const [activeMenu, setActiveMenu] = useState(false);
  const [menuAnimationCompleted, setMenuAnimationCompleted] = useState(false);

  useEffect(() => {
    console.log("Initializing AOS...");
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (activeMenu) {
      setTimeout(() => {
        setMenuAnimationCompleted(true);
      }, 200);
    }
  }, [activeMenu]);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);

    if (!activeMenu) {
      document.body.style.overflow = "hidden"; // Hide scroll

      setMenuAnimationCompleted(false);
    } else {
      document.body.style.overflow = "unset"; // Show scroll
    }
  };

  return (
    <div className="w-screen sm:container">
      <div
        className={`relative mt-8 h-[76vw] rounded-[1.375rem] bg-white shadow-xl sm:mb-12 sm:h-[31rem] md:h-[35.4rem] lg:h-[53rem] xl:h-[50rem] 2xl:h-[63.95rem] ${
          activeMenu ? "fixed" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="z-[99999] pl-3 pt-2 sm:pl-6 sm:pt-4 xl:pl-8 xl:pt-2 2xl:pl-12 2xl:pt-4">
            <Image
              src="./landing/logoSmall.svg"
              width={82}
              height={72}
              alt="logo"
              className={`sm:hidden ${activeMenu ? "" : ""}`}
            />
            <Image
              src="./bloomCommAssets/Logo.svg"
              width={180}
              height={133}
              alt="logo"
              className="hidden sm:block sm:h-[4.8rem] sm:w-[5.4rem] lg:h-[11rem] lg:w-[11.6rem]"
            />
          </div>
          <div
            className={`fixed right-0 top-0 z-50 h-screen w-screen flex-col items-center justify-center gap-24 text-black/70 md:static md:flex md:h-auto md:w-auto md:flex-row md:items-center md:justify-end md:gap-6 md:bg-transparent md:pr-4 lg:gap-12 lg:pr-8 2xl:gap-20 ${
              activeMenu
                ? "bg-opacit flex h-screen overscroll-contain bg-black text-white backdrop-blur"
                : ""
            } transition-all duration-300 ease-in-out`}
          >
            {links.map((link, index) => (
              <div
                key={link.name}
                className={` ${
                  activeMenu ? "block text-white" : "hidden"
                } transition-opacity duration-300 ease-in-out md:block`}
              >
                <Link
                  href={link.link}
                  className="font-outfit font-semibold sm:text-base md:text-sm xl:text-base"
                >
                  {link.name}
                </Link>
              </div>
            ))}

            {userId.user ? (
              <div className={` ${activeMenu ? "block" : "hidden sm:block"} `}>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link
                href="/sign-up"
                className={`rounded-3xl bg-[#A47344] px-8 py-2 font-outfit text-sm text-white md:px-6 xl:px-8 xl:text-base ${
                  activeMenu ? "block text-white" : "hidden"
                } transition-opacity duration-300 ease-in-out md:block`}
              >
                Sign Up
              </Link>
            )}
          </div>
          <div
            onClick={toggleMenu}
            className={`relative -top-2 right-2 z-50 cursor-pointer md:hidden ${
              activeMenu ? " " : " "
            }`}
          >
            <div className="mb-1 h-[0.1875rem] w-[1.875rem] rounded-2xl bg-[#f55253]"></div>
            <div className="mb-1 ml-auto h-[0.1875rem] w-[1.4rem] rounded-2xl bg-[#f55253]"></div>
            <div className="w-[1.875rem ] mb-1 h-[0.1875rem] rounded-2xl bg-[#f55253]"></div>
          </div>
        </div>

        <div className="absolute -right-0 -top-0 sm:right-0">
          <Image
            src="/landing/heroFarmerSm.png"
            width={590}
            height={527}
            alt="heroFarmer"
            className="w-[79vw] sm:w-[520px] md:block md:h-[567px] md:w-[590px] lg:hidden"
          />
          <img
            src="./landing/heroFarmer.svg"
            alt="heroFarmer"
            className="hidden lg:block lg:h-[53rem] xl:h-[50rem] 2xl:h-[64rem]"
          />
        </div>

        <div className="xl:mt-42 mb-4 mt-[10vw] max-w-[12rem] pl-2 sm:mb-10 sm:mt-32 sm:max-w-sm md:max-w-sm md:pl-6 lg:max-w-2xl xl:mb-16 xl:max-w-2xl xl:pl-8 2xl:mt-48 2xl:pl-12">
          <h1 className="font-heading text-lg font-bold tracking-wide sm:text-3xl lg:text-6xl 2xl:text-6xl">
            Empowering <span className="text-[#008888]">Farmers</span> with
            Knowledge and Insights.
          </h1>
        </div>
        <div className="max-w-[12.0rem] pl-2 text-[0.6rem] sm:max-w-xs sm:text-base md:pl-6 lg:max-w-xl xl:pl-8 2xl:max-w-2xl 2xl:pl-12">
          <p className="hidden font-sans lg:block">
            Our platform provides real-time weather updates, market prices,
            expert advice, and a supportive farming community—all in one
            place.Empowering farmers to make informed decisions and cultivate
            growth.
          </p>
          <p className="lg:hidden xs:pr-2">
            Access real-time weather updates, market prices, expert advice, and
            a supportive farming community
          </p>
        </div>
      </div>
    </div>
  );
}
