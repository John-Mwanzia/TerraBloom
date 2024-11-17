import prisma from "@/modules/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name, category, image, manualPdf } = await req.json();
  try {
    await prisma.crop.create({
      data: {
        name,
        category,
        image,
        manualPdf,
      },
    });
    return NextResponse.json({
      message: "Crop added successfully",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to add crop", status: 400 });
  }
};
