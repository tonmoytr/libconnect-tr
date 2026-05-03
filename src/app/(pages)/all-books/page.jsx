import { getBooks } from "@/utils/getBooks";
import React from "react";

export default async function AllBooks() {
  const books = await getBooks();
  return <div>total books : {books.length}</div>;
}
