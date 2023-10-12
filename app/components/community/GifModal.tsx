import React from "react";
import ReactGiphySearchbox from 'react-giphy-searchbox'

export default function GifModal({ isOpen, onClose, onUpload }: any) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"} bg-black bg-opacity-80 flex items-center justify-center`}>
      <div className="modal-container p-6 bg-white w-[500px] rounded-lg shadow-lg">
        <div className="modal-header flex justify-between mb-4">
          <h2 className="text-xl font-bold">Choose a GIF</h2>
          <button className="modal-close text-3xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="flex justify-center">
          <div className="mb-4 ">
            <ReactGiphySearchbox
              apiKey="pXDMLXZW5bcvRo7M1yulP9Y32QW3pO7l" 
              onSelect={(item: any) => onUpload(item)}
              masonryConfig={[
                { columns: 2, imageWidth: 110, gutter: 5 },
                { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                ]}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
