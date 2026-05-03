import Link from "next/link";
import { getBooks } from "@/utils/getBooks"; // Assuming your fetch function is here
import Image from "next/image";

export const metadata = {
  title: "All Books | LibConnect",
  description: "Browse our complete digital library collection.",
};

export default async function AllBooksPage() {
  const books = await getBooks();

  return (
    <div className="bg-[#fdfaf1] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 border-b border-[#f4a261]/20 pb-8">
          <h1 className="text-4xl font-black text-[#264653] mb-4">
            Digital <span className="text-[#e76f51]">Collection</span>
          </h1>
          <p className="text-[#264653]/70 font-medium max-w-2xl">
            Explore our full range of titles across Tech, Science, and Story
            categories. Select a book to view technical details or borrow it
            digitally.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#f4a261]/10 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-[#f4a261]/5">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#e76f51] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  {book.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-[#264653] mb-1 line-clamp-1 group-hover:text-[#e76f51] transition-colors">
                  {book.title}
                </h3>
                <p className="text-[#f4a261] text-sm font-bold mb-4 italic">
                  By {book.author}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/all-books/${book.id}`}
                    className="block w-full text-center py-3 bg-[#fdfaf1] border-2 border-[#f4a261]/20 text-[#264653] font-bold rounded-xl hover:bg-[#e76f51] hover:text-white hover:border-[#e76f51] transition-all shadow-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
