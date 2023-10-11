// import React from "react";
// import ModalForm from "./ModalForm";
// import Image from "next/image";

// interface PostModalProps {
//   setShowModal: (value: boolean) => void;
// }

// export default function PostModal({ setShowModal }: PostModalProps) {
//   return (
//     <div className="bg-black/80 w-screen h-screen fixed  top-0 right-0">
//       <div>
//         <div className="bg-white w-[50rem] h-[40rem] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="flex justify-between px-4 pt-6 border-b-2 pb-2">
//             <h1 className="text-3xl">Create Post</h1>
//             <div className="flex gap-4 items-center">
//               <div>
//                 <button type="button" onClick={() => setShowModal(false)}>
//                   <Image
//                     src="/community/close.svg"
//                     alt="close"
//                     width={22}
//                     height={18}
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="mt-6">
//             <ModalForm />
//           </div>
//           <div className="flex justify-between absolute bottom-4 px-6 border-t-2  w-full pt-4">
//             <div className="flex gap-6">
//               <div>
//                 <button>
//                   <Image
//                     src="/community/attach.svg"
//                     alt="close"
//                     width={22}
//                     height={18}
//                   />
//                 </button>
//               </div>
//               <div>
//                 <button>
//                   <Image
//                     src="/community/video.svg"
//                     alt="close"
//                     width={22}
//                     height={18}
//                   />
//                 </button>
//               </div>
//               <div>
//                 <button>
//                   <Image
//                     src="/community/imageUpload.svg"
//                     alt="close"
//                     width={22}
//                     height={18}
//                   />
//                 </button>
//               </div>
//               <div>
//                 <button>
//                   <Image
//                     src="/community/gif.svg"
//                     alt="close"
//                     width={22}
//                     height={18}
//                   />
//                 </button>
//               </div>
//               <div>
//                 <button>
//                   <Image
//                     src="/community/emoji.svg"
//                     alt="close"
//                     width={22}
//                     height={18}
//                   />
//                 </button>
//               </div>
//             </div>

//             <button className="bg-[#0E9AA9] rounded px-3 py-2">Post</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// PostModal.js
import React, { useState } from "react";
import ModalForm from "./ModalForm";
import Image from "next/image";
import VideoModal from "./VideoModal";
import AttachFileModal from "./AttachFileModal";

export default function PostModal({ setShowModal }) {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [isAttachFileModalOpen, setAttachFileModalOpen] = useState(false);

  const handleOpenAttachFileModal = () => {
    setAttachFileModalOpen(true);
  };

  const handleUploadVideo = (file) => {
    // Handle video upload logic here
    // You can update the 'text' state with the video content
    const videoContent = `[Video: ${file.name}]`;
    setText(text + videoContent);
  };

  const handleOpenVideoModal = () => {
    setVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
  };

  return (
    <div className="bg-black/80 w-screen h-screen fixed  top-0 right-0">
      <div>
        <div className="bg-white w-[50rem] h-[40rem] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between px-4 pt-6 border-b-2 pb-2">
            <h1 className="text-3xl">Create Post</h1>
            <div className="flex gap-4 items-center">
              <div>
                <button type="button" onClick={() => setShowModal(false)}>
                  <Image
                    src="/community/close.svg"
                    alt="close"
                    width={22}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <ModalForm />
          </div>
          <div className="flex justify-between absolute bottom-4 px-6 border-t-2  w-full pt-4">
            <div className="flex gap-6">
              <div>
                <button onClick={handleOpenAttachFileModal}>
                  <Image
                    src="/community/attach.svg"
                    alt="Attach File"
                    width={22}
                    height={18}
                  />
                </button>
              </div>
              <div>
                <button onClick={handleOpenVideoModal}>
                  <Image
                    src="/community/video.svg"
                    alt="video"
                    width={22}
                    height={18}
                  />
                </button>
              </div>
              {/* Add buttons for other actions here */}
            </div>

            <button className="bg-[#0E9AA9] rounded px-3 py-2">Post</button>
          </div>
        </div>
      </div>
      <AttachFileModal
        isOpen={isAttachFileModalOpen}
        onClose={() => setAttachFileModalOpen(false)}
        onAttach={(file) => {
          // Handle attaching the file here
          // You can update the state or perform any necessary actions
          console.log("Attached file:", file);
          // Close the modal
          setAttachFileModalOpen(false);
        }}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        onUpload={handleUploadVideo}
        onEmbed={() => {}}
      />
      <div contentEditable="true">{text}</div>
    </div>
  );
}
