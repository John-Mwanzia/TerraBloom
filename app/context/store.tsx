"use client";

import { createContext, useContext, useState } from "react";

export const ImageContext = createContext<{
  previewImage: string | null;
  setPreviewImage: (previewImage: string | null) => void;
  uploadedImage: string | null;
  setUploadedImage: (uploadedImage: string | null) => void;
}>({
  previewImage: null,
  setPreviewImage: () => {},
  uploadedImage: null,
  setUploadedImage: () => {},
});

export const ImageProvider = ({ children }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider
      value={{ previewImage, setPreviewImage, uploadedImage, setUploadedImage }}
    >
      {children}
    </ImageContext.Provider>
  );
};
