import React from "react";

export default function page() {
  return (
    <>
      <div className="  h-[calc(100vh-5rem)]">
        <div className="flex justify-between px-4 pt-6">
          <h1 className="  text-3xl">Home</h1>
          <button className="  bg-[#0E9AA9] rounded px-3 py-2">Create Post</button>
        </div>
        <div className="flex flex-col items-center pt-24 gap-16 relative">
          <div className="flex gap-16 flex-wrap">
            <div className="w-[29.3rem] h-[12.3rem] bg-white shadow-2xl rounded-xl"></div>
            <div className="w-[29.3rem] h-[12.3rem] bg-white shadow-2xl rounded-xl"></div>
          </div>
          <div className="flex gap-16 flex-wrap">
            <div className="w-[29.3rem] h-[12.3rem] bg-white shadow-2xl rounded-xl"></div>
            <div className="w-[29.3rem] h-[12.3rem] bg-white shadow-2xl rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
