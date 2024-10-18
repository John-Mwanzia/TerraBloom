"use client";

import PostModal from "@/app/components/community/PostModal";
import { ShieldCheck } from "lucide-react";
import React, { useState } from "react";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="dark:text-white">
        <div className="flex justify-between border-l border-t bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
          <h1 className="text-3xl">Showcase</h1>
          <button
            className="rounded bg-[#0E9AA9] px-3 py-2"
            onClick={() => setShowModal(true)}
          >
            Create Post
          </button>
        </div>
        <div className="mx-auto mt-4 sm:w-[80%] rounded-md bg-white shadow-lg dark:bg-[#2B2E33]/50 py-6">
          <h3 className=" px-3 sm:px-12">
            At Terrabloom, we celebrate the hard work, innovation, and successes
            of our community members. The Showcase page is dedicated to
            highlighting the remarkable achievements and inspiring stories of
            farmers who are making a difference. Here, you can:
          </h3>
          <ul className="mt-4 px-3 sm:px-12">
            <li className="flex gap-2 ">
              <ShieldCheck className="text-primary dark:text-primary" />
              <span className="font-bold">
                {" "}
                Share Your Success Stories:
              </span>{" "}
              Inspire others by sharing your farming journey, innovations, and
              achievements.
            </li>
            <li className="flex gap-2">
              <ShieldCheck className="text-primary dark:text-primary" />
              <span className="font-bold">Learn from Others:</span> Gain
              insights and ideas by exploring the experiences and best practices
              of fellow farmers
            </li>
            <li className="flex gap-2">
              <ShieldCheck className="text-primary dark:text-primary" />
              <span className="font-bold"> Build Community:</span> Connect with
              like-minded individuals who are passionate about agriculture and
              community growth.
            </li>
          </ul>
        </div>
      </div>

      {showModal && <PostModal setShowModal={setShowModal} />}
    </>
  );
}
