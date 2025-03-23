import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manikya Sharma",
  description: "Full stack developer and IT Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-700`}
      >
        <MotionConfig reducedMotion="user">
          <Navbar className="bg-black text-white py-5 px-7" />
          <div className="h-full">{children}</div>
        </MotionConfig>
      </body>
    </html>
  );
}
