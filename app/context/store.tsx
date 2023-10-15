"use client";

import { createContext, useContext,ReactNode, useState } from "react";

type GifType = {
  images: {
    original: {
      url: string | null;
    } | null;
  } | null;
};

export const ImageContext = createContext<{
  previewImage: string | null;
  setPreviewImage: (previewImage: string | null) => void;
  uploadedImage: string | null;
  setUploadedImage: (uploadedImage: string | null) => void;
  previewVideo: string | null;
  setPreviewVideo: (previewVideo: string | null) => void;
  uploadedVideo: string | null;
  setUploadedVideo: (uploadedVideo: string | null) => void;
  fileName: string | null;
  setFileName: (fileName: string | null) => void;
  previewFile: string | null;
  setPreviewFile: (previewFile: string | null) => void;
  uploadedFile: string | null;
  setUploadedFile: (uploadedFile: string | null) => void;
  selectedGif: GifType | null;
  setSelectedGif: (selectedGif: GifType | null) => void;
}>({
  previewImage: null,
  setPreviewImage: () => {},
  uploadedImage: null,
  setUploadedImage: () => {},
  previewVideo: null,
  setPreviewVideo: () => {},
  uploadedVideo: null,
  setUploadedVideo: () => {},
  fileName: null,
  setFileName: () => {},
  previewFile: null,
  setPreviewFile: () => {},
  uploadedFile: null,
  setUploadedFile: () => {},
  selectedGif: null,
  setSelectedGif: () => {},
});


export const ImageProvider = ({ children } : { children: ReactNode }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [selectedGif, setSelectedGif] = useState<GifType | null>(null);

  return (
    <ImageContext.Provider
      value={{
        previewImage,
        setPreviewImage,
        uploadedImage,
        setUploadedImage,
        previewVideo,
        setPreviewVideo,
        uploadedVideo,
        setUploadedVideo,
        fileName,
        setFileName,
        previewFile,
        setPreviewFile,
        uploadedFile,
        setUploadedFile,
        selectedGif,
        setSelectedGif,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
