'use client';

import { UploadContext } from "@/app/context/store";
import React, { useContext } from "react";
const { showModal, setShowModal } = useContext(UploadContext);


export default function Button() {
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
