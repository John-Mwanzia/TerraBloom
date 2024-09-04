"use server";

import prisma from "@/modules/db";

export const CreateSpace = async (formdata: FormData, userId: string) => {
  const title = formdata.get("space-title") as string;

  try {
    const space = await prisma.chatSpace.create({
      data: {
        title,
      },
    });

    await prisma.chatSpaceMember.create({
      data: {
        chatSpace: {
          connect: { id: space.id },
        },
        user: {
          connect: { id: userId },
        },
      },
    });

    return space;
  } catch (error) {
    return error;
  }
};


// Function to join a space
export const joinSpace = async ( spaceId:string, userId:string ) => {
  try {
    // Check if the user is already a member of the chat space
    const existingMember = await prisma.chatSpaceMember.findFirst({
      where: {
        chatSpaceId: spaceId,
        userId: userId
      }
    });

    // If the user is not a member, add them to the chat space
    if (!existingMember) {
      await prisma.chatSpaceMember.create({
        data: {
          chatSpace: {
            connect: { id: spaceId }
          },
          user: {
            connect: { id: userId }
          }
        }
      });
      return { message: ' Joined space successfully' };
    } else {
      return { message: 'You are already a member of the chat space' };
    }
  } catch (error) {
    console.error('Error joining space:', error);
    throw new Error('Unable to join space');
  }
};
