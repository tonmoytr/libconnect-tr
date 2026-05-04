"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Computer Science Student",
    feedback:
      "LibConnect has completely changed how I track my technical reads. The interface is clean and the community is amazing!",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 2,
    name: "Arif Ahmed",
    role: "Full Stack Developer",
    feedback:
      "As a MERN developer, I appreciate the speed of this platform. It's the best digital library experience I've used so far.",
    avatar: "https://i.pravatar.cc/150?u=arif",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Digital Librarian",
    feedback:
      "The way LibConnect organizes categories makes it incredibly easy to manage large collections. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    id: 4,
    name: "Jimmy Roy",
    role: "Junior MERN Developer",
    feedback:
      "Implementing Swiper logic here makes the UI feel professional and fluid. Great for modern web apps.",
    avatar: "https://i.pravatar.cc/150?u=tonmoy",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fdfaf1]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#264653] uppercase tracking-tighter">
            Reader <span className="text-[#e76f51]">Stories</span>
          </h2>
          <p className="text-[#264653]/50 font-medium mt-2">
            What our community is saying
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper !pb-14" // Extra padding for pagination bullets
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white p-8 rounded-[2rem] border-2 border-[#f4a261]/10 relative shadow-sm hover:shadow-xl transition-all h-full mb-6">
                <FaQuoteLeft className="text-[#f4a261]/20 text-4xl absolute top-6 right-8" />
                <p className="text-[#264653]/70 italic mb-8 relative z-10 leading-relaxed min-h-[100px]">
                  &ldquo;{t.feedback}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    unoptimized
                    className="w-12 h-12 rounded-full border-2 border-[#e76f51]/20"
                  />
                  <div>
                    <h4 className="font-bold text-[#264653] text-sm">
                      {t.name}
                    </h4>
                    <p className="text-[#e76f51] text-[10px] font-black uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styles to match your palette */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #e76f51 !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #e76f51 !important;
        }
        /* Change arrow color */
        .swiper-button-next,
        .swiper-button-prev {
          color: #e76f51 !important;
          transform: scale(
            0.7
          ); /* Optional: makes them slightly smaller/sleeker */
          transition: all 0.3s ease;
        }

        /* Change hover effect */
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #264653 !important;
        }

        /* Adjust position if they overlap with your card content */
        .swiper-button-next {
          right: -5px !important;
        }
        .swiper-button-prev {
          left: -5px !important;
        }
      `}</style>
    </section>
  );
}
