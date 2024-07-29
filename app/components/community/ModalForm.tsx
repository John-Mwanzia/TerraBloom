import React, { useContext, useState } from "react";
import { UploadContext } from "../../context/store";
import { AiFillFileImage, AiOutlineCloseCircle } from "react-icons/ai";
import { postUpload } from "@/utils/api";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Loader } from "lucide-react";

export default function ModalForm() {
  const {
    previewImage,
    setPreviewImage,
    uploadedImage,
    setUploadedImage,
    uploadedVideo,
    setUploadedVideo,
    fileName,
    setFileName,
    previewFile,
    setPreviewFile,
    uploadedFile,
    setUploadedFile,
    selectedGif,
    setSelectedGif,
    setShowModal,
  } = useContext(UploadContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get the current pathname
  const path = usePathname();

  // Split the pathname by "/" into an array, filter out empty strings, and get the last segment
  const space = path.split("/").filter(Boolean).pop();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const res = await postUpload({
      title,
      content,
      space,
      image: uploadedImage || "",
      video: uploadedVideo || "",
      file: uploadedFile || "",
      gif: selectedGif?.images?.original?.url || "",
    });

    setIsLoading(false);

    if (res) {
      setPreviewImage(null);
      setUploadedImage(null);
      setUploadedVideo(null);
      setFileName(null);
      setPreviewFile(null);
      setUploadedFile(null);
      setSelectedGif(null);
      setTitle("");
      setContent("");
      setShowModal(false);
      toast.success("Post created successfully");
    }
  };

  const handleCancel = () => {
    setUploadedFile(null);
    setFileName(null);
    setPreviewFile(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="mb-6">
            <input
              className="w-full border-b border-gray-50/20 pl-6 outline-none dark:bg-transparent"
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              className="w-full border-b border-none border-gray-50/20 pl-6 outline-none dark:bg-transparent"
              name="content"
              id=""
              placeholder="content"
              style={{ resize: "none", height: "auto" }}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          {uploadedImage && (
            <div
              className="mb-4 border-none text-center outline-none"
              contentEditable="true"
            >
              <img
                src={uploadedImage}
                alt="Uploaded Image"
                className="mx-auto max-h-80"
              />
            </div>
          )}
          {uploadedVideo && (
            <div
              className="mb-4 border-none text-center outline-none"
              contentEditable="true"
            >
              <video
                src={uploadedVideo}
                controls
                className="mx-auto max-h-80"
              ></video>
            </div>
          )}
          {uploadedFile && (
            <div className="relative mb-4 ml-12 w-[24rem] rounded-md border-none bg-[#F0F3F5] py-4 text-center outline-none">
              <a
                href={uploadedFile}
                className="flex cursor-pointer items-center justify-start pl-5 text-[#0E9AA9]"
                download
              >
                <AiFillFileImage className="text-3xl" />
                {fileName}
              </a>
              <button onClick={handleCancel}>
                <AiOutlineCloseCircle className="absolute -right-1 -top-1 cursor-pointer text-2xl" />
              </button>
            </div>
          )}
          {selectedGif?.images?.original?.url && (
            <div className="px-4">
              <img
                src={selectedGif.images.original.url}
                alt="Selected GIF"
                className="mx-auto h-[17.5rem] md:ml-6"
                onError={(e) => toast.error("Error loading GIF:")}
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="absolute bottom-4 right-6 z-10 cursor-pointer rounded bg-[#0E9AA9] px-4 py-1 disabled:cursor-not-allowed"
          disabled={isLoading || !title || !content}
        >
          {isLoading ? (
            <p className="flex items-center gap-3">
              Posting{" "}
              <span>
                <Loader size={20} className="text-white animate-spin"  />
              </span>{" "}
            </p>
          ) : (
            "Post"
          )}
        </button>
      </form>
    </div>
  );
}
