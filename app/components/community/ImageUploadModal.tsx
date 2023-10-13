'use client';

import React, { useState, useRef, ChangeEvent, DragEvent, useContext } from "react";
import { ImageContext } from "../../context/store";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
}

function ImageUploadModal({
  isOpen,
  onClose,
  // onUpload
}: ImageUploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  // const [previewImage, setPreviewImage] = useState<string | null>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const { previewImage, setPreviewImage, uploadedImage, setUploadedImage } = useContext(ImageContext);

  const handleUpload = () => {
    setUploadedImage(previewImage);
    onClose();
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Display a preview of the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.add("border-dashed", "border-[#0E9AA9]");
    }
  };

  const handleDragLeave = () => {
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove("border-dashed", "border-[#0E9AA9]");
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove("border-dashed", "border-[#0E9AA9]");

      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) {
        setFile(droppedFile);
        // Display a preview of the dropped image
        const reader = new FileReader();
        reader.onload = (ev) => {
          setPreviewImage(ev.target.result as string);
        };
        reader.readAsDataURL(droppedFile);
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "block" : "hidden"
      } bg-black bg-opacity-80 flex items-center justify-center`}
    >
      <div className="modal-container p-6 bg-white w-[500px] rounded-lg shadow-lg">
        <div className="modal-header flex justify-between mb-4">
          <h2 className="text-xl font-bold">Image Upload</h2>
          <button className="modal-close text-3xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div
            ref={dropAreaRef}
            className={`border border-gray-200 p-12 mb-4 text-center cursor-pointer rounded-lg`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <p>Drop your image here</p>
            <input
              type="file"
              accept="image/*"
              className="mt-4"
              onChange={handleFileChange}
            />
          </div>
          {previewImage && (
            <div className="mb-4 text-center">
              <img
                src={previewImage}
                alt="Image Preview"
                className="max-h-80 mx-auto"
              />
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <button className="btn btn-primary" onClick={handleUpload}>
            Upload
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUploadModal;
