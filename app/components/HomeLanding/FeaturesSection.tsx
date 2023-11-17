import Image from "next/image";
import React from "react";

export default function FeaturesSection() {
  return (
    <div className="max-w-[90%] 2xl:max-w-[80%] mb-24 px-32">
      <div className="text-center font-outfit  text-3xl sm:text-4xl mx-auto  max-w-4xl">
        <h1>Powerful Features to Revolutionize Your Farming Experience</h1>
      </div>
      <div className="mt-16">
        <div className="flex justify-center gap-72 mb-20">
          <div className="bg-[#89898a42] relative transform -skew-x-12 scale-y-100 text-center px-12 py-20 rounded-3xl shadow-xl">
            <Image
              src="./landing/weather.svg"
              alt="weather"
              width={115}
              height={115}
              className="absolute -left-16"
            />
            <h3 className="mb-12 ml-24 text-2xl font-outfit text-start  max-w-[15rem]">
              Real-Time Weather Updates
            </h3>
            <p className="max-w-xs">
              Learn about cultivation techniques, pest management strategies,
              and soil requirements for various crops
            </p>
          </div>
          <div className="bg-white/70  relative transform -skew-x-12 scale-y-100 text-center px-12 py-20 rounded-3xl shadow-xl">
            <Image
              src="./landing/weather.svg"
              alt="weather"
              width={115}
              height={115}
              className="absolute -left-16"
            />
            <h3 className="mb-12 ml-24 text-2xl font-outfit text-start  max-w-[15rem]">
              Comprehensive Crop Information
            </h3>
            <p className="max-w-xs">
              Stay informed with real-time weather forecasts and alerts specific
              to your region
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-72 ">
          <div className="bg-white/70  relative transform -skew-x-12 scale-y-100 text-center px-12 py-20 rounded-3xl shadow-xl">
            <Image
              src="./landing/weather.svg"
              alt="weather"
              width={115}
              height={115}
              className="absolute -left-16"
            />
            <h3 className="mb-12 ml-24 text-2xl font-outfit text-start  max-w-[15rem]">
              Up-to-Date Market Prices
            </h3>
            <p className="max-w-xs">
              Access the latest market prices to make informed decisions about
              your crops
            </p>
          </div>
          <div className="bg-[#b4e4ff63] relative transform -skew-x-12 scale-y-100 text-center px-12 py-20 rounded-3xl shadow-xl">
            <Image
              src="./landing/weather.svg"
              alt="weather"
              width={115}
              height={115}
              className="absolute -left-16"
            />
            <h3 className="mb-12 ml-24 text-2xl font-outfit text-start  max-w-[15rem]">
              Engaging Farmer Community
            </h3>
            <p className="max-w-xs">
              Connect, share experiences, and collaborate with fellow farmers in
              a supportive community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
