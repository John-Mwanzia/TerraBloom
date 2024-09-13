import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./column";
import prisma from "@/modules/db";

export default async function page() {
  const users = await prisma.user.findMany({
    include: {
      posts: {
        select: {
          id: true,
          title: true,
          content: true,
          Image: true,
          video: true,
          gif: true,
          file: true,
          createdAt: true,
        },
      },
      comments: {
        select: {
          id: true,
          text: true,
          Image: true,
          video: true,
          gif: true,
          file: true,
          createdAt: true,
        },
      },
      Likes: {
        select: {
          id: true,
        },
      },
    },
  });


  return (
    <div>
      <DataTable columns={columns} data={users} />
    </div>
  );
}
