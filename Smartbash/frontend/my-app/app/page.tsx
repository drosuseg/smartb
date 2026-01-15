// app/page.tsx
import Header from "./components/header";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

/* ✅ App Router metadata */
export const metadata: Metadata = {
  title: "SMARTBASH | Barangay Management System",
  description:
    "Revolutionizing barangay management with smart technology and modern solutions.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/logo.png"
                alt="SMARTBASH Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              SMARTBASH
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing barangay management with{" "}
            <span className="font-semibold text-green-600">smart technology</span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600">modern solutions</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { value: "500+", label: "Active Barangays" },
              { value: "50K+", label: "Residents Served" },
              { value: "99%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
              >
                <div className="text-2xl font-bold text-green-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Sign In Button */}
            <Link
              href="/signin"
              className="relative z-10 group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Sign In to Dashboard
            </Link>

            {/* Sign Up Button */}
            <Link
              href="/signup"
              className="relative z-10 group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-green-600 bg-white border-2 border-green-600 hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Create New Account
            </Link>
          </div>

          {/* Trust Section */}
          <div className="mt-8">
            <p className="text-gray-500 text-sm mb-4">
              Trusted by barangays across the country
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="text-gray-400 font-semibold">🏆 Award Winning</div>
              <div className="text-gray-400 font-semibold">🔒 Secure & Compliant</div>
              <div className="text-gray-400 font-semibold">⚡ Fast & Reliable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
