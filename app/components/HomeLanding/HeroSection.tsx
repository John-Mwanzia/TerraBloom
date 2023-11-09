"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function HeroSection() {
  const links = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Market prices",
      link: "/marketprices",
    },
    {
      name: "Crop Details",
      link: "/cropdetails",
    },
    {
      name: "Farmer Community",
      link: "/terra/community",
    },
  ];

  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className="bg-white w-[90%] xl:w-[90%] 2xl:w-[80%] sm:h-[31rem] md:h-[35.4rem] xl:h-[55rem] 2xl:h-[63.95rem] mt-8 mb-12 rounded-[1.375rem] relative">
      <div className="flex justify-between items-center">
        <div className="pl-6 xl:pl-8 2xl:pl-12 pt-4 xl:pt-2 2xl:pt-4 z-[99999]">
          <Image
            src="./bloomCommAssets/Logo.svg"
            width={180}
            height={133}
            alt="logo"
            className="h-[4.8rem] w-[5.4rem] xl:h-[11rem] xl:w-[11.6rem] "
          />
        </div>
        <div
          className={` md:pr-4 xl:pr-8  text-black/60  h-screen w-screen fixed  md:flex justify-center gap-24  flex-col md:flex-row md:gap-6 xl:gap-12 2xl:gap-20 items-center z-50  top-0 right-0 md:static md:h-auto md:w-auto md:bg-transparent  md:justify-end md:items-center ${
            activeMenu
              ? "backdrop-blur bg-opacity-90 bg-black flex  text-white"
              : ""
          } transition-all duration-300 ease-in-out` }
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

          <Link
            href="/sign-up"
            className={` bg-[#A47344] rounded-3xl text-white px-8 md:px-6 xl:px-8 py-2 font-outfit text-sm xl:text-base ${
              activeMenu ? "block text-white" : "hidden"
            } md:block transition-opacity duration-300 ease-in-out`}
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div
        onClick={toggleMenu}
        className="absolute top-4 right-4 md:hidden z-50 cursor-pointer"
      >
        <div className="h-[0.1875rem] rounded-2xl w-[1.875rem] bg-[#f55253] mb-1"></div>
        <div className="h-[0.1875rem] rounded-2xl ml-auto w-[1.4rem] mb-1 bg-[#f55253]"></div>
        <div className="h-[0.1875rem] rounded-2xl w-[1.875rem ] bg-[#f55253] mb-1"></div>
      </div>
      <div className=" absolute top-0 right-0">
        <Image
          src="/landing/heroFarmerSm.png"
          width={590}
          height={527}
          alt="heroFarmer"
          className="  w-[520px]  md:block md:h-[567px] md:w-[590px] xl:hidden 2xl:hidden  "
        />
        <img
          src="./landing/heroFarmer.svg"
          //   width={1000}
          //   height={900}
          alt="heroFarmer"
          className="hidden xl:block 2xl:block md:h-[45rem] xl:h-[55rem] 2xl:h-[64rem]  "
        />
      </div>

      <div className=" pl-4 max-w-sm sm:mt-32 xl:mt-42 2xl:mt-48 md:pl-6 xl:pl-8 2xl:pl-12 xl:max-w-xl md:max-w-sm mb-10 xl:mb-16">
        <h1 className=" sm:text-3xl xl:text-4xl 2xl:text-5xl  text-black/80 font-bold font-outfit ">
          Empowering Farmers with Knowledge and Insights.
        </h1>
      </div>
      <div className=" pl-4 max-w-xs xl:max-w-xl 2xl:max-w-2xl md:pl-6 xl:pl-8 2xl:pl-12">
        <p className=" hidden lg:block font-opensans">
          Our platform provides real-time weather updates, market prices, expert
          advice, and a supportive farming community—all in one place.Empowering
          farmers to make informed decisions and cultivate growth.
        </p>
        <p className="lg:hidden">
          Access real-time weather updates, market prices, expert advice, and a
          supportive farming community—all in one place.
        </p>
      </div>
    </div>
  );
}
