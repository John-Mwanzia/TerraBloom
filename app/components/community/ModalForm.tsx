
import React, { useContext, useState } from "react";
import { ImageContext } from "../../context/store";


export default function ModalForm() {
  const { previewImage, setPreviewImage ,uploadedImage, setUploadedImage, uploadedVideo } = useContext(ImageContext);


  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
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
            <div className="mb-4 text-center outline-none border-none" contentEditable ='true'>
              <img
                src={uploadedImage}
                alt="Uploaded Image"
                className="max-h-80 mx-auto"
              />
            </div>
          )}
          {uploadedVideo && (
            <div className="mb-4 text-center outline-none border-none" contentEditable ='true'>
              <video
                src={uploadedVideo}
                controls
                className="max-h-80 mx-auto"
              ></video>
            </div>
          )}
        </div>
      </form>
      {/* <button onClick={handleImageUpload}>Upload Image</button> */}
    </div>
  );
}
