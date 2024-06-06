"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bookmark } from "lucide-react";
import { formatDateString } from "@/handlers/timeStamp";
import { AiOutlineEllipsis } from "react-icons/ai";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function BookmarkDropdown() {
  const [openPosts, setopenPosts] = useState(true);
  const [opencomments, setopencomments] = useState(false);
  const [openMessages, setopenMessages] = useState(false);
  const customStyles =
    "cursor-pointer hover:bg-muted relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
  const posts = JSON.parse(localStorage.getItem("postBookmark"));


  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Bookmark className="text-black/70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-16">
          <DropdownMenuLabel> Bookmarks</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <div className="mb-3 flex gap-4 border-b border-slate-200">
            <p className={cn("active:bg-red-500", customStyles)}>posts</p>
            <p className={customStyles}>Comments</p>
            <p className={customStyles}>messages</p>
          </div>
          {openPosts && (
            <Link href="/post">
              <div className="px-4 py-2 hover:bg-muted ">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex rounded-lg bg-primary p-1 text-base font-semibold text-white">
                      {posts.author.firstName.charAt(0) +
                        posts.author.lastName.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {/* posts title */}
                        {posts.title && <p>{posts.title}</p>}
                      </div>
                      <div className="text-black/80">
                        {/* posts contents */}
                        {posts.content && <p>{posts.content}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* ellipses for bookmarks */}
                    <div className="float-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <button className="">
                            <AiOutlineEllipsis />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-48 pr-12">
                          {/* <DropdownMenuLabel>
                                    My Account
                                  </DropdownMenuLabel> */}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="">
                            <button className="">Remove Bookmark</button>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full flex-col gap-2 px-12 font-sans text-xs">
                  <div className="flex gap-5">
                    <div className="">
                      {/* posts author */}
                      {posts.author.firstName + "  " + posts.author.lastName}
                    </div>
                    <div className="">{formatDateString(posts.createdAt)}</div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
