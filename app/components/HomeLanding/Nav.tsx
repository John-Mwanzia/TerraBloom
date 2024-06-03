"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Nav() {
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
    <div
      className={`relative mb-6 border-b border-gray-300 pt-4 sm:mb-0 sm:pt-0 ${activeMenu ? "fixed z-[99999]" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="z-[99999] pt-2 sm:pt-4 xl:pt-2 2xl:pt-4">
          <Image
            src="./landing/logoSmall.svg"
            width={82}
            height={72}
            alt="logo"
            className={`w-20 sm:hidden ${activeMenu ? "fixed" : ""}`}
          />
          <Image
            src="./bloomCommAssets/Logo.svg"
            width={160}
            height={113}
            alt="logo"
            className="hidden sm:block"
          />
        </div>
        <div
          className={`fixed right-0 top-0 z-50 h-screen w-screen flex-col items-center justify-center gap-24 text-black/60 md:static md:flex md:h-auto md:w-auto md:flex-row md:items-center md:justify-end md:gap-6 md:bg-transparent xl:gap-12 2xl:gap-20 ${
            activeMenu
              ? "flex h-screen overscroll-contain bg-black bg-opacity-90 text-white backdrop-blur"
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

          <Link
            href="/sign-up"
            className={`rounded-3xl bg-[#A47344] px-8 py-2 font-outfit text-sm text-white md:px-6 xl:px-8 xl:text-base ${
              activeMenu ? "block text-white" : "hidden"
            } transition-opacity duration-300 ease-in-out md:block`}
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div
        onClick={toggleMenu}
        className={`z-50 cursor-pointer md:hidden ${
          activeMenu ? "fixed right-7 top-12" : "absolute right-4 top-12"
        }`}
      >
        <div className="mb-1 h-[0.1875rem] w-[1.875rem] rounded-2xl bg-[#32CD32]"></div>
        <div className="mb-1 ml-auto h-[0.1875rem] w-[1.4rem] rounded-2xl bg-[#32CD32]"></div>
        <div className="w-[1.875rem ] mb-1 h-[0.1875rem] rounded-2xl bg-[#32CD32]"></div>
      </div>
    </div>
  );
}
