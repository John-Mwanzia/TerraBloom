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
    <div className="bg-white w-[80%] h-[63.3rem] mt-8 mb-12 rounded-[1.375rem] relative">
      <div className="flex justify-between items-center">
        <div className="pl-12 pt-4">
          <Image
            src="./bloomCommAssets/Logo.svg"
            width={180}
            height={133}
            alt="logo"
          />
        </div>
        <div className="pr-8 flex gap-20 items-center z-50">
          {links.map((link, index) => (
            <div key={link.name}>
              <Link
                href={link.link}
                className=" font-outfit text-black/60 font-semibold "
              >
                {link.name}
              </Link>
            </div>
          ))}

          <Link
            href="/sign-up"
            className="bg-[#A47344] rounded-3xl text-white px-8 py-2 font-outfit"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className=" absolute top-0 right-0">
        <Image
          src="./landing/heroFarmer.svg"
          width={1000}
          height={1000}
          alt="heroFarmer"
          className="max-h-[64rem]"
        />
      </div>

      <div className="mt-48 pl-12 max-w-xl mb-16">
        <h1 className="text-5xl  text-black/80 font-bold font-outfit ">
          Empowering Farmers with Knowledge and Insights.
        </h1>
      </div>
      <div className="max-w-2xl pl-12">
        <p className=" font-opensans">
        Our platform provides real-time  weather updates, market prices, expert advice, and a
          supportive farming community—all in one place.Empowering farmers to make informed decisions and cultivate growth.
        </p>
      </div>
    </div>
  );
}
