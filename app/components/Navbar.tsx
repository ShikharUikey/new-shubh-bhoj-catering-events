"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo.png"
            alt="Shubh Bhoj Logo"
            width={50}
            height={50}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-[#5a001a]">
              Shubh Bhoj
            </h1>

            <p className="text-xs text-gray-500 tracking-wider">
              Catering & Events
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex gap-8 text-sm font-semibold text-[#5a001a]">
          <Link href="/" className="hover:text-yellow-600 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-yellow-600 transition">
            About
          </Link>

          <Link href="/services" className="hover:text-yellow-600 transition">
            Services
          </Link>

          <Link href="/gallery" className="hover:text-yellow-600 transition">
            Gallery
          </Link>

          <Link href="/estimator" className="hover:text-yellow-600 transition">
            Estimator
          </Link>

          <Link href="/contact" className="hover:text-yellow-600 transition">
            Contact
          </Link>
        </div>

        {/* Book Now */}

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5a001a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#730021] transition duration-300 shadow-md"
        >
          Book Now
        </a>

      </div>
    </nav>
  );
}