import { UploadContext } from "@/app/context/store";
import React, { useContext } from "react";
import PostModal from "./PostModal";

export default function ModalDisplay() {
const { showModal, setShowModal } = useContext(UploadContext);

  return <>{showModal && <PostModal setShowModal={setShowModal} />}</>;
}
