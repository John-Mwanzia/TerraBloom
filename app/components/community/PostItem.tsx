"use client";

import getTimeSincePostCreation, {
  formatDateString,
} from "@/handlers/timeStamp";
import { BiLike } from "react-icons/bi";
import Image from "next/image";
import {
  useEffect,
  experimental_useOptimistic as useOptimistic,
  useState,
} from "react";
import { getComments, saveBookmark, updateLikes } from "@/utils/api";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import Commentinput from "./CommentInput";
import { AiOutlineEllipsis } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
  };
  Image?: string | null;
  video?: string | null;
  gif?: string | null;
  file?: string | null;
  createdAt: Date;
  likes: {
    id: string;
    userId: string;
    postId: string;
    user: {
      firstName: string;
      id: string;
      isAdmin: boolean | null;
      lastName: string;
    };
  }[];
  comments: {
    id: String;
    text: String;
    Image?: string | null;
    video?: string | null;
    gif?: string | null;
    file?: string | null;
    authorId: String;
    postId: string;
  }[];
}

interface PostItemProps {
  post: Post;
  firstName: string;
  lastName: string;
}

const PostItem: React.FC<PostItemProps> = ({ post, firstName, lastName }) => {
  const [liked, setLiked] = useState(false);
  const [optimisticLiked, setOptimisticLiked] = useState(liked);

  const [loading, setLoading] = useState(false);
  const [unhide, setUnhide] = useState(false);
  const [comments, setComments] = useState([]);

  const formatCreatedAt = (date: Date): string => {
    return date.toISOString(); // Convert the Date to a string (ISO format)
  };

  const getLikedFromStorage = (postId) => {
    const liked = localStorage.getItem(`liked-${postId}`);

    return liked === null ? false : JSON.parse(liked); // Parse stored value (boolean)
  };

  useEffect(() => {
    const likedFromStorage = getLikedFromStorage(post.id);

    setOptimisticLiked(likedFromStorage);
  }, [post.id]); // Run only when post.id changes

  const handleLikeUPdate = async ({ postId }) => {
    try {
      // Update optimistic state first for immediate UI change
      setOptimisticLiked(!optimisticLiked);

      const { data } = await updateLikes({ postId });
      setLiked(data.liked); // Update actual liked state after server response

      // Store the liked state for this post in localStorage
      localStorage.setItem(`liked-${postId}`, JSON.stringify(data.liked));
    } catch (error) {
      toast.error(error.message);

      // Optionally, revert optimistic state if the API call fails
      setOptimisticLiked(!optimisticLiked); // Revert optimistic change \
    }
  };

  const handleComments = async (postId: string) => {
    if (unhide) {
      return;
    }
    try {
      setLoading(true);
      setUnhide(true);
      const { data } = await getComments(postId);
      setComments(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePostBookmark = async (post) => {
    // send server
    const bookmark = {
      item: post,
      type: "POST",
    };
    try {
      const { data } = await saveBookmark(bookmark);
      toast.success(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCommentBookmark = async (comment) => {
    // send server
    const bookmark = {
      item: comment,
      type: "COMMENT",
    };
    try {
      const { data } = await saveBookmark(bookmark);
      toast.success(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      key={post.id}
      className="flex flex-col bg-white px-4 py-8 shadow-xl md:w-[45rem]"
    >
      {post.author.avatarUrl && (
        <div className="mb-4 flex items-center gap-6">
          {" "}
          <img
            src={post.author.avatarUrl}
            alt="avatar"
            className="h-[3rem] w-[3rem] rounded-full"
          />{" "}
          {post.author.firstName} {post.author.lastName}{" "}
          <p className="text-sm">
            Posted {getTimeSincePostCreation(formatCreatedAt(post.createdAt))}
          </p>
          <div className="flex-1">
            {/* ellipses for bookmarks */}
            <div className="float-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <AiOutlineEllipsis size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-48 pr-12">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="">
                    <button
                      onClick={() => handlePostBookmark(post)}
                      className=""
                    >
                      Bookmark post
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}
      <h1 className="mb-6 text-2xl font-bold">{post.title}</h1>
      {post.content && (
        <div className="mb-6">
          <p>{post.content}</p>
        </div>
      )}
      {post.Image && <img src={post.Image} alt="Post Image" />}
      {post.video && <video src={post.video} controls />}
      {post.gif && <img src={post.gif} alt="GIF" />}
      {post.file && <a href={post.file}>Download File</a>}

      <div>
        {/* liked by  */}
        {post.likes.length > 0 && (
          <div className="mt-4">
            <div className="flex gap-[2px] text-base font-semibold text-white">
              {post.likes.slice(0, 3).map((like) => (
                <div key={like.id} className="rounded-r-md bg-primary p-1">
                  {like.user.firstName.charAt(0) + like.user.lastName.charAt(0)}
                </div>
              ))}
            </div>
            {post.likes.length > 3 && (
              <p className="text-sm">
                {post.likes[0].user.firstName}
                and {post.likes.length - 3} others liked this
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleLikeUPdate({ postId: post.id })}
            className={`flex gap-2 ${optimisticLiked ? "text-[#0E9AA9]" : ""}`}
          >
            <div>
              <BiLike
                color={optimisticLiked ? "#0E9AA9" : "black"}
                className="h-6 w-6"
              />
            </div>
            {optimisticLiked ? "Liked" : "Like"}
          </button>
          <button
            className="flex gap-2"
            onClick={() => handleComments(post.id)}
          >
            <Image
              src="/bloomCommAssets/comment.svg"
              alt="comment"
              width={24}
              height={24}
            />
            comment
          </button>
        </div>
        <div>
          <p>
            {post.comments.length}{" "}
            {post.comments.length == 1 ? "comment" : "comments"}
          </p>
        </div>
      </div>
      {unhide && (
        <div className="mt-8 flex flex-col items-center">
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader className="w-20 animate-spin" />
            </div>
          ) : (
            <div className="w-full sm:px-8">
              {comments.length == 0 ? (
                <div>No comments yet😔</div>
              ) : (
                <div className="mt-6 w-full">
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="mt-8 flex w-full items-start gap-8"
                    >
                      <div className="inline-flex rounded-lg bg-primary p-1 text-base font-semibold text-white">
                        {comment.author.firstName.charAt(0) +
                          comment.author.lastName.charAt(0)}
                      </div>
                      <div className="flex w-full flex-col gap-2 font-sans">
                        <div className="flex gap-5">
                          <div className="text-sm font-semibold">
                            {/* comment author */}
                            {comment.author.firstName +
                              "  " +
                              comment.author.lastName}
                          </div>
                          <div className="text-sm">
                            {formatDateString(comment.createdAt)}
                          </div>
                          <div className="flex-1">
                            {/* ellipses for bookmarks */}
                            <div className="float-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger>
                                  <button>
                                    <AiOutlineEllipsis />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="mr-48 pr-12">
                                  {/* <DropdownMenuLabel>
                                    My Account
                                  </DropdownMenuLabel> */}
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="">
                                    <button
                                      className=""
                                      onClick={() =>
                                        handleCommentBookmark(comment)
                                      }
                                    >
                                      Bookmark Comment
                                    </button>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                        <div className="text-black/80">
                          {/* comment contents */}
                          {comment.text && <p>{comment.text}</p>}
                          {comment.image && (
                            <img src={comment.image} alt="comment image" />
                          )}
                          {comment.video && (
                            <video src={comment.video} controls />
                          )}
                          {comment.gif && (
                            <img src={comment.gif} alt="comment gif" />
                          )}
                          {comment.file && (
                            <a href={comment.file}>Download File</a>
                          )}
                        </div>

                        <div className="flex w-full text-sm">
                          <div className="flex gap-4 font-semibold">
                            {/* likes  and replies*/}
                            <button className="text-black/70 hover:text-black dark:hover:text-white/70">
                              like
                            </button>
                            <button className="text-black/70 hover:text-black dark:hover:text-white/70">
                              reply
                            </button>
                          </div>
                          <div className="flex-1">
                            <p className="float-right"> 2 likes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-6 flex items-start gap-6">
                <div className="inline-flex rounded-lg bg-primary p-1 text-base font-semibold text-white">
                  {firstName.charAt(0) + lastName.charAt(0)}
                </div>
                <div className="flex-1">
                  <Commentinput postId={post.id} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostItem;
