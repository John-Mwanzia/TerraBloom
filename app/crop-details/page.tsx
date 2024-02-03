import Image from "next/image";
import React from "react";
import Nav from "../components/HomeLanding/Nav";

export default function page() {
  return (
    <div className="flex justify-center items-center flex-col bg-zinc-100/50 overflow-x-hidden">
      <Nav />
      <div className=" w-[95%] sm:w-[90%] xl:w-[90%]  2xl:w-[80%] mt-6 flex justify-between ">
        <div className="flex flex-col gap-8  border-r border-gray-300 px-14">
          <div>
            <h1 className="text-3xl  font-bold">All Crops</h1>
          </div>
          <div className="flex flex-col gap-6 font-semibold">
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
        <div className=" w-[60%]  mb-24 ">
          <div className="bg-[#32CD32] px-4 py-4  pl-3">Crops</div>
          <div className="mt-6">
            <div className="flex justify-between px-8">
              <div>
                <Image
                  src="/cropDetails/mango.svg"
                  alt="mango"
                  width={252}
                  height={168}
                />
                <div className="bg-white px-4 pb-6 rounded-2xl shadow-xl relative -top-8">
                  <h2 className="text-center text-2xl font-semibold pt-2 mb-4">
                    Mango Farming
                  </h2>
                  <div className="flex justify-center">
                    <button className="flex gap-2 justify-center px-4 py-2 bg-[#32CD32] rounded-lg shadow-lg mb-6">
                      <Image
                        src="/cropDetails/file.svg"
                        alt="file"
                        width={24}
                        height={24}
                        className="shadow-lg"
                      />
                      Get Manual Guide
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/cropDetails/banana.svg"
                  alt="mango"
                  width={252}
                  height={168}
                />
                <div className="bg-white px-4 pb-6 rounded-2xl shadow-xl relative -top-8">
                  <h2 className="text-center text-2xl font-semibold pt-2 mb-4">
                    Banana Farming
                  </h2>
                  <div className="flex justify-center">
                    <button className="flex gap-2 justify-center px-4 py-2 bg-[#32CD32] rounded-lg shadow-lg mb-6">
                      <Image
                        src="/cropDetails/file.svg"
                        alt="file"
                        width={24}
                        height={24}
                        className="shadow-lg"
                      />
                      Get Manual Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-8">
              <div>
                <Image
                  src="/cropDetails/potato.svg"
                  alt="mango"
                  width={252}
                  height={168}
                />
                <div className="bg-white px-4 pb-6 rounded-2xl shadow-xl relative -top-8">
                  <h2 className="text-center text-2xl font-semibold pt-2 mb-4">
                    Potato Farming
                  </h2>
                  <div className="flex justify-center">
                    <button className="flex gap-2 justify-center px-4 py-2 bg-[#32CD32] rounded-lg shadow-lg mb-6">
                      <Image
                        src="/cropDetails/file.svg"
                        alt="file"
                        width={24}
                        height={24}
                        className="shadow-lg"
                      />
                      Get Manual Guide
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/cropDetails/mango.svg"
                  alt="mango"
                  width={252}
                  height={168}
                />
                <div className="bg-white px-4 pb-6 rounded-2xl shadow-xl relative -top-8">
                  <h2 className="text-center text-2xl font-semibold pt-2 mb-4">
                    Mango Farming
                  </h2>
                  <div className="flex justify-center">
                    <button className="flex gap-2 justify-center px-4 py-2 bg-[#32CD32] rounded-lg shadow-lg mb-6">
                      <Image
                        src="/cropDetails/file.svg"
                        alt="file"
                        width={24}
                        height={24}
                        className="shadow-lg"
                      />
                      Get Manual Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
