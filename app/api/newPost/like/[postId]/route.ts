import { getUserFromClerkID } from "@/modules/auth";
import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { postId } = await req.json();

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

    const like = await prisma.like.findFirst({
      where: {
        postId: post.id,
        userId: user.id,
      },
    });

    if (like) {
      await prisma.like.delete({
        where: {
          id: like.id,
        },
      });

      return NextResponse.json({ data: { liked: false } });
    }

    await prisma.like.create({
      data: {
        post: {
          connect: {
            id: post.id,
          },
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    const likedUserData = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        firstName: true,
        avatarUrl: true,
      },
    });

    return NextResponse.json({ data: { liked: true, likedBy: likedUserData } });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" + error.message },
      { status: 500 }
    );
  }
};
