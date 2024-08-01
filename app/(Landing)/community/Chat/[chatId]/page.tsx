import prisma from "@/modules/db";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

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
        chatSpaceId: chatId
      },
    });


    if (!member) {
      redirect("/community/Chat");
    }
  } catch (error) {
    redirect("/community/Chat");
  }

  return <div>chat {chatId}</div>;
}
