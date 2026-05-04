export async function getBooks() {
  // Logic: Manually prioritize the production URL for the live site
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://libconnect-trt.vercel.app" // Your exact Vercel domain
      : "http://localhost:3000"; // Your local dev URL

  try {
    const res = await fetch(`${baseUrl}/data/allbooks.json`, {
      // Logic: Ensure Vercel doesn't serve a stale/empty version of the file
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Fetch failed at ${baseUrl}. Status: ${res.status}`);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch Error on Deployed Site:", error);
    return [];
  }
}
