import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <div className="bg-light-pink 2xl:max-w-[80%] mt-12 rounded-md flex justify-center px-24 gap-48 mb-24 pb-36 pt-12 pr-12">
      <div>
        <Image
          src="./landing/about.svg"
          alt="about pic"
          width={502}
          height={430}
        />
      </div>
      <div>
        <h1 className="font-outfit text-5xl  max-w-xl">
          Find Out a Little More About Us
        </h1>
        <div className="max-w-lg mt-20">
          <p className="font-outfit">
            Welcome to Terrabloom the leading agricultural web application that
            empowers farmers with real-time information, AI-driven insights, and
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
