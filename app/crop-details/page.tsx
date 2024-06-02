import Image from "next/image";
import React from "react";
import Nav from "../components/HomeLanding/Nav";
import Aside from "../components/crop-details/Aside";

export default function page() {
  return (
    <div className="flex justify-center items-center flex-col bg-zinc-100/50 overflow-x-hidden">
      <div className="container">
        <Nav />
      </div>
      <div className=" container mt-6 flex gap-4 justify-between">
        <div className="z-50">
          <Aside />
        </div>
        <div className=" w-full sm:w-[60%]  mb-24 ">
          <div className="bg-[#32CD32] text-white font-sans text-2xl font-bold py-2 sm:py-4  pl-3">
            Crops
          </div>
          <div className="mt-6">
            <div className="flex justify-between flex-col sm:flex-row sm:px-8">
              <div>
                <Image
                  src="/cropDetails/mango.svg"
                  alt="mango"
                  width={252}
                  height={168}
                  className="w-full"
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
                  className="w-full"
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
            <div className="flex justify-between flex-col sm:flex-row sm:px-8">
              <div>
                <Image
                  src="/cropDetails/potato.svg"
                  alt="mango"
                  width={252}
                  height={168}
                  className="w-full"
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
                  className="w-full"
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
