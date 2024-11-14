
// import prisma from "@/modules/db";
// import fs from "fs";
// import { NextResponse } from "next/server";
// import path from "path";

// const fileToBase64 = async (filePath: string) => {
//   const absolutePath = path.resolve(process.cwd(), filePath);
//   return fs.readFileSync(absolutePath, { encoding: "base64" });
// };

const cropDetails = [
  // {
  //   name: "Vegetables",
  //   category: "Vegetable",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/vegetables.webp")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Vegetables_farming__Cabbages_Kales_and_Spinach_.pdf")}`,
  // },

  // {
  //   name: "Mango Farming",
  //   category: "Fruit",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/mango.svg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Mango_Farming.pdf")}`,
  // },
  // {
  //   name: "Banana Farming",
  //   category: "Fruit",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/banana.svg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/BANANA_GROWING-1.pdf")}`,
  // },
  // {
  //   name: "Beans Farming",
  //   category: "Vegetable",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/bean-field.jpg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Bean_farming_.pdf")}`,
  // },
  // {
  //   name: "Potatoes Farming",
  //   category: "Vegetable",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/potato.svg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Potato_Farming_2.pdf")}`,
  // },
  // {
  //   name: "Tomatoes Farming",
  //   category: "Vegetable",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/tomatoes.jpg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Tomato.pdf")}`,
  // },
  // {
  //   name: "Carrots Farming",
  //   category: "Vegetable",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/carrots.png")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Carrots_Farming.pdf")}`,
  // },
  // {
  //   name: "Garlic Farming",
  //   category: "Vegetable",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/garlic.jpg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/GARLICGROWING_11.docx.pdf")}`,
  // },
  // {
  //   name: "Onions Farming",
  //   category: "Vegetable",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/onion-farming.jpg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Onion_farming.pdf")}`,
  // },
  // {
  //   name: "Watermelon Farming",
  //   category: "Fruit",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/watermelons.jpg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Water_Melon_Farming.pdf")}`,
  // },
  // {
  //   name: "Passion Fruits Farming",
  //   category: "Fruit",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/passion-fruits.webp")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/PassionFruitFarming.pdf")}`,
  // },
  // {
  //   name: "Sorghum Farming",
  //   category: "Cereal",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/sorghum.jpg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Sorghum_Farming.pdf")}`,
  // },
  // {
  //   name: "Lettuce Farming",
  //   category: "Vegetable",
  //   image: `data:image/svg+xml;base64,${await fileToBase64("./public/cropDetails/lettuce.jpg")}`,
  //   manualPdf: `data:application/pdf;base64,${await fileToBase64("./public/cropDetails/files/Lettuce_Farming.pdf")}`,
  // },
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: Request) {
  // console.log("Inserting crops into the database...");
  // try {
  //   const crops = await buildCropsData(); // Wait for all base64 data
  //   // Insert all crops into the database
  //   const createdCrops = await prisma.crop.createMany({
  //     data: crops,
  //   });
  //   console.log("Crops inserted successfully!");

  //   return NextResponse.json({
  //     message: "Crops inserted successfully!",
  //     createdCrops,
  //   });
  // } catch (error) {
  //   console.error("Error inserting crops:", error);
  //   return NextResponse.json(
  //     { error: "Failed to insert crops" },
  //     { status: 500 },
  //   );
  // }
}
