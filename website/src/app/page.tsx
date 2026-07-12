import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon, CtaLink } from "@/components/cta-link";
import { PlaceholderVisual } from "@/components/placeholder-visual";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Open embodied intelligence",
  description: siteConfig.description,
  path: "/",
});

const products = [
  { name: "Zeno Core", role: "Shared runtime, foundational APIs and core interfaces.", href: "/software/#core", index: "01" },
  { name: "Zeno Link", role: "Device, protocol, gateway and communication integration.", href: "/software/#core", index: "02" },
  { name: "Zeno Brain", role: "Perception, planning and intelligent task orchestration.", href: "/software/#brain", index: "03" },
  { name: "Zeno Cerebellum", role: "Real-time motion control, trajectories and execution.", href: "/software/#cerebellum", index: "04" },
  { name: "Zeno Humanoid", role: "A humanoid robot platform for integrated embodied systems.", href: "/humanoid/", index: "05" },
  { name: "Zeno Marine", role: "A marine robot platform for sensing, missions and research.", href: "/marine/", index: "06" },
  { name: "Zeno Cloud", role: "Planned optional collaboration, data and remote services.", href: "/platform/", index: "07" },
  { name: "Zeno Simulation", role: "Scenes, digital twins and repeatable test environments.", href: "/platform/", index: "08" },
] as const;

const audiences = [
  {
    title: "Education",
    text: "Connect courses, laboratories and student projects to one understandable system model.",
    href: "/education/",
  },
  {
    title: "Research",
    text: "Make platform versions, interfaces and experiment context easier to reproduce.",
    href: "/research/",
  },
  {
    title: "Robotics competition",
    text: "Build disciplined integration and team workflows for RoboCup and related challenges.",
    href: "/education/",
  },
] as const;

export default function Home() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="technical-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -z-10 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-18 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3 py-2 text-xs font-semibold tracking-[0.13em] text-lime-300 uppercase">
              <span className="size-1.5 rounded-full bg-lime-300" aria-hidden="true" />
              Full-stack · Open source · Embodied
            </div>
            <h1 className="text-balance mt-7 max-w-4xl text-5xl leading-[0.93] font-semibold tracking-[-0.065em] text-white sm:text-7xl lg:text-[5.5rem]">
              Intelligence that reaches the physical world.
            </h1>
            <p className="text-pretty mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Zeno is a full-stack open-source embodied intelligence platform for education,
              research and robotics competition.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaLink href="/platform/">Explore the platform</CtaLink>
              <CtaLink href="/documentation/" variant="secondary">
                Documentation
              </CtaLink>
            </div>
            <div className="mt-11 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-slate-500">
              <div><strong className="block text-sm text-slate-200">Learn</strong>Courses & labs</div>
              <div><strong className="block text-sm text-slate-200">Build</strong>Robots & software</div>
              <div><strong className="block text-sm text-slate-200">Research</strong>Open experiments</div>
            </div>
          </div>
          <PlaceholderVisual label="Zeno full-stack platform placeholder" />
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">The Zeno stack</p>
              <h2 className="text-balance mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                One platform. Eight clear roles.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-400 lg:justify-self-end">
              Zeno uses one master brand across runtime, connectivity, intelligence, control,
              robot platforms, simulation and optional cloud collaboration.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group min-h-56 bg-[#091625] p-6 transition hover:bg-[#0d1d2f]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-slate-600">{product.index}</span>
                  <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-lime-300">
                    <ArrowIcon />
                  </span>
                </div>
                <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em] text-white">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{product.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 sm:py-24">
          <p className="eyebrow">Built for the people advancing robotics</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Learn the system. Extend the system. Test the system.
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {audiences.map((audience) => (
                <Link key={audience.title} href={audience.href} className="surface group rounded-2xl p-6 hover:border-white/25">
                  <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{audience.text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-lime-300">
                    Explore <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-24">
        <div className="surface-bright relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute top-1/2 right-0 size-96 -translate-y-1/2 rounded-full bg-lime-300/8 blur-[90px]" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Open collaboration</p>
              <h2 className="text-balance mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Build the next layer with the Zeno community.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                The official GitHub organization and community destinations will be linked after
                their public names and ownership are verified.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CtaLink href="/community/#github">GitHub</CtaLink>
              <CtaLink href="/documentation/" variant="secondary">Documentation</CtaLink>
              <CtaLink href="/community/" variant="secondary">Join the community</CtaLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
