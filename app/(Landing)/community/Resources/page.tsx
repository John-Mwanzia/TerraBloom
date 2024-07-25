"use client";

import React, { useState } from "react";
import PostModal from "@/app/components/community/PostModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  const [showModal, setShowModal] = useState(false);
  const resourseTyte = ["all", "tutorials", "articles", "videos", "podcasts", "files"];
  return (
    <>
      <div className="h-[calc(100vh-5rem)]">
        <div className="pt-6flex flex justify-between border-l border-t bg-white px-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
          <h1 className="text-3xl">Resources</h1>
          <button
            className="rounded bg-[#0E9AA9] px-3 py-2"
            onClick={() => setShowModal(true)}
          >
            Create Post
          </button>
        </div>

        <div className="mx-auto px-24 mt-8">
          <Tabs defaultValue="all" className="w-auto">
            <TabsList>
              {resourseTyte.map((type) => (
                <TabsTrigger value={type}>{type}</TabsTrigger>
              ))}
            </TabsList>
            {resourseTyte.map((type) => (
              <TabsContent
                value={type === "all" ? "all" : type}
                className="mt-12 rounded-xl bg-white px-12 py-8 text-center shadow-xl dark:bg-[#2B2E33]/50 dark:text-white"
              >
                <div>
                  <h3 className="mb-4 text-2xl font-bold">
                    No {type} resources
                  </h3>
                  <p className="text-gray-500">
                    {type} resources will show up here. Stay tuned!
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {showModal && <PostModal setShowModal={setShowModal} />}
    </>
  );
}
