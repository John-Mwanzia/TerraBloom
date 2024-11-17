"use client";

import { ArrowLeftFromLine } from "lucide-react";
import React, { useEffect, useState } from "react";

interface CropType {
  name: string;
  category: string;
  image: string;
  manualPdf: string;
}

export default function Aside({crops}: {crops: CropType[]}) {
  const [toggleAside, settoggleAside] = useState(false);

  useEffect(() => {
    console.log(toggleAside);

    if (toggleAside) {
      document.body.style.overflow = "hidden"; // Hide scroll
    } else {
      document.body.style.overflow = "unset"; // Show scroll
    }
  }, [toggleAside]);

  return (
    <div className="flex">
      <div className={` ${toggleAside ? "z-50" : ""} `}>
        <button
          className={`h-auto min-h-min w-auto rotate-180 rounded bg-[#32CD32] p-1 sm:hidden`}
          onClick={() => settoggleAside(!toggleAside)}
        >
          <ArrowLeftFromLine className="text-white" />
        </button>
      </div>
      <div
        className={`${
          toggleAside ? "fixed top-[15vh] w-full bg-zinc-100" : "hidden"
        } flex-col gap-8 border-r border-gray-300 px-24 sm:flex sm:px-14`}
      >
        <div>
          <h1 className="whitespace-nowrap text-3xl font-bold">All Crops</h1>
        </div>
        <div className="flex flex-col gap-6 pb-6 font-sans">
          {
            crops.map((crop, index) => (
              <h3 key={index}>{crop.name}</h3>
            ))
          }
          {/* <h3>Vegetables</h3>
          <h3>Mangos</h3>
          <h3>Banana</h3>
          <h3>Beans</h3>
          <h3>Potatoes</h3>
          <h3>Tomatoes</h3>
          <h3>Carrots</h3>
          <h3>Garlic</h3>
          <h3>Onions</h3>
          <h3>Watermelon</h3>
          <h3>Passion Fruits</h3>
          <h3>Sorghum</h3>
          <h3>Lettuce</h3> */}
        </div>
      </div>
    </div>
  );
}
