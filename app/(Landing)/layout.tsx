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
          <div className="bg-light-gray/40 rounded-tl-sm h-[100%]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default CommunityLayout;
