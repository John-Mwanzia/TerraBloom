"use client";
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
  Image?: string | null;
  video?: string | null;
  gif?: string | null;
  file?: string | null;
  createdAt: Date;
  likes: {
    id: string;
    userId: string;
    postId: string;
  }[];
  
}

interface PostItemProps {
  post: Post; // Ensure the post prop is correctly typed
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked);
  const [likedBy, setLikedBy] = useState();

  const formatCreatedAt = (date: Date): string => {
    return date.toISOString(); // Convert the Date to a string (ISO format)
  };

  const handleLikeUPdate = async ({ postId }: { postId: string }) => {
    setOptimisticLiked((liked) => !liked);

    try {
      //api returns responce like this { data: { liked: false } }
      const { data } = await updateLikes({ postId });
      setLiked(data.liked);
      setLikedBy(data.likedBy);
    } catch (error) {
      setOptimisticLiked((prev) => !prev);
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
            Posted {getTimeSincePostCreation(formatCreatedAt(post.createdAt))}
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
            className={`flex gap-2 ${optimisticLiked ? "text-[#0E9AA9]" : ""}`}
          >
            <div>
              <BiLike
                color={optimisticLiked ? "#0E9AA9" : "black"}
                className="w-6 h-6 "
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
};

export default PostItem;
