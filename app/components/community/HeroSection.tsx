import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function HeroSection() {
  const { userId } = await auth();

  let href = userId ? "/community/Home" : "/newUser";

  return (
    <>
      <div className="flex justify-center items-center gap-4 max-w-[80%]  relative">
        <div>
          <div className="flex items-center relative">
            <Image
              src="/terraCommAssets/heroFarmer.svg"
              alt="heroFarmer"
              width={247}
              height={242}
              className="z-10  h-52 w-52  md:h-60 md:w-60"
            />
            <Image
              src="/terraCommAssets/ellipse-16.svg"
              alt="ellipse"
              width={244}
              height={244}
              className="absolute top-0 left-24  h-52 w-52  md:h-60 md:w-60"
            />
          </div>

          <div className="mt-16">
            <h1 className="text-[#A47344] font-semibold font-inter text-5xl z-50">
              Unite, Cultivate, and Prosper
            </h1>
          </div>

          <div className="mt-16 max-w-lg">
            <p className="text-white/70 font-outfit text-lg ">
              Join the Terra Community to learn, share, and grow with other
              farmers. Discover new farming techniques, exchange ideas, and stay
              updated on the latest innovations in agriculture. Let's cultivate
              success together!
            </p>
          </div>

          <div className="mt-16">
            <Link href={href}>
              <button className="bg-[#99BF1A]  rounded-lg px-6 py-2 font-old-standard">
                Join Us Today
              </button>
            </Link>
          </div>
        </div>
        <div className=" pl-4">
          <Image
            src="/terraCommAssets/smallStar.svg"
            alt="hero star"
            width={400}
            height={400}
            className="absolute -z-[100px] h-[10rem] lg:h-[20rem] top-64 -right-32 md:top-4 md:-right-24 lg:top-2 lg:-right-16 "
          />

          <Image
            src="/terraCommAssets/bigStar.svg"
            alt="hero star"
            width={729}
            height={711}
            className="absolute -z-[100px] h-[20rem] top-64 -right-8 md:top-48 md:-right-44 lg:static  lg:-top-16 lg:h-[45rem]"
          />
        </div>
      </div>
    </>
  );
}
