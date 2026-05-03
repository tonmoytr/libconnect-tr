import Link from "next/link";
import { getBooks } from "@/utils/getBooks";
import Image from "next/image";
import SearchBar from "./components/SearchBar";

export default async function AllBooksPage({ searchParams }) {
  // Await params as per Next.js 15 standards
  const { search } = await searchParams;
  const allBooks = await getBooks();

  // Search logic executed on the server
  const filteredBooks = search
    ? allBooks.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      )
    : allBooks;

  return (
    <div className="bg-[#fdfaf1] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[#264653] uppercase tracking-tighter">
            Digital <span className="text-[#e76f51]">Collection</span>
          </h1>
          <p className="text-[#264653]/50 font-medium mt-6">
            Explore our full range of titles across Tech, Science, and Story
            categories. Select a book to view technical details or borrow it
            digitally.
          </p>
        </div>

        {/* Search Bar Component */}
        <SearchBar />

        {/* Results Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#f4a261]/10 shadow-sm hover:shadow-xl transition-all group flex flex-col text-left"
              >
                <div className="relative h-64 overflow-hidden bg-[#f4a261]/5">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#e76f51] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                    {book.category}
                  </div>
                </div>

                <div className="p-6 flex flex-grow flex-col">
                  <h3 className="font-bold text-lg text-[#264653] mb-1 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-[#f4a261] text-sm font-bold italic mb-4">
                    By {book.author}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/all-books/${book.id}`}
                      className="block w-full text-center py-3 bg-[#fdfaf1] border-2 border-[#f4a261]/20 text-[#264653] font-bold rounded-xl hover:bg-[#e76f51] hover:text-white hover:border-[#e76f51] transition-all shadow-sm"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 bg-white rounded-3xl border-2 border-dashed border-[#f4a261]/20">
            <p className="text-[#264653]/60 text-xl font-bold">
              No books found for &quot;{search}&quot;.
            </p>
            <Link
              href="/all-books"
              className="text-[#e76f51] font-black uppercase text-sm mt-4 inline-block hover:underline"
            >
              Clear Search
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
