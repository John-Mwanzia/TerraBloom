import Image from "next/image";
import Link from "next/link";
const CommunityLayout = ({ children }) => {
  return (
    <>
      <div className="flex overflow-y-hidden">
        <div className="bg-white h-screen w-[16.3rem] ">
          <Image
            src="community/logo.svg"
            alt="logo"
            className="mx-auto"
            width={180}
            height={133}
          />
          <div className="pl-16 mt-8 ">
            <Link href="/">Home</Link>
            <div className="mt-8">
              <h1 className="font-bold">Welcome</h1>
              <Link className="py-4 pl-4" href="/">
                Announcements
              </Link>
              <Link className="py-4 pl-4" href="/">
                Introduction
              </Link>
              <Link className="py-4 pl-4" href="/">
                FAQ
              </Link>
              <Link className="py-4 pl-4" href="/">
                Chat
              </Link>
            </div>

            <div className="mt-8">
              <h1 className="font-bold">Community</h1>
              <Link className="py-4 pl-4" href="/">
                Resources
              </Link>
              <Link className="py-4 pl-4" href="/">
                Showcase
              </Link>
              <Link className="py-4 pl-4" href="/">
                Events
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-end pr-3 border-l">
            <Image
              src="community/avatar.svg"
              alt="Avatar"
              width={64}
              height={79}
            />
          </div>
          <div className="bg-light-gray/40 rounded-tl-sm h-[100%]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityLayout;
