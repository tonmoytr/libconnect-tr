"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active link logic
import { FaUserCircle, FaChevronDown } from "react-icons/fa"; // react-icons
import Image from "next/image";
import { authClient } from "@/utils/auth-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const { data: session } = authClient.useSession();

  console.log(session);

  // Functional placeholders - you will plug in useSession here
  const isLoggedIn = true;
  const userName = "Tonmoy";
  const userImage = ""; // Placeholder for photoUrl

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/all-books" },
  ];

  return (
    <nav className="bg-[#fdfaf1] border-b border-[#f4a261]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* 1. Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter flex items-center gap-1"
            >
              <span className="text-[#e76f51]">Lib</span>
              <span className="text-[#264653]">Connect</span>
            </Link>
          </div>

          {/* 2. Center: Navigation with Active Link Logic */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-bold transition-all duration-300 text-sm uppercase tracking-widest ${
                    isActive
                      ? "text-[#e76f51] border-b-2 border-[#e76f51]"
                      : "text-[#264653] hover:text-[#e76f51]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* 3. Right: Conditional Auth & Avatar Dropdown */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="text-[#e76f51] hover:text-[#f4a261] font-bold px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-[#e76f51] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#f4a261] transition-all"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full border border-[#f4a261]/30 hover:border-[#e76f51] transition-all"
                >
                  {/* Avatar Logic with Fallback */}
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#fdfaf1] bg-slate-100 flex items-center justify-center">
                    {userImage ? (
                      <Image
                        src={userImage}
                        alt={userName}
                        fill
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "block";
                        }}
                      />
                    ) : null}
                    <FaUserCircle
                      className={`text-[#264653]/40 w-full h-full ${userImage ? "hidden" : "block"}`}
                    />
                  </div>

                  <span className="text-sm font-bold text-[#264653]">
                    {userName}
                  </span>
                  <FaChevronDown
                    className={`text-[#e76f51] text-xs transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-[#f4a261]/10 py-2 animate-in fade-in zoom-in duration-200">
                    <Link
                      href="/profile"
                      className="block px-6 py-3 text-sm font-bold text-[#264653] hover:bg-[#fdfaf1] hover:text-[#e76f51]"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      className="w-full text-left px-6 py-3 text-sm font-bold text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors"
                      onClick={() => {
                        /* Logout Logic */ setIsDropdownOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle... */}
          <div className="md:hidden">{/* [Existing Mobile Logic] */}</div>
        </div>
      </div>
    </nav>
  );
}
