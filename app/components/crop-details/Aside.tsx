"use client";

import { ArrowLeftFromLine } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Aside() {
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
    <div className="flex ">
      <div
        className={`
      ${toggleAside ? "z-50" : ""}
      `}
      >
        <button
          className={`rotate-180 bg-[#32CD32] w-auto sm:hidden 
           h-auto min-h-min p-1 rounded`}
          onClick={() => settoggleAside(!toggleAside)}
        >
          <ArrowLeftFromLine className="text-white" />
        </button>
      </div>
      <div
        className={`${
          toggleAside ? "fixed bg-zinc-100 w-full top-[15vh]" : "hidden"
        } flex-col gap-8 border-r border-gray-300 px-24 sm:px-14 sm:flex`}
      >
        <div>
          <h1 className="text-3xl whitespace-nowrap font-bold">All Crops</h1>
        </div>
        <div className="flex flex-col gap-6 font-semibold pb-6">
          <h3>Vegetables</h3>
          <h3>Mangos</h3>
          <h3>Banana</h3>
          <h3>Beans</h3>
          <h3>Potatoes</h3>
          <h3>Tomatoes</h3>
          <h3>Vegetables</h3>
          <h3>Vegetables</h3>
          <h3>Vegetables</h3>
          <h3>Vegetables</h3>
          <h3>Vegetables</h3>
          <h3>Vegetables</h3>
          <h3>Vegetables</h3>
        </div>
      </div>
    </div>
  );
}
