import { getUserFromClerkID } from "@/modules/auth";
import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { postId, comment } = await req.json();

  try {
    const user = await getUserFromClerkID();
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return NextResponse.next();
    }

    const commentData = await prisma.comment.create({
      data: {
        text: comment,
        post: {
          connect: {
            id: post.id,
          },
        },
        author: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
        author: true,
      },
    });

    return NextResponse.json({ data: commentData });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" + error.message },
      { status: 500 }
    );
  }
};
