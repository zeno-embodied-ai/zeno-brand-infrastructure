import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPage } from "@/components/detail-page";
import { getSitePage, sitePages } from "@/content/pages";
import { createMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSitePage(slug);
  if (!page) return {};

  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/zh-CN/${page.slug}/`,
    locale: "zh-CN",
  });
}

export default async function LocalizedPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSitePage(slug);
  if (!page) notFound();

  return <DetailPage page={page} />;
}
