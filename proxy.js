import { NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "node:crypto";

// HTTP Basic Auth gate for /ops/*.
//
// Next.js 16 renamed `middleware` -> `proxy` and defaults to the Node.js
// runtime, which is why `node:crypto` is safe to import here.
//
// This is NOT enterprise-grade: single shared credential, no sessions, no
// per-user accounts, no rate limiting, no audit log. Fine for a small
// internal reference area. If /ops grows to hold sensitive client data,
// multiple users, or anything under NDA/compliance, upgrade to
// NextAuth / Auth.js / Clerk with proper session management.

function hashEqual(a, b) {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

function challenge() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Barnstorm Ops", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export function proxy(request) {
  const expectedUser = process.env.OPS_USERNAME;
  const expectedPass = process.env.OPS_PASSWORD;

  if (!expectedUser || !expectedPass) {
    return new NextResponse(
      "Ops area not configured: OPS_USERNAME and OPS_PASSWORD must be set.",
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  const header = request.headers.get("authorization") || "";
  if (!header.toLowerCase().startsWith("basic ")) {
    return challenge();
  }

  let decoded;
  try {
    decoded = atob(header.slice(6).trim());
  } catch {
    return challenge();
  }

  const idx = decoded.indexOf(":");
  if (idx < 0) return challenge();

  const user = decoded.slice(0, idx);
  const pass = decoded.slice(idx + 1);

  // Compute both comparisons unconditionally so a wrong username doesn't
  // short-circuit and leak timing info about which half failed.
  const userOk = hashEqual(user, expectedUser);
  const passOk = hashEqual(pass, expectedPass);

  if (!(userOk && passOk)) return challenge();

  return NextResponse.next();
}

// Matches `/ops` and every subpath. Both entries are needed: `/ops/:path*`
// alone may not match `/ops` exactly depending on path-to-regexp version,
// and a bare `/ops` bypassing auth would be a security hole.
export const config = {
  matcher: ["/ops", "/ops/:path*"],
};
