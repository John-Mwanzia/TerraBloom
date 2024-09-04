"use client";

import React, { useState } from "react";
import { TbGif } from "react-icons/tb";

import GifModal from "./GifModal";

export default function ChatGifModalButton() {
  const [isGifModalOpen, setGifModalOpen] = useState(false);

  const handleGifUpload = (gifUrl) => {
    // Handle the GIF upload logic here
    // For example, update the chat message with the GIF content
    console.log("GIF URL:", gifUrl);
  };
  return (
    <div>
      <button onClick={() => setGifModalOpen(true)} className="text-[#00FFFF] flex items-center jusc'">
        <TbGif size={32}  />
      </button>

      {isGifModalOpen && (
        <GifModal
          isOpen={isGifModalOpen}
          onClose={() => setGifModalOpen(false)}
          onUpload={handleGifUpload}
        />
      )}
    </div>
  );
}
