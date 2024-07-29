import Button from "@/app/components/community/Button";
import ModalDisplay from "@/app/components/community/ModalDisplay";
import prisma from "@/modules/db";
import { currentUser } from "@clerk/nextjs";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineEllipsis } from "react-icons/ai";
import getTimeSincePostCreation from "@/handlers/timeStamp";

interface Introduction {
  id: string;
  title: string;
  content: string;
  author: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
  };
  Image?: string | null;
  video?: string | null;
  gif?: string | null;
  file?: string | null;
  createdAt: Date;
}

export default async function page() {
  let introductions = [];
  let error = null;

  const user = await currentUser();
  const { imageUrl } = user;

  try {
    introductions = await prisma.introduction.findMany({
      include: {
        author: true,
      },
    });
  } catch (err) {
    console.error("Failed to fetch introductions:", err);
    error = "Failed to fetch introductions";
  }
  const referenceDate = new Date(); // The server-side rendering time

  const handleintroductionBookmark = async (introduction) => {};

  return (
    <>
      <div className="h-[calc(100vh-5rem)] dark:text-white">
        <div className="flex justify-between border-l border-t bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
          <h1 className="text-3xl dark:text-white">Introductions</h1>
          <Button />
        </div>
        <div className="flex flex-col items-center gap-6 px-2 pb-24 pt-8 md:px-0">
          {error ? (
            <div className="rounded p-8 shadow-lg dark:bg-[#2B2E33]/50">
              <h2 className="text-red-500">Error: {error}</h2>
            </div>
          ) : introductions.length > 0 ? (
            introductions.map((introduction: Introduction) => (
              <div key={introduction.id} className="bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 w-[60%] rounded-lg shadow-xl">
                {introduction.author.avatarUrl && (
                  <div className="mb-4 flex items-center gap-2 sm:gap-6">
                    {" "}
                    <img
                      src={introduction.author.avatarUrl}
                      alt="avatar"
                      className="h-[3rem] w-[3rem] rounded-full"
                    />{" "}
                    {introduction.author.firstName}{" "}
                    {introduction.author.lastName}{" "}
                    <p className="text-sm">
                      introduced{" "}
                      {getTimeSincePostCreation(
                        introduction.createdAt,
                        referenceDate,
                      )}
                    </p>
                    <div className="flex-1">
                      {/* ellipses for bookmarks */}
                      <div className="float-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <AiOutlineEllipsis size={20} />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="mr-48 pr-12">
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="">
                              <button
                                // onClick={() =>
                                //   handleintroductionBookmark(introduction)
                                // }
                                className=""
                              >
                                Bookmark introduction
                              </button>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                )}
                <h1 className="mb-4 text-2xl font-bold">{introduction.title}</h1>
                {introduction.content && (
                  <div className="mb-6">
                    <p>{introduction.content}</p>
                  </div>
                )}
                {introduction.Image && (
                  <img src={introduction.Image} alt="introduction Image" />
                )}
                {introduction.video && (
                  <video src={introduction.video} controls />
                )}
                {introduction.gif && <img src={introduction.gif} alt="GIF" />}
                {introduction.file && (
                  <a href={introduction.file}>Download File</a>
                )}
              </div>
            ))
          ) : (
            <div className="mt-12 flex w-auto justify-center">
              <div className="rounded bg-white px-6 shadow-lg dark:bg-[#2B2E33]/50">
                <h2>No introductions yet 😔</h2>
              </div>
            </div>
          )}
        </div>
      </div>
      <ModalDisplay />
    </>
  );
}
