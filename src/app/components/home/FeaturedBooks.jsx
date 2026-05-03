import { getBooks } from "@/utils/getBooks";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedBooks() {
  const books = await getBooks();


  const featured = books.slice(0, 4);

  return (
    <section className="py-20 bg-[#fdfaf1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-[#264653]">
              Featured <span className="text-[#e76f51]">Books</span>
            </h2>
            <p className="text-[#264653]/60 font-medium">
              Top picks for our community.
            </p>
          </div>
          <Link
            href="/all-books"
            className="text-[#e76f51] font-bold hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#f4a261]/20 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-72 bg-gray-100">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  height={300}
                  width={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[#e76f51] text-xs font-black uppercase tracking-widest">
                  {book.category}
                </span>
                <h3 className="text-xl font-bold text-[#264653] mt-1 mb-2">
                  {book.title}
                </h3>
                <p className="text-[#264653]/70 text-sm line-clamp-2 mb-6">
                  {book.description}
                </p>

                {/* Routing to Details Page */}
                <Link
                  href={`/all-books/${book.id}`}
                  className="block w-full text-center py-3 bg-[#fdfaf1] border-2 border-[#f4a261]/30 text-[#264653] font-bold rounded-xl hover:bg-[#e76f51] hover:text-white transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
