import { Loader } from "lucide-react";

export default function loading() {
  return (
    <div className="flex h-screen bg-black w-screen items-center justify-center">
      <Loader className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
}
