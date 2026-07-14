import Image from "next/image";

export function PlaceholderVisual({
  label,
  mode = "system",
}: {
  label: string;
  mode?: "platform" | "system" | "humanoid" | "marine";
}) {
  if (mode === "platform") {
    return (
      <figure className="surface-bright relative isolate overflow-hidden rounded-[2rem]">
        <Image
          src="/diagrams/zeno-platform-stack.png"
          alt=""
          width={1572}
          height={1001}
          priority
          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 80vw, 100vw"
          className="h-auto w-full"
        />
        <figcaption className="sr-only">{label}</figcaption>
      </figure>
    );
  }

  return (
    <figure
      className="technical-grid surface-bright relative isolate min-h-72 overflow-hidden rounded-[2rem] p-6 sm:min-h-96"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(69,200,245,0.16),transparent_32%),radial-gradient(circle_at_30%_75%,rgba(184,243,90,0.12),transparent_34%)]" />
      <div className="relative flex min-h-60 items-center justify-center sm:min-h-80" aria-hidden="true">
        {mode === "humanoid" && <HumanoidGlyph />}
        {mode === "marine" && <MarineGlyph />}
        {mode === "system" && <SystemGlyph />}
      </div>
      <figcaption className="absolute inset-x-6 bottom-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-[0.65rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
        <span>{label}</span>
        <span>Replaceable visual</span>
      </figcaption>
    </figure>
  );
}

function SystemGlyph() {
  return (
    <div className="relative h-48 w-64">
      {[
        ["Brain", "top-0 left-20 border-sky-400/50"],
        ["Cerebellum", "top-16 right-0 border-lime-300/50"],
        ["Core", "bottom-8 left-20 border-white/25"],
        ["Link", "bottom-0 left-0 border-lime-300/50"],
      ].map(([label, classes]) => (
        <div
          key={label}
          className={`absolute grid h-14 min-w-24 place-items-center rounded-full border bg-[#081524]/85 px-4 text-xs font-semibold text-slate-100 ${classes}`}
        >
          {label}
        </div>
      ))}
      <span className="absolute top-12 left-31 h-8 w-px bg-slate-600" />
      <span className="absolute top-23 left-18 h-px w-20 bg-slate-600" />
      <span className="absolute bottom-12 left-12 h-px w-20 -rotate-20 bg-slate-600" />
    </div>
  );
}

function HumanoidGlyph() {
  return (
    <div className="relative h-56 w-36">
      <span className="absolute top-0 left-1/2 size-14 -translate-x-1/2 rounded-full border-2 border-lime-300/60 bg-lime-300/5" />
      <span className="absolute top-16 left-1/2 h-24 w-20 -translate-x-1/2 rounded-[2rem] border-2 border-sky-400/55 bg-sky-400/5" />
      <span className="absolute top-20 left-0 h-3 w-14 -rotate-30 rounded-full bg-slate-600" />
      <span className="absolute top-20 right-0 h-3 w-14 rotate-30 rounded-full bg-slate-600" />
      <span className="absolute bottom-0 left-8 h-20 w-3 rotate-8 rounded-full bg-slate-500" />
      <span className="absolute right-8 bottom-0 h-20 w-3 -rotate-8 rounded-full bg-slate-500" />
    </div>
  );
}

function MarineGlyph() {
  return (
    <div className="relative h-48 w-72">
      <span className="absolute top-20 left-3 h-16 w-64 rounded-[50%] border-2 border-sky-400/60 bg-sky-400/6" />
      <span className="absolute top-12 left-24 h-10 w-24 rounded-t-full border-2 border-b-0 border-lime-300/60" />
      <span className="absolute top-27 left-0 h-px w-72 bg-sky-300/30" />
      <span className="absolute top-32 left-8 h-px w-56 bg-sky-300/15" />
      <span className="absolute top-37 left-16 h-px w-40 bg-sky-300/10" />
    </div>
  );
}
