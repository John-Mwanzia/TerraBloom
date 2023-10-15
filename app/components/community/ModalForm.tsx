import React, { useContext, useState } from "react";
import { ImageContext } from "../../context/store";
import { AiFillFileImage, AiOutlineCloseCircle } from "react-icons/ai";

export default function ModalForm() {
  const {
    previewImage,
    setPreviewImage,
    uploadedImage,
    setUploadedImage,
    uploadedVideo,
    fileName,
    setFileName,
    previewFile,
    setPreviewFile,
    uploadedFile,
    setUploadedFile,
  } = useContext(ImageContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };
    const handleCancel = () => {
      setUploadedFile(null);
      setFileName(null);
      setPreviewFile(null);
    }
 

  return (
    <div>
      <form action="handleSubmit">
        <div className="flex flex-col">
          <div className="mb-6">
            <input
              className="border-b border-gray-100 outline-none w-full pl-6"
              type="text"
              placeholder="Title"
            />
          </div>
          <div>
            <textarea
              className="border-none outline-none pl-6 w-full"
              name="content"
              id=""
              placeholder="content"
              style={{ resize: "none", height: "auto" }}
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
              >
                <AiFillFileImage className="text-3xl " />
                {fileName}
              </a>
              <button onClick={handleCancel}>
                <AiOutlineCloseCircle className=" absolute -top-1 -right-1 text-2xl cursor-pointer" />
              </button>
            </div>
          )}
        </div>
      </form>
      {/* <button onClick={handleImageUpload}>Upload Image</button> */}
    </div>
  );
}
