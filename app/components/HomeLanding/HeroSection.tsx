"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);

    if (!activeMenu) {
      document.body.style.overflow = "hidden"; // Hide scroll
    } else {
      document.body.style.overflow = "unset"; // Show scroll
    }
  };

  return (
    <div className="w-screen sm:container">
      <div
        className={`bg-white  h-[76vw] sm:h-[31rem]  md:h-[35.4rem]  lg:h-[53rem] xl:h-[50rem] 2xl:h-[63.95rem] mt-8 sm:mb-12 rounded-[1.375rem] relative ${
          activeMenu ? "fixed" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="pl-3 sm:pl-6 xl:pl-8 2xl:pl-12 pt-2 sm:pt-4 xl:pt-2 2xl:pt-4 z-[99999]">
            <Image
              src="./landing/logoSmall.svg"
              width={82}
              height={72}
              alt="logo"
              className={`sm:hidden  ${activeMenu ? "" : ""}`}
            />
            <Image
              src="./bloomCommAssets/Logo.svg"
              width={180}
              height={133}
              alt="logo"
              className=" hidden sm:block sm:h-[4.8rem] sm:w-[5.4rem] lg:h-[11rem] lg:w-[11.6rem] "
            />
          </div>
          <div
            className={` md:pr-4 lg:pr-8  text-black/70  h-screen w-screen fixed  md:flex justify-center gap-24  flex-col md:flex-row md:gap-6 lg:gap-12 2xl:gap-20 items-center z-50  top-0 right-0 md:static md:h-auto md:w-auto md:bg-transparent  md:justify-end md:items-center ${
              activeMenu
                ? "backdrop-blur bg-opacity-90 bg-black flex text-white h-screen  overscroll-contain"
                : ""
            } transition-all duration-300 ease-in-out`}
          >
            {links.map((link, index) => (
              <div
                key={link.name}
                className={` ${
                  activeMenu ? "block text-white" : "hidden"
                } md:block transition-opacity duration-300 ease-in-out`}
              >
                <Link
                  href={link.link}
                  className=" font-outfit sm:text-base font-semibold md:text-sm xl:text-base  "
                >
                  {link.name}
                </Link>
              </div>
            ))}

            {userId.user ? (
              <div
                className={`
              ${activeMenu ? "block " : "hidden sm:block"}
              `}
              >
                <UserButton  afterSignOutUrl="/"/>
              </div>
            ) : (
              <Link
                href="/sign-up"
                className={` bg-[#A47344] rounded-3xl text-white px-8 md:px-6 xl:px-8 py-2 font-outfit text-sm xl:text-base ${
                  activeMenu ? "block text-white" : "hidden"
                } md:block transition-opacity duration-300 ease-in-out`}
              >
                Sign Up
              </Link>
            )}
          </div>
          <div
            onClick={toggleMenu}
            className={` md:hidden z-50 relative  right-2 -top-2 cursor-pointer ${
              activeMenu ? " " : " "
            }`}
          >
            <div className="h-[0.1875rem] rounded-2xl w-[1.875rem] bg-[#f55253] mb-1"></div>
            <div className="h-[0.1875rem] rounded-2xl ml-auto w-[1.4rem] mb-1 bg-[#f55253]"></div>
            <div className="h-[0.1875rem] rounded-2xl w-[1.875rem ] bg-[#f55253] mb-1"></div>
          </div>
        </div>

        <div className=" absolute -right-0  -top-0  sm:right-0">
          <Image
            src="/landing/heroFarmerSm.png"
            width={590}
            height={527}
            alt="heroFarmer"
            className="w-[79vw]  sm:w-[520px] md:block md:h-[567px] md:w-[590px] lg:hidden shadow-2xl "
          />
          <img
            src="./landing/heroFarmer.svg"
            alt="heroFarmer"
            className="hidden lg:block  lg:h-[53rem] xl:h-[50rem] 2xl:h-[64rem] "
          />
        </div>

        <div className=" pl-2 mt-[10vw] max-w-[12rem] sm:max-w-sm sm:mt-32 xl:mt-42 2xl:mt-48 md:pl-6 xl:pl-8 2xl:pl-12 lg:max-w-2xl xl:max-w-2xl md:max-w-sm mb-4 sm:mb-10 xl:mb-16">
          <h1 className=" text-lg  sm:text-3xl lg:text-6xl 2xl:text-6xl tracking-wide font-bold font-heading">
            Empowering <span className="text-[#008888]">Farmers</span> with
            Knowledge and Insights.
          </h1>
        </div>
        <div className=" text-[0.6rem] sm:text-base pl-2 max-w-[12.0rem] sm:max-w-xs lg:max-w-xl 2xl:max-w-2xl md:pl-6 xl:pl-8 2xl:pl-12">
          <p className=" hidden lg:block font-sans">
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
