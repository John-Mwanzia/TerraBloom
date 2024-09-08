'use server';


import prisma from "@/modules/db";

export const createContactSupport = async ({
  name,
  email,
  subject,
  message,
}) => {
  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return { message: "Send message successfully", status: 200 };
  } catch (error) {
    console.log(error);

    return { message: "Failed to send message", status: 500 };
  }
};
