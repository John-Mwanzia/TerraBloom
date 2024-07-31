"use client";

import React, { useRef } from "react";
import ActionsButton from "./ActionsButton";
import { CreateSpace } from "@/actions/Space";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SpaceForm({userId}) {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (formdata: FormData) => {
    ref.current.reset();
    try {
      const res = await CreateSpace(formdata, userId);
      router.push(`/community/Chat/${res.id}`);
      toast.success("successfully created space");
    } catch (error) {
      toast.error("An error occured while creating space", error);
    }
  };
  return (
    <form
      ref={ref}
      action={handleSubmit}
      className="flex w-full justify-between"
    >
      <input
        type="text"
        name="space-title"
        id=""
        required
        placeholder="space title"
        className="border-b border-primary py-1 outline-none"
      />
      <ActionsButton name="Create" />
    </form>
  );
}
