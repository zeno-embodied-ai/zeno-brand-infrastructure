# Phase 3：Zeno 开发者文档站

- 状态：`completed`
- 等级：`L1`（本地静态文档站实现）
- 日期：2026-07-12
- Change Owner：TBD
- Approver：项目方已明确批准 Phase 3 本地实现
- Executor：Repository Agent
- Verifier：Repository Agent（本地自动检查）
- 云项目创建：无
- 文档部署：无
- `docs.zeno-ai.org` 绑定：无
- 外部搜索服务：无

## 目标

使用 Docusaurus 和 TypeScript 建立 Zeno 开发者文档站的完整初始信息架构、Draft/TBD 内容边界、版本控制结构和全文搜索预留，并在本地完成静态构建。

## 非目标

- 不发布或修改 `docs.zeno-ai.org`，不创建 Cloudflare Pages/Vercel 项目。
- 不发布未审阅的硬件规格、引脚、功耗、接口速率、兼容性、安装命令或操作步骤。
- 不假设 Jetson Orin Nano、STM32F767、CAN、RS-485、Isaac Lab、MuJoCo、Gazebo 或 LeRobot 已经被某个 Zeno 版本支持。
- 不启用外部搜索、爬虫、分析、Cookie、表单、API Token 或其他运行时服务。
- 不编造 GitHub Organization、社区、支持或安全报告公开地址。

## 技术基线

| 项目 | 选择 |
| --- | --- |
| Docusaurus | `3.10.2` stable |
| React | `19.2.7` |
| TypeScript | `6.0.3` |
| Rendering | 静态 build/ |
| Active locale | `en` |
| Reserved locale | `zh-CN` |
| Current docs | `Next (Draft)` |
| Snapshot | `0.1.0-draft` |
| Search | Reserved; provider TBD |

## 信息架构

- [x] Getting Started：Introduction、Architecture、Quick Start、Safety
- [x] Hardware：Zeno Core、Zeno Link、Power System、Jetson Orin Nano、STM32F767、Camera Interfaces、CAN、RS-485、Manufacturing
- [x] Firmware：Boot Sequence、Power Management、Drivers、Motor Control、Servo Control
- [x] Software：ROS 2、SDK、APIs、Brain、Cerebellum
- [x] Simulation：Isaac Lab、MuJoCo、Gazebo、LeRobot
- [x] Platforms：Zeno Humanoid、Zeno Marine
- [x] Community：Contributing、Code of Conduct、Governance、Security、Release Process

## 任务检查清单

### 规划与实现

- [x] 阅读 AGENTS、品牌架构、部署运行手册和现有 documentation 目录。
- [x] 核对 Docusaurus 3.10.2 版本化和搜索官方文档。
- [x] 建立 Docusaurus、TypeScript、侧边栏、静态首页和 Search reserve。
- [x] 创建全部 34 个信息架构页面。
- [x] 在每个初始页面明确 Draft / TBD。
- [x] 禁止未经审阅的硬件和固件数值参数。
- [x] 生成 `0.1.0-draft` 版本快照、`versions.json` 和版本侧边栏。
- [x] 添加 English active / `zh-CN` reserved locale 配置。
- [x] 添加本地开发、版本管理、搜索、Cloudflare Pages/Vercel 说明。
- [x] 添加 ADR-0003 并同步 README、品牌架构和运行手册。

### 验证与交付

- [x] `npm run typecheck` 通过。
- [x] `npm run build` 成功生成 Docusaurus 静态站点。
- [x] `npm run validate:docs` 验证 34 个 current 与 34 个版本快照页面。
- [x] `npm run check` 完整串行检查通过。
- [x] `./scripts/check-repository.sh` 通过。
- [x] `git diff --check` 通过。
- [x] 展示 Phase 3 差异。
- [x] 将任务状态更新为 `completed`。
- [x] 创建 Phase 3 本地 Git 提交。
- [x] 在云项目、部署、搜索服务或 DNS 操作前停止。

## 阶段结果

- 文档站具有完整指定信息架构和版本选择器。
- 所有技术页面均清楚标记为 Draft / TBD，避免伪造参数、兼容性和运行步骤。
- 搜索和中文均有结构预留，但未启用外部服务或英语回退的中文内容。
- 本地 `build/` 可作为 Cloudflare Pages/Vercel 静态产物，尚未发布。

## 验证中发现并解决的问题

- Docusaurus 3.10.2 不提供 `@docusaurus/tsconfig` 可继承配置，改为显式标准 TypeScript 配置。
- TypeScript 的 Docusaurus Layout 主题别名使用无 props 类型，改为兼容的无 props Layout 调用。
- 初始配置过早设置不存在的 `lastVersion`，先生成快照再把 `0.1.0-draft` 设置为 latest。
- Docusaurus 默认会为未翻译 locale 生成英文回退路径，改为只启用英文并将 `zh-CN` 明确记录为 reserved。

## 风险与后续门禁

- 所有技术内容尚需产品、硬件、固件、安全和法务 Owner 审阅后才能替换 Draft/TBD。
- 正式搜索服务、搜索索引公开范围、中文翻译和文档发布流程尚未批准。
- 公开 GitHub、社区、安全和支持渠道仍为 TBD。
- Cloudflare Pages/Vercel 选择、预览访问控制、部署身份、安全头和 `docs.zeno-ai.org` DNS 绑定需后续评审。

## 执行记录

| 日期 | 动作 | 结果 |
| --- | --- | --- |
| 2026-07-12 | 读取现有文档架构与执行规则 | 完成 |
| 2026-07-12 | 核对 Docusaurus 版本化和搜索能力 | 完成 |
| 2026-07-12 | 创建 34 个 Draft/TBD 内容页面与侧边栏 | 完成 |
| 2026-07-12 | 生成 `0.1.0-draft` 版本快照 | 完成 |
| 2026-07-12 | 运行 typecheck、build 和文档验证 | 分项通过 |
| 2026-07-12 | 运行 `npm run check`、仓库检查和 diff 检查 | 通过；Docusaurus 更新提示无法写入用户级配置，不影响构建或产物 |
| 2026-07-12 | 审阅 Phase 3 差异并完成任务记录 | 完成；等待本地 Git 提交 |
| 2026-07-12 | 创建 Phase 3 本地 Git 提交 | 完成：`1d29305` |
