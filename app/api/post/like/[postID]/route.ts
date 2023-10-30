import { getUserFromClerkID } from "@/modules/auth";
import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export const POST = async ({postId}: {postId: string}) => {
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
    }