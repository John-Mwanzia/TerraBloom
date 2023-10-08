"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const CommunityLayout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <>
      <div className="flex overflow-y-hidden">
        {activeMenu && (
          <div className="bg-white h-screen w-[16.3rem]">
            <Image
              src="community/logo.svg"
              alt="logo"
              className="mx-auto"
              width={180}
              height={133}
            />
            <div className="pl-16 mt-8 ">
              <Link href="/">Home</Link>
              <div className="mt-8">
                <h1 className="font-bold">Welcome</h1>
                <div className="flex flex-col">
                  <Link className="py-4 pl-4" href="/">
                    Announcements
                  </Link>
                  <Link className="py-4 pl-4" href="/">
                    Introduction
                  </Link>
                  <Link className="py-4 pl-4" href="/">
                    FAQ
                  </Link>
                  <Link className="py-4 pl-4" href="/">
                    Chat
                  </Link>
                </div>
              </div>

              <div className="mt-8">
                <h1 className="font-bold">Community</h1>
                <div className="flex flex-col">
                  <Link className="py-4 pl-4" href="/">
                    Resources
                  </Link>
                  <Link className="py-4 pl-4" href="/">
                    Showcase
                  </Link>
                  <Link className="py-4 pl-4" href="/">
                    Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex-1">
          <div className="flex justify-between items-center pr-3 border-l">
            <button onClick={() => setActiveMenu(!activeMenu)}>
              <div className="pl-3">
                <div className="h-[0.1875rem] rounded-md w-[1.875rem] bg-green-950 mb-1"></div>
                <div className="h-[0.1875rem] rounded-md  w-[1.4rem] bg-green-950 mb-1"></div>
                <div className="h-[0.1875rem] rounded-md w-[1.875rem ] bg-green-950 mb-1"></div>
              </div>
            </button>
            <Image
              src="community/avatar.svg"
              alt="Avatar"
              width={64}
              height={79}
            />
          </div>
          <div className="bg-light-gray/40 rounded-tl-sm h-[100%]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityLayout;
