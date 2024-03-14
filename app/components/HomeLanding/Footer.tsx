import Image from "next/image";

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
      </div>
    </div>
  );
}
