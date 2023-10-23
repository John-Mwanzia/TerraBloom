import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();
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
          id: "6382a2ec-ef0b-4540-b118-01b7c42fb5e2",
        },
      },
    },
  });

  return NextResponse.json({data: post})
  
};
