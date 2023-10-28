import Image from "next/image";
import React from "react";

export default function Conversation() {
  return (
    <>
      <div className="flex justify-center flex-col md:flex-row items-start gap-16  lg:gap-96 max-w-[80%] ">
        <div className="flex justify-center">
          <Image
            src="/terraCommAssets/convo.svg"
            alt="convo"
            width={86}
            height={84}
            className=""
          />

          <Image
            src="/terraCommAssets/preview.svg"
            alt="preview"
            width={106}
            height={100}
          />
        </div>
        <div className="2xl:pl-44">
          <div>
            <h1 className="text-white font-old-standard text-5xl md:text-4xl lg:text-5xl mb-16 md:mb-7 lg:mb-16">
              Join The Conversations
            </h1>
          </div>
          <div>
            <p className="text-white/70 max-w-lg">
              Dive into engaging discussions, where farmers exchange ideas,
              troubleshoot challenges, and share their success stories.
              Collaborate in forums designed for both newcomers and seasoned
              agripreneurs. Unleash your farming potential among a supportive
              and dynamic community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
