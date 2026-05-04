import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#264653] text-[#fdfaf1] py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter flex items-center gap-1"
            >
              <span className="text-[#e76f51]">Lib</span>
              <span>Connect</span>
            </Link>
            <p className="text-[#fdfaf1]/60 text-sm leading-relaxed max-w-xs">
              Your gateway to a world of knowledge. Empowering readers and
              builders through a shared digital library experience.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[#f4a261] font-bold uppercase tracking-widest text-xs mb-6">
              Explore
            </h4>
            <ul className="space-y-4 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#e76f51] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="hover:text-[#e76f51] transition-colors"
                >
                  Library Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-[#e76f51] transition-colors"
                >
                  Join Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-[#f4a261] font-bold uppercase tracking-widest text-xs mb-6">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="p-3 bg-[#fdfaf1]/10 rounded-full hover:bg-[#e76f51] transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-[#fdfaf1]/10 rounded-full hover:bg-[#e76f51] transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-[#fdfaf1]/10 rounded-full hover:bg-[#e76f51] transition-all"
              >
                <FaFacebook size={20} />
              </a>
            </div>
            <p className="text-[#fdfaf1]/40 text-xs font-bold">
              &copy; {new Date().getFullYear()} LibConnect TR. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
