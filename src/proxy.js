import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./utils/auth";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  //   const isLoggedIn = true;

  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/all-books/:path*"],
};
