import React from "react";
import Marquee from "react-fast-marquee";

export default function AnnouncementMarquee() {
  const announcements = [
    "New Arrivals: The React Handbook (2026 Edition)",
    "Special Discount: 20% off on Premium Memberships this month",
    "Now Available: Sherlock Holmes - The Complete Collection",
    "Join our Discord community for developer book clubs",
    "New Tech Stack: Learn Next.js 16 with our latest arrivals",
  ];

  return (
    <div className="bg-[#f4a261]/10 border-y border-[#f4a261]/20 py-3 shadow-sm">
      <Marquee
        gradient={true}
        gradientColor="#fdfaf1" // Matches your soft sand background
        gradientWidth={100}
        speed={50}
        pauseOnHover={true}
      >
        {announcements.map((text, index) => (
          <div key={index} className="flex items-center mx-8">
            {/* Dot Separator using your primary Burnt Sienna */}
            <div className="w-2 h-2 rounded-full bg-[#e76f51] mr-4" />
            <span className="text-[#264653] font-bold text-sm md:text-base tracking-wide">
              {text}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
