import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <div className="flex justify-center gap-64 max-w-[80%]">
      <div>
        <Image
          src="/terraCommAssets/join.svg"
          alt="welcome pic"
          width={554}
          height={398}
        />
      </div>
      <div>
        <div className="flex items-center mb-8">
          <h1 className="text-white font-old-standard text-5xl">Join Now</h1>
          <Image
            src="/terraCommAssets/join-star.svg"
            alt="welcome star"
            width={155}
            height={63}
          />
        </div>
        <p className=" font-outfit text-white/70 max-w-xl">
          Don't miss out on the opportunity to be part of a rapidly growing
          community of passionate farmers. Empower your farming journey with
          valuable insights and connections.
        </p>
        <div className="mt-16">
          <button className="bg-[#99BF1A]  rounded-lg px-6 py-2 font-old-standard">
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
}
