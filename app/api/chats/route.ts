import { getPusherInstance } from "@/lib/pusher/server";
import prisma from "@/modules/db";
import { NextResponse } from "next/server";
const pusherServer = getPusherInstance();

export async function POST(req: Request) {
  const { chatId, userId, text } = await req.json();


  try {
    // Save the message to the database
    const newMessage = await prisma.message.create({
      data: {
        text,
        chatSpaceId: chatId,
        authorId: userId,
      },
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
    });

    // Trigger a Pusher event to notify other users of the new message
    pusherServer.trigger(`chat_${chatId}`, "new-message", newMessage);

    // Respond with the new message
    return NextResponse.json({ message: "Message sent", data: newMessage });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
