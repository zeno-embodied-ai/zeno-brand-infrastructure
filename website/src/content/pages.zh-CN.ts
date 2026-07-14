import type { SitePage } from "@/content/pages";

export const sitePagesZhCN = [
  {
    slug: "platform", eyebrow: "可组合的统一技术栈", title: "从连接、控制到认知的具身智能平台。",
    summary: "Zeno 将硬件、通信、运行时、实时控制、智能、仿真与协作组织为一套开放平台。",
    description: "了解 Zeno 从硬件、软件到智能与仿真的完整平台架构。", visualMode: "system", visualLabel: "Zeno 平台技术栈示意图",
    highlights: ["开放架构", "模块化分层", "版本化接口"],
    sections: [
      { eyebrow: "平台架构", title: "每一层都有明确职责", copy: "清晰的产品边界让团队能够理解完整系统，同时保持各模块可独立演进。", items: [
        { title: "连接", text: "Zeno Link 负责设备、总线、协议与通信集成。" }, { title: "运行", text: "Zeno Core 提供共享运行时、SDK 和基础接口。" },
        { title: "控制", text: "Zeno Cerebellum 负责实时运动控制与执行。" }, { title: "智能", text: "Zeno Brain 负责感知、规划与智能任务。" },
      ] },
      { eyebrow: "物理与数字", title: "在机器人上构建，在仿真中验证", copy: "人形与海洋机器人提供真实载体，仿真系统提供可重复的场景和测试。", items: [
        { title: "Zeno Humanoid", text: "面向教学、竞赛与研究的人形机器人平台。" }, { title: "Zeno Marine", text: "面向水域感知与任务的海洋机器人平台。" },
        { title: "Zeno Simulation", text: "场景、数字孪生和自动化测试环境。" }, { title: "Zeno Cloud", text: "可选的团队、数据与远程协作能力。" },
      ] },
    ],
    cta: { eyebrow: "从平台地图开始", title: "选择与你工作最相关的一层。", copy: "从软件基础开始，或直接了解机器人平台。", primary: { label: "探索软件", href: "/software/" }, secondary: { label: "探索硬件", href: "/hardware/" } },
  },
  {
    slug: "hardware", eyebrow: "开放机器人平台", title: "让全栈能力落到真实硬件。",
    summary: "Zeno 硬件围绕机器人平台及其感知、控制和智能接口进行组织。", description: "了解 Zeno Humanoid 与 Zeno Marine 硬件平台。",
    visualMode: "humanoid", visualLabel: "Zeno 硬件平台示意图", highlights: ["机器人平台", "清晰接口", "教学到科研"],
    sections: [
      { eyebrow: "机器人平台", title: "两类载体，一套平台理念", copy: "人形与海洋机器人面对不同工程环境，但共享可复现配置、明确接口和安全运行原则。", items: [
        { title: "Zeno Humanoid", text: "连接装配、标定、控制和具身智能实验。" }, { title: "Zeno Marine", text: "连接水域平台、环境感知、任务与安全。" },
      ] },
      { eyebrow: "学习路径", title: "从部件走向完整系统", copy: "硬件文档将装配维护与可观测、可编程的软件层连接起来。", items: [
        { title: "装配", text: "记录部件、接口和安全装配流程。" }, { title: "标定", text: "让传感与执行假设明确且可重复。" },
        { title: "集成", text: "通过 Zeno Link 和共享运行时接入硬件。" }, { title: "实验", text: "在版本化基础上开展教学、竞赛和研究。" },
      ] },
    ],
    cta: { eyebrow: "选择机器人平台", title: "探索人形或海洋机器人。", copy: "产品规格和兼容性以版本化文档为准。", primary: { label: "Zeno Humanoid", href: "/humanoid/" }, secondary: { label: "Zeno Marine", href: "/marine/" } },
  },
  {
    slug: "software", eyebrow: "从运行时到智能", title: "面向互联、可控机器人的软件分层。",
    summary: "Zeno Core、Link、Brain 与 Cerebellum 分别承担运行时、通信、智能和实时执行。", description: "了解 Zeno 软件技术栈。",
    visualMode: "system", visualLabel: "Zeno 软件技术栈示意图", highlights: ["Zeno Core", "Zeno Link", "Zeno Brain", "Zeno Cerebellum"],
    sections: [
      { id: "core", eyebrow: "基础层", title: "Core 与 Link", copy: "基础软件层定义机器人如何连接设备，以及如何向上层提供共享运行能力。", items: [
        { title: "Zeno Core", text: "共享运行时、基础 API、SDK 与核心接口。" }, { title: "Zeno Link", text: "设备接入、协议、网关、通信与同步。" },
      ] },
      { id: "brain", eyebrow: "智能与控制", title: "Brain 与 Cerebellum", copy: "智能任务与实时控制保持清晰边界，同时通过稳定接口协同。", items: [
        { title: "Zeno Brain", text: "感知、推理、规划与智能任务编排。" }, { title: "Zeno Cerebellum", text: "控制器、轨迹、动力学与实时运动接口。" },
      ] },
    ],
    cta: { eyebrow: "清晰地构建", title: "从软件模型进入版本化文档。", copy: "技术指南与参考文档独立于宣传网站维护。", primary: { label: "查看文档", href: "/documentation/" }, secondary: { label: "查看平台", href: "/platform/" } },
  },
  {
    slug: "humanoid", eyebrow: "Zeno Humanoid", title: "面向学习与具身智能研究的人形机器人平台。",
    summary: "Zeno Humanoid 覆盖机器人本体、装配、标定、维护和全栈示例。", description: "了解 Zeno Humanoid 在开放平台中的定位。",
    visualMode: "humanoid", visualLabel: "Zeno Humanoid 平台示意图", highlights: ["装配", "标定", "运动", "实验"],
    sections: [
      { eyebrow: "平台边界", title: "把机器人本体连接到完整技术栈", copy: "通信、运行时、实时控制与智能任务在人形平台上形成完整闭环。", items: [
        { title: "本体", text: "明确机械、传感与执行边界。" }, { title: "控制", text: "从 Zeno Cerebellum 到运动执行的清晰路径。" }, { title: "智能", text: "让 Zeno Brain 工作流进入真实具身任务。" },
      ] },
      { eyebrow: "应用场景", title: "围绕可复现学习而设计", copy: "教师、学生、竞赛团队和研究人员可以从不同深度理解同一系统。", items: [
        { title: "教育", text: "用于具身系统教学的结构化实验。" }, { title: "竞赛", text: "可重复的机器人集成和团队工作流。" }, { title: "研究", text: "便于扩展算法和复现实验的开放接口。" },
      ] },
    ],
    cta: { eyebrow: "沿平台继续", title: "从硬件构建到智能。", copy: "详细规格将在产品批准后通过版本化文档发布。", primary: { label: "探索技术栈", href: "/platform/" }, secondary: { label: "使用 Zeno 开展研究", href: "/research/" } },
  },
  {
    slug: "marine", eyebrow: "Zeno Marine", title: "面向海洋机器人场景的具身智能。",
    summary: "Zeno Marine 定义海洋机器人本体、感知、任务和水域安全的平台边界。", description: "了解 Zeno Marine 在开放平台中的定位。",
    visualMode: "marine", visualLabel: "Zeno Marine 平台示意图", highlights: ["海洋平台", "环境感知", "任务", "水域安全"],
    sections: [
      { eyebrow: "平台边界", title: "把 Zeno 技术栈带到真实水域", copy: "海洋环境带来独特的感知、通信和运行约束，因此更需要清晰边界和安全流程。", items: [
        { title: "平台", text: "记录本体、机载接口与运行假设。" }, { title: "感知", text: "通过明确接口接入环境与导航传感器。" }, { title: "任务", text: "让仿真、控制和智能行为可以逐步验证。" },
      ] },
      { eyebrow: "工程实践", title: "安全与可复现优先", copy: "公开材料应说明环境、版本和安全背景，避免未经验证的能力宣传。", items: [
        { title: "准备", text: "明确设备、环境与回收方案。" }, { title: "验证", text: "开放水域运行前先进行仿真和受控测试。" }, { title: "记录", text: "让任务设置和结果可追溯到平台版本。" },
      ] },
    ],
    cta: { eyebrow: "从仿真到任务", title: "探索规范的海洋机器人工作流。", copy: "技术和安全细节将在产品评审后发布。", primary: { label: "探索平台", href: "/platform/" }, secondary: { label: "查看路线图", href: "/roadmap/" } },
  },
  {
    slug: "research", eyebrow: "面向科研团队", title: "支持具身智能复现的平台模型。",
    summary: "Zeno 让系统边界、API、数据和实验上下文在完整技术栈中更加清晰。", description: "了解 Zeno 对具身智能科研和可复现性的支持。",
    visualMode: "system", visualLabel: "Zeno 科研工作流示意图", highlights: ["明确接口", "版本化上下文", "仿真", "开放扩展"],
    sections: [
      { eyebrow: "科研工作流", title: "让完整实验栈可见", copy: "可复现性不仅取决于算法，还取决于软件、控制、机器人平台和仿真上下文。", items: [
        { title: "定义", text: "说明平台、接口、数据和版本假设。" }, { title: "原型", text: "通过仿真和模块化接口隔离变化。" }, { title: "复现", text: "发布足够上下文，让其他团队重建流程。" },
      ] },
      { eyebrow: "开放研究", title: "扩展能力，同时保持边界清晰", copy: "本地执行、可选云服务和外部研究组件应保持可区分。", items: [
        { title: "模型", text: "通过 Zeno Brain 接口连接模型与推理。" }, { title: "控制", text: "通过 Zeno Cerebellum 明确实时假设。" }, { title: "机器人", text: "将实验关联到具体平台版本。" }, { title: "仿真", text: "通过场景与测试用例比较行为。" },
      ] },
    ],
    cta: { eyebrow: "规划实验", title: "从架构和版本化文档开始。", copy: "基准、数据集与兼容性结论仅在验证后发布。", primary: { label: "查看文档", href: "/documentation/" }, secondary: { label: "加入社区", href: "/community/" } },
  },
  {
    slug: "education", eyebrow: "面向教师与学生", title: "把具身智能作为完整系统来学习。",
    summary: "Zeno 通过统一开放平台连接课程、实验室、机器人集成和竞赛准备。", description: "了解 Zeno 面向课程、实验室与学生团队的教育定位。",
    visualMode: "system", visualLabel: "Zeno 教育路径示意图", highlights: ["课程", "实验室", "学生团队", "RoboCup"],
    sections: [
      { eyebrow: "学习进阶", title: "从概念走向具身系统", copy: "统一平台帮助学习者理解通信、运行时、控制、智能和机器人行为之间的关系。", items: [
        { title: "理解", text: "通过平台地图定位概念与职责。" }, { title: "构建", text: "完成可重复的配置和集成练习。" }, { title: "测量", text: "把实验关联到版本、假设和可观察结果。" }, { title: "竞赛", text: "把完整技术栈用于规范的竞赛工作流。" },
      ] },
      { eyebrow: "教学资料", title: "与平台版本保持关联", copy: "课程包、实验手册和示例应注明适用的产品与文档版本。", items: [
        { title: "教师", text: "课程结构、实验准备和可重复课堂流程。" }, { title: "学生", text: "快速入门、教程、故障排查和深入参考。" }, { title: "团队", text: "统一配置、集成检查和竞赛运行规范。" },
      ] },
    ],
    cta: { eyebrow: "教授完整系统", title: "跟随持续发布的学习路径。", copy: "课程与竞赛资料将明确范围和适用版本。", primary: { label: "查看文档", href: "/documentation/" }, secondary: { label: "加入社区", href: "/community/" } },
  },
  {
    slug: "documentation", eyebrow: "版本化知识", title: "围绕任务和产品边界组织的文档。",
    summary: "文档系统区分快速入门、概念、教程、操作指南、参考、兼容性与发布说明。", description: "了解 Zeno 产品与学习文档的规划结构。",
    visualMode: "system", visualLabel: "Zeno 文档系统示意图", highlights: ["快速入门", "指南", "参考", "兼容性"],
    sections: [
      { eyebrow: "信息架构", title: "每个产品使用一致结构", copy: "统一文档骨架让用户可以在不同产品中快速找到同类信息。", items: [
        { title: "开始", text: "通过概览和快速入门建立可运行基线。" }, { title: "学习", text: "通过概念和教程理解系统。" }, { title: "操作", text: "通过操作指南和故障排查完成实际任务。" }, { title: "验证", text: "通过参考、兼容性和发布说明确认版本。" },
      ] },
      { eyebrow: "当前状态", title: "独立文档门户正在规划", copy: "技术事实将来自版本化产品仓库和 docs.zeno-ai.org 文档站。", items: [
        { title: "中英双语", text: "网站结构支持英文与简体中文。" }, { title: "权威来源", text: "技术规格以版本化产品文档为准。" }, { title: "持续维护", text: "文档与软件发布版本保持关联。" },
      ] },
    ],
    cta: { eyebrow: "文档预览", title: "在文档门户上线前了解其结构。", copy: "正式入口将在所有权与发布流程确认后启用。", primary: { label: "查看路线图", href: "/roadmap/" }, secondary: { label: "探索软件", href: "/software/" } },
  },
  {
    slug: "community", eyebrow: "开放协作", title: "围绕统一平台共同构建、学习和贡献。",
    summary: "Zeno 社区连接开发者、教师、学生、竞赛团队和研究人员。", description: "了解 Zeno 开源社区与贡献路径。",
    visualMode: "system", visualLabel: "Zeno 开放社区网络示意图", highlights: ["开源", "贡献者", "教育工作者", "科研团队"],
    sections: [
      { id: "github", eyebrow: "GitHub", title: "源代码与协作集中在官方 Organization", copy: "Zeno 的代码、问题跟踪、版本发布和技术决策通过官方 GitHub 仓库维护。", items: [
        { title: "代码", text: "版本化源代码、发布与仓库级技术决策。" }, { title: "Issue", text: "可追踪的问题报告和范围明确的功能讨论。" }, { title: "贡献", text: "遵循各仓库的贡献指南、评审和治理规则。" },
      ] },
      { eyebrow: "参与方式", title: "通过不同路径进入同一生态", copy: "学习、教学、研究和工程贡献都围绕同一开放平台展开。", items: [
        { title: "学习", text: "使用版本化文档与示例。" }, { title: "教学", text: "共同完善课程、实验室与团队工作流。" }, { title: "研究", text: "分享可复现扩展和范围清晰的结论。" }, { title: "贡献", text: "通过官方仓库提交改进。" },
      ] },
    ],
    cta: { eyebrow: "参与社区", title: "从官方仓库和文档开始。", copy: "Zeno 只链接经过确认并持续维护的社区入口。", primary: { label: "查看路线图", href: "/roadmap/" }, secondary: { label: "了解 Zeno", href: "/about/" } },
  },
  {
    slug: "roadmap", eyebrow: "方向，而非未经验证的承诺", title: "围绕长期平台基础组织的路线图。",
    summary: "Zeno 从治理与信息架构出发，逐步建设版本化软件、硬件、文档和社区工作流。", description: "了解 Zeno 开放具身智能平台的规划方向。",
    visualMode: "system", visualLabel: "Zeno 路线图示意图", highlights: ["基础设施", "平台", "文档", "社区"],
    sections: [
      { eyebrow: "规划领域", title: "先夯实基础，再扩展能力", copy: "路线图记录长期工作方向，不发布未经支持的交付日期。", items: [
        { title: "基础", text: "品牌、域名、身份、仓库、安全与部署治理。" }, { title: "平台", text: "Core、Link、Brain、Cerebellum 与机器人平台的版本化边界。" }, { title: "体验", text: "快速入门、文档、示例、仿真与贡献路径。" }, { title: "运营", text: "兼容性、发布、监控、支持和生命周期管理。" },
      ] },
      { eyebrow: "证据", title: "只有具备负责人和验证后才发布承诺", copy: "范围、负责人、依赖、版本、验证与支持预期都明确后，规划项才能成为发布承诺。", items: [
        { title: "提议", text: "正在评估，尚无公开交付承诺。" }, { title: "批准", text: "范围和治理已明确，但不代表已经可用。" }, { title: "运行", text: "已有负责人、文档和支持路径的已发布能力。" },
      ] },
    ],
    cta: { eyebrow: "跟进进展", title: "以文档和官方仓库为版本化事实来源。", copy: "页面将随产品与仓库责任确认持续更新。", primary: { label: "查看文档", href: "/documentation/" }, secondary: { label: "加入社区", href: "/community/" } },
  },
  {
    slug: "about", eyebrow: "关于 Zeno", title: "面向具身智能学习、构建与研究的开放基础设施。",
    summary: "Zeno 是覆盖软件、智能控制、机器人硬件、仿真与可选云协作的全栈开源平台。", description: "了解 Zeno 的使命、用户和开放平台模型。",
    visualMode: "system", visualLabel: "Zeno 使命示意图", highlights: ["易于学习", "支持科研", "便于构建"],
    sections: [
      { eyebrow: "使命", title: "让完整具身系统易于理解", copy: "Zeno 面向高等教育、RoboCup 与机器人竞赛、具身智能研究和开放硬件协作。", items: [
        { title: "易于学习", text: "从概念和实验到完整系统的清晰入口。" }, { title: "支持科研", text: "用于扩展与复现的开放边界和版本化上下文。" }, { title: "便于构建", text: "从设备、控制到智能和仿真的可组合分层。" },
      ] },
      { eyebrow: "品牌模型", title: "统一 Zeno，清晰产品线", copy: "Core、Link、Brain、Cerebellum、Humanoid、Marine、Cloud 与 Simulation 共享同一平台身份。", items: [
        { title: "统一命名", text: "产品使用 Zeno + 产品名的正式格式。" }, { title: "共享系统", text: "产品页面解释职责，不制造相互竞争的平台。" }, { title: "验证结论", text: "能力与兼容性通过版本化文档发布。" },
      ] },
    ],
    cta: { eyebrow: "探索 Zeno", title: "了解各层如何组成完整系统。", copy: "平台页面是进入完整系统模型的最短路径。", primary: { label: "查看平台", href: "/platform/" }, secondary: { label: "查看路线图", href: "/roadmap/" } },
  },
  {
    slug: "contact", eyebrow: "联系我们", title: "让每类沟通进入明确负责的渠道。",
    summary: "支持、社区、媒体、法务和安全联系渠道正在通过基础设施流程确认。", description: "查看 Zeno 官方联系与支持渠道状态。",
    visualMode: "system", visualLabel: "Zeno 联系渠道示意图", highlights: ["支持", "社区", "合作", "安全"],
    sections: [
      { eyebrow: "当前状态", title: "不发布未经验证的联系地址", copy: "只有在所有权、成员和响应预期确认后，角色联系地址才会作为正式渠道发布。", items: [
        { title: "产品支持", text: "规划具备明确范围和响应策略的支持入口。" }, { title: "社区", text: "确认渠道负责人后开放社区联系入口。" }, { title: "媒体与法务", text: "使用成员受控、持续维护的角色渠道。" }, { title: "安全", text: "通过安全页面查看当前报告状态。" },
      ] },
      { eyebrow: "为什么重要", title: "稳定公共渠道不应依赖单一个人", copy: "角色群组或工单系统能够在团队变化时保持连续性。", items: [
        { title: "有负责人", text: "每个公开渠道都需要主要和备用负责人。" }, { title: "范围明确", text: "说明渠道接受和不接受的内容。" }, { title: "持续维护", text: "定期复核成员和响应承诺。" },
      ] },
    ],
    cta: { eyebrow: "正式渠道启用前", title: "使用已经验证的公共项目入口。", copy: "当前网站不启用表单提交或数据收集。", primary: { label: "社区状态", href: "/community/" }, secondary: { label: "安全指南", href: "/security/" } },
  },
  {
    slug: "security", eyebrow: "安全", title: "保护平台、用户与公共信任。",
    summary: "Zeno 禁止在公共仓库保存凭据和敏感数据，并要求生产变更获得明确批准。", description: "了解 Zeno 公共安全原则和漏洞报告状态。",
    visualMode: "system", visualLabel: "Zeno 安全边界示意图", highlights: ["源码无密钥", "最小权限", "评审", "负责任报告"],
    sections: [
      { eyebrow: "安全基线", title: "把安全边界融入日常工作", copy: "域名、身份、部署和凭据都属于受保护操作，而不是普通内容编辑。", items: [
        { title: "密钥", text: "密码、Token、Cookie、私钥和恢复码不得进入源码。" }, { title: "访问", text: "生产操作需要明确批准、最小权限和可评审计划。" }, { title: "验证", text: "生成配置在批准应用前必须经过检查。" }, { title: "恢复", text: "关键资产需要负责人、MFA 和受控恢复路径。" },
      ] },
      { eyebrow: "漏洞报告", title: "正式安全报告渠道仍在确认", copy: "不要通过公开 Issue 或未经验证的渠道发布敏感漏洞细节。", items: [
        { title: "避免公开披露", text: "不要在公共渠道提交利用细节、凭据或个人数据。" }, { title: "等待验证", text: "负责人确认后将发布正式报告地址和政策。" }, { title: "不虚构承诺", text: "正式流程发布前不承诺响应时间。" },
      ] },
    ],
    cta: { eyebrow: "安全状态", title: "经过验证的报告路径是基础设施路线图的一部分。", copy: "责任角色和渠道启用后将更新公共政策。", primary: { label: "查看路线图", href: "/roadmap/" }, secondary: { label: "关于 Zeno", href: "/about/" } },
  },
] as const satisfies readonly SitePage[];

export function getSitePageZhCN(slug: string): SitePage | undefined {
  return sitePagesZhCN.find((page) => page.slug === slug);
}
