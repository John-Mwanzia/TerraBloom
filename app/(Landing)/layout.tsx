"use client";
import React, { ReactNode, use, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import { ImCancelCircle } from "react-icons/im";
import { UploadContext } from "../context/store";

const CommunityLayout = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const {showModal, setShowModal } = useContext(UploadContext);


  useEffect(() => {
    const screenSize = window.innerWidth;
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, []);

  return (
    <>
      <div className="">
        {activeMenu && (
          <div
            className={`bg-white h-screen fixed w-[16.3rem] ${showModal ?'z-0' : 'z-50'}`}
          >
            <div className="relative">
              <Image
                src="/bloomCommAssets/logo.svg"
                alt="logo"
                className="mx-auto"
                width={180}
                height={133}
              />
              <div className="absolute top-4 right-2 text-2xl   xl:hidden">
                <button onClick={() => setActiveMenu(false)}>
                  <ImCancelCircle />
                </button>
              </div>
            </div>
            <div className="pl-16 mt-8 ">
              <Link href="/community/Home" className="flex gap-1">
                <Image
                  src="/bloomCommAssets/home.svg"
                  alt="home icon"
                  width={20}
                  height={20}
                />
                Home
              </Link>
              <div className="mt-8">
                <h1 className="font-bold">Welcome</h1>
                <div className="flex flex-col">
                  <Link className="py-4 pl-4" href="/community/announcement">
                    ⭐ Announcements
                  </Link>
                  <Link className="py-4 pl-4" href="/community/introduction">
                    👋 Introductions
                  </Link>
                  <Link className="py-4 pl-4" href="/community/FAQ">
                    🔮 FAQ
                  </Link>
                  <Link className="py-4 pl-4 flex gap-1" href="/community/Chat">
                    <Image
                      src="/bloomCommAssets/chat.svg"
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
                  <Link className="py-4 pl-4" href="/community/Resources">
                    🌟 Resources
                  </Link>
                  <Link className="py-4 pl-4" href="/community/Showcase">
                    ✨ Showcase
                  </Link>
                  <Link
                    className="py-4 pl-4 flex gap-1"
                    href="/community/Events"
                  >
                    <Image
                      src="/bloomCommAssets/events.svg"
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
        <div className="">
          <div
            className={
              activeMenu ? "  xl:ml-[16.3rem] static  " : " w-screen"
            }
          >
            <div className="flex justify-between items-center pr-3 border-l">
              <button onClick={() => setActiveMenu(!activeMenu)}>
                <div className="pl-3">
                  <div className="h-[0.1875rem] rounded-md w-[1.875rem] bg-[#0E9AA9] mb-1"></div>
                  <div className="h-[0.1875rem] rounded-md  w-[1.4rem] mb-1 bg-[#0E9AA9]"></div>
                  <div className="h-[0.1875rem] rounded-md w-[1.875rem ] bg-[#0E9AA9] mb-1"></div>
                </div>
              </button>
              <div className="flex items-center gap-4 py-6 ">
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
                        src="/bloomCommAssets/notification.svg"
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
                        src="/bloomCommAssets/chat.svg"
                        alt="logochat"
                        width={22}
                        height={18}
                      />
                    </Button>
                  </Tooltip>
                </div>
                <div>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              activeMenu
                ? "bg-light-gray/40 fixed top-20 xl:ml-[16.3rem] w-full rounded-tl-sm xl:w-[calc(100vw-16.3rem)]  h-[calc(100vh-5rem)] "
                : "bg-light-gray/40 fixed top-20 rounded-tl-sm w-screen ml-0 h-[calc(100vh-5rem)]"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityLayout;
