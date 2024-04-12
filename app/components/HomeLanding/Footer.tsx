import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" w-screen   bg-footer-texture bg-cover  overflow-hidden pb-4">
      <div className="relative top-0 sm:top-0">
        <Image
          src="/landing/footer/curve.svg"
          alt="curve"
          width={1920}
          height={400}
          className="w-screen"
        />
      </div>
      <div className="mt-12 container">
        <h1 className="text-white font-outfit text-4xl xl:text-5xl text-center">
          Get in Touch
        </h1>
        <div>
          <div className=" px-8 pt-10 sm:pt-24 flex flex-wrap gap-8 sm:gap-0  justify-between">
            <div className="flex gap-4 sm:gap-6 flex-col text-white">
              <Image
                src="./bloomCommAssets/Logo.svg"
                width={90}
                height={63}
                alt="logo"
                className="sm:block w-16 sm:w-24"
              />
              <div className="flex flex-col gap-7  justify-center">
                <div>
                  <Link href="/support">
                    <h3 className="font-poppins text-white/65 text-sm sm:text-base  font-medium">
                      About Us
                    </h3>
                  </Link>
                </div>
                <div>
                  <Link href="/support">
                    <h3 className="font-poppins text-white/65 text-sm sm:text-base  font-medium">
                      Blog
                    </h3>
                  </Link>
                </div>
                <div>
                  <Link href="/support">
                    <h3 className="font-poppins text-white/65 text-sm sm:text-base  font-medium">
                      Features
                    </h3>
                  </Link>
                </div>
                <div>
                  <Link href="/support">
                    <h3 className="font-poppins text-white/65 text-sm sm:text-base  font-medium">
                      Home
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-7 flex-col text-white">
              <div className="">
                <h1 className="text-white text-xl ">LINKS</h1>
              </div>

              <div className="flex gap-5 justify-center flex-col ">
                <div className="flex gap-5 items-center ">
                  <div>
                    <Link href="/support">
                      <h3 className="font-poppins text-white/65 text-sm sm:text-base  font-medium">
                        Support
                      </h3>
                    </Link>
                  </div>
                </div>
                <div className="flex gap-5 items-center ">
                  <div>
                    <Link href="/Q&A">
                      <h3 className="font-poppins text-white/65 text-sm sm:text-base  font-medium">
                        Q&A
                      </h3>
                    </Link>
                  </div>
                </div>
                <Link href="/privacy-policy">
                  <h3 className="font-poppins text-white/65 text-sm sm:text-base  font-medium">
                    Terms of service
                  </h3>
                </Link>
              </div>
              <Link href="/privacy-policy">
                <h3 className="font-poppins text-white/65 text-sm sm:text-base  font-medium">
                  Privacy policy
                </h3>
              </Link>
            </div>
            <div className="flex gap-8 flex-col">
              <div className="">
                <h1 className="text-white text-xl text-center">FOLLOW US</h1>
              </div>
              <div className="flex gap-5 items-center ">
                <Link href="/">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670127.png"
                    alt=" twitter"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/4494/4494488.png"
                    alt=" instagram"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                    alt=" facebook"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-1 pb-5 text-white whitespace-nowrap justify-center items-center mt-14 ">
          <Copyright className="w-5  " />
          <span>2024 TerraBloom. All rights reserved</span>
        </div>
      </div>
    </div>
  );
}
