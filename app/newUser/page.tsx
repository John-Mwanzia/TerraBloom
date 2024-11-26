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

  if (
    existingUser?.isCommunityMember !==
    (searchParams.communityAccess === "true")
  ) {
    await prisma.user.update({
      where: {
        clerkId: user?.id as string,
      },
      data: {
        isCommunityMember:
          searchParams.communityAccess === "true" ? true : false,
      },
    });
  }

  //  redirect based on if searchParams.communityAccess is true or false
  if (searchParams.communityAccess === "true") {
    redirect("/community/Home");
  } else {
    redirect("/");
  }
};

export default async function page({ searchParams }) {
  await syncNewUser(searchParams);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader size="50" className="animate-spin" />
    </div>
  );
}
