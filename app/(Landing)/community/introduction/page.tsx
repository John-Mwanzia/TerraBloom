'use client'

import PostModal from '@/app/components/community/PostModal';
import React, { useState } from 'react'

export default function page() {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <div className="h-[calc(100vh-5rem)] dark:text-white">
          <div className="flex justify-between px-4 py-4 items-center dark:bg-[#282B31]">
            <h1 className="  text-3xl dark:text-white">Introductions</h1>
            <button className="  bg-[#0E9AA9] rounded px-3 py-2" onClick={()=> setShowModal(true)}>Create Post</button>
          </div>
        </div>
        {showModal && <PostModal  setShowModal= {setShowModal}/>}
      </>
    );
}
