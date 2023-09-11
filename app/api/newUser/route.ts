import { generateToken, hashPassword } from "@/modules/auth";
import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export  const POST = async (req:Request) => {
    const request = await req.json();
   
    
    const { name, email, password } =  request;
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
        data: {
        name,
        email,
        password: hashedPassword,
        },
    });
    
    const token = generateToken(user);
    return NextResponse.json({ token });
    };



