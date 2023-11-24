import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <div className=" bg-[#FFF] overflow-x-hidden w-screen  overflow-y-hidden mb-16 pb-12 flex flex-col items-center justify-center ">
      <div className="xl:max-w-[90%] 2xl:max-w-[80%] px-36">
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
        <div className="flex justify-center mt-10 md:gap-16 xl:gap-32 items-center">
          <div className="relative">
            <Image
              src="./landing/testimonial/sunshine.svg"
              alt="testimonial sunshine"
              width={436}
              height={568}
            />
            <Image
              src="./landing/testimonial/farmer2.svg"
              alt="testimonial farmer"
              width={264}
              height={194}
              className="absolute md:w-40 xl:w-48 2xl:w-64 md:top-20 xl:top-36 2xl:top-40 md:-left-16 xl:-left-28 2xl:-left-36"
            />
            <div className="bg-[#C3CFD9] w-20 h-20 absolute -right-10 rounded-3xl md:top-28  xl:top-44 2xl:top-56"></div>
          </div>
          <div>
            <div className="mb-12 flex  justify-end">
              <Image
                src="./landing/testimonial/quotes.svg"
                alt="quotes"
                width={98}
                height={98}
                className=" md:w-16  xl:w-24"
              />
            </div>
            <div className="mb-12">
              <p className="max-w-xl">
                I used to struggle with finding reliable information and
                services for my farming needs. With this web app, everything is
                just a click away. It has simplified and transformed my farming
                journey.
              </p>
            </div>
            <div className="flex items-center gap-12 justify-end">
              <button>
                <Image
                  src="./landing/testimonial/left-arrow.svg"
                  alt="arrow"
                  width={60}
                  height={53}
                />
              </button>
              <button>
                <Image
                  src="./landing/testimonial/right-arrow.svg"
                  alt="arrow"
                  width={60}
                  height={53}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
