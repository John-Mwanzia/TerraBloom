import prisma from "@/modules/db";
import { redirect } from "next/navigation";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import {
  Calendar,
  Users,
} from "lucide-react";
import MessageList from "@/app/components/community/ChatList";
import LeaveSpaceButton from "@/app/components/community/LeaveSpaceButton";
import ChatForm from "@/app/components/community/chat_form";

type ChatSpace = {
  id: string;
  title: string;
  createdAt: Date;
  members: {
    id: string;
    chatSpaceId: string;
    userId: string;
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      avatarUrl: string;
    };
  }[];
  messages: {
    id: string;
    text: string;
    Image: string;
    video: string;
    gif: string;
    file: string;
    createdAt: Date;
    author: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      avatarUrl: string;
    };
  }[];
};

export default async function page({ params, searchParams }) {
  const { chatId } = params;
  const { userId } = searchParams;

  try {
    if (!userId) {
      redirect("/community/Chat");
    }
    const member = await prisma.chatSpaceMember.findFirst({
      where: {
        userId,
        chatSpaceId: chatId,
      },
    });

    if (!member) {
      redirect("/community/Chat");
    }

    // get chatspace details
    const chatspace = await prisma.chatSpace.findUnique({
      where: {
        id: chatId,
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                avatarUrl: true,
              },
            },
          },
        },
        messages: {
          include: {
            author: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    if (!chatspace) {
      redirect("/community/Chat");
    }

    return (
      <ChatSpaceComponent
        chatspace={chatspace}
        userId={userId}
        chatId={chatId}
      />
    );
  } catch (error) {
    console.log(error)
    redirect("/community/Chat");
  }
}

type chatsProps = {
  chatspace: ChatSpace;
  userId: string;
  chatId: string;
};

// This is the component responsible for rendering the chat space
function ChatSpaceComponent({ chatspace, userId, chatId }: chatsProps) {


  return (
    <div className="relative">
      <div className="fixed mr-3 h-[100vh] w-[15%] border-r-[1px] border-blue-500/50">
        <div className="mr-4 dark:text-white">
          <div className="">
            <h1 className="w-full text-ellipsis rounded-md bg-gray-300/50 dark:bg-[#2B2E33]/50 px-4 py-2">
              {chatspace.title}
            </h1>
          </div>
          <div>
            <Sheet>
              <SheetTrigger className="my-2 flex w-full gap-2 rounded-md bg-gray-300/50 dark:bg-[#2B2E33]/50 px-4 py-2">
                <Users className="text-blue-500" />
                <p>Members</p>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Space members</SheetTitle>
                  <SheetDescription>
                    <p className="py-4"> {chatspace.members.length} members</p>
                    <ul className="flex flex-col gap-2">
                      {chatspace.members.map((member) => (
                        <li key={member.id} className="flex items-center gap-2">
                          <Image
                            src={member.user.avatarUrl}
                            alt="avatar"
                            width={30}
                            height={30}
                            className="rounded-full"
                          />
                          {member.user.firstName + member.user.lastName}
                          <p></p>
                        </li>
                      ))}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex w-full items-center gap-2 text-ellipsis rounded-md bg-gray-300/50 dark:bg-[#2B2E33]/50 px-4 py-2">
            <Calendar className="text-blue-500" />
            <p>
              created{" "}
              {chatspace.createdAt.getDate() +
                "/" +
                chatspace.createdAt.getMonth() +
                "/" +
                chatspace.createdAt.getFullYear()}
            </p>
          </div>
        </div>
      </div>
      <div className="ml-[18%] flex h-[calc(100vh-15vh)] w-[calc(100vw-31vw)] flex-col">
        <div className="mb-12 flex w-full items-center justify-between border-b-[1px] border-blue-500/50 px-4 py-1">
          <div className="flex-1 text-center">
            <h2>Conversations</h2>
          </div>

          <LeaveSpaceButton userId={userId} chatSpaceId={chatId} />
        </div>
        <div className="h-full w-full flex-1 overflow-y-auto">
        <MessageList chatId={chatId} userId={userId}  initialMessages={chatspace.messages} />
        </div>
        {/* input message to chat */}
        <div className="flex w-full items-center gap-5 px-8">
         
         <ChatForm chatId={chatId} userId={userId} />
        </div>
      </div>
    </div>
  );
}
