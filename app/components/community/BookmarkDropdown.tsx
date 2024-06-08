"use client";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Bookmark } from "lucide-react";
import { AiOutlineEllipsis } from "react-icons/ai";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useBookmarks from "@/app/hooks/useBookmarks";
import { formatDateString } from "@/handlers/timeStamp";

export default function BookmarkDropdown() {
  const [activeTab, setActiveTab] = useState("posts");
  const [fetchBookmarks, setFetchBookmarks] = useState(false);

  const { data, error, isLoading } = useBookmarks({
    enabled: fetchBookmarks, // Fetch only when fetchBookmarks is true
  });

  useEffect(() => {
    if (fetchBookmarks) {
      console.log("Fetching bookmarks data:", data);
    }
  }, [fetchBookmarks, data]);

  const handleDropdownOpenChange = (isOpen) => {
    if (isOpen) {
      setFetchBookmarks(true);
    }
  };

  const customStyles =
    "cursor-pointer hover:bg-muted relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredData = data
    ? data.data.filter((bookmark) =>
        activeTab === "posts" ? bookmark.type === "POST" :
        activeTab === "comments" ? bookmark.type === "COMMENT" :
        false
      )
    : [];

  return (
    <div>
      <DropdownMenu onOpenChange={handleDropdownOpenChange}>
        <DropdownMenuTrigger>
          <Bookmark className="text-black/70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-16">
          <DropdownMenuLabel>Bookmarks</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="mb-3 flex gap-4 border-b border-slate-200">
            <p className={cn(activeTab === "posts" ? "font-bold" : "", customStyles)} onClick={() => handleTabChange("posts")}>
              Posts
            </p>
            <p className={cn(activeTab === "comments" ? "font-bold" : "", customStyles)} onClick={() => handleTabChange("comments")}>
              Comments
            </p>
          </div>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error loading bookmarks</p>}
          {filteredData.length === 0 && !isLoading && !error && <p>No bookmarks found</p>}
          {filteredData.map((bookmark) => (
            <Link key={bookmark.id} href={bookmark.type === "POST" ? `/post/${bookmark.postId}` : `/post/${bookmark.comment.postId}`}>
              <div className="px-4 py-2 hover:bg-muted">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex rounded-lg bg-primary p-1 text-base font-semibold text-white">
                      {bookmark.type === "POST" 
                        ? bookmark.post.author.firstName.charAt(0) + bookmark.post.author.lastName.charAt(0)
                        : bookmark.comment.author.firstName.charAt(0) + bookmark.comment.author.lastName.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">
                        <p>{bookmark.type === "POST" ? bookmark.post.title : bookmark.comment.post.title}</p>
                      </div>
                      <div className="text-black/80">
                        <p>{bookmark.type === "POST" ? bookmark.post.content : bookmark.comment.text}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="float-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <button>
                            <AiOutlineEllipsis />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-48 pr-12">
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <button>Remove Bookmark</button>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full flex-col gap-2 px-12 font-sans text-xs">
                  <div className="flex gap-5">
                    <div>
                      {bookmark.type === "POST"
                        ? bookmark.post.author.firstName + " " + bookmark.post.author.lastName
                        : bookmark.comment.author.firstName + " " + bookmark.comment.author.lastName}
                    </div>
                    <div>{formatDateString(bookmark.type === "POST" ? bookmark.post.createdAt : bookmark.comment.createdAt)}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
