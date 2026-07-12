import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const canonical = new URL(canonicalPath, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/og/zeno-og-placeholder.svg",
          width: 1200,
          height: 630,
          alt: "Zeno — open embodied intelligence",
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
