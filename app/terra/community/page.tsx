import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <main className=" bg-black">
        <section className="flex justify-center  pt-4 ">
          <div className="flex justify-center items-center gap-20 max-w-[80%]">
            <div>
              <div className="flex items-center relative">
                <Image
                  src="/terraCommAssets/heroFarmer.svg"
                  alt="heroFarmer"
                  width={247}
                  height={242}
                  className="z-10"
                />
                <Image
                  src="/terraCommAssets/ellipse-16.svg"
                  alt="ellipse"
                  width={244}
                  height={244}
                  className="absolute top-0 left-24"
                />
              </div>

              <div className="mt-16">
                <h1 className="text-[#A47344] font-semibold text-5xl ">
                  Unite, Cultivate, and Prosper
                </h1>
              </div>

              <div className="mt-16">
                <p className="text-white">
                  Join the Terra Community to learn, share, and grow with other
                  farmers.
                </p>
              </div>

              <div className="mt-16">
                <button className="bg-[#99BF1A]  rounded-md px-4 py-2">
                  Join Us Today
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/terraCommAssets/smallStar.svg"
                alt="hero star"
                width={400}
                height={400}
                className="absolute -top-16 -left-16"
              />

              <Image
                src="/terraCommAssets/bigStar.svg"
                alt="hero star"
                width={729}
                height={711}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
