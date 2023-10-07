import React from "react";

export default function page() {
  return (
    <>
    <div className="flex flex-col items-center pt-24 gap-16 relative flex-wrap">
      <h1 className="absolute top-6 left-72">Home</h1>
       <div className="flex gap-16 flex-wrap">
          <div className="w-[29.3rem] h-[12.3rem] bg-white shadow-2xl rounded-xl"></div>
          <div className="w-[29.3rem] h-[12.3rem] bg-white shadow-2xl rounded-xl"></div>
       </div>
       <div className="flex gap-16 flex-wrap">
          <div className="w-[29.3rem] h-[12.3rem] bg-white shadow-2xl rounded-xl"></div>
          <div className="w-[29.3rem] h-[12.3rem] bg-white shadow-2xl rounded-xl"></div>
       </div>
    </div>
    </>
  );
}
