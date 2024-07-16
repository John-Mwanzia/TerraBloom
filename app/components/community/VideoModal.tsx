import { UploadContext } from "@/app/context/store";
import React, {
  useState,
  useRef,
  ChangeEvent,
  DragEvent,
  useContext,
} from "react";
import { BiCloudUpload } from "react-icons/bi";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
  onEmbed: (link: string) => void;
}

function VideoModal({ isOpen, onClose, onUpload, onEmbed }: VideoModalProps) {
  const [mode, setMode] = useState("upload");
  const [file, setFile] = useState<File | null>(null);
  const [embedLink, setEmbedLink] = useState("");
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const { previewVideo, setPreviewVideo, setUploadedVideo } =
    useContext(UploadContext);
  const [initialVideo, setInitialVideo] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile || null);

    // Display a preview of the selected video
    if (selectedFile) {
      const videoUrl = URL.createObjectURL(selectedFile);
      setPreviewVideo(videoUrl);
    }
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setUploadedVideo(previewVideo);
    }
    onClose();
  };

  const handleEmbed = () => {
    if (embedLink) {
      onEmbed(embedLink);
      setUploadedVideo(embedLink);
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

      // Display a preview of the dropped video
      if (droppedFile) {
        const videoUrl = URL.createObjectURL(droppedFile);
        setPreviewVideo(videoUrl);
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "block" : "hidden"
      } flex items-center justify-center bg-black bg-opacity-80`}
    >
      <div className="modal-container w-[90%] rounded-lg bg-white p-6 shadow-lg dark:bg-black dark:border dark:border-gray-50/30 dark:text-white/70 md:w-[500px]">
        <div className="modal-header mb-4 flex justify-between">
          <h2 className="text-xl font-bold">Attach Video</h2>
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
              className={`mb-4 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-50/20 p-12 text-center`}
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
                accept="video/*"
                className="mt-4"
                onChange={handleFileChange}
              />
              {previewVideo && (
                <video
                  src={previewVideo}
                  controls
                  className="mx-auto max-h-80"
                ></video>
              )}
            </div>
          )}
          {mode === "embed" && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter video link"
                value={embedLink}
                onChange={(e) => {
                  setEmbedLink(e.target.value);
                  setInitialVideo(e.target.value);
                }}
                className="w-full rounded-lg border border-gray-200 p-2"
              />

              {initialVideo && (
                <video controls className="mx-auto max-h-80">
                  <source src={initialVideo} type="video/mp4" />
                </video>
              )}
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button
            className="mr-4 rounded-md bg-[#0E9AA9] px-4 py-2"
            onClick={mode === "upload" ? handleUpload : handleEmbed}
          >
            {mode === "upload" ? "Upload" : "Embed"}
          </button>
          <button
            className=""
            onClick={() => {
              setPreviewVideo(null);
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

export default VideoModal;
