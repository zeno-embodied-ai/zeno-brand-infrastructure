import type { Metadata } from "next";

import Home from "@/app/page";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "开放具身智能",
  description: siteConfig.description,
  path: "/zh-CN/",
  locale: "zh-CN",
});

export default function LocalizedHome() {
  return <Home />;
}
