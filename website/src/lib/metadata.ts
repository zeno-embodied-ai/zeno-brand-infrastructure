import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function createMetadata({
  title,
  description,
  path,
  locale = "en",
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
}): Metadata {
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const canonical = new URL(canonicalPath, siteConfig.url).toString();
  const dictionary = getDictionary(locale);
  const unprefixedPath = canonicalPath === "/zh-CN/"
    ? "/"
    : canonicalPath.startsWith("/zh-CN/")
      ? canonicalPath.slice("/zh-CN".length)
      : canonicalPath;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: unprefixedPath,
        "zh-CN": `/zh-CN${unprefixedPath === "/" ? "/" : unprefixedPath}`,
        "x-default": unprefixedPath,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "zh-CN" ? "zh_CN" : "en_US",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/og/zeno-og-placeholder.svg",
          width: 1200,
          height: 630,
          alt: dictionary.metadata.openGraphAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/zeno-og-placeholder.svg"],
    },
  };
}
