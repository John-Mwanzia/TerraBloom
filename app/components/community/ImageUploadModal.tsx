// ImageUploadModal.js
import React, { useState, useRef, ChangeEvent, DragEvent } from "react";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
}

function ImageUploadModal({
  isOpen,
  onClose,
  onUpload,
}: ImageUploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile || null);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
    }
    onClose();
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
      setFile(droppedFile || null);
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
        </div>
        <div className="modal-footer">
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
