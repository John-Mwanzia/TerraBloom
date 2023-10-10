import React from "react";

export default function ModalForm() {
  return (
    <div>
      <form action="">
      <div className="flex flex-col">
          <div className="mb-6">
            <input
              className="border-b border-gray-100 outline-none w-full pl-6"
              type="text"
              placeholder="Title"
            />
          </div>
          <div>
            <textarea
              className=" border-none  outline-none pl-6"
              name="content"
              id=""
              placeholder="content"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
