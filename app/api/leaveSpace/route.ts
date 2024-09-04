import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {

    const { chatId, userId } = await req.json();
    
     try {
        const space  = await prisma.chatSpace.findUnique({
            where:{
              id: chatId
            }
          });
          if(space){
            // get member
            const member = await prisma.chatSpaceMember.findFirst({
              where:{
                userId,
                chatSpaceId: chatId
              }
            });
            if(member){
              // delete member
              await prisma.chatSpaceMember.delete({
                where:{
                  id: member.id
                }
              });
              // delete all the member messages
              await prisma.message.deleteMany({
                where:{
                  chatSpaceId: chatId,
                  authorId: userId
                }
              });
              // check if member is the only member in the space
              const members = await prisma.chatSpaceMember.findMany({
                where:{
                  chatSpaceId: chatId
                }
              });
              if(members.length === 0){
                // delete space
                await prisma.chatSpace.delete({
                  where:{
                    id: chatId
                  }
                });
              }
            }
          }

        return NextResponse.json({ message: "Space left successfully" , status: 200});
     } catch (error) {
        return NextResponse.json({ message: "Failed to leave space", status: 400});
     }


}