import Image from "next/image";
import React from "react";
import Nav from "../components/HomeLanding/Nav";

export default function page() {
  return (
    <div className="flex justify-center items-center flex-col overflow-x-hidden">
      <Nav />
      <div className=" w-[95%] sm:w-[90%] xl:w-[90%] 2xl:w-[80%] flex justify-between ">
        <div className="flex flex-col gap-4 mt-4 border-r border-gray-300 px-14">
          <div>
            <h1 className="text-3xl font-bold">All Crops</h1>
          </div>
          <div className="flex flex-col gap-4">
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
        <div className=" w-[60%] ">
          <div className="bg-[#32CD32] px-4 py-4  pl-3">Crops</div>
        </div>
      </div>
    </div>
  );
}
