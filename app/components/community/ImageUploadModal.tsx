import React, {
  useState,
  useRef,
  ChangeEvent,
  DragEvent,
  useContext,
} from "react";
import { UploadContext } from "../../context/store";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
  onEmbed: (link: string) => void;
}

function ImageUploadModal({
  isOpen,
  onClose,
  onUpload,
  onEmbed,
}: ImageUploadModalProps) {
  const [mode, setMode] = useState("upload");
  const [file, setFile] = useState<File | null>(null);
  const [embedLink, setEmbedLink] = useState("");
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const {
    previewImage,
    setPreviewImage,
    uploadedImage,
    setUploadedImage,
  } = useContext(UploadContext);

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
              {previewImage && (
                <div className="mb-4 text-center mt-6">
                  <img
                    src={previewImage}
                    alt="Image Preview"
                    className="max-h-80 mx-auto"
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
                className="border border-gray-200 p-2 rounded-lg w-full"
              />

              {previewImage && (
                <div className="mb-4 text-center mt-6">
                  <img
                    src={previewImage}
                    alt="Image Preview"
                    className="max-h-80 mx-auto"
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="">
          <button
            className="mr-4 bg-[#0E9AA9] py-2 px-4 rounded-md"
            onClick={mode === "upload" ? handleUpload : handleEmbed}
          >
            {mode === "upload" ? "Upload" : "Embed"}
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
