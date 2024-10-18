import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="flex w-screen flex-col items-center justify-center overflow-x-hidden overflow-y-hidden bg-[#FFF] pb-24">
      <div className="max-w-[90%] px-8 sm:px-24 xl:px-36 2xl:max-w-[80%]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-16 font-outfit text-3xl sm:text-4xl lg:text-5xl">
            What Our Farmers Say
          </h1>
          <p className="mt-10 max-w-3xl text-center">
            Don&apos;t just take our word for it. Hear from farmers who have
            experienced the transformative power of our agricultural web
            application
          </p>
        </div>

        <Carousel className="">
          <CarouselContent>
            <CarouselItem>
              <div className="mt-10 flex flex-col items-center justify-center sm:gap-16 lg:flex-row xl:gap-16 2xl:gap-28">
                <div className="relative hidden sm:block sm:px-0 xl:pl-20">
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
                    className="absolute -left-2 top-24 w-32 sm:-left-16 sm:top-52 sm:w-36 md:w-40 lg:top-40 xl:-left-0 xl:w-32 2xl:top-48 2xl:w-44"
                  />
                  <div className="absolute -right-2 top-28 h-20 w-20 rounded-3xl bg-[#C3CFD9] sm:-right-10 sm:top-56 lg:-right-7 lg:top-44 lg:h-14 lg:w-14 lg:rounded-2xl 2xl:-right-10 2xl:top-56 2xl:h-20 2xl:w-20 2xl:rounded-3xl"></div>
                </div>
                <div className="relative sm:hidden sm:px-0 xl:pl-20">
                  <Image
                    src="./landing/testimonial/sunshine.svg"
                    alt="testimonial sunshine"
                    width={376}
                    height={508}
                    className="mx-auto w-[70%]"
                  />
                  <Image
                    src="./landing/testimonial/farmer2.svg"
                    alt="testimonial farmer"
                    width={194}
                    height={124}
                    className="absolute left-1 top-28 w-20"
                  />
                  <div className="absolute right-6 top-32 h-10 w-10 rounded-xl bg-[#C3CFD9]"></div>
                </div>
                <div>
                  <div className="mb-12 flex justify-end">
                    <Quote className="h-24 w-44 text-[#008888]" />
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
              <div className="mt-10 flex flex-col items-center justify-center sm:gap-16 lg:flex-row xl:gap-16 2xl:gap-28">
                <div className="relative hidden sm:block sm:px-0 xl:pl-20">
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
                    className="absolute -left-2 top-24 w-32 sm:-left-16 sm:top-20 sm:w-36 md:top-52 md:w-40 lg:top-40 xl:-left-0 xl:w-32 2xl:top-48 2xl:w-44"
                  />
                  <div className="absolute -right-2 top-28 h-20 w-20 rounded-3xl bg-[#C3CFD9] sm:-right-10 sm:top-24 md:top-56 lg:-right-7 lg:top-44 lg:h-14 lg:w-14 lg:rounded-2xl 2xl:-right-10 2xl:top-56 2xl:h-20 2xl:w-20 2xl:rounded-3xl"></div>
                </div>
                <div className="relative sm:hidden sm:px-0 xl:pl-20">
                  <Image
                    src="./landing/testimonial/sunshine.svg"
                    alt="testimonial sunshine"
                    width={376}
                    height={508}
                    className="mx-auto w-[70%]"
                  />
                  <Image
                    src="./images/sarah.svg"
                    alt="testimonial farmer"
                    width={194}
                    height={124}
                    className="absolute left-1 top-28 w-20"
                  />
                  <div className="absolute right-4 top-32 h-10 w-10 rounded-xl bg-[#C3CFD9]"></div>
                </div>
                <div>
                  <div className="mb-12 flex justify-end">
                    <Quote className="h-24 w-44 text-[#008888]" />
                  </div>
                  <div className="mb-12">
                    <p className="sm:max-w-lg">
                      &quot;Being able to connect with fellow farmers and share
                      knowledge has been a game-changer. This web app has
                      created a strong community that supports and uplifts each
                      other.&quot;
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
