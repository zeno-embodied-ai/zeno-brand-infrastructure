import type { MetadataRoute } from "next";

import { sitePages } from "@/content/pages";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-12T00:00:00.000Z");

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sitePages.map((page) => ({
      url: `${siteConfig.url}/${page.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.slug === "platform" || page.slug === "documentation" ? 0.9 : 0.7,
    })),
  ];
}
