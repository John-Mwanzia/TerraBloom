import Image from "next/image";
import React from "react";
import Nav from "../components/HomeLanding/Nav";
import Aside from "../components/crop-details/Aside";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden bg-zinc-100/50">
      <div className="container">
        <Nav />
      </div>
      <div className="container mt-6 flex justify-between gap-4">
        <div className="z-50">
          <Aside />
        </div>
        <div className="mb-24 w-full sm:w-[60%]">
          <div className="bg-[#32CD32] py-2 pl-3 font-sans text-2xl font-bold text-white sm:py-4">
            Crops
          </div>
          <div className="mt-6">
            <div className="flex flex-col justify-between sm:flex-row sm:px-8">
              <div>
                <Image
                  src="/cropDetails/mango.svg"
                  alt="mango"
                  width={252}
                  height={168}
                  className="w-full"
                />
                <div className="relative -top-8 rounded-2xl bg-white px-4 pb-6 shadow-xl">
                  <h2 className="mb-4 pt-2 text-center text-2xl font-semibold">
                    Mango Farming
                  </h2>
                  <div className="flex justify-center">
                    <button className="mb-6 flex justify-center gap-2 rounded-lg bg-[#32CD32] px-4 py-2 shadow-lg">
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
                <div className="relative -top-8 rounded-2xl bg-white px-4 pb-6 shadow-xl">
                  <h2 className="mb-4 pt-2 text-center text-2xl font-semibold">
                    Banana Farming
                  </h2>
                  <div className="flex justify-center">
                    <button className="mb-6 flex justify-center gap-2 rounded-lg bg-[#32CD32] px-4 py-2 shadow-lg">
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
            <div className="flex flex-col justify-between sm:flex-row sm:px-8">
              <div>
                <Image
                  src="/cropDetails/potato.svg"
                  alt="mango"
                  width={252}
                  height={168}
                  className="w-full"
                />
                <div className="relative -top-8 rounded-2xl bg-white px-4 pb-6 shadow-xl">
                  <h2 className="mb-4 pt-2 text-center text-2xl font-semibold">
                    Potato Farming
                  </h2>
                  <div className="flex justify-center">
                    <button className="mb-6 flex justify-center gap-2 rounded-lg bg-[#32CD32] px-4 py-2 shadow-lg">
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
                <div className="relative -top-8 rounded-2xl bg-white px-4 pb-6 shadow-xl">
                  <h2 className="mb-4 pt-2 text-center text-2xl font-semibold">
                    Mango Farming
                  </h2>
                  <div className="flex justify-center">
                    <button className="mb-6 flex justify-center gap-2 rounded-lg bg-[#32CD32] px-4 py-2 shadow-lg">
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
