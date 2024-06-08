import { getUserFromClerkID } from "@/modules/auth";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { item, type } = await req.json();
  const user = await getUserFromClerkID();

  try {
    if (type === "POST") {
      // Check if the post is already bookmarked by the user
      const existingBookmark = await prisma.bookmark.findFirst({
        where: {
          userId: user.id,
          postId: item.id,
          type: "POST",
        },
      });

      if (existingBookmark) {
        // Remove the existing bookmark
        await prisma.bookmark.delete({
          where: {
            id: existingBookmark.id,
          },
        });
        return NextResponse.json({ data: "Bookmark removed successfully" });
      } else {
        // Create a new bookmark
        await prisma.bookmark.create({
          data: {
            type: "POST",
            user: { connect: { id: user.id } },
            post: { connect: { id: item.id } },
          },
        });
        return NextResponse.json({ data: "Bookmark created successfully" });
      }
    } else if (type === "COMMENT") {
      // Check if the comment is already bookmarked by the user
      const existingBookmark = await prisma.bookmark.findFirst({
        where: {
          userId: user.id,
          commentId: item.id,
          type: "COMMENT",
        },
      });

      if (existingBookmark) {
        // Remove the existing bookmark
        await prisma.bookmark.delete({
          where: {
            id: existingBookmark.id,
          },
        });
        return NextResponse.json({ data: "Bookmark removed successfully" });
      } else {
        // Create a new bookmark
        await prisma.bookmark.create({
          data: {
            type: "COMMENT",
            user: { connect: { id: user.id } },
            comment: { connect: { id: item.id } },
          },
        });
        return NextResponse.json({ data: "Bookmark created successfully" });
      }
    } else {
      return NextResponse.json(
        { error: "Invalid bookmark type" },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("Error handling bookmark:", error);
    return NextResponse.json(
      { error: "An error occurred while handling the bookmark" },
      { status: 500 },
    );
  }
};

export const GET = async () => {
  const user = await getUserFromClerkID();
  if (!user) {
    return NextResponse.json({ error: "The user doesnt exist" });
  }
  try {
    const comments = await prisma.bookmark.findMany({
      where: {
        userId: user.id,
      },
      include: {
        post: {
          include: {
            author: true,
          },
        },
        comment: {
          include: {
            author: true,
            post: true,
          },
        },
      },
    });
    console.log(comments);

    if (!comments) {
      return NextResponse.json({
        data: "No bookmarks found",
      });
    } else {
      return NextResponse.json({
        data: comments,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching bookmarks" },
      { status: 500 },
    );
  }
};
