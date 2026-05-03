"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    // Logic: Debounce the URL update to prevent excessive server requests
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      // replace ensures we don't clog the browser history with every keystroke
      router.replace(`/all-books?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, router, searchParams]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f4a261]">
        <HiOutlineSearch size={22} />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books by title..."
        className="w-full pl-12 pr-6 py-4 bg-white border-2 border-[#f4a261]/20 rounded-2xl focus:outline-none focus:border-[#e76f51] text-[#264653] font-medium transition-all shadow-sm placeholder-[#264653]/30"
      />
    </div>
  );
}
