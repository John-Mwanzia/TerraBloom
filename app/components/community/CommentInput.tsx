import React, { useContext, useState } from "react";

import Image from "next/image";
import VideoModal from "./VideoModal";
import AttachFileModal from "./AttachFileModal";
import ImageUploadModal from "./ImageUploadModal";
import GifModal from "./GifModal";
import { UploadContext } from "@/app/context/store";

export default function Commentinput() {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [isAttachFileModalOpen, setAttachFileModalOpen] = useState(false);
  const [isImageUploadModalOpen, setImageUploadModalOpen] = useState(false);
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

  return (
    <div className="w-full   border border-gray-300 ">
      <div className="bg-white  rounded-xl  ">
        <div className="flex  px-6  pt-4 ">
          <form action="" className="w-full">
            <div className="">
              <div>
                <input
                  type="text"
                  placeholder="What are your thoughts? "
                  className="w-full outline-none"
                />
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
                  <button className="bg-primary px-3 py-1 rounded ">
                    send
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
