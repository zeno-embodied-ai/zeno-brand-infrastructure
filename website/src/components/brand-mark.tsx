import Image from "next/image";
import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-sm text-white"
      aria-label="Zeno home"
    >
      <Image
        src="/brand/zeno-logo.png"
        alt=""
        width={36}
        height={36}
        className="size-9 object-contain transition duration-200 group-hover:scale-105"
        aria-hidden="true"
      />
      <span className="text-xl font-semibold tracking-[-0.03em]">Zeno</span>
      {!compact && (
        <span className="hidden border-l border-white/15 pl-3 text-[0.65rem] font-semibold tracking-[0.15em] text-slate-400 uppercase xl:inline">
          Open embodied intelligence
        </span>
      )}
    </Link>
  );
}
