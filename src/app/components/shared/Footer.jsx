import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#264653] text-[#fdfaf1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Section 1: Brand & Socials */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-black uppercase tracking-tighter"
            >
              Lib<span className="text-[#e76f51]">Connect</span>
            </Link>
            <p className="text-[#fdfaf1]/60 text-sm leading-relaxed max-w-xs">
              Digitizing the traditional library experience with a modern,
              secure, and seamless book borrowing platform.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-[#fdfaf1]/5 rounded-xl hover:bg-[#e76f51] transition-all text-[#e76f51] hover:text-white"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-[#fdfaf1]/5 rounded-xl hover:bg-[#e76f51] transition-all text-[#e76f51] hover:text-white"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-[#fdfaf1]/5 rounded-xl hover:bg-[#e76f51] transition-all text-[#e76f51] hover:text-white"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-[#fdfaf1]/5 rounded-xl hover:bg-[#e76f51] transition-all text-[#e76f51] hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#f4a261] mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm font-bold hover:text-[#e76f51] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="text-sm font-bold hover:text-[#e76f51] transition-colors"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="text-sm font-bold hover:text-[#e76f51] transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#f4a261] mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-[#fdfaf1]/70">
                <FaEnvelope className="text-[#e76f51]" />
                support@libconnect.com
              </li>
              <li className="flex items-center gap-3 text-sm text-[#fdfaf1]/70">
                <FaPhone className="text-[#e76f51]" />
                +880 1234 567 890
              </li>
              <li className="flex items-center gap-3 text-sm text-[#fdfaf1]/70 leading-relaxed">
                <FaMapMarkerAlt className="text-[#e76f51]" />
                Dhaka City, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#fdfaf1]/5 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#fdfaf1]/30">
            © 2026 LibConnect. Built with Next.js & BetterAuth.
          </p>
        </div>
      </div>
    </footer>
  );
}
