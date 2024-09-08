import Button from "@/app/components/community/Button";
import ModalDisplay from "@/app/components/community/ModalDisplay";
import PostModal from "@/app/components/community/PostModal";
import prisma from "@/modules/db";
import React, { useState } from "react";

export default async function page() {
  const announcements = await prisma.announcement.findMany({
    orderBy: {
      createdAt: "desc",
    },

    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
    },
  });
  return (
    <div className="dark:text-white">
      <div className="flex items-center justify-between border-l border-t bg-white px-4 py-4 pb-4 pt-3 dark:bg-[#282B31] dark:text-white">
        <h1 className="text-2xl dark:text-white sm:text-3xl">Announcements</h1>
      </div>
      <div className="">
        {announcements.length === 0 ? (
          <div className="flex items-center justify-center">
            <div className="  px-20 py-8 mt-24 bg-white rounded-lg shadow-lg">
            <h1 className="">No announcements yet 😔</h1>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 p-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white p-4 dark:bg-[#282B31] dark:text-white"
              >
                <h1 className="text-xl font-bold">{announcement.title}</h1>
                <p className="text-sm">{announcement.content}</p>
                <p className="mt-2 text-xs">
                  {new Date(announcement.createdAt).toDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
