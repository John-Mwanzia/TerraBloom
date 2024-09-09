import React from "react";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/modules/db";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateSpace } from "@/actions/Space";
import ActionsButton from "@/app/components/community/ActionsButton";
import Link from "next/link";
import SpaceForm from "@/app/components/community/SpaceForm";
import { Globe } from "lucide-react";
import JoinSpace from "@/app/components/community/JoinSpace";

interface UserChatspace {
  id: string;
  title: string;
  createdAt: Date;
}

export default async function page() {
  const clerkUser = await currentUser();
  const user = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
    include: {
      chatSpaces: {
        include: {
          chatSpace: true,
        },
      },
    },
  });
  const chatspaces = user.chatSpaces;

  const spaces = await prisma.chatSpace.findMany({
    include: {
      members: {
        include: {
          user: true,
        },
      },
      messages: {
        include: {
          author: true,
        },
      },
    },
  });

  return (
    <div>
      <div className="flex justify-between border-l border-t bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
        <h1>Chat</h1>
        <div className="flex gap-2 dark:text-white">
          <Dialog>
            <DialogTrigger className="rounded-md bg-primary px-4 py-2 dark:bg-blue-500">
              Join spaces
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                <DialogDescription>
                  {spaces.length > 0 ? (
                    spaces.map((space) => (
                      <div key={space.id}>
                        <JoinSpace space={space} userId={user.id} />
                      </div>
                    ))
                  ) : (
                    <div>
                      <p>No spaces yet. Stay tuned</p>
                    </div>
                  )}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger className="rounded-md bg-primary px-4 py-2 dark:bg-blue-500">
              Create space
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create space</DialogTitle>
                <DialogDescription className="mt-12 dark:bg-blue-500">
                  <SpaceForm userId={user.id} />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-12 flex justify-center px-6">
        <div className="w-auto rounded-md bg-white p-12 shadow-md dark:bg-[#2B2E33]/50">
          <h2 className="txt-3xl mb-2 font-bold dark:text-white">
            Your Chatspaces
          </h2>
          <div className="dark:text-white">
            {chatspaces.length > 0 ? (
              chatspaces.map((chatspace) => (
                <Link
                  key={chatspace.id}
                  href={`Chat/${chatspace.chatSpace.id}?userId=${user.id}`}
                  className="flex items-center gap-1 rounded-md bg-[#F1F5F9] px-2 py-1 dark:bg-[#2B2E33]/70 hover:bg-slate-200"
                >
                  <Globe size={18} className="text-blue-500" />
                  {chatspace.chatSpace.title}
                </Link>
              ))
            ) : (
              <div>
                <p>no spaces yet 😔</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
