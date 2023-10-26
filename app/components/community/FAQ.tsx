import Image from "next/image";
import React from "react";

export default function FAQ() {
  return (
    <div className="max-w-[80%]">
      <h1 className="text-4xl mt-4 font-old-standard text-white mb-4">
        Curious Corners
      </h1>
      <div className="flex justify-center items-center flex-col md:flex-row gap-6 md:gap-6 2xl:gap-72">
        <div>
          <h5 className=" text-[#138853] font-outfit  mt-4">
            What is TerraBloom?
          </h5>
          <p className="text-white font-outfit max-w-xl md:mt-4 lg:mt-8">
            TerraBloom is a community-driven platform that aims to connect
            farmers, agricultural experts, and enthusiasts from all over the
            world.
          </p>

          <h5 className=" text-[#138853] font-outfit mt-4 ">
            How do I join the community?
          </h5>
          <p className="text-white font-outfit max-w-xl md:mt-4 lg:mt-8">
            You can join the community by registering on the platform. You can
            also join the community by signing up with your Google account.
          </p>

          <h5 className=" text-[#138853] font-outfit mt-4 ">
            {" "}
            Is my data safe on TerraBloom?
          </h5>
          <p className="text-white font-outfit max-w-xl md:mt-4 lg:mt-8">
            Yes, your data is safe on TerraBloom. We do not share your data with
            any third-party.
          </p>
        </div>
        <div>
          <Image
            src="/terraCommAssets/curious.svg"
            alt="curious"
            width={443}
            height={459}
          />
        </div>
      </div>
    </div>
  );
}
