import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  const styles = {
    primary:
      "bg-lime-300 text-slate-950 hover:bg-lime-200 border border-lime-200 shadow-[0_12px_36px_rgba(184,243,90,0.12)]",
    secondary:
      "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.07]",
    text: "text-lime-300 hover:text-lime-200",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}
