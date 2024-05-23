import React, { useContext, useState } from "react";
import { UploadContext } from "../../context/store";
import { AiFillFileImage, AiOutlineCloseCircle } from "react-icons/ai";
import { postUpload, updateComments } from "@/utils/api";
import toast from "react-hot-toast";
import { Spinner } from "@nextui-org/react";

import Image from "next/image";
import VideoModal from "./VideoModal";
import AttachFileModal from "./AttachFileModal";
import ImageUploadModal from "./ImageUploadModal";
import GifModal from "./GifModal";
import { Loader } from "lucide-react";

export default function Commentinput({ postId }) {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [isAttachFileModalOpen, setAttachFileModalOpen] = useState(false);
  const [isImageUploadModalOpen, setImageUploadModalOpen] = useState(false);
  const [isGifModalOpen, setGifModalOpen] = useState(false);

  useContext(UploadContext);
  const [textComment, setTextComment] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    previewImage,
    setPreviewImage,
    uploadedImage,
    setUploadedImage,
    uploadedVideo,
    setPreviewVideo,
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

  // State to store the selected GIF

  const handleOpenAttachFileModal = () => {
    setAttachFileModalOpen(true);
  };

  const handleImageEmbed = (link) => {
    setUploadedImage(link);
  };

  const handleUploadVideo = (file) => {
    // Handle video upload logic here
    // You can update the 'text' state with the video content
    const videoContent = `[Video: ${file.name}]`;
    setText(text + videoContent);
  };

  const handleOpenVideoModal = () => {
    setVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
  };

  const handleOpenImageUploadModal = () => {
    setImageUploadModalOpen(true);
  };

  const handleCloseImageUploadModal = () => {
    setImageUploadModalOpen(false);
  };

  const handleGifUpload = (gifUrl) => {
    // Update the 'text' state with the GIF content or perform any action needed
    // For example, adding a GIF tag to the text
    const gifContent = `[GIF: ${gifUrl}]`;
    setText(text + gifContent);

    // Store the selected GIF URL in state
    setSelectedGif(gifUrl);

    // Close the GifModal
    setGifModalOpen(false);
  };

  const handleCancel = () => {
    setUploadedFile(null);
    setFileName(null);
    setPreviewFile(null);
    setUploadedImage(null);
    setUploadedVideo(null);
    setSelectedGif(null);
    setPreviewImage(null);
    setPreviewVideo(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send both the textContent and any other form of content to the server
    // e.g. image, video, file, gif
    // place other form of content in an object and send to the server
    const otherContent = {
      image: uploadedImage || "",
      video: uploadedVideo || "",
      file: uploadedFile || "",
      gif: selectedGif?.images?.original?.url || "",
    };
    setLoading(true);
    const res = await updateComments(postId, textComment, otherContent);
    console.log(res);

    setLoading(false);
  };
  return (
    <div className="w-full   border border-gray-300 ">
      <div className="bg-white  rounded-xl  ">
        <div className="flex  px-6  pt-4 ">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="">
              <div>
                <input
                  type="text"
                  onChange={(e) => setTextComment(e.target.value)}
                  placeholder="What are your thoughts? "
                  className="w-full outline-none"
                />
                <div className={` ${!uploadedFile && !uploadedImage && !uploadedVideo && !selectedGif ? "py-0" : "py-4" } `}>
                  {uploadedImage && (
                    <div
                      className="mb-4 text-center outline-none border-none relative"
                      contentEditable="true"
                    >
                      <img
                        src={uploadedImage}
                        alt="Uploaded Image"
                        className="max-h-80 mx-auto"
                      />
                      <button onClick={handleCancel}>
                        <AiOutlineCloseCircle className=" absolute -top-1 -right-1 text-2xl cursor-pointer" />
                      </button>
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
                      <button onClick={handleCancel}>
                        <AiOutlineCloseCircle className=" absolute -top-1 -right-1 text-2xl cursor-pointer" />
                      </button>
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
                        onError={(e) => toast.error("Error loading GIF:")}
                      />

                      <button onClick={handleCancel}>
                        <AiOutlineCloseCircle className=" absolute -top-1 -right-1 text-2xl cursor-pointer" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-end pb-2 ">
                <div className="flex gap-6 ">
                  <div>
                    <button type="button" onClick={handleOpenAttachFileModal}>
                      <Image
                        src="/bloomCommAssets/attach.svg"
                        alt="Attach File"
                        width={15}
                        height={18}
                      />
                    </button>
                  </div>
                  <div>
                    <button type="button" onClick={handleOpenVideoModal}>
                      <Image
                        src="/bloomCommAssets/video.svg"
                        alt="video"
                        width={15}
                        height={18}
                      />
                    </button>
                  </div>

                  <div>
                    <button type="button" onClick={handleOpenImageUploadModal}>
                      <Image
                        src="/bloomCommAssets/imageUpload.svg"
                        alt="Image Upload"
                        width={15}
                        height={18}
                      />
                    </button>
                  </div>
                  <div>
                    <button type="button" onClick={() => setGifModalOpen(true)}>
                      {" "}
                      {/* Open GifModal */}
                      <Image
                        src="/bloomCommAssets/gif.svg"
                        alt="GIF"
                        width={15}
                        height={18}
                      />
                    </button>
                  </div>
                </div>
                <div className="justify-end">
                  <button className="bg-primary px-3 py-1 rounded text-white">
                    {loading ? (
                      <Loader className="w-10 flex items-center justify-center animate-spin" />
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AttachFileModal
        isOpen={isAttachFileModalOpen}
        onClose={() => setAttachFileModalOpen(false)}
        onAttach={(file) => {
          // Handle attaching the file here

          // Close the modal
          setAttachFileModalOpen(false);
        }}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        onUpload={handleUploadVideo}
        onEmbed={() => {}}
      />

      <ImageUploadModal
        isOpen={isImageUploadModalOpen}
        onClose={handleCloseImageUploadModal}
        onEmbed={handleImageEmbed}
      />

      <GifModal
        isOpen={isGifModalOpen}
        onClose={() => setGifModalOpen(false)}
        onUpload={handleGifUpload}
      />
      {/* Render the selected GIF if one is selected */}
      {/* {selectedGif && (
        <div>
          <img src={selectedGif} alt="Selected GIF" />
        </div>
      )}

      {selectedGif && (
        <div>
          <img src={selectedGif} alt="Selected GIF" />
        </div>
      )}
      <div contentEditable="true">{text}</div> */}
    </div>
  );
}
