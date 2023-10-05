import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex">
        <div className="bg-white h-screen ">
          <Image src="community/logo.svg" alt="logo" width={180} height={133} />
        </div>
        <div>
          <div>
            <Image
              src="community/avatar.svg"
              alt="logo"
              width={64}
              height={79}
            />
          </div>
          <div ></div>
        </div>
      </div>
    </>
  );
}
