import type { Metadata } from "next";

import Home from "@/app/page";
import { getDictionary } from "@/i18n/dictionaries";
import { createMetadata } from "@/lib/metadata";

const dictionary = getDictionary("zh-CN");

export const metadata: Metadata = createMetadata({
  title: "开放具身智能",
  description: dictionary.metadata.siteDescription,
  path: "/zh-CN/",
  locale: "zh-CN",
});

export default function LocalizedHome() {
  return <Home locale="zh-CN" />;
}
