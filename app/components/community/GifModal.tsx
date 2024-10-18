import { UploadContext } from "@/app/context/store";
import React, { useContext } from "react";
import ReactGiphySearchbox from "react-giphy-searchbox";

interface GifModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (gifUrl: string) => void;
}

export default function GifModal({ isOpen, onClose,onUpload }: GifModalProps) {
  const { setSelectedGif } = useContext(UploadContext);
  console.log(onUpload)

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "block" : "hidden"
      } flex items-center justify-center bg-black bg-opacity-80`}
    >
      <div className="w-[90%] rounded-lg bg-white p-6 shadow-lg dark:border dark:border-gray-50/30 dark:bg-black dark:text-white/70 md:w-[500px]">
        <div className="mb-4 flex justify-between">
          <h2 className="text-xl font-bold">Choose a GIF</h2>
          <button className="text-3xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="flex justify-center">
          <div className="mb-4">
            <ReactGiphySearchbox
              apiKey={process.env.NEXT_PUBLIC_REACT_GIF_API_KEY}
              onSelect={(item: never) => {
                setSelectedGif(item);
                onClose();
              }}
              masonryConfig={[
                { columns: 2, imageWidth: 110, gutter: 5 },
                { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 },
              ]}
            />
          </div>
        </div>
        <div className="">
          <button className="" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
