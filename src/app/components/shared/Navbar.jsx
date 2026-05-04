"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Professional menu icons
import Image from "next/image";
import { authClient } from "@/utils/auth-client";
import { toast } from "react-toastify";
import { Spinner } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  const isLoggedIn = !!session;
  const userName = session?.user?.name || "User";
  const userImage = session?.user?.image || "";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/all-books" },
  ];

  return (
    <nav className="bg-[#fdfaf1] border-b border-[#f4a261]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter flex items-center gap-1"
            >
              <span className="text-[#e76f51]">Lib</span>
              <span className="text-[#264653]">Connect</span>
            </Link>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold text-sm uppercase tracking-widest transition-all ${
                  pathname === link.href
                    ? "text-[#e76f51] border-b-2 border-[#e76f51]"
                    : "text-[#264653]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Action Center */}
          <div className="flex items-center gap-3">
            {isPending ? (
              <>
                <div className="flex flex-col items-center gap-2">
                  <Spinner color="success" />
                  <span className="text-xs text-muted">Success</span>
                </div>
              </>
            ) : !isLoggedIn ? (
              <Link
                href="/login"
                className="bg-[#e76f51] text-white px-5 py-2 rounded-full font-bold text-sm md:flex"
              >
                Sign In
              </Link>
            ) : (
              /* Avatar + Profile Toggle (Mobile & Desktop) */
              <div className="relative">
                <button
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    setIsMenuOpen(false); // Close nav menu if profile opens
                  }}
                  className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-[#f4a261]/30"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                    {userImage ? (
                      <Image
                        src={userImage}
                        alt="User"
                        height={32}
                        width={32}
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <FaUserCircle className="text-[#264653]/20 w-full h-full" />
                    )}
                  </div>
                  <span className="text-sm font-bold text-[#264653]">
                    {userName}
                  </span>
                  <FaChevronDown
                    className={`text-[#e76f51] text-[10px] transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Profile Dropdown (Half-width/Compact on Mobile) */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-[#f4a261]/10 py-4 z-50 animate-in fade-in zoom-in duration-200">
                    {/* <div className="px-5 pb-3 border-b border-[#fdfaf1] mb-2">
                      <p className="text-[#264653] font-black truncate">
                        {userName}
                      </p>
                      <p className="text-[10px] text-[#264653]/50 truncate">
                        {session?.user?.email}
                      </p>
                    </div> */}
                    <Link
                      href="/my-profile"
                      className="block px-5 py-2.5 text-sm font-bold text-[#264653] hover:text-[#e76f51]"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      className="w-full text-left px-5 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50"
                      onClick={async () => {
                        await authClient.signOut();
                        toast.success("Logged out!");
                        setIsProfileOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Hamburger Button (Navigation Toggle) */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsProfileOpen(false); // Close profile if nav opens
              }}
              className="md:hidden p-2 text-[#264653] hover:bg-[#f4a261]/10 rounded-xl transition-colors"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#fdfaf1] z-40 flex flex-col items-center justify-center animate-in slide-in-from-right duration-300 md:hidden">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-3xl font-black uppercase tracking-tighter ${
                  pathname === link.href ? "text-[#e76f51]" : "text-[#264653]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
