'use client'

import { Paperclip } from 'lucide-react'
import React from 'react'

export default function ChatMediaShare() {
    const handleOpenImageUploadModal = () => {

        console.log('Open Image Upload Modal')
    }
  return (
    <button type="button"  className="flex items-center gap-2 text-[#00FFFF]" onClick={handleOpenImageUploadModal}>
    <Paperclip />

    </button>
  )
}
