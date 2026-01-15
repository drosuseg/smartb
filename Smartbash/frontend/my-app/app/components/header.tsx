// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
  const pathname = usePathname();

  // Function to determine active link styling
  const getLinkClasses = (path: string) =>
    pathname === path
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600";

  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section: Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="SMARTBASH Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl text-gray-800">SMARTBASH</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-20">
            <Link href="/" className={`${getLinkClasses("/")} font-medium`}>
              Home
            </Link>
            <span className="text-gray-300">•</span>

            <Link href="/about" className={`${getLinkClasses("/about")} font-medium`}>
              About
            </Link>
            <span className="text-gray-300">•</span>

            <Link
              href="/features"
              className={`${getLinkClasses("/features")} font-medium`}
            >
              Features
            </Link>
            <span className="text-gray-300">•</span>

            <Link
              href="/contact"
              className={`${getLinkClasses("/contact")} font-medium`}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right Section: Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/signin" 
            className="px-6 py-2 bg-white text-black border border-gray-300 rounded-full hover:bg-green-600 hover:text-white transition flex items-center gap-2 font-medium"
          >
            Login
          </Link>

          <Link
            href="/signup" 
            className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition flex items-center gap-2 font-medium"
          >
            Register
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;