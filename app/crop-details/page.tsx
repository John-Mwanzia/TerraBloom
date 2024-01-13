import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        {/* logo */}
        <Image
          src="/bloomCommAssets/Logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <h1>crop details</h1>
    </div>
  );
}
