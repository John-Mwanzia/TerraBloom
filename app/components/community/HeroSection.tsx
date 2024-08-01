import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function HeroSection() {
  const { userId } = await auth();

  let href = userId ? "/community/Home" : "/newUser?communityAccess=true";

  return (
    <>
      <div className="relative flex container items-center justify-center gap-4">
        <div>
          <div className="relative flex items-center">
            <Image
              src="/terraCommAssets/heroFarmer.svg"
              alt="heroFarmer"
              width={247}
              height={242}
              className="z-10 h-52 w-52 md:h-60 md:w-60"
            />
            <Image
              src="/terraCommAssets/ellipse-16.svg"
              alt="ellipse"
              width={244}
              height={244}
              className="absolute left-24 top-0 h-52 w-52 md:h-60 md:w-60"
            />
          </div>

          <div className="mt-16">
            <h1 className="z-50 font-heading text-5xl font-semibold text-[#A47344]">
              Unite, Cultivate, and Prosper
            </h1>
          </div>

          <div className="mt-16 sm:max-w-lg flex justify-center ">
            <p className="font-opensans  sm:text-lg text-white/70">
              Join the Terra Community to learn, share, and grow with other
              farmers. Discover new farming techniques, exchange ideas, and stay
              updated on the latest innovations in agriculture. Let's cultivate
              success together!
            </p>
          </div>

          <div className="mt-16">
            <Link href={href}>
              <button className="rounded-lg bg-[#99BF1A] px-6 py-2 font-old-standard">
                Join Us Today
              </button>
            </Link>
          </div>
        </div>
        <div className="pl-4">
          <Image
            src="/terraCommAssets/smallStar.svg"
            alt="hero star"
            width={400}
            height={400}
            className="absolute -right-32 top-64 -z-[100px] h-[10rem] md:-right-24 md:top-4 lg:-right-16 lg:top-2 lg:h-[20rem]"
          />

          <Image
            src="/terraCommAssets/bigStar.svg"
            alt="hero star"
            width={729}
            height={711}
            className="absolute -right-8 top-64 -z-[100px] h-[20rem] md:-right-44 md:top-48 lg:static lg:-top-16 lg:h-[45rem]"
          />
        </div>
      </div>
    </>
  );
}
