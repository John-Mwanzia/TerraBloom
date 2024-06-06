"use client";
import React, { ReactNode, use, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import { ImCancelCircle } from "react-icons/im";
import { UploadContext } from "../context/store";
import { Bell, MessageCircle } from "lucide-react";
import BookmarkDropdown from "../components/community/BookmarkDropdown";

const CommunityLayout = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const { showModal } = useContext(UploadContext);

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
            className={`fixed h-screen w-[16.3rem] bg-white ${
              showModal ? "z-0" : ""
            }`}
          >
            <div className="relative">
              <Link href="/community/Home">
                <Image
                  src="/bloomCommAssets/Logo.svg"
                  alt="logochat"
                  width={180}
                  height={133}
                  className="ml-4 mt-4"
                />
              </Link>
              <div className="absolute right-2 top-4 text-2xl xl:hidden">
                <button onClick={() => setActiveMenu(false)}>
                  <ImCancelCircle />
                </button>
              </div>
            </div>
            <div className="mt-8 pl-16">
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
                  <Link className="flex gap-1 py-4 pl-4" href="/community/Chat">
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
                    className="flex gap-1 py-4 pl-4"
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
          <div className={activeMenu ? "static xl:ml-[16.3rem]" : "w-screen"}>
            <div className="flex items-center justify-between border-l pr-3">
              <button onClick={() => setActiveMenu(!activeMenu)}>
                <div className="pl-3">
                  <div className="mb-1 h-[0.1875rem] w-[1.875rem] rounded-2xl bg-[#0E9AA9]"></div>
                  <div className="mb-1 h-[0.1875rem] w-[1.4rem] rounded-2xl bg-[#0E9AA9]"></div>
                  <div className="w-[1.875rem ] mb-1 h-[0.1875rem] rounded-2xl bg-[#0E9AA9]"></div>
                </div>
              </button>
              <div className="flex items-center gap-4 py-6">
                <div>
                  <Tooltip
                    showArrow
                    placement="bottom"
                    content="notifications"
                    classNames={{
                      base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400",
                      arrow: "bg-neutral-400 dark:bg-white",
                    }}
                  >
                    <Button variant="flat">
                      <Bell className="text-black/70" />
                    </Button>
                  </Tooltip>
                </div>
                <div>
                  <Tooltip
                    showArrow
                    placement="bottom"
                    content="messages"
                    classNames={{
                      base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400",
                      arrow: "bg-neutral-400 dark:bg-white",
                    }}
                  >
                    <Button variant="flat">
                      <MessageCircle className="text-black/70" />
                    </Button>
                  </Tooltip>
                </div>
                <div>
                  <Tooltip
                    showArrow
                    placement="bottom"
                    content="bookmarks"
                    classNames={{
                      base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400",
                      arrow: "bg-neutral-400 dark:bg-white",
                    }}
                  >
                    {/* <BookmarkDropdown /> */}
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
                ? "fixed top-20 h-[calc(100vh-5rem)] w-full rounded-tl-sm bg-light-gray/40 xl:ml-[16.3rem] xl:w-[calc(100vw-16.3rem)]"
                : "fixed top-20 ml-0 h-[calc(100vh-5rem)] w-screen rounded-tl-sm bg-light-gray/40"
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
