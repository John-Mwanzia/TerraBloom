// "use client";

import PostModal from "@/app/components/community/PostModal";
import { UploadContext } from "@/app/context/store";
import getTimeSincePostCreation from "@/handlers/timeStamp";
// import { getPosts, updateLikes } from "@/utils/api";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { experimental_useOptimistic as useOptimistic } from "react";
import { BiLike } from "react-icons/bi";
import ModalDisplay from "@/app/components/community/ModalDisplay";
import Button from "@/app/components/community/Button";
import prisma from "@/modules/db";

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
  };
  Image?: string;
  video?: string;
  gif?: string;
  file?: string;
  createdAt: string;
  liked: boolean;
}

const getPosts = async()=>{
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


}

export default async function Page() {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [liked, setLiked] = useState(false);
  // const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       setLoading(true);
  //       const response = await getPosts();
  //       setPosts(response.data);
        
  //       setLoading(false);
  //     } catch (error) {
  //       toast.error("Error" + error);
  //     }
  //   }

  //   fetchPosts();
  // }, []);

  // const handleLikeUPdate = async ({ postId }: { postId: string }) => {
  //   setOptimisticLiked(true);

  //   try {
  //     await updateLikes({ postId });
  //     setLiked(true);
  //   } catch (error) {
  //     setOptimisticLiked(false);
  //   }
  // };

  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="bg-white flex justify-between px-4 pb-4 pt-3 border-t border-l">
          <h1 className="text-3xl">Home</h1>
          <Button />
        </div>
        <div className="flex-1 overflow-y-auto pb-8">
          <div className="flex flex-col items-center pt-8 gap-16 px-2 md:px-0 relative pb-24">
            {/* {loading ? (
              <div className="absolute top-72 ">
                <Spinner size="lg" />
              </div>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white py-8 px-4 shadow-xl md:w-[45rem] flex flex-col"
                >
                  {post.author.avatarUrl && (
                    <div className="flex gap-6 items-center mb-4">
                      {" "}
                      <img
                        src={post.author.avatarUrl}
                        alt="avatar"
                        className="w-[3rem] h-[3rem] rounded-full"
                      />{" "}
                      {post.author.firstName} {post.author.lastName}{" "}
                      <p className="text-sm">
                        Posted {getTimeSincePostCreation(post.createdAt)}
                      </p>
                    </div>
                  )}
                  <h1 className="text-2xl font-bold mb-6">{post.title}</h1>
                  {post.content && (
                    <div className="mb-6">
                      <p>{post.content}</p>
                    </div>
                  )}
                  {post.Image && <img src={post.Image} alt="Post Image" />}
                  {post.video && <video src={post.video} controls />}
                  {post.gif && <img src={post.gif} alt="GIF" />}
                  {post.file && <a href={post.file}>Download File</a>}

                  <div className="mt-4 border-t flex justify-between items-center pt-4">
                    <div className="flex gap-4 items-center">
                      <button
                        onClick={() => handleLikeUPdate({ postId: post.id })}
                        className={`flex gap-2 ${
                          liked ? "text-[#0E9AA9]" : ""
                        }`}
                      >
                        <div>
                          <BiLike
                            className={`w-6 h-6 text-black ${
                              liked ? "text-[#0E9AA9]" : ""
                            }`}
                          />
                        </div>
                        {optimisticLiked ? "Liked" : "Like"}
                      </button>
                      <button className="flex gap-2">
                        <Image
                          src="/bloomCommAssets/comment.svg"
                          alt="comment"
                          width={24}
                          height={24}
                        />
                        comment
                      </button>
                    </div>
                    <div>
                      <p> 0 comments</p>
                    </div>
                  </div>
                </div>
              ))
            )} */}
          </div>
        </div>
        <ModalDisplay />
      </div>
    </>
  );
}
