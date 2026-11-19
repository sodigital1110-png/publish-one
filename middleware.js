import { NextResponse } from "next/server";

const CANONICAL_HOST = "so-digital.in";
const HSTS = "max-age=31536000; includeSubDomains"; // same value as next.config.mjs

// One canonical host: www.so-digital.in served every page a second time. Send it to so-digital.in for good (301),
// with the HSTS header on the redirect too (next.config.mjs headers aren't added to redirect responses).
// The matcher below means this only runs for www requests.
export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const response = NextResponse.redirect(`https://${CANONICAL_HOST}${pathname}${search}`, 301);
  response.headers.set("Strict-Transport-Security", HSTS);
  return response;
}

export const config = {
  matcher: [{ source: "/:path*", has: [{ type: "host", value: "www.so-digital.in" }] }],
};
