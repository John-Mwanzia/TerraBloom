
import { Loader } from "lucide-react";
import React from "react";
// @ts-expect-error: useFormStatus is not typed in react-dom
import { useFormStatus } from "react-dom";

export default function ActionsButton({ name }: { name: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="rounded-md bg-primary px-2 py-1 text-white"
    >
      {pending ? <Loader className="animate-spin" /> : name}
    </button>
  );
}
