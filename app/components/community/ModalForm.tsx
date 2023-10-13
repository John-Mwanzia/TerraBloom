
import React, { useState } from "react";

export default function ModalForm() {
  const [uploadedImageUrl, setuploadedImageUrl] = useState(null); // State to store the uploaded image


  return (
    <div>
      <form action="">
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
          {uploadedImageUrl && (
            <div className="mb-4 text-center">
              <img
                src={uploadedImageUrl}
                alt="Uploaded Image"
                className="max-h-80 mx-auto"
              />
            </div>
          )}
        </div>
      </form>
      {/* <button onClick={handleImageUpload}>Upload Image</button> */}
    </div>
  );
}
