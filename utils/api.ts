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



export const leaveSpace = async ({ chatId, userId }) => {
  try {
    const res = await fetch(new Request(createURL("/api/leaveSpace")), {
      method: "POST",
      body: JSON.stringify({
        chatId,
        userId,
      }),
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to leave space.");
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
}


export const sendChatToServer = async ({ chatId, userId, text }) => {
  try {
    const res = await fetch(new Request(createURL("/api/chats")), {
      method: "POST",
      body: JSON.stringify({
        chatId,
        userId,
        text,
      }),
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to send chat.");
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
}


export async function triggerInsertCrops() {
  const newUrl = createURL("/api/CropAdd")
  console.log('newUrl', newUrl)
  try {
    const response = await fetch(new Request(createURL("/api/CropAdd")), {
      method: 'POST',
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Failed to trigger insert:", error);
  }
}
