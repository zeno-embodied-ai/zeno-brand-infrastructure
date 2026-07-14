import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zeno — Open embodied intelligence",
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#06101d",
    theme_color: "#06101d",
    lang: "en",
    icons: [
      {
        src: "/brand/zeno-logo.png",
        sizes: "1254x1254",
        type: "image/png",
      },
    ],
  };
}
