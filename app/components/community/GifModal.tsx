// GifModal.js
import React, { useState } from "react";

// Define the GifModalProps interface for type checking
interface GifModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (gif: string) => void;
  gifPacks: string[];
}

function GifModal({ isOpen, onClose, onUpload, gifPacks }: GifModalProps) {
  // State variables for controlling the modal
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle GIF selection
  const handleGifSelect = (gif: string) => {
    setSelectedGif(gif);
  };

  // Function to handle the upload process
  const handleUpload = () => {
    if (selectedGif) {
      onUpload(selectedGif);
    }
    onClose();
  };

  const dummyGifs = {
    "Pack 1": [
      { title: "GIF 1", url: "https://example.com/gif1.gif" },
      { title: "GIF 2", url: "https://example.com/gif2.gif" },
      // Add more GIFs for "Pack 1"
    ],
    "Pack 2": [
      { title: "GIF 3", url: "https://example.com/gif3.gif" },
      { title: "GIF 4", url: "https://example.com/gif4.gif" },
      // Add more GIFs for "Pack 2"
    ],
    // Define more packs and their respective GIFs
  };
  

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "block" : "hidden"
      } bg-black bg-opacity-80 flex items-center justify-center`}
    >
      <div className="modal-container p-6 bg-white w-[500px] rounded-lg shadow-lg">
        <div className="modal-header flex justify-between mb-4">
          <h2 className="text-xl font-bold">Choose a GIF</h2>
          <button className="modal-close text-3xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search GIFs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-200 p-2 rounded-lg w-full"
            />
          </div>
          <div className="gif-packs">
            {gifPacks.map((pack, index) => (
              <div key={index} className="gif-pack">
                <h3 className="pack-title">{pack}</h3>
                <div className="gif-list">
                  {/* Map through GIFs in the pack and display them */}
                  {dummyGifs[pack].map((gif, gifIndex) => (
                    <img
                      key={gifIndex}
                      src={gif.url}
                      alt={gif.title}
                      onClick={() => handleGifSelect(gif.url)}
                    />
                  ))}
                </div>
              </div>
            ))}
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

export default GifModal;
