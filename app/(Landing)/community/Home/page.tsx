import React from "react";
import ModalDisplay from "@/app/components/community/ModalDisplay";
import Button from "@/app/components/community/Button";
import prisma from "@/modules/db";
import PostItem from "@/app/components/community/PostItem";
import { currentUser } from "@clerk/nextjs";

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      likes: {
        include: {
          user: true,
        },
      },
      author: true,
    },
  });
  return posts;
};

export default async function Page() {
  let posts = [];
  let error = null;
  // to avoid hydration issues due to use of time-dependent APIs such as the Date()
  const referenceDate = new Date(); // The server-side rendering time

  const user = await currentUser();
  const { imageUrl } = user;

  try {
    posts = await getPosts();
  } catch (err) {
    console.log(" posts = await getPosts()", err);
    error = "Error occured trying to fetch posts";
  }

  return (
    <>
      <div className="flex h-screen w-full flex-col">
        <div className="flex justify-between border-l border-t bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
          <h1 className="text-3xl">Home</h1>
          <Button />
        </div>
        {error ? (
          <div className="mt-12 flex justify-center">
            <h2 className="text-red-500">{error}</h2>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pb-8 dark:bg-black">
            <div className="relative flex flex-col items-center gap-16 px-2 pb-24 pt-8 md:px-0">
              {posts.map((post) => (
                <PostItem key={post.id} post={post} image={imageUrl} referenceDate={referenceDate} />
              ))}
            </div>
          </div>
        )}
        <ModalDisplay />
      </div>
    </>
  );
}
