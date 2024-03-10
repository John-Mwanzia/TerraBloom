import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonial() {
  return (
    <div className=" bg-[#FFF] overflow-x-hidden w-screen  overflow-y-hidden  pb-24 flex flex-col items-center justify-center ">
      <div className="max-w-[90%] 2xl:max-w-[80%] px-8 sm:px-24 xl:px-36">
        <div className=" flex justify-center flex-col items-center">
          <h1 className="font-outfit  text-3xl sm:text-4xl lg:text-5xl mt-16">
            What Our Farmers Say
          </h1>
          <p className="text-center max-w-3xl mt-10">
            Don't just take our word for it. Hear from farmers who have
            experienced the transformative power of our agricultural web
            application
          </p>
        </div>

        <Carousel className="">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col lg:flex-row justify-center mt-10 sm:gap-16 xl:gap-16 2xl:gap-28 items-center">
                <div className="relative hidden sm:block  sm:px-0 xl:pl-20">
                  <Image
                    src="./landing/testimonial/sunshine.svg"
                    alt="testimonial sunshine"
                    width={376}
                    height={508}
                  />
                  <Image
                    src="./landing/testimonial/farmer2.svg"
                    alt="testimonial farmer"
                    width={194}
                    height={124}
                    className="absolute w-32 sm:w-36 md:w-40 xl:w-32 2xl:w-44  top-24 sm:top-52  lg:top-40 2xl:top-48 -left-2 sm:-left-16 xl:-left-0"
                  />
                  <div className="bg-[#C3CFD9] w-20 h-20  lg:w-14 lg:h-14  2xl:w-20 2xl:h-20 absolute -right-2 sm:-right-10 lg:-right-7 2xl:-right-10 rounded-3xl lg:rounded-2xl 2xl:rounded-3xl top-28 sm:top-56  lg:top-44 2xl:top-56"></div>
                </div>
                <div className="relative sm:hidden sm:px-0 xl:pl-20">
                  <Image
                    src="./landing/testimonial/sunshine.svg"
                    alt="testimonial sunshine"
                    width={376}
                    height={508}
                    className="w-[70%] mx-auto"
                  />
                  <Image
                    src="./landing/testimonial/farmer2.svg"
                    alt="testimonial farmer"
                    width={194}
                    height={124}
                    className="absolute w-20  top-28  left-1 "
                  />
                  <div className="bg-[#C3CFD9] w-10 h-10  top-32  absolute right-6  rounded-xl  "></div>
                </div>
                <div>
                  <div className="mb-12 flex  justify-end">
                    <Image
                      src="./landing/testimonial/quotes.svg"
                      alt="quotes"
                      width={98}
                      height={98}
                      className="w-10 md:w-16  xl:w-24 mt-6 sm:mt-0"
                    />
                  </div>
                  <div className="mb-12">
                    <p className="sm:max-w-lg">
                      I used to struggle with finding reliable information and
                      services for my farming needs. With this web app,
                      everything is just a click away. It has simplified and
                      transformed my farming journey.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col  lg:flex-row justify-center mt-10 sm:gap-16 xl:gap-16 2xl:gap-28 items-center">
                <div className="relative hidden sm:block  sm:px-0 xl:pl-20">
                  <Image
                    src="./landing/testimonial/sunshine.svg"
                    alt="testimonial sunshine"
                    width={376}
                    height={508}
                  />
                  <Image
                    src="./images/sarah.svg"
                    alt="testimonial farmer"
                    width={194}
                    height={124}
                    className="absolute w-32 sm:w-36 md:w-40 xl:w-32 2xl:w-44  top-24 sm:top-20 md:top-52  lg:top-40 2xl:top-48 -left-2 sm:-left-16 xl:-left-0"
                  />
                  <div className="bg-[#C3CFD9] w-20 h-20  lg:w-14 lg:h-14  2xl:w-20 2xl:h-20 absolute -right-2 sm:-right-10 lg:-right-7 2xl:-right-10 rounded-3xl lg:rounded-2xl 2xl:rounded-3xl top-28 sm:top-24 md:top-56  lg:top-44 2xl:top-56"></div>
                </div>
                <div className="relative sm:hidden sm:px-0 xl:pl-20">
                  <Image
                    src="./landing/testimonial/sunshine.svg"
                    alt="testimonial sunshine"
                    width={376}
                    height={508}
                    className="w-[70%] mx-auto"
                  />
                  <Image
                    src="./images/sarah.svg"
                    alt="testimonial farmer"
                    width={194}
                    height={124}
                    className="absolute w-20  top-28  left-1 "
                  />
                  <div className="bg-[#C3CFD9] w-10 h-10  top-32  absolute right-4  rounded-xl   "></div>
                </div>
                <div>
                  <div className="mb-12 flex  justify-end">
                    <Image
                      src="./landing/testimonial/quotes.svg"
                      alt="quotes"
                      width={98}
                      height={98}
                      className="w-10 md:w-16  xl:w-24 mt-6 sm:mt-0"
                    />
                  </div>
                  <div className="mb-12">
                    <p className="sm:max-w-lg">
                      "Being able to connect with fellow farmers and share
                      knowledge has been a game-changer. This web app has
                      created a strong community that supports and uplifts each
                      other."
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
