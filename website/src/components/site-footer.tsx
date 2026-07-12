import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { primaryNavigation, utilityNavigation } from "@/lib/site";

const productLinks = [
  { href: "/software/#core", label: "Zeno Core" },
  { href: "/software/#link", label: "Zeno Link" },
  { href: "/software/#brain", label: "Zeno Brain" },
  { href: "/software/#cerebellum", label: "Zeno Cerebellum" },
  { href: "/humanoid/", label: "Zeno Humanoid" },
  { href: "/marine/", label: "Zeno Marine" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#040b14]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_2fr] lg:py-18">
        <div>
          <BrandMark compact />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            A full-stack open-source embodied intelligence platform for education, research and
            robotics competition.
          </p>
          <p className="mt-6 text-xs tracking-wide text-slate-500">
            English first · 简体中文 structure reserved
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <FooterGroup title="Explore" links={primaryNavigation.slice(0, 6)} />
          <FooterGroup title="Products" links={productLinks} />
          <FooterGroup title="Project" links={utilityNavigation} />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Zeno. Open-source project infrastructure.</p>
          <p>Built from repository-approved content. No third-party imagery.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href} className="text-sm text-slate-300 hover:text-lime-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
