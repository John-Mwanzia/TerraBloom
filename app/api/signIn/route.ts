import { comparePassword, generateToken } from "@/modules/auth";
import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const request = await req.json();

  const { email, password } = request;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return NextResponse.json({ message: "user not found" });
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    return NextResponse.json({ message: "invalid password" });
  }

  const token = generateToken(user);
  return NextResponse.json({ token });
};
