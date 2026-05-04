export async function getBooks() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://libconnect-trt.vercel.app");

  try {
    const res = await fetch(`${baseUrl}/data/allbooks.json`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch books data");

    return await res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}
