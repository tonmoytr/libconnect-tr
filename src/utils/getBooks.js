export async function getBooks() {
  // In production, use an absolute URL or a database call
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data/allbooks.json`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) return [];
  return res.json();
}
