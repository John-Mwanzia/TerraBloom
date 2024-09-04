import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex justify-between border-l border-t bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
        <h1 className="text-3xl">Support</h1>
      </div>
      <div className="p-4">
        <p className="text-lg">
          If you have any questions or need help, please don't hesitate to
          contact us. We are here to help you.
        </p>
      </div>
      <div>
        <form className="relative flex items-center justify-center gap-16 px-2 sm:px-0">
          <div className=" w-[80%] bg-white rounded-xl shadow-xl pt-8 pb-24 px-20">
            <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-around w-full">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-black/65">
                  Name
                </label>
                <input
                  className="border-b border-black/40 bg-transparent outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-black/65">
                  Email
                </label>
                <input
                  type="email"
                  className="border-b border-black/40 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-around w-full">
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-black/65">
                  Phone
                </label>
                <input
                  type="text"
                  className="border-b border-black/40 bg-transparent outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Subject" className="text-black/65">
                  Subject
                </label>
                <input
                  type="text"
                  className="border-b border-black/40 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                cols={30}
                className="border-b border-black/40 bg-transparent outline-none"
                name=""
                id=""
              ></textarea>
            </div>

            <div className="flex justify-end mt-12">
              <button
                type="submit"
                className="cursor-pointer rounded-xl bg-[#011C2A] px-6 py-3 text-white/90 shadow-2xl transition-all duration-300 ease-in-out hover:bg-[#011C2B]"
              >
                Send Message
              </button>
            </div>

            <img
              src="/bloomCommAssets/letterSend.svg"
              className="absolute -bottom-48 right-10"
              alt="lettersend"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
