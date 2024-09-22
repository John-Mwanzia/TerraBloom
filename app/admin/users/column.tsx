"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { changeUserRole } from "@/actions/userRole";
import toast from "react-hot-toast";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  email: string;
  posts: {
    id: string;
    title: string;
    content: string;
    Image: string;
    video: string;
    gif: string;
    file: string;
    createdAt: Date;
  }[];
  comments: {
    id: string;
    text: string;
    Image: string;
    video: string;
    gif: string;
    file: string;
    createdAt: Date;
  }[];
  Likes: {
    id: string;
  }[];
};

const handleUserRole = async (id: string) => {
  try {
    const res = await changeUserRole(id);
    if (res.status === 200) {
      toast.success(res.message);
    }
    if (res.status === 400) {
      toast.success(res.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() ? undefined : false)
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstname",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        First Name
        <ArrowUpDown
          className={`h-4 w-4 ${column.getIsSorted() ? "text-gray-900" : "text-gray-400"}`}
        />
      </Button>
    ),
    cell: ({ row }) => <span>{row.original.firstName}</span>,
  },
  {
    accessorKey: "lastname",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Name
        <ArrowUpDown
          className={`h-4 w-4 ${column.getIsSorted() ? "text-gray-900" : "text-gray-400"}`}
        />
      </Button>
    ),
    cell: ({ row }) => <span>{row.original.lastName}</span>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown
          className={`h-4 w-4 ${column.getIsSorted() ? "text-gray-900" : "text-gray-400"}`}
        />
      </Button>
    ),
    cell: ({ row }) => <span>{row.original.email}</span>,
  },
  {
    accessorKey: "posts",
    header: () => <span>Posts</span>,
    cell: ({ row }) => <span>{row.original.posts.length}</span>,
  },
  {
    accessorKey: "comments",
    header: () => <span>Comments</span>,
    cell: ({ row }) => <span>{row.original.comments.length}</span>,
  },
  {
    accessorKey: "likes",
    header: () => <span>Likes</span>,
    cell: ({ row }) => <span>{row.original.Likes.length}</span>,
  },
  {
    accessorKey: "isAdmin",
    header: () => <span>Role</span>,
    cell: ({ row }) => <span>{row.original.isAdmin ? "admin" : "user"}</span>,
  },
  {
    id: "actions",
    header: () => <span>Actions</span>,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(row.original.id)}
          >
            Copy user ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger>manage user role</DropdownMenuTrigger>
              <DropdownMenuContent className="mr-24 mt-6">
                <DropdownMenuLabel>User Role</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {row.original.isAdmin ? (
                    <button onClick={() => handleUserRole(row.original.id)}>
                      Revoke admin
                    </button>
                  ) : (
                    <button onClick={() => handleUserRole(row.original.id)}>
                      set as admin
                    </button>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
