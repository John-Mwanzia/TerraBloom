import { revalidatePath, revalidateTag } from "next/cache";

const createURL = (path: string) => {
  const url = window.location.origin + path;
  return url;
};

export const postUpload = async ({
  title,
  content,
  space,
  image,
  video,
  file,
  gif,
}: {
  title: string;
  content: string;
  space: string;
  image: string;
  video: string;
  file: string;
  gif: string;
}) => {
  const res = await fetch(new Request(createURL("/api/newPost")), {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      space,
      image,
      video,
      file,
      gif,
    }),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

export const getPosts = async () => {
  const res = await fetch(new Request(createURL("/api/newPost")), {
    method: "GET",
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(
      "Something went wrong while fetching posts from API server!",
    );
  }
};

export const updateLikes = async ({ postId }: { postId: string }) => {
  try {
    const res = await fetch(
      new Request(createURL(`/api/newPost/like/${postId}`)),
      {
        method: "POST",
        body: JSON.stringify({
          postId,
        }),
      },
    );

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to update like.");
    }
  } catch (error) {
    throw new Error(
      "Something went wrong while updating like: " + error.message,
    );
  }
};

export const updateComments = async (
  postId: string,
  textComment: string,
  otherContent,
) => {
  try {
    const res = await fetch(
      new Request(createURL(`/api/newPost/comment/${postId}`)),
      {
        method: "POST",
        body: JSON.stringify({
          postId,
          textComment,
          otherContent,
        }),
      },
    );

    if (res.ok) {
      revalidateTag("comments");
      revalidatePath("/community/Home");
      return res.json();
    } else {
      throw new Error("Failed to update comments.");
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};

export const getComments = async (postId: string) => {
  try {
    const res = await fetch(
      new Request(createURL(`/api/newPost/comment/${postId}`)),
      {
        next: {
          tags: ["comments"],
        },
      },
    );
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch comments.");
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};

export const saveBookmark = async ({ item, type }) => {
  try {
    const res = await fetch(new Request(createURL("/api/bookmark")), {
      method: "POST",
      body: JSON.stringify({
        item,
        type,
      }),
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to update bookmark");
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
