import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative bg-[#fdfaf1] overflow-hidden">
      {/* Decorative background elements using your soft sand/orange tones */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#f4a261]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-[#e76f51]/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center md:text-left space-y-8">
            <div className="inline-block px-4 py-1.5 bg-[#f4a261]/20 border border-[#f4a261]/30 rounded-full">
              <span className="text-[#e76f51] text-sm font-bold uppercase tracking-widest">
                Digital Library Experience
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-[#264653] leading-tight tracking-tighter">
              Find Your <br />
              <span className="text-[#e76f51]">Next Read</span>
            </h1>

            <p className="text-lg text-[#264653]/70 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
              Explore a vast collection of books, from technical guides to
              timeless stories. Borrow your favorite titles digitally with a
              seamless and modern interface.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/all-books"
                className="bg-[#e76f51] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#f4a261] transition-all shadow-lg shadow-[#e76f51]/20 hover:-translate-y-1 active:scale-95 text-center"
              >
                Browse Now
              </Link>
              <Link
                href="/register"
                className="bg-white text-[#264653] border-2 border-[#f4a261]/30 px-10 py-4 rounded-xl font-bold text-lg hover:border-[#e76f51] transition-all text-center"
              >
                Join Library
              </Link>
            </div>
          </div>
          {/* Right: Visual Element (Placeholder for Book Stack/Illustration) */}

          <div className="relative hidden md:block w-full h-full">
            {/* Outer Decorative Container */}
            <div className="relative w-full aspect-square bg-[#f4a261]/10 rounded-3xl border-2 border-dashed border-[#f4a261]/40 flex items-center justify-center p-4 lg:p-8">
              {/* Inner Card Container - This now fills more space */}
              <div className="w-full h-full bg-[#fdfaf1] rounded-2xl shadow-2xl flex items-center justify-center border border-[#f4a261]/20 group overflow-hidden relative">
                {/* Image 1: Bottom Layer (Back) */}
                {/* Using w-2/3 to ensure they occupy a large portion of the container */}
                <div className="relative w-2/3 aspect-3/4 shadow-xl transform -rotate-12 translate-x-12 translate-y-8 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 z-10">
                  <Image
                    src="/images/1.jpg"
                    alt="Book Cover 1"
                    fill
                    className="object-cover rounded-xl border-4 border-white shadow-lg"
                  />
                </div>

                {/* Image 2: Middle Layer */}
                <div className="absolute w-2/3 aspect-3/4 shadow-xl transform rotate-6 -translate-x-12 group-hover:rotate-0 group-hover:translate-x-0 transition-all duration-500 z-20">
                  <Image
                    src="/images/2.jpg"
                    alt="Book Cover 2"
                    fill
                    className="object-cover rounded-xl border-4 border-white shadow-lg"
                  />
                </div>

                {/* Image 3: Top Layer (Front) */}
                <div className="absolute w-2/3 aspect-3/4 shadow-2xl transform -rotate-3 group-hover:scale-105 group-hover:rotate-0 transition-all duration-500 z-30">
                  <Image
                    src="/images/3.jpg"
                    alt="Book Cover 3"
                    fill
                    className="object-cover rounded-xl border-4 border-white shadow-2xl"
                  />
                  {/* Glossy Overlay for that "Unique Design" requirement */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
