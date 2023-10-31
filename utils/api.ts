const createURL = (path: string) => {
  const url = window.location.origin + path;
  return url;
};

export const postUpload = async ({
  title,
  content,
  image,
  video,
  file,
  gif,
}: {
  title: string;
  content: string;
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
      "Something went wrong while fetching posts from API server!"
    );
  }
};

export const updateLikes = async ({ postId }: { postId: string }) => {
  try {
    const res = await fetch(
      new Request(createURL(`/api/post/like/${postId}`)),
      {
        method: "POST",
      }
    );
    console.log('====================================');
    console.log(res);
    console.log('====================================');

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to update like.");
    }
  } catch (error) {
    throw new Error(
      "Something went wrong while updating like: " + error.message
    );
  }
};
