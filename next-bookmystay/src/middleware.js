import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

// Public routes that don't need authentication
const publicRoutes = [
  "/",
  "/stay",
  "/membership",
  "/auth/login",
  "/auth/signup",
  "/features",
  "/support",
];
const publicApiRoutes = ["/api/auth/login", "/api/auth/signup"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow static files, Next.js internals, and image optimization bypass
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".") // matches files like .jpg, .svg, etc.
  ) {
    return NextResponse.next();
  }

  // Allow explicitly public paths and their dynamic variants (like /stay/1)
  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );
  if (isPublicRoute || publicApiRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Get the token from cookies
  const token = request.cookies.get("token")?.value;

  // If no token exists, redirect to login
  if (!token) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Verify token
  const payload = await verifyToken(token);

  // If token is invalid, clear it and redirect to login
  if (!payload) {
    const response = NextResponse.redirect(new URL("/auth/login", request.url));
    response.cookies.delete("token");
    return response;
  }

  // --- Role Based Access Control ---
  const userRole = payload.role;

  // Admin routes protection
  if (pathname.startsWith("/admin") && userRole !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Host routes protection
  if (pathname.startsWith("/host") && userRole !== "host") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Customer routes protection
  if (pathname.startsWith("/customer") && userRole !== "customer") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Add user info to headers so API routes and React Server Components can read it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user-id", payload.id);
  requestHeaders.set("x-user-role", payload.role);
  requestHeaders.set("x-user-email", payload.email);
  requestHeaders.set("x-user-name", payload.name);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Config ensures middleware only runs on routes that matter
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ (except we might want to protect some APIs, so we'll handle internally)
     * 2. /_next/ (Next.js internals)
     * 3. /_static/ (static files)
     * 4. /favicon.ico, /sitemap.xml (SEO files)
     * 5. Match all files with extensions
     */
    "/((?!_next/|_static/|favicon.ico|sitemap.xml|.*\\.).*)",
  ],
};
