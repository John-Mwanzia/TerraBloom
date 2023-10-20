import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="max-w-[80%]">
      <h1 className="text-4xl mt-4 font-old-standard text-white mb-28">
        Explore Our Features
      </h1>
      <div className="flex justify-center items-center gap-12">
        <div>
          <Image
            src="/terraCommAssets/discussion.svg"
            alt="discussion image"
            width={371}
            height={248}
            className="mx-auto"
          />
          <div>
            <h1 className="text-[#99BF1A]  mb-12 text-4xl mt-4 font-old-standard text-center"> 
              Discussion Forums
            </h1>
          </div>
          <div>
            <p className=" font-outfit text-white/70 max-w-md text-center">
              Engage in lively discussions on various agricultural topics, learn
              from your peers, and share your own experiences.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/terraCommAssets/knowledge.svg"
            alt="knowledge image"
            width={371}
            height={248}
            className="mx-auto"

          />

          <div>
            <h1 className="text-[#99BF1A]  mb-12 text-4xl mt-4 font-old-standard text-center">
            Knowledge base
            </h1>
          </div>

          <div>
            <p className=" font-outfit text-white/70 max-w-md text-center">
              Discover innovative farming techniques, and stay up-to-date with
              the latest agricultural trends.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/terraCommAssets/networking.svg"
            alt="networking image"
            width={371}
            height={248}
            className="mx-auto"

          />
          <div>
            <h1 className="text-[#99BF1A] mb-12 text-4xl mt-4 font-old-standard text-center">
              Networking
            </h1>
          </div>

          <div>
            <p className=" font-outfit text-white/70 max-w-md text-center">
              Connect with like-minded farmers, form partnerships, and expand
              your professional network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
