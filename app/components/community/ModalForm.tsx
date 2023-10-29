import React, { useContext, useState } from "react";
import { UploadContext } from "../../context/store";
import { AiFillFileImage, AiOutlineCloseCircle } from "react-icons/ai";
import { myAction } from "@/utils/actions";
import { postUpload } from "@/utils/api";

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
  } = useContext(UploadContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await postUpload({
      title,
      content,
      image: uploadedImage || "",
      video: uploadedVideo || "",
      file: uploadedFile || "",
      gif: selectedGif?.images?.original?.url || "",
    });

    if (res) {
      setPreviewImage(null);
      setUploadedImage(null);
      setUploadedVideo(null);
      setFileName(null);
      setPreviewFile(null);
      setUploadedFile(null);
      setSelectedGif(null);
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
              className="border-b border-gray-100 outline-none w-full pl-6"
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className="border-none outline-none pl-6 w-full"
              name="content"
              id=""
              placeholder="content"
              style={{ resize: "none", height: "auto" }}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          {uploadedImage && (
            <div
              className="mb-4 text-center outline-none border-none"
              contentEditable="true"
            >
              <img
                src={uploadedImage}
                alt="Uploaded Image"
                className="max-h-80 mx-auto"
              />
            </div>
          )}
          {uploadedVideo && (
            <div
              className="mb-4 text-center outline-none border-none"
              contentEditable="true"
            >
              <video
                src={uploadedVideo}
                controls
                className="max-h-80 mx-auto"
              ></video>
            </div>
          )}
          {uploadedFile && (
            <div className="mb-4 text-center outline-none border-none bg-[#F0F3F5] w-[24rem] py-4 ml-12 relative rounded-md">
              <a
                href={uploadedFile}
                className="flex items-center justify-start pl-5 text-[#0E9AA9] cursor-pointer"
                download
              >
                <AiFillFileImage className="text-3xl " />
                {fileName}
              </a>
              <button onClick={handleCancel}>
                <AiOutlineCloseCircle className=" absolute -top-1 -right-1 text-2xl cursor-pointer" />
              </button>
            </div>
          )}
          {selectedGif?.images?.original?.url && (
            <div className="px-4">
              <img
                src={selectedGif.images.original.url}
                alt="Selected GIF"
                className="h-[17.5rem]  mx-auto md:ml-6"
                onError={(e) => console.error("Error loading GIF:", e)}
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#0E9AA9] absolute bottom-4 z-10 right-6 rounded px-4 py-1 cursor-pointer"
        >
          Post
        </button>
      </form>
    </div>
  );
}
