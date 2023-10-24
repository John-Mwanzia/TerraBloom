import prisma from "@/modules/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const syncNewUser = async () => {
  const user = await currentUser();

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
        avatarUrl : user?.imageUrl as string
      },
    });
  }

  redirect("/community/Home");
};

const NewUser = async () => {
  await syncNewUser();

  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <h1 className="text-3xl">Loading...</h1>
    </div>
  );
};
export default NewUser;
