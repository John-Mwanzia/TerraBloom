import Image from "next/image";
import React from "react";

export default function StatsSection() {
  return (
    <div className="pb-8">
      <div className="flex justify-center  flex-col gap-4 md:flex-row md:gap-4 lg:gap-12 2xl:gap-96">
        <div className=" bg-[#1E1E1E] rounded-lg w-[22rem] md:w-[28rem] lg:w-[38rem]  text-center py-2 px-2 md:py-2 md:px-4 lg:px-16 lg:py-8">
          <h1 className="text-[#FF0] text-6xl  font-bold font-old-standard mb-12">
            30+
          </h1>
          <p className="text-[#87A818]  lg:text-xl">
            agriculture-based topics for engaging discussions
          </p>
        </div>
        <div className="bg-[#1E1E1E] rounded-lg text-center  py-8 px-16 md:py-2 md:px-4 lg:px-16 lg:py-8">
          <Image
            src="/terraCommAssets/upward-arrow.svg"
            alt="arrow"
            width={214}
            height={189}
          />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-4 md:flex-row  mt-12 md:gap-4 lg:gap-12 2xl:gap-96">
        <div className="bg-[#1E1E1E] rounded-lg text-center py-8 px-16 md:py-2 md:px-4 lg:px-16 lg:py-8">
          <Image
            src="/terraCommAssets/gear.svg"
            alt="arrow"
            width={214}
            height={189}
          />
        </div>

        <div className=" bg-[#1E1E1E] w-[22rem]  md:w-[28rem] lg:w-[38rem] rounded-lg text-center py-8 px-16 md:py-2 md:px-4 lg:px-16 lg:py-8">
          <h1 className="text-[#FF0] text-6xl font-bold font-old-standard mb-12">
            2500+
          </h1>
          <p className="text-[#87A818] lg:text-xl">
            farmers growing together in our thriving community
          </p>
        </div>
      </div>
    </div>
  );
}
