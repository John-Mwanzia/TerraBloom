import prisma from "@/modules/db";
import { currentUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";

// admin path { communityAccess: 'true' }

interface SearchParams {
  communityAccess: string;
}

const syncNewUser = async (searchParams: SearchParams) => {
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
        isCommunityMember:
          searchParams.communityAccess === "true" ? true : false,
        avatarUrl: user?.imageUrl as string,
        firstName: user?.firstName as string,
        lastName: user?.lastName as string,
      },
    });
  }

  redirect("/community/Home");
};

export default async function page({ searchParams }) {
  await syncNewUser(searchParams);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader size="50" className="animate-spin" />
    </div>
  );
}
