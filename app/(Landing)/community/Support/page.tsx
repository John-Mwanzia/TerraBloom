"use client";

import { createContactSupport } from "@/actions/contact";
import Image from "next/image";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { object, string } from "yup";

const userSchema = object({
  name: string().required(),
  email: string().email().required(),
  phone: string().required(),
  subject: string().required(),
  message: string().required(),
});
export default function Page() {
  const ref = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!userSchema.isValidSync({ name, email, phone, subject, message })) {
      return toast.error("Please fill all fields");
    }


    try {
      const res = await createContactSupport({ name, email, subject, message });
      if (res.status === 200) {
        toast.success(res.message);
        ref.current.reset();
      }
    } catch (error) {
      if (error.status === 500) {
        toast.error(error.message);
      }
    }

  };
  return (
    <div>
      <div className="flex justify-between border-l border-t bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
        <h1 className="text-3xl">Support</h1>
      </div>
      <div className="p-4">
        <p className="text-lg dark:text-white">contact us.</p>
      </div>
      <div className="mb-24">
        <form
          action={handleSubmit}
          ref={ref}
          className="relative mb-24 flex items-center justify-center gap-16 px-2 sm:px-0"
        >
          <div className="relative rounded-xl bg-white px-20 pb-24 pt-8 shadow-xl dark:bg-[#2B2E33]/50 dark:text-white sm:w-[60%]">
            <div className="mb-3 flex w-full flex-col justify-center gap-8 lg:flex-row lg:justify-between">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-blue-500">
                  Name
                </label>
                <input
                  className="border-b border-black/40 bg-transparent outline-none dark:border-blue-500"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-blue-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-b border-black/40 bg-transparent outline-none dark:border-blue-500"
                />
              </div>
            </div>
            <div className="flex w-full flex-col justify-center gap-8 lg:flex-row lg:justify-between">
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-blue-500">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="border-b border-black/40 bg-transparent outline-none dark:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Subject" className="text-blue-500">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="border-b border-black/40 bg-transparent outline-none dark:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-2 flex w-full flex-col">
              <label htmlFor="message" className="text-blue-500">
                Message
              </label>
              <textarea
                cols={30}
                className="border-b border-black/40 bg-transparent outline-none dark:border-blue-500"
                name="message"
                id=""
              ></textarea>
            </div>

            <div className="mt-12 flex justify-end">
              <button
                type="submit"
                name="submit"
                className="cursor-pointer rounded-xl bg-[#011C2A] px-6 py-3 text-white/90 shadow-2xl transition-all duration-300 ease-in-out hover:bg-[#011C2B]"
              >
                Send Message
              </button>
            </div>

            <Image
              width={100} 
              height={100}
              src="/bloomCommAssets/letterSend.svg"
              className="absolute -bottom-6 right-48 w-44"
              alt="lettersend"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
