// app/page.tsx (or wherever your page component is located)
import { auth } from "@clerk/nextjs";
import Nav from "../components/HomeLanding/Nav";
// import Aside from "../components/crop-details/Aside";
import prisma from "@/modules/db";
import CropsList from "../components/crop-details/CropList";

export default async function Page() {
  const {userId} =  auth()
  // Fetch all crops data from the database
  const cropDetails = await prisma.crop.findMany({
    select: {
      name: true,
      category: true,
      image: true,
      manualPdf: true,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden bg-zinc-100/50">
      <div className="container">
        <Nav userId={userId} />
      </div>
      <div className="container mt-6 flex justify-between gap-4">
        {/* <div className="z-50">
          <Aside crops={cropDetails} />
        </div> */}
        <div className="mb-24 w-full ">
          <div className="bg-[#32CD32] py-2 pl-3 font-sans text-2xl font-bold text-white sm:py-4">
            Crops
          </div>
          {/* Pass the crop details to the client component */}
          <CropsList crops={cropDetails} />
        </div>
      </div>
    </div>
  );
}
