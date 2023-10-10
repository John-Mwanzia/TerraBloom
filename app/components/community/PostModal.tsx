import React from "react";
import ModalForm from "./ModalForm";
import Image from "next/image";

interface PostModalProps {
    setShowModal: (value: boolean) => void;
  }
  


export default function PostModal({ setShowModal}: PostModalProps) {
  return (
    <div className="bg-black/80 w-screen h-screen fixed  top-0 right-0">
      <div>
        <div className="bg-white w-[50rem] h-[40rem] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between px-4 pt-6 border-b-2 pb-2">
            <h1 className="text-3xl">Create Post</h1>
            <div className="flex gap-4 items-center">
              <div>
                <button type="button" onClick={()=> setShowModal(false)}>
                  <Image
                    src="/community/close.svg"
                    alt="close"
                    width={22}
                    height={18}
                  />
                </button>
              </div>
              <button className="bg-[#0E9AA9] rounded px-3 py-2">Post</button>
            </div>
          </div>
          <div className="mt-6">
            <ModalForm />
          </div>
        </div>
      </div>
    </div>
  );
}
