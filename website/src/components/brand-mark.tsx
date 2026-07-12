import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-sm text-white"
      aria-label="Zeno home"
    >
      <span
        className="relative grid size-8 grid-cols-2 gap-1 rounded-[0.55rem] border border-lime-300/35 bg-slate-950 p-1.5 shadow-[0_0_24px_rgba(184,243,90,0.1)]"
        aria-hidden="true"
      >
        <span className="rounded-full bg-lime-300" />
        <span className="rounded-full bg-sky-400/80" />
        <span className="rounded-full bg-sky-400/80" />
        <span className="rounded-full bg-lime-300" />
      </span>
      <span className="text-xl font-semibold tracking-[-0.03em]">Zeno</span>
      {!compact && (
        <span className="hidden border-l border-white/15 pl-3 text-[0.65rem] font-semibold tracking-[0.15em] text-slate-400 uppercase xl:inline">
          Open embodied intelligence
        </span>
      )}
    </Link>
  );
}
