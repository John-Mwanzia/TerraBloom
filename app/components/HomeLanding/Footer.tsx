import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" w-screen  max-h-[70vh]  bg-footer-texture bg-cover  overflow-hidden pb-20">
      <div className="-top-20">
        <Image
          src="/landing/footer/curve.svg"
          alt="curve"
          width={1920}
          height={400}
          className="w-screen"
        />
      </div>
      <div className="mt-12">
        <h1 className="text-white font-outfit text-4xl xl:text-5xl text-center">
          Get in Touch
        </h1>
        <div>
        <div className="container px-12 pt-10 sm:pt-48 flex flex-wrap gap-8 sm:gap-0  justify-between">
          <div className="flex gap-4 sm:gap-8 flex-col">
           
            <div className="flex gap-5 items-center ">
              <img src="/landing/location.svg" alt="location" className="w-10" />
              <h3 className="font-poppins text-white/65 text-base  font-medium">
                Nairobi, Kenya
              </h3>
            </div>
            <div className="flex gap-5 items-center ">
              <img src="/landing/mail.svg" alt="location" className="w-9" />
              <div>
                <h3 className="font-poppins text-white/65 text-base  font-medium">
                  inquiries@bodyblisscontour.com
                </h3>
                <h3 className="font-poppins text-white/65 text-base  font-medium">
                  contourbodybliss@gmail.com
                </h3>
              </div>
            </div>
            <div className="flex gap-5 items-center ">
              <img src="/landing/phone.svg" alt="location" className="w-8" />
              <h3 className="font-poppins text-white/65 text-base  font-medium">
                (+254) 711 789601
              </h3>
            </div>
          </div>
          <div className="flex gap-7 flex-col">
            <div className="">
              <h1 className="text-white text-xl ">LINKS</h1>
            </div>
            <div className="flex gap-5 items-center ">
              <Link href="/">
                <h3 className="font-poppins text-white/65 text-base  font-medium">
                  Home
                </h3>
              </Link>
            </div>
            <div className="flex gap-5 items-center ">
              <div>
                <Link href="/services">
                  <h3 className="font-poppins text-white/65 text-base  font-medium">
                    Services
                  </h3>
                </Link>
              </div>
            </div>
            <div className="flex gap-5 items-center ">
              <Link href="/privacy-policy">
                <h3 className="font-poppins text-white/65 text-base  font-medium">
                  Policy
                </h3>
              </Link>
            </div>
          </div>
          <div className="flex gap-8 flex-col">
            <div className="">
              <h1 className="text-white text-xl text-center">FOLLOW US</h1>
            </div>
            <div className="flex gap-5 items-center ">
              <img src="/landing/IG.svg" alt="location"className="w-10" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
