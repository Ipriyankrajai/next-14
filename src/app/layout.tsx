import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Inxtest",
  description: "Assignment for Inxtest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav className="fixed top-0 left-0 right-0 text-[#888888]">
          <div className="flex flex-wrap gap-5 justify-between px-5 py-[10px] text-[]">
            <Link
              className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
              href={"/"}
            >
              Home
            </Link>
            <div className="flex gap-4">
              <Link
                className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
                href={"/center-a-div"}
              >
                Assignment 1
              </Link>
              <Link
                className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
                href={"/table "}
              >
                Assignment 2
              </Link>
              <Link
                className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
                href={"/javascript"}
              >
                Assignment 3
              </Link>
              <Link
                className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
                href={"https://priyankrajai.com/"}
                target="_blank"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
