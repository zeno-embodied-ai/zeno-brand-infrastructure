import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, isLocale, localeCookieName, type Locale } from "@/i18n/config";

function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  return header.toLowerCase().startsWith("zh") || header.toLowerCase().includes(",zh")
    ? "zh-CN"
    : defaultLocale;
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/zh-CN")) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-zeno-locale", "zh-CN");
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const savedLocale = request.cookies.get(localeCookieName)?.value;
  const locale = savedLocale && isLocale(savedLocale)
    ? savedLocale
    : localeFromAcceptLanguage(request.headers.get("accept-language"));
  if (locale === "zh-CN") {
    const destination = request.nextUrl.clone();
    destination.pathname = "/zh-CN/";
    return NextResponse.redirect(destination);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-zeno-locale", defaultLocale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/", "/zh-CN/:path*"],
};
