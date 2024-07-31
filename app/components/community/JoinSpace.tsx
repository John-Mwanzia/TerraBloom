"use client";

import { joinSpace } from "@/actions/Space";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

type Space = {
  id: string;
  title: string;
};

type JoinSpaceProps = {
  space: Space;
  userId: string;
};

const JoinSpace: React.FC<JoinSpaceProps> = async ({ space, userId }) => {
  const router = useRouter();
  const handleSpaceJoin = async (id: string) => {
    // Perform join space action
    try {
      const { message } = await joinSpace(space.id, userId);
      router.push(`Chat/${space.id}`);
      toast.success(message);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <button
      onClick={() => handleSpaceJoin(space.id)}
      className="flex w-auto items-center gap-1 rounded-md bg-[#F1F5F9] px-2 py-1 hover:bg-slate-200"
    >
      <Globe size={18} className="text-blue-500" />
      {space.title}
    </button>
  );
};

export default JoinSpace;
