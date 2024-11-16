"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CropAddPage() {
  const [cropName, setCropName] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cropName || !category || !imageUrl || !pdfUrl) {
      alert("Please fill in all fields and upload both files.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/crops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cropName,
          category,
          image: imageUrl,
          manualPdf: pdfUrl,
        }),
      });

      if (!response.ok) throw new Error("Failed to add crop");

      toast.success("Crop added successfully!");
      setCropName("");
      setCategory("");
      setImageUrl(null);
      setPdfUrl(null);
    } catch (error) {
      alert(`Error: ${(error as Error).message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 p-8">
      <h1 className="mb-6 text-2xl font-bold">Add a New Crop</h1>
      <form
        className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Crop Name
          </label>
          <input
            type="text"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter crop name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter category"
            required
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Crop Image
          </label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res && res[0]) setImageUrl(res[0].url);
              console.log("Files", res[0].url);
              alert("Image upload successful!");
            }}
            onUploadError={(error: Error) =>
              alert(`Image upload failed: ${error.message}`)
            }
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Manual PDF
          </label>
          <UploadDropzone
            endpoint="productPdf" 
            onClientUploadComplete={(res) => {
              if (res && res[0]) setPdfUrl(res[0].url);
              console.log("res", res);
              alert("PDF upload successful!");
            }}
            onUploadError={(error: Error) =>
              alert(`PDF upload failed: ${error.message}`)
            }
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Add Crop"}
        </button>
      </form>
    </main>
  );
}
