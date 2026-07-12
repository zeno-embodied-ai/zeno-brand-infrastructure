# Phase 2：Zeno 官方网站第一版

- 状态：`completed`
- 等级：`L1`（本地静态网站实现）
- 日期：2026-07-12
- Change Owner：TBD
- Approver：项目方已明确批准 Phase 2 本地实现
- Executor：Repository Agent
- Verifier：Repository Agent（本地自动检查）
- 云项目创建：无
- 生产部署：无
- DNS 修改：无
- 外部数据写入：无

## 目标

使用当前稳定 Next.js、TypeScript 和 Tailwind CSS 创建 Zeno 英文官网第一版，覆盖 14 个页面、响应式布局、基础无障碍、SEO、静态导出和 Cloudflare Pages/Vercel 部署兼容性，并为简体中文预留国际化结构。

## 非目标

- 不创建或连接 Cloudflare、Vercel、DNS、分析、表单或其他生产服务。
- 不发布预览或生产部署，不绑定 `zeno-ai.org`。
- 不引入未经批准的第三方商标、图片、字体或外部营销素材。
- 不编造 GitHub Organization URL、邮箱、社区渠道、发布日期、性能或兼容性声明。
- 不启用 Cookie、账号、数据库、用户数据收集或运行时 Secret。

## 技术基线

| 项目 | 选择 |
| --- | --- |
| Next.js | `16.2.10` stable |
| React | `19.2.7` |
| TypeScript | `6.0.3` compatible stable line |
| Tailwind CSS | `4.3.2` stable |
| Rendering | App Router + static export |
| Output | `website/out/` |
| Locale | `en` active; `zh-CN` reserved |
| Hosting target | Cloudflare Pages or Vercel; not created |

## 页面范围

- [x] Home
- [x] Platform
- [x] Hardware
- [x] Software
- [x] Humanoid
- [x] Marine
- [x] Research
- [x] Education
- [x] Documentation
- [x] Community
- [x] Roadmap
- [x] About
- [x] Contact
- [x] Security

## 任务检查清单

### 规划与研究

- [x] 阅读 AGENTS、品牌架构、域名矩阵和部署运行手册。
- [x] 检查工作树和 website 初始状态。
- [x] 核对 Next.js/Tailwind 官方 stable 版本和静态导出约束。
- [x] 建立书面实施计划。
- [x] 将公共文案来源限定为仓库现有内容。

### 实施

- [x] 创建 Next.js、TypeScript、Tailwind 和 ESLint 工程。
- [x] 锁定依赖版本并生成 package-lock.json。
- [x] 实现响应式页头、移动导航、页脚、CTA、内容卡片和占位视觉。
- [x] 实现 14 个页面和首页全部必需产品/CTA。
- [x] 添加 skip link、语义结构、键盘焦点和 reduced-motion 支持。
- [x] 添加 per-page metadata、canonical、Open Graph、sitemap、robots 和 manifest。
- [x] 预留 `en` / `zh-CN` 国际化配置。
- [x] 添加 Cloudflare Pages/Vercel 和本地开发说明。
- [x] 添加 ADR-0002 和静态导出验证脚本。
- [x] 同步根 README、品牌架构和部署运行手册。

### 验证与交付

- [x] `npm run lint` 通过。
- [x] `npm run typecheck` 通过。
- [x] `npm run build` 生成 19 个静态路由。
- [x] `npm run validate:static` 验证 14 个公开页面、SEO、首页内容和内部链接。
- [x] `npm run check` 完整串行检查通过。
- [x] `./scripts/check-repository.sh` 通过。
- [x] `git diff --check` 通过。
- [x] 展示 Phase 2 差异。
- [x] 将任务状态更新为 `completed`。
- [x] 创建 Phase 2 本地 Git 提交。
- [x] 在云项目创建、部署或 DNS 操作前停止。

## 阶段结果

- 首页完整表达 Zeno 定位，并包含 Core、Link、Brain、Cerebellum、Humanoid、Marine、GitHub、Documentation 和 Join the community CTA。
- 13 个内页通过类型安全内容模型生成，全部静态预渲染。
- GitHub、联系、社区和安全报告入口在未确认前保持 TBD，没有伪造外部 URL 或邮箱。
- 所有视觉均为原创 CSS/SVG 占位，可在品牌资产批准后替换。
- 构建输出兼容普通静态托管，不依赖运行时服务或环境变量。

## 验证中发现并解决的问题

- npm 最新 TypeScript 7 / ESLint 10 超出 Next.js 16.2.10 lint 插件兼容范围，改用 TypeScript 6.0.3 / ESLint 9.39.5。
- 受限环境中的 npm 默认缓存和长安装被中断，改用 `/tmp` 隔离缓存和持续终端会话完成干净安装。
- Turbopack CSS loader 在沙箱中无法绑定本机临时端口，经授权在沙箱外完成本地构建。
- Next.js 静态导出要求 metadata route 显式 `force-static`，已为 robots、sitemap 和 manifest 补齐。

## 风险与后续门禁

- 正式 Logo、字体、产品图片和 Open Graph 图片仍待品牌审批。
- 尚未进行真实浏览器、屏幕阅读器、多设备和网络性能测试。
- GitHub Organization、社区、支持和安全报告公开入口仍为 TBD。
- Cloudflare Pages/Vercel 平台、预览访问控制、安全头和发布身份仍需部署阶段评审。
- 任何生产部署、域名绑定或 DNS 修改都需要新的明确批准。

## 执行记录

| 日期 | 动作 | 结果 |
| --- | --- | --- |
| 2026-07-12 | 读取仓库内容并核对稳定技术版本 | 完成 |
| 2026-07-12 | 创建设计系统、首页和 13 个内页 | 完成 |
| 2026-07-12 | 添加 SEO、静态导出和国际化预留 | 完成 |
| 2026-07-12 | 安装锁定依赖并修复工具链兼容性 | 完成 |
| 2026-07-12 | 运行 lint、typecheck、build 和静态输出验证 | 完整串行检查通过 |
| 2026-07-12 | 运行全仓检查并展示 Phase 2 差异 | 完成；等待本地阶段提交 |
| 2026-07-12 | 创建 Phase 2 本地 Git 提交 | 完成；未推送、未部署、未修改 DNS |
