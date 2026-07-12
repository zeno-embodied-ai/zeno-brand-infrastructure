import { CtaLink } from "@/components/cta-link";

export default function NotFound() {
  return (
    <main id="main-content" className="technical-grid grid min-h-[70vh] place-items-center px-5 py-20">
      <div className="max-w-xl text-center">
        <p className="eyebrow">404 · Route not found</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
          This path is not part of the stack.
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-400">
          Return to the Zeno platform map or use the navigation to find an approved public page.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaLink href="/platform/">Explore the platform</CtaLink>
        </div>
      </div>
    </main>
  );
}
