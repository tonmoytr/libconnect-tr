import { getBooks } from "@/utils/getBooks";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toast } from "react-toastify";
import BorrowButton from "../components/BorrowButton";

export default async function BookDetailsPage({ params }) {
  const { id } = await params;
  const books = await getBooks();

  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    notFound();
  }

  return (
    <div className="bg-[#fdfaf1] min-h-screen py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          href="/all-books"
          className="inline-flex items-center text-[#e76f51] font-bold mb-8 hover:translate-x-[-4px] transition-transform"
        >
          ← Back to Collection
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#f4a261]/10 grid grid-cols-1 md:grid-cols-2">
          {/* Visual Side */}
          <div className="bg-[#f4a261]/5 p-8 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-300">
              <Image
                src={book.image_url}
                alt={book.title}
                width={350}
                height={450}
                className="w-full h-full object-cover rounded-xl border-8 border-white"
              />
            </div>
          </div>

          {/* Info Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[#e76f51] font-black uppercase tracking-widest text-xs mb-2">
              {book.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#264653] mb-4 leading-tight">
              {book.title}
            </h1>
            <p className="text-xl text-[#f4a261] font-bold mb-6 italic">
              Authored by {book.author}
            </p>

            <div className="prose prose-neutral mb-8">
              <p className="text-[#264653]/70 leading-relaxed text-lg">
                {book.description}
              </p>
            </div>

            <div className="flex items-center gap-6 mb-10 p-4 bg-[#fdfaf1] rounded-2xl border border-[#f4a261]/20">
              <div>
                <p className="text-xs uppercase font-black text-[#264653]/40 tracking-tighter">
                  Availability
                </p>
                <p className="text-[#264653] font-bold text-lg">
                  {book.available_quantity} copies left
                </p>
              </div>
              <div className="w-[1px] h-10 bg-[#f4a261]/30"></div>
              <div>
                <p className="text-xs uppercase font-black text-[#264653]/40 tracking-tighter">
                  Format
                </p>
                <p className="text-[#264653] font-bold text-lg">
                  Digital E-Book
                </p>
              </div>
            </div>

            <BorrowButton bookTitle={book.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
