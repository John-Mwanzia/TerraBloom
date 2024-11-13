
import prisma from "@/modules/db";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const fileToBase64 = async (filePath: string) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, { encoding: "base64" });
};

const cropDetails = [
  {
    name: "Vegetables",
    category: "Vegetable",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/vegetables.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Vegetables_Farming.pdf")}`,
  },

  {
    name: "Mango Farming",
    category: "Fruit",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/mango.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Mango_Farming.pdf")}`,
  },
  {
    name: "Banana Farming",
    category: "Fruit",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/banana.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Banana_Farming.pdf")}`,
  },
  {
    name: "Beans Farming",
    category: "Vegetable",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/beans.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Beans_Farming.pdf")}`,
  },
  {
    name: "Potatoes Farming",
    category: "Vegetable",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/potatoes.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Potatoes_Farming.pdf")}`,
  },
  {
    name: "Tomatoes Farming",
    category: "Vegetable",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/tomatoes.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Tomatoes_Farming.pdf")}`,
  },
  {
    name: "Carrots Farming",
    category: "Vegetable",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/carrots.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Carrots_Farming.pdf")}`,
  },
  {
    name: "Garlic Farming",
    category: "Vegetable",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/garlic.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Garlic_Farming.pdf")}`,
  },
  {
    name: "Onions Farming",
    category: "Vegetable",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/onions.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Onions_Farming.pdf")}`,
  },
  {
    name: "Watermelon Farming",
    category: "Fruit",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/watermelon.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Watermelon_Farming.pdf")}`,
  },
  {
    name: "Passion Fruits Farming",
    category: "Fruit",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/passionFruits.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Passion_Fruits_Farming.pdf")}`,
  },
  {
    name: "Sorghum Farming",
    category: "Cereal",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/sorghum.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Sorghum_Farming.pdf")}`,
  },
  {
    name: "Lettuce Farming",
    category: "Vegetable",
    image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/lettuce.svg")}`,
    manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Lettuce_Farming.pdf")}`,
  },
];

export const buildCropsData = async () => {
  const crops = cropDetails.map((crop) => ({
    name: crop.name,
    category: crop.category,
    image: crop.image,
    manualPdf: crop.manualPdf,
  }));

  return crops;
};

//save the crops to the database

export async function POST(req: Request) {
  console.log("Inserting crops into the database...");
  try {
    const crops = await buildCropsData(); // Wait for all base64 data
    // Insert all crops into the database
    const createdCrops = await prisma.crop.createMany({
      data: crops,
    });
    console.log("Crops inserted successfully!");

    return NextResponse.json({
      message: "Crops inserted successfully!",
      createdCrops,
    });
  } catch (error) {
    console.error("Error inserting crops:", error);
    return NextResponse.json(
      { error: "Failed to insert crops" },
      { status: 500 },
    );
  }
}
