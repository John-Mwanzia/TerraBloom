// page.tsx
import React from "react";
import Nav from "../components/HomeLanding/Nav";
// import Aside from "../components/crop-details/Aside";
import { auth } from "@clerk/nextjs";
import prisma from "@/modules/db";
import CropList from "../components/crop-details/CropList";

const ITEMS_PER_PAGE = 8; // Show 8 items per page

export default async function page({ searchParams }: { searchParams: { page?: string } }) {
  const { userId } = auth();
  
  // Determine the current page from search parameters, default to 1
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  // Fetch crop details with pagination
  const cropDetails = await prisma.crop.findMany({
    select: {
      name: true,
      category: true,
      image: true,
      manualPdf: true
    },
    skip: offset,
    take: ITEMS_PER_PAGE
  });

  // Fetch total number of crops for pagination
  const totalCrops = await prisma.crop.count();
  const totalPages = Math.ceil(totalCrops / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden bg-zinc-100/50">
      <div className="container">
        <Nav userId={userId} />
      </div>
      <div className="container mt-6 flex justify-between gap-4">
        {/* <div className="z-50">
          <Aside crops={cropDetails} />
        </div> */}
        <div className="mb-24 w-full">
          <div className="bg-[#32CD32] py-2 pl-3 font-sans text-2xl font-bold text-white sm:py-4">
            Crops
          </div>
          <div className="mt-6">
            <CropList 
              crops={cropDetails} 
              currentPage={currentPage} 
              totalPages={totalPages} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
