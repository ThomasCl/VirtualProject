import "./globals.css";

import Providers from "@/components/Providers";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Navbar />
          <Toaster />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "VoteEase",
  description: "Vote with ease",
  icons: ["./ucll.png"],
};
