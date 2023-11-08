import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <div className="bg-white w-[85%] mt-8 rounded-[1.375rem]">
      <div className="flex justify-between items-center">
        <div className="pl-4">
          <Image
            src="./bloomCommAssets/Logo.svg"
            width={180}
            height={133}
            alt="logo"
          />
        </div>
        <div className="pr-8 flex gap-12 items-center">
          {links.map((link, index) => (
            <div key={link.name}>
              <Link
                href={link.link}
                className=" font-outfit text-lg font-bold"
              >
                {link.name}
              </Link>
            </div>
          ))}

          <Link
            href="/sign-up"
            className="bg-[#A47344] rounded-3xl text-white px-4 py-2 font-outfit"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
