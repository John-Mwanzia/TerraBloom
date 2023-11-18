import Image from "next/image";
import React from "react";

export default function FeaturesSection() {
  return (
    <div className=" max-w-[95%] xl:max-w-[90%] 2xl:max-w-[80%] mb-24 ">
      <div className="text-center font-outfit  text-3xl sm:text-4xl mx-auto max-w-full xl:max-w-4xl">
        <h1>Powerful Features to Revolutionize Your Farming Experience</h1>
      </div>
      <div className="mt-28 px-10 sm:px-20  lg:px-32">
        <div className="flex justify-center flex-col lg:flex-row gap-32 xl:gap-40 2xl:gap-72 mb-20">
          <div className="bg-[#89898a42] relative transform -skew-x-12 scale-y-100 text-center px-4 sm:px-12 py-12 sm:py-20 rounded-3xl shadow-xl">
            <Image
              src="./landing/weather.svg"
              alt="weather"
              width={115}
              height={115}
              className="absolute w-[6rem] sm:w-[7.1rem] -left-12 sm:-left-16 skew-x-12"
            />
            <h3 className="mb-12 ml-10  sm:ml-32 lg:ml-12 text-xl sm:text-2xl text-start font-outfit text- skew-x-12  max-w-[15rem]">
              Real-Time Weather Updates
            </h3>
            <p className="max-w-xs skew-x-12 sm:ml-16 lg:ml-0">
              Learn about cultivation techniques, pest management strategies,
              and soil requirements for various crops
            </p>
          </div>
          <div className="bg-white/70  relative transform -skew-x-12 scale-y-100 text-center px-4 sm:px-12 py-12 sm:py-20 rounded-3xl shadow-xl">
            <Image
              src="./landing/crop-info.svg"
              alt="crop-info"
              width={115}
              height={115}
              className="absolute w-[6rem] sm:w-[7.1rem] -left-12 sm:-left-16 skew-x-12"
            />
            <h3 className="mb-12 ml-10  sm:ml-32 lg:ml-12 text-xl sm:text-2xl text-start font-outfit text- skew-x-12  max-w-[15rem]">
              Comprehensive Crop Information
            </h3>
            <p className="max-w-xs skew-x-12 sm:ml-16 lg:ml-0">
              Stay informed with real-time weather forecasts and alerts specific
              to your region
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-32 xl:gap-40 2xl:gap-72">
          <div className="bg-white/70  relative transform -skew-x-12 scale-y-100 text-center px-4 sm:px-12 py-12 sm:py-20 rounded-3xl shadow-xl">
            <Image
              src="./landing/marketPrices.svg"
              alt="marketPrices"
              width={115}
              height={115}
              className="absolute w-[6rem] sm:w-[7.1rem] -left-12 sm:-left-16 skew-x-12"
            />
            <h3 className="mb-12 ml-10  sm:ml-32 lg:ml-12 text-xl sm:text-2xl text-start font-outfit text- skew-x-12  max-w-[15rem]">
              Up-to-Date Market Prices
            </h3>
            <p className="max-w-xs skew-x-12 sm:ml-16 lg:ml-0">
              Access the latest market prices to make informed decisions about
              your crops
            </p>
          </div>
          <div className="bg-[#b4e4ff63] relative transform -skew-x-12 scale-y-100 text-center px-4 sm:px-12 py-12 sm:py-20 rounded-3xl shadow-xl">
            <Image
              src="./landing/community.svg"
              alt="community"
              width={115}
              height={115}
              className="absolute w-[6rem] sm:w-[7.1rem] -left-12 sm:-left-16 skew-x-12"
            />
            <h3 className="mb-12 ml-10  sm:ml-32 lg:ml-12 text-xl sm:text-2xl text-start font-outfit text- skew-x-12  max-w-[15rem]">
              Engaging Farmer Community
            </h3>
            <p className="max-w-xs skew-x-12 sm:ml-16 lg:ml-0">
              Connect, share experiences, and collaborate with fellow farmers in
              a supportive community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
