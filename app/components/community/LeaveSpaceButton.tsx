"use client";

import { leaveSpace } from "@/utils/api";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default  function LeaveSpaceButton({ userId, chatSpaceId }) {
    const [loading, setloading] = useState(false);
    const router = useRouter()
  const handleLeaveSpace = async () => {
    try {
        setloading(true);
      const res = await leaveSpace({ chatId: chatSpaceId, userId });
      console.log(res);
      
        setloading(false);
      if (res.status === 200) {
        router.push("/community/Chat");
        toast.success(res.message);
      }
    } catch (error) {
        console.log(error);
        
      toast.error(error.message);
    }
  };
  return (
    <button
        disabled={loading}
      onClick={() => handleLeaveSpace()}
      className="rounded-lg bg-red-500 px-4 py-2 text-white"
    >
    {loading ?(
        <div className="flex items-center justify-center">
            <Loader className="w-6 h-6 animate-spin" />
        </div>
    ) : "Leave Space"}
    </button>
  );
}
