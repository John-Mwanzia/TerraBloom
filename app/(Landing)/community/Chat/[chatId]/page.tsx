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
import { Calendar, Paperclip, SendHorizontal, Smile, Users } from "lucide-react";

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

    return <ChatSpaceComponent chatspace={chatspace} />;
  } catch (error) {
    redirect("/community/Chat");
  }
}

// This is the component responsible for rendering the chat space
function ChatSpaceComponent({ chatspace }: { chatspace: ChatSpace }) {
  return (
    <div className="relative">
      <div className="fixed h-[100vh] w-[15%] border-r border-gray-300 mr-3">
        <div>
          <h1 className="text-ellipsis  px-4 py-2 bg-gray-300/50 rounded-md w-full">{chatspace.title}</h1>
        </div>
        <div>
          <Sheet>
            <SheetTrigger className="flex my-2 gap-2 px-4 py-2 bg-gray-300/50 rounded-md w-full">
              <Users className="text-blue-500" /> 
              <p>Members</p>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Space members</SheetTitle>
                <SheetDescription>
                  <p className="py-4"> {chatspace.members.length} members</p>
                  <ul>
                    {chatspace.members.map((member) => (
                      <li key={member.id} className="flex gap-2">
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
        <div className="text-ellipsis flex gap-2 items-center   px-4 py-2 bg-gray-300/50 rounded-md w-full"> 
        <Calendar className="text-blue-500" />
        <p>created {chatspace.createdAt.getDate() +"/" +chatspace.createdAt.getMonth() + "/" + chatspace.createdAt.getFullYear()}</p>
        </div>
      </div>
      <div className=" flex flex-col ml-[18%] h-[calc(100vh-15vh)]  w-[calc(100vw-31vw)]">
        <div className="flex w-full  items-center justify-between bg-zinc-200/50 py-1 px-4">
          <div>
            <h2>Conversations</h2>
          </div>
          <button className="rounded-lg bg-red-500 px-4 py-2 text-white">
            leave space
          </button>
        </div>
        <div className=" w-full  h-full flex-1 ">
          {" "}
          {chatspace.messages.map((message) => (
            <div key={message.id}>
             
              <strong>{message.author.firstName}</strong>: {message.text}
            </div>
          ))}
        </div>
        {/* input message to chat */}
        <div className="flex gap-5 items-center  w-full px-8">
          <div className="flex items-center gap-2">
            <button>
              <Smile />
            </button>
            <button>
              <Paperclip />
            </button>
            <button>gif</button>
          </div>
          <div className="flex-1 w-full">
            <form action="">
              <input
                type="text"
                placeholder="Type your message here..."
                className="border border-blue-500 px-3 py-2 rounded-lg shadow-md shadow-blue-500 outline-none flex-1 w-full bg-transparent"
              />
            </form>
          </div>
          <div>
            <button type="submit">
              <SendHorizontal />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
