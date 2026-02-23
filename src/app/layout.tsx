import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Error Test - System Bug Control",
  description: "Trigger error environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000000] text-[#cccccc] min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
