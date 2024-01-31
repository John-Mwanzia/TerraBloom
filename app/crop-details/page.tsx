import Image from "next/image";
import React from "react";
import Nav from "../components/HomeLanding/Nav";

export default function page() {
  return (
    <div className="flex justify-center items-center flex-col overflow-x-hidden">
      <Nav />
      <div className=" w-[95%] sm:w-[90%] xl:w-[90%] 2xl:w-[80%] flex justify-between ">
        <div>
          <h1 className="text-3xl font-bold">
            All Crops
          </h1>
        </div>
        <div className="bg-[#32CD32] pl-3 w-[75%] px-4 py-4">
          Crops
        </div>
      </div>
    </div>
  );
}
