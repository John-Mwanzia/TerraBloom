import React from "react";
import { auth } from "@clerk/nextjs";
import Weather from "../components/weather/weather";

export default function page() {
  const { userId } = auth();
  return <Weather userId={userId} />;
}
