"use client"; // This is mandatory for using onClick and toast

import { toast } from "react-toastify";

export default function BorrowButton({ bookTitle }) {
  const handleBorrow = () => {
    // Logic First: Trigger the toast on the client side
    toast.success(`You have borrowed "${bookTitle}" successfully!`, {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <button
      onClick={handleBorrow}
      className="w-full bg-[#e76f51] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#f4a261] transition-all shadow-xl shadow-[#e76f51]/20 active:scale-[0.98]"
    >
      Borrow This Book
    </button>
  );
}
