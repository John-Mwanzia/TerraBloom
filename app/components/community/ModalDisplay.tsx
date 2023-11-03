import { UploadContext } from "@/app/context/store";
import React, { useContext } from "react";
import PostModal from "./PostModal";
const { showModal, setShowModal } = useContext(UploadContext);

export default function ModalDisplay() {
  return <>{showModal && <PostModal setShowModal={setShowModal} />}</>;
}
