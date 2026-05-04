"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategorySidebar({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get the current active category from the URL (?category=...)
  const activeCategory = searchParams.get("category") || "All";

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (category === "All") {
      params.delete("category"); // Remove the filter if "All" is selected
    } else {
      params.set("category", category);
    }
    
    // Update the URL without a full page reload
    router.push(`/all-books?${params.toString()}`);
  };

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="bg-white p-6 rounded-3xl border border-[#f4a261]/20 shadow-sm sticky top-24">
        <h3 className="text-[#264653] font-black uppercase text-xs tracking-[0.2em] mb-6">
          Filter by Category
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`text-left px-5 py-3.5 rounded-2xl font-bold text-sm transition-all ${
                activeCategory === cat 
                ? "bg-[#e76f51] text-white shadow-lg shadow-[#e76f51]/20" 
                : "text-[#264653]/60 hover:bg-[#fdfaf1] hover:text-[#e76f51]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}