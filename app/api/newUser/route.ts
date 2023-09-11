import { generateToken, hashPassword } from "@/modules/auth";
import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export  const POST = async (req:Request) => {
    const request = await req.json(); //use req.json() to get the body of the request. note that req.body is not available in the serverless function
   
    
    const { name, email, password } =  request;
    const hashedPassword = await hashPassword(password); //hash the password before saving it to the database
    const user = await prisma.user.create({  //create a new user in the database
        data: {
        name,
        email,
        password: hashedPassword,
        },
    });
    
    const token = generateToken(user); //generate a token for the user
    return NextResponse.json({ token }); //return the token to the client
    };



