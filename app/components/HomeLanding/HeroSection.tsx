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
    <div className="bg-white w-[90%] xl:w-[90%] 2xl:w-[80%] h-[63.3rem] xl:h-[55rem] 2xl:h-[63.3rem] mt-8 mb-12 rounded-[1.375rem] relative">
      <div className="flex justify-between items-center">
        <div className="pl-6 xl:pl-8 2xl:pl-12 pt-4 xl:pt-2 2xl:pt-4">
          <Image
            src="./bloomCommAssets/Logo.svg"
            width={180}
            height={133}
            alt="logo"
            className="h-[4.8rem] w-[5.4rem] xl:h-[11rem] xl:w-[11.6rem] "
          />
        </div>
        <div className="pr-8 md:pr-4 xl:pr-8  flex md:gap-6 xl:gap-12 2xl:gap-20 items-center z-50">
          {links.map((link, index) => (
            <div key={link.name}>
              <Link
                href={link.link}
                className=" font-outfit text-black/60 font-semibold md:text-sm xl:text-base  "
              >
                {link.name}
              </Link>
            </div>
          ))}

          <Link
            href="/sign-up"
            className="bg-[#A47344] rounded-3xl text-white px-8 md:px-6 xl:px-8 py-2 font-outfit text-sm xl:text-base"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className=" absolute top-0 right-0">
      <Image  src="/landing/heroFarmerSm.png"
          width={590}
          height={527}
          alt="heroFarmer"
          className=" md:block xl:hidden 2xl:hidden  "
        />
        <img
          src="./landing/heroFarmer.svg"
        //   width={1000}
        //   height={900}
          alt="heroFarmer"
          className="hidden xl:block 2xl:block md:h-[45rem] xl:h-[55rem] 2xl:h-[64rem]  "
        />
       
      </div>

      <div className=" sm:mt-32 xl:mt-42 2xl:mt-48 md:pl-6 xl:pl-8 2xl:pl-12 xl:max-w-xl md:max-w-sm mb-10 xl:mb-16">
        <h1 className=" sm:text-3xl xl:text-4xl 2xl:text-5xl  text-black/80 font-bold font-outfit ">
          Empowering Farmers with Knowledge and Insights.
        </h1>
      </div>
      <div className="max-w-xs xl:max-w-xl 2xl:max-w-2xl md:pl-6 xl:pl-8 2xl:pl-12">
        <p className=" hidden lg:block font-opensans">
        Our platform provides real-time  weather updates, market prices, expert advice, and a
          supportive farming community—all in one place.Empowering farmers to make informed decisions and cultivate growth.
        </p>
        <p className="lg:hidden">
        Access real-time weather updates, market prices, expert advice, and a supportive farming community—all in one place.
        </p>
      </div>
    </div>
  );
}
