import Image from "next/image";
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
            <h1>Home</h1>
            <div className="mt-8">
              <h1 className="font-bold">Welcome</h1>
              <h1 className="py-4 pl-4">Announcements</h1>
              <h1 className="py-4 pl-4">Introduction</h1>
              <h1 className="py-4 pl-4">FAQ</h1>
              <h1 className="py-4 pl-4">Chat</h1>
            </div>

            <div className="mt-8">
              <h1 className="font-bold">Community</h1>
              <h1 className="py-4 pl-4">Resources</h1>
              <h1 className="py-4 pl-4">Showcase</h1>
              <h1 className="py-4 pl-4">Events</h1>
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
