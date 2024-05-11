import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ImageProvider } from "./context/store";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const fontRegularSans = localFont({
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: "--font-sans",
});

const fontBoldSans = localFont({
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: "--font-BoldSans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "TerraBloom",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen font-sans_regular antialiased",
            fontRegularSans.variable,
            fontBoldSans.variable,
            fontHeading.variable
          )}
        >
          <Providers>
            <ImageProvider>
              {children}
              <Toaster position="top-center" />
            </ImageProvider>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
