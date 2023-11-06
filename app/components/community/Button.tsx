"use client";

import { UploadContext } from "@/app/context/store";
import React, { useContext } from "react";

export default function Button() {
  const { showModal, setShowModal } = useContext(UploadContext);

  return (
    <>
      <button
        className="bg-[#0E9AA9] rounded px-3 py-2"
        onClick={() => setShowModal(true)}
      >
        Create Post
      </button>
    </>
  );
}
