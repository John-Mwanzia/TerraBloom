import { getUserFromClerkID } from "@/modules/auth";
import prisma from "@/modules/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const allowedSpaces = [
    "Home",
    "announcement",
    "introduction",
    "Resources",
    "Showcase",
  ];
  const data = await req.json();
  const space = data.space;

  // Check if the space is valid
  if (!allowedSpaces.includes(space)) {
    return NextResponse.json(
      { error: "Invalid space" },
      {
        status: 400,
      },
    );
  }

  const user = await getUserFromClerkID();

  // Home space logic
  if (space === "Home") {
    try {
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

      if (!post) {
        return NextResponse.json(
          { error: "Post creation failed" },
          {
            status: 500,
          },
        );
      }

      revalidatePath("/community/Home", "page");
      return NextResponse.json({ data: post });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  // introduction space logic
  if (space === "introduction") {
    try {
      const post = await prisma.introduction.create({
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
      revalidatePath("/community/introduction", "page");
      return NextResponse.json({ data: post });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  if(space === 'announcement'){
    try {
      const post = await prisma.announcement.create({
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
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
};
