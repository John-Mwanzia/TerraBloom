import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <div className="bg-light-pink max-w-[90%] 2xl:max-w-[80%] mt-12 rounded-md flex flex-col md:flex-row justify-center px-4 sm:px-24 md:px-4 lg:px-24 gap-10 xl:gap-32 2xl:gap-48 mb-24  pb-24 lg:pb-32 pt-12 lg:pr-12">
      <div>
        <Image
          src="./landing/about.svg"
          alt="about pic"
          width={502}
          height={430}
        />
      </div>
      <div>
        <h1 className="font-outfit  text-3xl sm:text-4xl lg:text-5xl  max-w-xl">
          Find Out a Little More About Us
        </h1>
        <div className="max-w-lg mt-10 lg:mt-20">
          <p className="font-outfit">
            Welcome to Terrabloom the leading agricultural web application that
            empowers farmers with real-time information, Agricultural insights, and
            a thriving community. We are dedicated to revolutionizing the way
            farmers access vital agricultural resources, market data, and expert
            services. Join us in transforming your farming experience and
            unlocking the full potential of your land.
          </p>
        </div>
      </div>
    </div>
  );
}
