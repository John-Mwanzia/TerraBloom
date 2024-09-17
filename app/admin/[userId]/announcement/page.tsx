import Button from "@/app/components/community/Button";
import ModalDisplay from "@/app/components/community/ModalDisplay";
import PostItem from "@/app/components/community/PostItem";
import Nav from "@/app/components/HomeLanding/Nav";
import prisma from "@/modules/db";
import { currentUser } from "@clerk/nextjs";
import React from "react";

export default async function page({ params }) {
  const { userId } = params;

  const announcements = await prisma.announcement.findMany({
    include:{
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
    <div className="container min-h-screen">
      <Nav userId={userId} />
      {announcements.length > 0 ? (
        <div className="flex h-full flex-col items-center justify-center pt-6">
          <div className="flex w-full justify-between bg-white pb-4 pt-3">
            <h1 className="text-3xl">Announcemets page</h1>
            <Button />
          </div>
          <div className="relative flex flex-col items-center gap-16 px-2 pb-24 pt-8 md:px-0">
            {announcements.map((announcement)=>(
              <PostItem key={announcement.id} post={announcement} image={imageUrl} referenceDate={referenceDate} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center pt-6">
          <div className="flex w-full justify-between bg-white pb-4 pt-3">
            <h1 className="text-3xl">Announcemets page</h1>
            <Button />
          </div>
          <div className="mt-20 rounded-lg bg-white px-6 py-4 shadow-lg">
            <h1> No announcements yet</h1>
          </div>
        </div>
      )}

      <ModalDisplay />
    </div>
  );
}
