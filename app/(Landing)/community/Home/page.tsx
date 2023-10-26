"use client";

import PostModal from "@/app/components/community/PostModal";
import getTimeSincePostCreation from "@/handlers/timeStamp";
import { getPosts } from "@/utils/api";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await getPosts();
        setPosts(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        toast.error("Error" + error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="bg-white flex justify-between px-4 pb-4 pt-3 border-t border-l">
          <h1 className="text-3xl">Home</h1>
          <button
            className="bg-[#0E9AA9] rounded px-3 py-2"
            onClick={() => setShowModal(true)}
          >
            Create Post
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pb-8">
          <div className="flex flex-col items-center pt-8 gap-16 relative pb-24">
            {loading ? (
              <div>
                <Spinner size="lg" />
              </div>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white py-8 px-4 shadow-xl w-[45rem] flex flex-col"
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
                     <div className="flex gap-4">
                     <button className="flex gap-2">
                      <Image
                        src="/bloomCommAssets/like.svg"
                        alt="like"
                        width={24}
                        height={24}
                      />
                      like
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
            )}
          </div>
        </div>
        {showModal && <PostModal setShowModal={setShowModal} />}
      </div>
    </>
  );
}
