"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

type GifType = {
  images: {
    original: {
      url: string | null;
    } | null;
  } | null;
};

export const UploadContext = createContext<{
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
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
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
  showModal: false,
  setShowModal: () => {},
  theme: "dark" || "light",
  setTheme: () => {},
});

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [selectedGif, setSelectedGif] = useState<GifType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <UploadContext.Provider
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
        showModal,
        setShowModal,
        theme,
        setTheme,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
