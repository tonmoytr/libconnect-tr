"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Static state for now
  const isLoggedIn = false;
  const userName = "Tonmoy";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/all-books" },
    { name: "My Profile", href: "/profile" },
  ];

  return (
    <nav className="bg-[#fdfaf1] border-b border-[#f4a261]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Left: Logo with e76f51 accents */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter flex items-center gap-1"
            >
              <span className="text-[#e76f51]">Lib</span>
              <span className="text-[#264653]">Connect</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#264653] hover:text-[#e76f51] font-semibold transition-all duration-300 text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Auth Buttons with f4a261 and e76f51 */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="text-[#e76f51] hover:text-[#f4a261] font-bold px-4 py-2 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-[#e76f51] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#f4a261] transition-all shadow-md hover:shadow-[#f4a261]/20"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4 bg-[#f4a261]/10 px-4 py-2 rounded-full border border-[#f4a261]/20">
                <span className="text-sm font-bold text-[#264653]">
                  {userName}
                </span>
                <button className="text-[#e76f51] hover:text-red-700 font-black text-xs uppercase tracking-tighter">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#e76f51] hover:bg-[#f4a261]/10 focus:outline-none"
            >
              <svg
                className="h-7 w-7"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (Sand color) */}
      <div
        className={`${isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"} absolute w-full md:hidden bg-[#fdfaf1] border-t border-[#f4a261]/20 shadow-xl transition-all duration-300`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-4 text-base font-bold text-[#264653] hover:text-[#e76f51] hover:bg-[#f4a261]/5 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-[#f4a261]/20 grid grid-cols-2 gap-4">
            <Link
              href="/login"
              className="text-center py-3 text-[#e76f51] font-bold border-2 border-[#e76f51] rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-center py-3 bg-[#e76f51] text-white font-bold rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
