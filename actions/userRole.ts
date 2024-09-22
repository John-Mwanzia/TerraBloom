"use server";

import prisma from "@/modules/db";
import { revalidatePath } from "next/cache";

export const changeUserRole = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        isAdmin: true,
      },
    });

    if (!user) {
      return {
        message: "user not found",
        status: 400,
      };
    }

    if (user.isAdmin) {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          isAdmin: false,
        },
      });

      revalidatePath("/admin/users");

      return {
        message: "revoked admin role successfully",
        status: 200,
      };
    } else {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          isAdmin: true,
        },
      });

      revalidatePath("/admin/users");

      return {
        message: "admin set successfully",
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "failed to change user role ",
      status: 500,
    };
  }
};
