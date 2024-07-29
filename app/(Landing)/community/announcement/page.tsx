'use client'

import Button from "@/app/components/community/Button";
import ModalDisplay from "@/app/components/community/ModalDisplay";
import PostModal from "@/app/components/community/PostModal";
import React, { useState } from "react";

export default function page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dark:text-white">
      <div className="flex items-center justify-between px-4 py-4  border-l border-t bg-white  pb-4 pt-3  dark:text-white dark:bg-[#282B31]">
        <h1 className="text-2xl sm:text-3xl dark:text-white">Announcements</h1>
        <Button />
      </div>
      <ModalDisplay />

    </div>
  );
}
