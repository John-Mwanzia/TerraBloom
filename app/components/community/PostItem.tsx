'use client';
import React, { useState } from "react";
import getTimeSincePostCreation from "@/handlers/timeStamp";
import { BiLike } from "react-icons/bi";
import Image from "next/image";
import { experimental_useOptimistic as useOptimistic } from "react";
import { updateLikes } from "@/utils/api";


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
  }

  interface PostItemProps {
    post: Post; // Ensure the post prop is correctly typed
  }

  const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked);


  const handleLikeUPdate = async ({ postId }: { postId: string }) => {
    setOptimisticLiked(true);

    try {
      await updateLikes({ postId });
      setLiked(true);
    } catch (error) {
      setOptimisticLiked(false);
    }
  };
  return (
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
  );
}


export default PostItem;