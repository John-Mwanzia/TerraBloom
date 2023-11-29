import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#30324A] w-screen mt-16  sm:h-[69rem] bg-footer-texture bg-cover bg-[center_-19rem] sm:bg-[center_-12rem] md:bg-[center_-19rem] xl:bg-[center_-28rem] 2xl:bg-[center_-50rem] overflow-hidden ">
      <div className="mt-12">
        <h1 className="text-white font-outfit text-4xl text-center">
          Get in Touch
        </h1>
      </div>
      <div className="mt-12 relative ">
        <div className="relative top-48  sm:top-56 md:top-10 -left-10 sm:left-0 md:-left-12 xl:-left-10 xl:top-16 2xl:left-0 2xl:top-0">
          <div className="relative -top-12 sm:-top-16 left-10">
            <button>
              <Image
                src="/landing/footer/quickToast.svg"
                width={200}
                height={200}
                alt="quickToast"
              />
            </button>
          </div>
          <div className="relative -top-32 sm:-top-36 left-32 sm:left-36">
            <button>
              <Image
                src="/landing/footer/blog.svg"
                width={200}
                height={200}
                alt="blog"
              />
            </button>
          </div>
          <div className="relative -top-48 left-52 sm:left-64">
            <button>
              <Image
                src="/landing/footer/features.svg"
                width={200}
                height={200}
                alt="features"
              />
            </button>
          </div>
          <div className="relative -top-40 sm:-top-60 left-14 sm:left-[22rem]">
            <button>
              <Image
                src="/landing/footer/about.svg"
                width={200}
                height={200}
                alt="about"
              />
            </button>
          </div>
          <div className="relative -top-56 sm:-top-72 left-36 sm:left-[29rem]">
            <button>
              <Image
                src="/landing/footer/pricing.svg"
                width={200}
                height={200}
                alt="pricing"
              />
            </button>
          </div>

          <div className="relative -top-72 sm:-top-[22rem] left-56 sm:left-[35rem]">
            <button>
              <Image
                src="/landing/footer/Home.svg"
                width={200}
                height={200}
                alt="Home"
              />
            </button>
          </div>
        </div>
        <div className="absolute top-0 sm:top-0 md:top-0 -right-8 sm:-right-10 xl:right-44 2xl:right-72">
          <div>
            <Image
              src="/landing/footer/cardModal.svg"
              width={600}
              height={500}
              alt="blog"
              className="w-[20rem] sm:w-[32rem]  md:w-[27rem] xl:w-[37rem]"
            />
          </div>
        </div>
        <div className="absolute top-[52rem] sm:top-[41rem] md:top-[29rem] xl:top-48 right-8 sm:right-[25rem]  md:right-16 xl:right-24 2xl:right-52">
          <div className="relative -left-36 top-12">
            <Image
              src="/landing/footer/socialMedia.svg"
              width={200}
              height={200}
              alt="social media"
            />
          </div>
          <div className="relative">
            <div className="absolute -left-20  xl:-left-32 top-20 xl:top-28">
              <Link href="https://www.twitter.com/farmnet.io/">
                <Image
                  src="/landing/footer/twitterLogo.svg"
                  width={64}
                  height={64}
                  alt="twitter"
                />
              </Link>
            </div>
            <div className="absolute xl:top-4 left-8">
              <Link href="https://www.instagram.com/farmnet.io/">
                <Image
                  src="/landing/footer/instagram.svg"
                  width={56}
                  height={56}
                  alt="instagram"
                />
              </Link>
            </div>
            <div className="absolute -top-20 right-1 xl:-right-12">
              <Link href="https://www.facebook.com/farmnet.io/">
                <Image
                  src="/landing/footer/facebook.svg"
                  width={56}
                  height={56}
                  alt="facebook"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative -top-32 sm:-top-80 sm:left-10 md:-top-40 md:left-16 xl:-top-56 xl:left-20">
          <div className="relative -top-6">
            <Image
              src="/landing/footer/terms.svg"
              width={200}
              height={200}
              alt="terms"
            />
          </div>
          <div className="relative -top-16 left-36">
            <Image
              src="/landing/footer/privacy.svg"
              width={200}
              height={200}
              alt="privacy"
            />
          </div>
        </div>
        <div className="relative sm:left-[20rem] md:left-[24rem] xl:left-[34rem] bottom-0 sm:-top-96">
          <Image
          src="/landing/footer/copyright.svg"
          width={400}
          height={200}
          alt="copy right"  
          />
        </div>
      </div>
    </div>
  );
}
