import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { ImageProvider } from "./context/store";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "./components/ReactQuery/ReactQueryProvider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

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
    <ReactQueryProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={cn(
              "min-h-screen font-sans_regular antialiased",
              fontRegularSans.variable,
              fontBoldSans.variable,
              fontHeading.variable,
            )}
          >
            <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
            <Providers>
              <ImageProvider>
                {children}
                <Toaster position="top-center" />
              </ImageProvider>
            </Providers>
          </body>
        </html>
      </ClerkProvider>
    </ReactQueryProvider>
  );
}
