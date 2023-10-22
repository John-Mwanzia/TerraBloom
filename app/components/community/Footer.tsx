import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="max-w-[80%]">
      <div>
        <Image
          src="/terraCommAssets/footer-icon.svg"
          alt="footer icon"
          width={248}
          height={238}
          className="mx-auto"
        />
      </div>
      <div className="mt-12">
        <h3 className="text-white">© 2023 TerraBloom, The Farmer's Community</h3>
      </div>
    </div>
  );
}
