"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Tooltip } from "@nextui-org/react";
const CommunityLayout = ({ children }: { children: ReactNode }) => {
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
              <Link href="/" className="flex gap-1">
                <Image
                  src="community/home.svg"
                  alt="home icon"
                  width={20}
                  height={20}
                />
                Home
              </Link>
              <div className="mt-8">
                <h1 className="font-bold">Welcome</h1>
                <div className="flex flex-col">
                  <Link className="py-4 pl-4" href="/">
                    ⭐ Announcements
                  </Link>
                  <Link className="py-4 pl-4" href="/">
                    👋 Introductions
                  </Link>
                  <Link className="py-4 pl-4" href="/">
                    🔮 FAQ
                  </Link>
                  <Link className="py-4 pl-4 flex gap-1" href="/">
                    <Image
                      src="community/chat.svg"
                      alt="logochat"
                      width={22}
                      height={18}
                    />
                    Chat
                  </Link>
                </div>
              </div>

              <div className="mt-8">
                <h1 className="font-bold">Community</h1>
                <div className="flex flex-col">
                  <Link className="py-4 pl-4" href="/">
                    🌟 Resources
                  </Link>
                  <Link className="py-4 pl-4" href="/">
                    ✨ Showcase
                  </Link>
                  <Link className="py-4 pl-4 flex gap-1" href="/">
                    <Image
                      src="community/events.svg"
                      alt="logochat"
                      width={20}
                      height={20}
                    />
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
                <div className="h-[0.1875rem] rounded-md w-[1.875rem] bg-[#0E9AA9] mb-1"></div>
                <div className="h-[0.1875rem] rounded-md  w-[1.4rem] mb-1 bg-[#0E9AA9]"></div>
                <div className="h-[0.1875rem] rounded-md w-[1.875rem ] bg-[#0E9AA9] mb-1"></div>
              </div>
            </button>
            <div className="flex items-center gap-4">
              <div>
                <Tooltip
                  showArrow
                  placement="bottom"
                  content="notifications"
                  classNames={{
                    base:
                      "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400",
                    arrow: "bg-neutral-400 dark:bg-white",
                  }}
                >
                  <Button variant="flat">
                    <Image
                      src="community/notification.svg"
                      alt="logochat"
                      width={22}
                      height={18}
                    />
                  </Button>
                </Tooltip>
              </div>
              <div>
                <Tooltip
                  showArrow
                  placement="bottom"
                  content="messages"
                  classNames={{
                    base:
                      "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400",
                    arrow: "bg-neutral-400 dark:bg-white",
                  }}
                >
                  <Button variant="flat">
                    <Image
                      src="community/chat.svg"
                      alt="logochat"
                      width={22}
                      height={18}
                    />
                  </Button>
                </Tooltip>
              </div>
              <Image
                src="community/avatar.svg"
                alt="Avatar"
                width={64}
                height={79}
              />
            </div>
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
