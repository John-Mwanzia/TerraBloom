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
              <Link href="/">Announcements</Link>
              <Link href="/">Introduction</Link>
              <Link href="/">FAQ</Link>
              <Link href="/">Chat</Link>
            </div>

            <div className="mt-8">
              <h1 className="font-bold">Community</h1>
              <Link href="/">Resources</Link>
              <Link href="/">Showcase</Link>
              <Link href="/">Events</Link>
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
