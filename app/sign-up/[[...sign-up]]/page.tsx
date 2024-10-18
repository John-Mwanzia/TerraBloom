import { SignUp, auth } from "@clerk/nextjs";

export default async function Page() {
  const { userId } = auth();

  const href = userId ? "/community/Home" : "/newUser";
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp afterSignInUrl={href} />
    </div>
  );
}
