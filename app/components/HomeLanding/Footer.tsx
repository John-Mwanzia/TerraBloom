import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#30324A] w-screen h-[1056px] bg-footer-texture bg-cover  bg-[center_-50rem] ">
      <div className="mt-12">
        <h1 className="text-white font-outfit text-4xl text-center">
          Get in Touch
        </h1>
      </div>
      <div className="mt-12">
        <div>
          <button>
            <Image
              src="/landing/footer/quickToast.svg"
              width={200}
              height={200}
              alt="quickToast"
            />
          </button>
        </div>
        <div>
          <button>
            <Image
              src="/landing/footer/blog.svg"
              width={200}
              height={200}
              alt="blog"
            />
          </button>
        </div>
        <div>
          <button>
            <Image
              src="/landing/footer/about.svg"
              width={200}
              height={200}
              alt="blog"
            />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
