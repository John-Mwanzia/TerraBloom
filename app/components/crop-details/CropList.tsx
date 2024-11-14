// components/CropList.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Pagination, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";

interface CropType {
  name: string;
  category: string;
  image: string;
  manualPdf: string;
}

interface CropListProps {
  crops: CropType[];
  currentPage: number;
  totalPages: number;
}

const CropList: React.FC<CropListProps> = ({ crops, currentPage, totalPages }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {crops.map((crop, index) => (
          <div key={index} className="mb-4">
            <Image
              src={crop.image}
              alt={crop.name}
              width={252}
              height={168}
              className="w-full max-h-[168px] object-cover rounded-2xl"
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
        ))}
      </div>

      {/* Pagination Controls */}
      <Pagination>
        <PaginationPrevious>
          <Link href={`?page=${currentPage - 1}`} aria-disabled={currentPage <= 1}>
            Previous
          </Link>
        </PaginationPrevious>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index} className={index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"}>
            <PaginationLink>
              <Link href={`?page=${index + 1}`}>{index + 1}</Link>
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationNext>
          <Link href={`?page=${currentPage + 1}`} aria-disabled={currentPage >= totalPages}>
            Next
          </Link>
        </PaginationNext>
      </Pagination>
    </>
  );
};

export default CropList;
