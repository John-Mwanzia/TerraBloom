import { getUserFromClerkID } from "@/modules/auth";
import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();
  const user = await getUserFromClerkID();
  const post = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      Image: data.image,
      video: data.video,
      file: data.file,
      gif: data.gif,

      author: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  return NextResponse.json({ data: post });
};

export const GET = async (req: Request) => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      likes: true,
      author: true,
    },
  });

  return NextResponse.json({ data: posts });
};
