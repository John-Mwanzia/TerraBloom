import { createUploadthing, type FileRouter } from "uploadthing/next";
const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    async () => {},
  ),

  productPdf: f({
    pdf: { maxFileSize: "16MB" },
  }).onUploadComplete(async ({ metadata, file }) => {
    const userId = (metadata as { userId: string }).userId;
    console.log("Upload complete for userId:", userId);
    console.log("file url", file.url);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
