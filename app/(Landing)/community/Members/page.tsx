import prisma from "@/modules/db";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { formatDateString } from "@/handlers/timeStamp";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  clerkId: string;
  isAdmin: boolean;
  isCommunityMember: boolean;
  createdAt: string;
  updatedAt: string;
  posts: {
    id: string;
    title: string;
    content: string;
    Image?: string | null;
    video?: string | null;
    gif?: string | null;
    file?: string | null;
    createdAt: string;
  }[];
  Likes: {
    id: string;
    userId: string;
    post: {
      id: string;
      title: string;
      content: string;
      Image?: string | null;
      video?: string | null;
      gif?: string | null;
      file?: string | null;
      createdAt: string;
    };
    createdAt: string;
  }[];
  comments: {
    id: string;
    text: string;
    Image?: string | null;
    video?: string | null;
    gif?: string | null;
    file?: string | null;
    authorId: string;
    postId: string;
  }[];
}

export default async function page() {
  let users = [];
  let error = null;

  try {
    users = await prisma.user.findMany({
      where: {
        isCommunityMember: true,
      },
      include: {
        posts: true,
        Likes: {
          include: {
            post: true,
          },
        },
        comments: true,
      },
    });
  } catch (err) {
    console.log("Error occured trying to fetch users", err);
    error = "Error occured trying to fetch users";
  }

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex items-center gap-1 border-l border-t bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
        <h1 className="text-3xl">Members </h1>
        <span className="text-primary">({users.length})</span>
      </div>
      {error ? (
        <div className="mt-12 flex justify-center">
          <h2 className="text-red-500">{error}</h2>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pb-8 dark:text-white">
          <div className="relative flex w-full items-center justify-center">
            <div className="relative grid min-w-full grid-cols-2 gap-10 px-2 pb-24 pt-8 sm:flex sm:justify-center">
              {users.map((user: User) => (
                <div
                  key={user.id}
                  className="flex flex-col items-center gap-4 rounded-lg  shadow-lg "
                >
                  <Sheet>
                    <SheetTrigger>
                      <Image
                        src={user.avatarUrl}
                        alt="Avatar image "
                        width={180}
                        height={90}
                        className="rounded-t-lg"
                      />
                      <div className="flex items-center justify-center gap-1 pb-4 pt-2">
                        <p className="text-sm">{user.firstName}</p>
                        <p className="text-sm">{user.lastName}</p>
                      </div>
                    </SheetTrigger>
                    <SheetContent className="!bg-black text-white">
                      <SheetHeader>
                        <SheetTitle>
                          <div className="mb-12 flex gap-6 text-white">
                            <Image
                              src={user.avatarUrl}
                              alt="user avatar"
                              width={60}
                              height={60}
                              className="rounded-lg"
                            />
                            <h1>Profile</h1>
                          </div>
                        </SheetTitle>
                        <SheetDescription>
                          <Tabs defaultValue="posts" className="w-[400px]">
                            <TabsList>
                              <TabsTrigger value="posts">posts</TabsTrigger>
                              <TabsTrigger value="comments">
                                Comments
                              </TabsTrigger>
                              <TabsTrigger value="about">About</TabsTrigger>
                            </TabsList>
                            <TabsContent value="posts">
                              {user.posts.length > 0 ? (
                                user.posts.map((post) => (
                                  <Link
                                    key={post.id}
                                    href={`/post/${post.id}`}
                                  >
                                    <div className="px-4 py-2 hover:bg-muted">
                                      <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-4">
                                          <div className="">
                                            {
                                              <Image
                                                src={user.avatarUrl}
                                                width={30}
                                                height={30}
                                                alt="user avatar"
                                                className="rounded-full"
                                              />
                                            }
                                          </div>
                                          <div>
                                            <div className="font-semibold">
                                              <p>{post.title}</p>
                                            </div>
                                            <div className="">
                                              <p>{post.content}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mt-2 flex w-full flex-col gap-2 px-12 font-sans text-xs">
                                        <div className="flex gap-5">
                                          <div>
                                            {user.firstName +
                                              " " +
                                              user.lastName}
                                          </div>
                                          <div>
                                            {formatDateString(post.createdAt)}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))
                              ) : (
                                <h2 className="p-6">No posts yet</h2>
                              )}
                            </TabsContent>
                            <TabsContent value="comments">
                              {user.comments.length > 0 ? (
                                user.comments.map((comment) => (
                                  <div
                                    key={comment.id}
                                    className="dark:text-white"
                                  >
                                    {comment.text && <p>{comment.text}</p>}
                                    {comment.Image && (
                                      <Image
                                        width={180}
                                        height={90}
                                        src={comment.Image}
                                        alt="comment image"
                                      />
                                    )}
                                    {comment.video && (
                                      <video src={comment.video} controls />
                                    )}
                                    {comment.gif && (
                                      <Image
                                        width={180}
                                        height={90}
                                        src={comment.gif}
                                        alt="comment gif"
                                      />
                                    )}
                                    {comment.file && (
                                      <a href={comment.file}>Download File</a>
                                    )}
                                  </div>
                                ))
                              ) : (
                                <h2 className="p-6">No comments yet</h2>
                              )}
                            </TabsContent>
                            <TabsContent value="about">
                              joined as member on{" "}
                              {formatDateString(user.createdAt)}
                            </TabsContent>
                          </Tabs>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
