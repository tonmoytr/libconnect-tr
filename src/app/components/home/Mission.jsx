import React from "react";

export default function Mission() {
  const stats = [
    { label: "Active Readers", value: "12K+" },
    { label: "Total Books", value: "850+" },
    { label: "Daily Visits", value: "2.5K+" },
    { label: "Contributors", value: "150+" },
  ];

  return (
    <section className="py-12 bg-[#264653]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-4xl font-black text-[#f4a261] tracking-tighter">
                {stat.value}
              </p>
              <p className="text-[#fdfaf1]/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
