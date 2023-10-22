import { UploadContext } from "@/app/context/store";
import React, { useState, useRef, useEffect, useContext } from "react";
import { AiFillFileImage } from "react-icons/ai";

interface AttachFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAttach: (file: File) => void;
}

function AttachFileModal({ isOpen, onClose, onAttach }: AttachFileModalProps) {
  const [file, setFile] = useState<File | null>(null);

  const {
    fileName,
    setFileName,
    previewFile,
    setPreviewFile,
    uploadedFile,
    setUploadedFile,
  } = useContext(UploadContext);
  // const [fileName, setFileName] = useState<string | null>(null);
  // const [previewFile, setPreviewFile] = useState<string | null>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile || null);
    setFileName(selectedFile?.name || null);

    // Set the file preview when a file is selected
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewFile(e.target!.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewFile(null); // Clear the preview if no file is selected
    }
  };

  const handleAttach = () => {
    if (file) {
      onAttach(file);
      setUploadedFile(previewFile);
    }
    onClose();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
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

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove("border-dashed", "border-[#0E9AA9]");

      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile || null);
      setFileName(droppedFile?.name || null);

      // Set the file preview for the dropped file
      if (droppedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewFile(e.target!.result as string);
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
          <h2 className="text-xl font-bold">Attach File</h2>
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
            <p>Drop your file here</p>
            <input
              type="file"
              className="mt-4"
              accept=".pdf, .docx, .jpg, .png, .mp3, .mp4"
              onChange={handleFileChange}
            />
          </div>
          {/* Display the file preview */}
          {previewFile && (
            <div className="flex mt-4 gap-2 items-center">
              <span className="text-2xl">
                <AiFillFileImage color="#1475cf" />
              </span>
              <span className="text-xl">{fileName}</span>
            </div>
          )}
        </div>
        <div className="mt-6">
          <button
            className="mr-6 bg-[#0E9AA9] py-2 px-4 rounded-md"
            onClick={handleAttach}
          >
            Attach
          </button>
          <button className="" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttachFileModal;
