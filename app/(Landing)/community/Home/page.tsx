// "use client";

import PostModal from "@/app/components/community/PostModal";
import { UploadContext } from "@/app/context/store";
// import { getPosts, updateLikes } from "@/utils/api";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { experimental_useOptimistic as useOptimistic } from "react";
import { BiLike } from "react-icons/bi";
import ModalDisplay from "@/app/components/community/ModalDisplay";
import Button from "@/app/components/community/Button";
import prisma from "@/modules/db";
import PostItem from "@/app/components/community/PostItem";

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      likes: true,
      author: true,
    },
  });
  return posts;
};

export default async function Page() {
  const posts = await getPosts();
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="bg-white flex justify-between px-4 pb-4 pt-3 border-t border-l">
          <h1 className="text-3xl">Home</h1>
          <Button />
        </div>
        <div className="flex-1 overflow-y-auto pb-8">
          <div className="flex flex-col items-center pt-8 gap-16 px-2 md:px-0 relative pb-24">
            {posts.map((post) => (
              // <PostItem key={post.id} post={post} />
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
        <ModalDisplay />
      </div>
    </>
  );
}
