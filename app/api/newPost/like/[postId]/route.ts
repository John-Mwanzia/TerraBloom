import { getUserFromClerkID } from "@/modules/auth";
import prisma from "@/modules/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (req:Request) => {
 const {postId} = await req.json();
  
  console.log(postId);
  
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

    return NextResponse.json({ data: { liked: true } });
  } catch (error ) {
    console.log('====================================');
    console.log(error.message);
    console.log('====================================');
    return NextResponse.json({ error: 'Internal Server Error' + error.message, }, { status: 500 })
 
    }
};
