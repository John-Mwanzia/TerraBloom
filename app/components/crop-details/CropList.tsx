// app/CropsList.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomPagination from "./PaginationControls";

interface CropType {
  name: string;
  category: string;
  image: string;
  manualPdf: string;
}

interface CropsListProps {
  crops: CropType[];
}

const CropsList: React.FC<CropsListProps> = ({ crops }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cropsPerPage = 8;
  const totalPages = Math.ceil(crops.length / cropsPerPage);

  // Calculate crops for the current page
  const currentCrops = crops.slice(
    (currentPage - 1) * cropsPerPage,
    currentPage * cropsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {currentCrops.map((crop, index) => (
        <CropComponent key={index} crop={crop} />
      ))}
    </div>
    <div className="flex flex-col items-center mt-6">
      {/* Pagination Component */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Message with link to request a crop */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>
          Can&apos;t find the crop you need?{" "}
          <a
            href="/crop-request"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to request it.
          </a>
        </p>
      </div>
    </div>
  </div>
  );
};

const CropComponent = ({ crop }: { crop: CropType }) => {
  return (
    <div>
      <Image
        src={crop.image}
        alt={crop.name}
        width={252}
        height={168}
        className="max-h-[168px] w-full rounded-2xl object-cover"
      />
      <div className="relative -top-8 rounded-2xl bg-white px-4 pb-6 shadow-xl">
        <h2 className="mb-4 pt-2 text-center text-2xl font-semibold">
          {crop.name}
        </h2>
        <div className="flex justify-center">
          <a
            className="mb-6 flex justify-center gap-2 rounded-lg bg-[#32CD32] px-4 py-2 shadow-lg"
            href={crop.manualPdf}
            target="_blank"
            rel="noopener noreferrer"
            download={`${crop.name}.pdf`}
          >
            <Image
              src="/cropDetails/file.svg"
              alt="file"
              width={24}
              height={24}
              className="shadow-lg"
            />
            Get Manual Guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default CropsList;
