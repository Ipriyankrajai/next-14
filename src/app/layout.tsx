import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Inxtest",
  description: "Exercise for Inxtest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav className="fixed z-10 top-0 left-0 right-0 text-[#888888] bg-black">
          <div className="flex flex-wrap gap-4 justify-between px-5 py-[10px] text-[14px]">
            <Link
              className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
              href={"/"}
            >
              Home
            </Link>
            <div className="sm:flex flex-wrap gap-4 hidden">
              <Link
                className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
                href={"/center-a-div"}
              >
                1. Create a div
              </Link>
              <Link
                className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
                href={"/table "}
              >
                2. Table
              </Link>
              <Link
                className="hover:bg-gray-400 hover:text-white transition-all duration-300 rounded-md px-[10px] py-[5px]"
                href={"/javascript"}
              >
                3. Javascript
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
