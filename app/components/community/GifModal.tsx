import { UploadContext } from "@/app/context/store";
import React, { useContext} from "react";
import ReactGiphySearchbox from "react-giphy-searchbox";

export default function GifModal({ isOpen, onClose, onUpload }: any) {
  const { setSelectedGif } = useContext(UploadContext);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "block" : "hidden"
      } bg-black bg-opacity-80 flex items-center justify-center`}
    >
      <div className=" p-6 bg-white  w-[90%] md:w-[500px] rounded-lg shadow-lg">
        <div className=" flex justify-between mb-4">
          <h2 className="text-xl font-bold">Choose a GIF</h2>
          <button className=" text-3xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="flex justify-center">
          <div className="mb-4 ">
            <ReactGiphySearchbox
              apiKey="pXDMLXZW5bcvRo7M1yulP9Y32QW3pO7l"
              onSelect={(item: any) => {
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
