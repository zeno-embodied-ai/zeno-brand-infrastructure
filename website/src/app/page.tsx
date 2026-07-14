import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon, CtaLink } from "@/components/cta-link";
import { PlaceholderVisual } from "@/components/placeholder-visual";
import { localizedPath, type Locale } from "@/i18n/config";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Open embodied intelligence",
  description: siteConfig.description,
  path: "/",
});

const homeContent = {
  en: {
    badge: "Full-stack · Open source · Embodied",
    title: "Intelligence that reaches the physical world.",
    description: "Zeno is a full-stack open-source embodied intelligence platform for education, research and robotics competition.",
    explorePlatform: "Explore the platform",
    documentation: "Documentation",
    stats: [["Learn", "Courses & labs"], ["Build", "Robots & software"], ["Research", "Open experiments"]],
    stackEyebrow: "The Zeno stack",
    stackTitle: "One platform. Eight clear roles.",
    stackCopy: "Zeno uses one master brand across runtime, connectivity, intelligence, control, robot platforms, simulation and optional cloud collaboration.",
    audienceEyebrow: "Built for the people advancing robotics",
    audienceTitle: "Learn the system. Extend the system. Test the system.",
    explore: "Explore",
    collaborationEyebrow: "Open collaboration",
    collaborationTitle: "Build the next layer with the Zeno community.",
    collaborationCopy: "The official GitHub organization and community destinations will be linked after their public names and ownership are verified.",
    joinCommunity: "Join the community",
    visualLabel: "Zeno full-stack platform placeholder",
  },
  "zh-CN": {
    badge: "全栈 · 开源 · 具身智能",
    title: "让智能真正抵达物理世界。",
    description: "Zeno 是面向教育、科研与机器人竞赛的全栈开源具身智能平台。",
    explorePlatform: "探索平台",
    documentation: "查看文档",
    stats: [["学习", "课程与实验室"], ["构建", "机器人与软件"], ["研究", "开放实验"]],
    stackEyebrow: "Zeno 技术栈",
    stackTitle: "一个平台，八个清晰角色。",
    stackCopy: "Zeno 以统一主品牌连接运行时、通信、智能、控制、机器人平台、仿真与可选云端协作。",
    audienceEyebrow: "为推动机器人技术的人而构建",
    audienceTitle: "理解系统，扩展系统，验证系统。",
    explore: "查看详情",
    collaborationEyebrow: "开放协作",
    collaborationTitle: "与 Zeno 社区共同构建下一层能力。",
    collaborationCopy: "通过官方 GitHub Organization、版本化文档和开放协作，共同完善 Zeno 具身智能平台。",
    joinCommunity: "加入社区",
    visualLabel: "Zeno 全栈平台示意图",
  },
} as const;

const products = {
  en: [
    { name: "Zeno Core", role: "Shared runtime, foundational APIs and core interfaces.", href: "/software/#core", index: "01" },
    { name: "Zeno Link", role: "Device, protocol, gateway and communication integration.", href: "/software/#core", index: "02" },
    { name: "Zeno Brain", role: "Perception, planning and intelligent task orchestration.", href: "/software/#brain", index: "03" },
    { name: "Zeno Cerebellum", role: "Real-time control, trajectories and motion execution.", href: "/software/#cerebellum", index: "04" },
    { name: "Zeno Humanoid", role: "A humanoid platform for integrated embodied systems.", href: "/humanoid/", index: "05" },
    { name: "Zeno Marine", role: "A marine platform for sensing, missions and research.", href: "/marine/", index: "06" },
    { name: "Zeno Cloud", role: "Optional collaboration, data and remote services.", href: "/platform/", index: "07" },
    { name: "Zeno Simulation", role: "Scenes, digital twins and repeatable tests.", href: "/platform/", index: "08" },
  ],
  "zh-CN": [
    { name: "Zeno Core", role: "共享运行时、基础 API 与核心接口。", href: "/software/#core", index: "01" },
    { name: "Zeno Link", role: "设备、协议、网关与通信集成。", href: "/software/#core", index: "02" },
    { name: "Zeno Brain", role: "感知、规划与智能任务编排。", href: "/software/#brain", index: "03" },
    { name: "Zeno Cerebellum", role: "实时控制、轨迹与运动执行。", href: "/software/#cerebellum", index: "04" },
    { name: "Zeno Humanoid", role: "面向完整具身系统的人形机器人平台。", href: "/humanoid/", index: "05" },
    { name: "Zeno Marine", role: "面向感知、任务与研究的海洋机器人平台。", href: "/marine/", index: "06" },
    { name: "Zeno Cloud", role: "可选的协作、数据与远程服务。", href: "/platform/", index: "07" },
    { name: "Zeno Simulation", role: "场景、数字孪生与可重复测试。", href: "/platform/", index: "08" },
  ],
} as const;

const audiences = {
  en: [
    { title: "Education", text: "Connect courses, laboratories and student projects to one understandable system model.", href: "/education/" },
    { title: "Research", text: "Make platform versions, interfaces and experiment context easier to reproduce.", href: "/research/" },
    { title: "Robotics competition", text: "Build disciplined integration and team workflows for RoboCup and related challenges.", href: "/education/" },
  ],
  "zh-CN": [
    { title: "教育", text: "把课程、实验室和学生项目连接到一套易于理解的系统模型。", href: "/education/" },
    { title: "科研", text: "让平台版本、接口和实验上下文更容易复现。", href: "/research/" },
    { title: "机器人竞赛", text: "为 RoboCup 等赛事建立规范的集成方法和团队工作流。", href: "/education/" },
  ],
} as const;

export default function Home({ locale = "en" }: { locale?: Locale }) {
  const content = homeContent[locale];
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="technical-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -z-10 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-18 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3 py-2 text-xs font-semibold tracking-[0.13em] text-lime-300 uppercase">
              <span className="size-1.5 rounded-full bg-lime-300" aria-hidden="true" />
              {content.badge}
            </div>
            <h1 className="text-balance mt-7 max-w-4xl text-5xl leading-[0.93] font-semibold tracking-[-0.065em] text-white sm:text-7xl lg:text-[5.5rem]">
              {content.title}
            </h1>
            <p className="text-pretty mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {content.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaLink href={localizedPath(locale, "/platform/")}>{content.explorePlatform}</CtaLink>
              <CtaLink href={localizedPath(locale, "/documentation/")} variant="secondary">
                {content.documentation}
              </CtaLink>
            </div>
            <div className="mt-11 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-slate-500">
              {content.stats.map(([title, text]) => (
                <div key={title}><strong className="block text-sm text-slate-200">{title}</strong>{text}</div>
              ))}
            </div>
          </div>
          <PlaceholderVisual label={content.visualLabel} />
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">{content.stackEyebrow}</p>
              <h2 className="text-balance mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                {content.stackTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-400 lg:justify-self-end">
              {content.stackCopy}
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {products[locale].map((product) => (
              <Link
                key={product.name}
                href={localizedPath(locale, product.href)}
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
          <p className="eyebrow">{content.audienceEyebrow}</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              {content.audienceTitle}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {audiences[locale].map((audience) => (
                <Link key={audience.title} href={localizedPath(locale, audience.href)} className="surface group rounded-2xl p-6 hover:border-white/25">
                  <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{audience.text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-lime-300">
                    {content.explore} <ArrowIcon />
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
              <p className="eyebrow">{content.collaborationEyebrow}</p>
              <h2 className="text-balance mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                {content.collaborationTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                {content.collaborationCopy}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CtaLink href={localizedPath(locale, "/community/#github")}>GitHub</CtaLink>
              <CtaLink href={localizedPath(locale, "/documentation/")} variant="secondary">{content.documentation}</CtaLink>
              <CtaLink href={localizedPath(locale, "/community/")} variant="secondary">{content.joinCommunity}</CtaLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
