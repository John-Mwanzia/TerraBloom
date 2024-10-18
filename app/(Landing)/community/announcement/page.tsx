import PostItem from "@/app/components/community/PostItem";
import prisma from "@/modules/db";
import { currentUser } from "@clerk/nextjs";
import React from "react";

export default async function page() {
  const announcements = await prisma.announcement.findMany({
    include: {
      author: true,
      bookmarks: true,
      comments: true,
      likes: {
        include: {
          user: true,
        },
      },
    }
  });

  const user = await currentUser();
  const { imageUrl } = user;

  // to avoid hydration issues due to use of time-dependent APIs such as the Date()
  const referenceDate = new Date(); // The server-side rendering time
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
          <div className="flex h-full flex-col items-center justify-center pt-6">

            <div className="relative flex flex-col items-center gap-16 px-2 pb-24 pt-8 md:px-0">
              {announcements.map((announcement) => (
                <PostItem key={announcement.id} post={announcement} image={imageUrl} referenceDate={referenceDate} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
