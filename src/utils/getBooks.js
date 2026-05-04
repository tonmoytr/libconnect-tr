export async function getBooks() {
  // Logic: Determine the correct URL based on the environment
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"; // Fallback for local dev

  try {
    const res = await fetch(`${baseUrl}/data/allbooks.json`, {
      // Use logic to prevent caching issues during development
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Fetch failed with status: ${res.status}`);
      return [];
    }

    return await res.json();
  } catch (error) {
    // This catch currently prevents build errors but returns empty data
    console.error("Fetch Error:", error);
    return [];
  }
}
