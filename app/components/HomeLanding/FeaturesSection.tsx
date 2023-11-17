import Image from "next/image";
import React from "react";

export default function FeaturesSection() {
  return (
    <div className="max-w-[90%] 2xl:max-w-[80%] mb-24">
      <div className="text-center font-outfit  text-3xl sm:text-4xl   max-w-4xl">
        <h1>Powerful Features to Revolutionize Your Farming Experience</h1>
      </div>
      <div className="mt-16">
        <div className="flex justify-center gap-24">
          <div className="bg-[#89898a42] relative transform -skew-x-12 scale-y-100 text-center px-12 py-20 rounded-3xl">
            <Image src="./landing/weather.svg" alt="weather" width={115} height={115} className="absolute -left-16" />
            <h3 className="mb-12 ml-24 text-2xl font-outfit text-start  max-w-[15rem]">Real-Time Weather Updates</h3>
            <p className="max-w-xs">
              Stay informed with real-time weather forecasts and alerts specific
              to your region
            </p>
          </div>
          <div className="bg-[#89898a42] text-center px-12 py-20 rounded-3xl">
            <h3 className="mb-12 text-start ml-24 text-2xl font-outfit max-w-[15rem] ">Real-Time Weather Updates,</h3>
            <p className="max-w-xs font-outfit">
              Stay informed with real-time weather forecasts and alerts specific
              to your region
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
