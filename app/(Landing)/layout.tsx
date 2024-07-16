"use client";
import React, { ReactNode, use, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import { ImCancelCircle } from "react-icons/im";
import { UploadContext } from "../context/store";
import {
  Bell,
  CalendarDays,
  Globe,
  Hand,
  MessageCircle,
  Moon,
  Search,
  Sparkle,
  Sparkles,
  Star,
  Sun,
} from "lucide-react";
import BookmarkDropdown from "../components/community/BookmarkDropdown";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { BiSupport } from "react-icons/bi";

const CommunityLayout = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const { showModal, theme, setTheme } = useContext(UploadContext);
  useEffect(() => {
    const screenSize = window.innerWidth;
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, []);

  const pathname = usePathname();

  /* handle toggle dark or light theme */
  console.log("theme", theme);

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <div className={`${theme} dark:bg-black`}>
        {activeMenu && (
          <div
            className={`fixed h-screen w-[16.3rem] bg-white border-r  dark:border-gray-700 dark:bg-black ${
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
            <div className="mt-8 pl-10 pr-2 font-old-standard dark:text-white">
              <Link
                href="/community/Home"
                className={`flex items-center gap-1  px-2 py-1 rounded-lg ${pathname === "/community/Home" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
              >
                <Home size={16} />
                Home
              </Link>
              <div className="mt-4">
                <h1 className="font-bold">Welcome</h1>
                <div className="flex flex-col gap-1">
                  <Link
                    href="/community/announcement"
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${pathname === "/community/announcement" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
                  >
                    <Star size={16} />
                    Announcements
                  </Link>
                  <Link
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${pathname === "/community/introduction" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
                    href="/community/introduction"
                  >
                    <Hand size={16} className="rotate-45 transform" />
                    Introductions
                  </Link>
                  <Link
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${pathname === "/community/FAQ" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
                    href="/community/FAQ"
                  >
                    <Globe size={16} />
                    FAQ
                  </Link>
                  <Link
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${pathname === "/community/Chat" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
                    href="/community/Chat"
                  >
                    <MessageCircle size={16} />
                    Chat
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="font-bold">Community</h1>
                <div className="flex flex-col gap-1">
                  <Link
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${pathname === "/community/Community" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
                    href="/community/Resources"
                  >
                    <Sparkle size={16} />
                    Resources
                  </Link>
                  <Link
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${pathname === "/community/Showcase" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
                    href="/community/Showcase"
                  >
                    <Sparkles size={16} />
                    Showcase
                  </Link>
                  <Link
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${pathname === "/community/Events" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
                    href="/community/Events"
                  >
                    <CalendarDays size={16} />
                    Events
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="font-bold">Support</h1>
                <div className="flex flex-col gap-1">
                  <Link
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${pathname === "/community/Support" ? " bg-[#D5EBFF] text-[#009AFF] dark:bg-[#1B4264]" : "hover:bg-gray-300/30 dark:hover:bg-blue-500/30"}`}
                    href="/community/Support"
                  >
                    <BiSupport size={16} />
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="dark:bg-black">
          <div className={activeMenu ? "static xl:ml-[16.3rem]" : "w-screen"}>
            <div className="flex items-center justify-between border-l pr-3">
              <button onClick={() => setActiveMenu(!activeMenu)}>
                <div className="pl-3">
                  <div className="mb-1 h-[0.1875rem] w-[1.875rem] rounded-2xl bg-[#0E9AA9]"></div>
                  <div className="mb-1 h-[0.1875rem] w-[1.4rem] rounded-2xl bg-[#0E9AA9]"></div>
                  <div className="w-[1.875rem ] mb-1 h-[0.1875rem] rounded-2xl bg-[#0E9AA9]"></div>
                </div>
              </button>
              <div>
                {/* search */}
                <div className="flex items-center">
                  <div className="rounded-l-lg bg-light-gray/40 py-[10px] pl-4">
                    <Search size={20} className="text-black/50" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="rounded-r-lg border-none bg-light-gray/40 px-4 py-2 text-black/70 outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 py-6">
                {/* toggle dark or light theme and show two different icons depending if light or dark  */}
                <div>
                  <Tooltip
                    showArrow
                    placement="bottom"
                    content="toggle theme"
                    classNames={{
                      base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400",
                      arrow: "bg-neutral-400 dark:bg-white",
                    }}
                  >
                    <Button variant="flat" onClick={handleThemeToggle}>
                      {theme === "light" ? (
                        <Moon className="text-black/70 dark:text-white" />
                      ) : (
                        <Sun className="text-black/70 dark:text-white/70" />
                      )}
                    </Button>
                  </Tooltip>
                </div>
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
                      <Bell className="text-black/70 dark:text-white/70"  />
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
                      <MessageCircle className="text-black/70 dark:text-white/70" />
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
                    <BookmarkDropdown  />
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
                ? "fixed top-20 h-[calc(100vh-5rem)] w-full rounded-tl-sm bg-light-gray/40 dark:bg-black xl:ml-[16.3rem] xl:w-[calc(100vw-16.3rem)]"
                : "fixed top-20 ml-0 h-[calc(100vh-5rem)] w-screen rounded-tl-sm bg-light-gray/40 dark:bg-black "
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
