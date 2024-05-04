import { getUserFromClerkID } from "@/modules/auth";
import prisma from "@/modules/db";
import { revalidatePath } from "next/cache";
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

  revalidatePath('/community/Home',"page")
  return NextResponse.json({ data: post });
};


