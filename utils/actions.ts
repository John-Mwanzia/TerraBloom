"use server";

import prisma from "@/modules/db";

export const myAction = async (formData: FormData) => {
  const title = formData.get("title");

  const content = formData.get("content");
  const image = formData.get("image");
  const video = formData.get("video");
  const file = formData.get("file");
  const gif = formData.get("gif");
  const data = {
    title,
    content,
    Image: image,
    video,
    file,
    gif,
    author: {
      connect: {
        id: "6382a2ec-ef0b-4540-b118-01b7c42fb5e2",
      },
    },
  };

  const res = await prisma.post.create({
    data,
  });

  return res;
};
