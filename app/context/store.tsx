"use client";

import { createContext, useContext, useState } from "react";

export const ImageContext = createContext<{
  previewImage: string | null;
  setPreviewImage: (previewImage: string | null) => void;
  uploadedImage: string | null;
  setUploadedImage: (uploadedImage: string | null) => void;
  previewVideo: string | null;
  setPreviewVideo: (previewVideo: string | null) => void;
  uploadedVideo: string | null;
  setUploadedVideo: (uploadedVideo: string | null) => void;
}>({
  previewImage: null,
  setPreviewImage: () => {},
  uploadedImage: null,
  setUploadedImage: () => {},
  previewVideo: null,
  setPreviewVideo: () => {},
  uploadedVideo: null,
  setUploadedVideo: () => {},
});

export const ImageProvider = ({ children }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);

  return (
    <ImageContext.Provider
      value={{ previewImage, setPreviewImage, uploadedImage, setUploadedImage , previewVideo, setPreviewVideo, uploadedVideo, setUploadedVideo}}
    >
      {children}
    </ImageContext.Provider>
  );
};
