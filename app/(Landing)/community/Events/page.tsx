import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArchiveX, CalendarOff } from "lucide-react";

export default function page() {
  return (
    <>
      <div className="flex gap-6 border-l border-t px-4  pb-4 pt-3 dark:text-white " >
        <div className="mx-auto px-6 pt-14">
          <div>
            <Tabs defaultValue="upcoming">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              <TabsContent
                value="upcoming"
                className="mt-12 rounded-xl bg-white px-12 py-8 text-center shadow-xl dark:bg-[#2B2E33]/50 dark:text-white"
              >
                <div>
                  <CalendarOff
                    size={40}
                    className="mx-auto mb-3 text-primary dark:text-primary"
                  />
                  <h3 className="mb-4 text-2xl font-bold">
                    No upcoming events
                  </h3>
                  <p className="text-gray-500">
                    Upcoming events will show up here. Stay tuned!
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="past" className="mt-12  rounded-xl bg-white px-12 py-8 text-center shadow-xl dark:bg-[#2B2E33]/50 dark:text-white">  
                <div className="flex flex-col gap-4">
                  <div className="">
                    <ArchiveX
                      size={40}
                      className="text-primary mx-auto mb-3  dark:text-primary"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-4">No past events</h3>
                      <p className="text-gray-500">
                        Past events will show up here. Stay tuned!
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
