import Image from "next/image";
import React from "react";

export default function StatsSection() {
  return (
    <div className="pb-8">
      <div className="flex justify-center lg:gap-12 2xl:gap-96">
        <div className=" bg-[#1E1E1E] rounded-lg text-center py-8 px-16">
          <h1 className="text-[#FF0] text-6xl font-bold font-old-standard mb-12">
            30+
          </h1>
          <p className="text-[#87A818] text-xl">
            agriculture-based topics for engaging discussions
          </p>
        </div>
        <div className="bg-[#1E1E1E] rounded-lg text-center py-8 px-16">
          <Image
            src="/terraCommAssets/upward-arrow.svg"
            alt="arrow"
            width={214}
            height={189}
          />
        </div>
      </div>
      <div className="flex justify-center mt-12 lg:gap-12 2xl:gap-96">
        <div className="bg-[#1E1E1E] rounded-lg text-center py-8 px-16">
          <Image
            src="/terraCommAssets/gear.svg"
            alt="arrow"
            width={214}
            height={189}
          />
        </div>

        <div className=" bg-[#1E1E1E] rounded-lg text-center py-8 px-16">
          <h1 className="text-[#FF0] text-6xl font-bold font-old-standard mb-12">
            2500+
          </h1>
          <p className="text-[#87A818] text-xl">
            farmers growing together in our thriving community
          </p>
        </div>
      </div>
    </div>
  );
}
