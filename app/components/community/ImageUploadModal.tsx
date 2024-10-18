/* eslint-disable @next/next/no-img-element */
import React, {
  useState,
  useRef,
  ChangeEvent,
  DragEvent,
  useContext,
} from "react";
import { UploadContext } from "../../context/store";
import { BiCloudUpload } from "react-icons/bi";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmbed: (link: string) => void;
}

function ImageUploadModal({ isOpen, onClose, onEmbed }: ImageUploadModalProps) {
  const [mode, setMode] = useState("upload");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);
  const [embedLink, setEmbedLink] = useState("");
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const { previewImage, setPreviewImage, setUploadedImage } =
    useContext(UploadContext);

  const handleUpload = () => {
    setUploadedImage(previewImage);
    onClose();
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Display a preview of the selected image
      const reader = new FileReader(); //built-in JavaScript API that allows you to read the contents of files asynchronously
      // When the reader successfully loads the image, update the previewImage state
      reader.onload = (e) => {
        setPreviewImage(e.target!.result as string);
      };
      // Read the selected file as a data URL (which can be used to display an image)
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleEmbed = () => {
    if (embedLink) {
      onEmbed(embedLink);
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
      if (droppedFile) {
        setFile(droppedFile);
        // Display a preview of the dropped image
        const reader = new FileReader();
        reader.onload = (ev) => {
          setPreviewImage(ev.target?.result as string);
        };
        reader.readAsDataURL(droppedFile);
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "block" : "hidden"
      } flex items-center justify-center bg-black bg-opacity-80`}
    >
      <div className="modal-container w-[90%] rounded-lg bg-white p-6 shadow-lg dark:border dark:border-gray-50/30 dark:bg-black dark:text-white/70 md:w-[500px]">
        <div className="modal-header mb-4 flex justify-between">
          <h2 className="text-xl font-bold">Image Upload</h2>
          <button className="modal-close text-3xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-4">
            <p>
              <span
                className={`cursor-pointer ${
                  mode === "upload" ? "underline" : ""
                }`}
                onClick={() => setMode("upload")}
              >
                Upload
              </span>{" "}
              |{" "}
              <span
                className={`cursor-pointer ${
                  mode === "embed" ? "underline" : ""
                }`}
                onClick={() => setMode("embed")}
              >
                Embed Link
              </span>
            </p>
          </div>
          {mode === "upload" && (
            <div
              ref={dropAreaRef}
              className={`mb-4 cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-50/20 p-12 text-center ${
                previewImage ? "border-dashed border-[#0E9AA9]" : " "
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col justify-center items-center gap-1">
            <BiCloudUpload size={40} />
            <p>Drop your file here</p>
            </div>
              <input
                type="file"
                accept="image/*"
                className="mt-4"
                onChange={handleFileChange}
              />
              {previewImage && (
                <div className="mb-4 mt-6 text-center">
                  <img
                    src={previewImage}
                    alt="Image Preview"
                    className="mx-auto max-h-80"
                  />
                </div>
              )}
            </div>
          )}
          {mode === "embed" && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter image link"
                value={embedLink}
                onChange={(e) => {
                  setEmbedLink(e.target.value);
                  setPreviewImage(e.target.value);
                }}
                className="w-full rounded-lg border border-gray-200 p-2 dark:border-gray-50/20"
              />

              {previewImage && (
                <div className="mb-4 mt-6 text-center">
                  <img
                    src={previewImage}
                    alt="Image Preview"
                    className="mx-auto max-h-80"
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="">
          <button
            className="mr-4 rounded-md bg-[#0E9AA9] px-4 py-2"
            onClick={mode === "upload" ? handleUpload : handleEmbed}
          >
            {mode === "upload" ? "Upload" : "Embed"}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setPreviewImage(null);
              onClose();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUploadModal;
