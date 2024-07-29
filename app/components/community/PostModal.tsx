// PostModal.js
import React, { useContext, useState } from "react";
import ModalForm from "./ModalForm";
import Image from "next/image";
import VideoModal from "./VideoModal";
import AttachFileModal from "./AttachFileModal";
import ImageUploadModal from "./ImageUploadModal";
import GifModal from "./GifModal";
import { UploadContext } from "@/app/context/store";
import { ImagePlus, Paperclip, Video, X } from "lucide-react";

export default function PostModal({ setShowModal }) {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [isAttachFileModalOpen, setAttachFileModalOpen] = useState(false);
  const [isImageUploadModalOpen, setImageUploadModalOpen] = useState(false); // State for ImageUploadModal
  const [isGifModalOpen, setGifModalOpen] = useState(false);
  const { previewImage, setPreviewImage, uploadedImage, setUploadedImage } =
    useContext(UploadContext);

  // State to store the selected GIF
  const [selectedGif, setSelectedGif] = useState("");

  const handleOpenAttachFileModal = () => {
    setAttachFileModalOpen(true);
  };

  const handleImageEmbed = (link) => {
    setUploadedImage(link);
  };

  const handleUploadVideo = (file) => {
    // Handle video upload logic here
    //  update the 'text' state with the video content
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

  return (
    <div
      className="fixed right-0 top-0 h-screen w-screen bg-black/80"
      style={{ zIndex: 1000000 }}
    >
      <div>
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[95%] -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white dark:border dark:border-gray-50/30 dark:bg-black dark:text-white/70 md:w-[90%] xl:h-[40rem] xl:w-[50rem]">
          <div className="flex justify-between border-b-2 px-4 pb-2 pt-6">
            <h1 className="text-3xl">Create Post</h1>
            <div className="flex items-center gap-4">
              <div>
                <button type="button" onClick={() => setShowModal(false)}>
                  <X size={22} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <ModalForm />
          </div>
          <div className="absolute bottom-4 flex w-full justify-between border-t-2 px-6 pt-4">
            <div className="flex items-center gap-6">
              <div>
                <button type="button" onClick={handleOpenAttachFileModal}>
                  <Paperclip size={16} />
                </button>
              </div>
              <div>
                <button type="button" onClick={handleOpenVideoModal}>
                  <Video />
                </button>
              </div>

              <div>
                <button type="button" onClick={handleOpenImageUploadModal}>
                  <ImagePlus size={16} />
                </button>
              </div>
              <div>
                <button type="button" onClick={() => setGifModalOpen(true)}>
                  {" "}
                  {/* Open GifModal */}
                  <Image
                    src="/bloomCommAssets/gif.png"
                    alt="GIF"
                    width={30}
                    height={38}
                    className="hidden dark:flex dark:rounded-sm"
                  />
                  <Image
                    src="/bloomCommAssets/gif.svg"
                    alt="GIF"
                    width={15}
                    height={18}
                    className="dark:hidden"
                  />
                </button>
              </div>
            </div>
          </div>
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
      {selectedGif && (
        <div>
          <img src={selectedGif} alt="Selected GIF" />
        </div>
      )}

      {selectedGif && (
        <div>
          <img src={selectedGif} alt="Selected GIF" />
        </div>
      )}
      <div>{text}</div>
    </div>
  );
}
