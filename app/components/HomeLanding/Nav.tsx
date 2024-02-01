"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

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
    className={`bg-white w-[95%] sm:w-[90%] xl:w-[90%] 2xl:w-[85%]  sm:mb-12 rounded-[1.375rem] relative ${
      activeMenu ? "fixed" : ""
    }`}
    >
         <div className="flex justify-between items-center">
        <div className="pl-4 sm:pl-6 xl:pl-8 2xl:pl-12 pt-2 sm:pt-4 xl:pt-2 2xl:pt-4 z-[99999]">
          <Image
            src="./landing/logoSmall.svg"
            width={82}
            height={72}
            alt="logo"
            className={`sm:hidden w-14 ${activeMenu ? "fixed" : ""}`}
          />
          <Image
            src="./bloomCommAssets/Logo.svg"
            width={180}
            height={133}
            alt="logo"
            className=" hidden sm:block sm:h-[4.8rem] sm:w-[5.4rem] xl:h-[11rem] xl:w-[11.6rem] "
          />
        </div>
        <div
          className={` md:pr-4 xl:pr-8  text-black/60  h-screen w-screen fixed  md:flex justify-center gap-24  flex-col md:flex-row md:gap-6 xl:gap-12 2xl:gap-20 items-center z-50  top-0 right-0 md:static md:h-auto md:w-auto md:bg-transparent  md:justify-end md:items-center ${
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
        className={` md:hidden z-50 cursor-pointer ${
          activeMenu ? "fixed top-12 right-7" : "top-4 right-4 absolute "
        }`}
      >
        <div className="h-[0.1875rem] rounded-2xl w-[1.875rem] bg-[#f55253] mb-1"></div>
        <div className="h-[0.1875rem] rounded-2xl ml-auto w-[1.4rem] mb-1 bg-[#f55253]"></div>
        <div className="h-[0.1875rem] rounded-2xl w-[1.875rem ] bg-[#f55253] mb-1"></div>
      </div>
    </div>
  )
}
