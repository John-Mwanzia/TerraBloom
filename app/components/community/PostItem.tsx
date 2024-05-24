"use client";
import React, { useState } from "react";
import getTimeSincePostCreation, { formatDateString } from "@/handlers/timeStamp";
import { BiLike } from "react-icons/bi";
import Image from "next/image";
import { experimental_useOptimistic as useOptimistic } from "react";
import { getComments, updateLikes } from "@/utils/api";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import Commentinput from "./CommentInput";
import { AiOutlineEllipsis } from "react-icons/ai";

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
  comments: {
    id: String;
    text: String;
    Image?: string | null;
    video?: string | null;
    gif?: string | null;
    file?: string | null;
    authorId: String;
    postId: string;
  }[];
}

interface PostItemProps {
  post: Post;
  firstName: string;
  lastName: string;
}

const PostItem: React.FC<PostItemProps> = ({ post, firstName, lastName }) => {
  const [liked, setLiked] = useState(false);
  const [likedBy, setLikedBy] = useState();
  const [loading, setLoading] = useState(false);
  const [unhide, setUnhide] = useState(false);
  const [comments, setComments] = useState([]);

  const formatCreatedAt = (date: Date): string => {
    return date.toISOString(); // Convert the Date to a string (ISO format)
  };

  const handleLikeUPdate = async ({ postId }: { postId: string }) => {
    try {
      //api returns responce like this { data: { liked: false } }
      const { data } = await updateLikes({ postId });
      setLiked(data.liked);
      setLikedBy(data.likedBy);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleComments = async (postId: string) => {
    try {
      setLoading(true);
      setUnhide(true);
      const { data } = await getComments(postId);
      setComments(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      toast.error(error.message);
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
            className={`flex gap-2 ${liked ? "text-[#0E9AA9]" : ""}`}
          >
            <div>
              <BiLike
                color={liked ? "#0E9AA9" : "black"}
                className="w-6 h-6 "
              />
            </div>
            {liked ? "Liked" : "Like"}
          </button>
          <button
            className="flex gap-2"
            onClick={() => handleComments(post.id)}
          >
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
          <p>
            {post.comments.length}{" "}
            {post.comments.length == 1 ? "comment" : "comments"}
          </p>
        </div>
      </div>
      {unhide && (
        <div className="mt-8 flex flex-col items-center ">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader className="w-20 animate-spin " />
            </div>
          ) : (
            <div className="w-full  sm:px-8">
              {comments.length == 0 ? (
                <div>No comments yet😔</div>
              ) : (
                <div className="mt-6 w-full">
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex gap-8 mt-8 w-full items-start   "
                    >
                      <div className="bg-primary p-1 rounded-lg text-white font-semibold text-base inline-flex">
                        {comment.author.firstName.charAt(0) +
                          comment.author.lastName.charAt(0)}
                      </div>
                      <div className="flex flex-col gap-2 font-sans w-full">
                        <div className="flex gap-5 ">
                          <div className=" text-sm font-semibold">
                            {/* comment author */}
                            {comment.author.firstName +
                              "  " +
                              comment.author.lastName}
                          </div>
                          <div className="text-sm">{formatDateString(comment.createdAt)}</div>
                          <div className=" flex-1">
                            {/* ellipses for bookmarks */}
                            <button className=" float-right ">
                              <AiOutlineEllipsis />
                            </button>
                          </div>
                        </div>
                        <div className="text-black/80">
                          {/* comment contents */}
                          {comment.text && <p>{comment.text}</p>}
                          {comment.image && (
                            <img src={comment.image} alt="comment image" />
                          )}
                          {comment.video && (
                            <video src={comment.video} controls />
                          )}
                          {comment.gif && (
                            <img src={comment.gif} alt="comment gif" />
                          )}
                          {comment.file && (
                            <a href={comment.file}>Download File</a>
                          )}
                        </div>

                        <div className="flex text-sm w-full">
                          <div className="flex gap-4 font-semibold">
                            {/* likes  and replies*/}
                            <button className="text-black/70 hover:text-black dark:hover:text-white/70 ">
                              like
                            </button>
                            <button className="text-black/70 hover:text-black dark:hover:text-white/70 ">
                              reply
                            </button>
                          </div>
                          <div className="flex-1">
                            <p className="float-right"> 2 likes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-6 items-start mt-6  ">
                <div className="bg-primary p-1 rounded-lg text-white font-semibold text-base inline-flex">
                  {firstName.charAt(0) + lastName.charAt(0)}
                </div>
                <div className="flex-1">
                  <Commentinput postId={post.id} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostItem;
