"use client";

import { UploadContext } from "@/app/context/store";
import React, { useContext } from "react";

export default function Button() {
  const { setShowModal } = useContext(UploadContext);

  return (
    <>
      <button
        className="rounded bg-[#0E9AA9] px-3 py-2"
        onClick={() => setShowModal(true)}
      >
        Create Post
      </button>
    </>
  );
}
