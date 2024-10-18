import prisma from "@/modules/db";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserReportDownloadButton from "@/app/components/admin/UserReportDownloadButton";

//type User = {
//  id: string;
//  email: string;
//  firstName: string;
//  lastName: string;
//  avatarUrl: string;
//  isAdmin: boolean;
//};


export default async function page({ params }) {
  const { userId } = params;
  //let admin: User = null;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      redirect("/");
    }

    // check if user is admin
    if (!user.isAdmin) {
      redirect("/");
    }

    // set admin details
    //admin = user;
  } catch (error) {
    console.log(error);
    redirect("/");
  }
  // total users
  const userCount = await prisma.user.count();

  // new users this week
  const newUsersThisWeek = await prisma.user.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
  });
  // active users
  // posts created
  const postsCreated = await prisma.post.count();
  // comments posted
  const commentsPosted = await prisma.comment.count();
  // active chat rooms
  const activeChatRooms = await prisma.chatSpace.count();

  const users = await prisma.user.findMany({
    include:{
      posts: true,
      comments: true,
      Likes: true
    }
  })
  

  return (
    <div>
      <div className="relative min-h-screen bg-gray-100 p-5">
        <div className="container mx-auto">
          {/* Navbar */}
          <nav className="flex justify-between rounded bg-white p-4 shadow">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <ul className="flex space-x-8">
              <li>
                <Link href={`/admin/${userId}`} className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Sheet>
                  <SheetTrigger>Reports</SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Reports</SheetTitle>
                      <SheetDescription>
                        <UserReportDownloadButton users={users} />
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <Link href="/admin/reports" className="hover:underline"></Link>
              </li>
              <li>
                <Link
                  href={`/admin/${userId}/announcement`}
                  className="hover:underline"
                >
                  Announcemets
                </Link>
              </li>
              <li>
                <Link href="/admin/users" className="hover:underline">
                  Users
                </Link>
              </li>

              <UserButton />
            </ul>
          </nav>

          {/* Metrics Overview */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard title="Total Users" value={userCount} />
            <MetricCard title="New Users This Week" value={newUsersThisWeek} />
            <MetricCard title="Active Users" value={userCount} />
            <MetricCard title="Posts Created" value={postsCreated} />
            <MetricCard title="Comments Posted" value={commentsPosted} />
            <MetricCard title="Active Chat Rooms" value={activeChatRooms} />
            {/*  more metric cards as necessary */}
          </div>
        </div>

        {/* settings*/}
        <div className="absolute bottom-0 right-12 p-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full bg-white p-2 text-blue-500 shadow-lg">
              <Settings />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              {/* theme */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

const MetricCard = ({ title, value }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-3xl font-bold text-indigo-600">{value}</p>
    </div>
  );
};
