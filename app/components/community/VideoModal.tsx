// // VideoModal.js
// import React, { useState, useRef } from "react";

// interface VideoModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onUpload: (file: File) => void;
//   onEmbed: (link: string) => void;
// }

// function VideoModal({ isOpen, onClose, onUpload, onEmbed }: VideoModalProps) {
//   const [mode, setMode] = useState("upload");
//   const [file, setFile] = useState<File | null>(null);

//   const [embedLink, setEmbedLink] = useState("");
//   const dropAreaRef = useRef<HTMLDivElement>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files && event.target.files[0];
//     setFile(selectedFile || null);
//   };

//   const handleUpload = () => {
//     if (file) {
//       onUpload(file);
//     }
//     onClose();
//   };

//   const handleEmbed = () => {
//     // Handle embedding logic here
//     if (embedLink) {
//       onEmbed(embedLink);
//     }
//     onClose();
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     if (dropAreaRef.current) {
//       dropAreaRef.current.classList.add("border-dashed", "border-[#0E9AA9]");
//     }
//   };

//   const handleDragLeave = () => {
//     if (dropAreaRef.current) {
//       dropAreaRef.current.classList.remove("border-dashed", "border-[#0E9AA9]");
//     }
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     if (dropAreaRef.current) {
//       dropAreaRef.current.classList.remove("border-dashed", "border-[#0E9AA9]");

//       const droppedFile = e.dataTransfer.files[0];
//       setFile(droppedFile || null);
//     }
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-50 ${
//         isOpen ? "block" : "hidden"
//       } bg-black bg-opacity-80 flex items-center justify-center`}
//     >
//       <div className="modal-container p-6 bg-white w-[500px] rounded-lg shadow-lg">
//         <div className="modal-header flex justify-between mb-4">
//           <h2 className="text-xl font-bold">Attach Video</h2>
//           <button className="modal-close text-3xl" onClick={onClose}>
//             &times;
//           </button>
//         </div>
//         <div className="modal-body">
//           <div className="mb-4">
//             <p>
//               <span
//                 className={`cursor-pointer ${
//                   mode === "upload" ? "underline" : ""
//                 }`}
//                 onClick={() => setMode("upload")}
//               >
//                 Upload
//               </span>{" "}
//               |{" "}
//               <span
//                 className={`cursor-pointer ${
//                   mode === "embed" ? "underline" : ""
//                 }`}
//                 onClick={() => setMode("embed")}
//               >
//                 Embed Link
//               </span>
//             </p>
//           </div>
//           {mode === "upload" && (
//             <div
//               ref={dropAreaRef}
//               className={`border border-gray-200 p-12 mb-4 text-center cursor-pointer rounded-lg`}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               <p>Drop your .Mp4 video here</p>
//               <input
//                 type="file"
//                 accept="video/*"
//                 className="mt-4"
//                 onChange={handleFileChange}
//               />
//             </div>
//           )}
//           {mode === "embed" && (
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Enter video link"
//                 value={embedLink}
//                 onChange={(e) => setEmbedLink(e.target.value)}
//                 className="border border-gray-200 p-2 rounded-lg w-full"
//               />
//               <button
//                 className="bg-[#0E9AA9] mt-4 py-2 px-4 rounded-md ml-72"
//                 onClick={handleEmbed}
//               >
//                 Submit Link
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="modal-footer">
//           <button
//             className="btn btn-primary"
//             onClick={mode === "upload" ? handleUpload : handleEmbed}
//           >
//             {mode === "upload" ? "Upload" : "Embed"}
//           </button>
//           <button className="btn btn-secondary" onClick={onClose}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoModal;

import { UploadContext } from "@/app/context/store";
import React, {
  useState,
  useRef,
  ChangeEvent,
  DragEvent,
  useContext,
  use,
  useEffect,
} from "react";

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
  const { previewVideo, setPreviewVideo, setUploadedVideo } = useContext(
    UploadContext
  );
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
      } bg-black bg-opacity-80 flex items-center justify-center`}
    >
      <div className="modal-container p-6 bg-white  w-[90%] md:w-[500px] rounded-lg shadow-lg">
        <div className="modal-header flex justify-between mb-4">
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
              className={`border border-gray-200 p-12 mb-4 text-center cursor-pointer rounded-lg`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <p>Drop your .mp4 video here</p>
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
                  className="max-h-80 mx-auto"
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
                className="border border-gray-200 p-2 rounded-lg w-full"
              />

              {initialVideo && (
                <video controls className="max-h-80 mx-auto">
                  <source src={initialVideo} type="video/mp4" />
                </video>
              )}
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button
            className="mr-4 bg-[#0E9AA9] py-2 px-4 rounded-md"
            onClick={mode === "upload" ? handleUpload : handleEmbed}
          >
            {mode === "upload" ? "Upload" : "Embed"}
          </button>
          <button className="" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
