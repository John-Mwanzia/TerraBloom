import { getUserFromClerkID } from "@/modules/auth";
import prisma from "@/modules/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { postId, textComment, otherContent } = await req.json();
  console.log("posId", postId);
  console.log("textComment", textComment);
  console.log("otherContent", otherContent);

  const { image, video, file, gif } = otherContent;
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
        text: textComment,
        Image: image,
        video: video,
        file: file,
        gif: gif,
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
    revalidatePath("/community/Home");
    return NextResponse.json({ data: commentData });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async (req: Request, { params }) => {
  const { postId } = params;

  // get post
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      comments: {
        include: {
          author: true,
        },
      },
    },
  });

  if (!post) {
    return NextResponse.next();
  }
  const comments = post.comments;
  return NextResponse.json({ data: comments });
};
