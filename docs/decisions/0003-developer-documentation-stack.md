# ADR-0003：开发者文档站技术栈与 Draft 版本策略

- 状态：`accepted`
- 日期：2026-07-12
- 决策范围：`docs.zeno-ai.org` 的本地文档站实现
- 生产部署：未授权、未执行

## 背景

Zeno 需要面向硬件、固件、软件、仿真、平台和社区的开发者文档信息架构，但现阶段没有已批准的硬件规格、固件接口、支持版本、公开仓库地址或搜索服务。

## 决策

1. 使用 Docusaurus `3.10.2`、TypeScript `6.0.3` 与 React `19.2.7` 建立独立静态文档站。
2. 按 Getting Started、Hardware、Firmware、Software、Simulation、Platforms、Community 七组实现 34 个页面。
3. 每个初始页面均为 Draft / TBD；未核验内容不发布规格、参数、兼容性、安装命令或支持承诺。
4. 使用 Docusaurus current docs 作为 `Next (Draft)`，并生成 `0.1.0-draft` 快照、`versions.json` 和版本侧边栏。
5. 搜索只保留 `/search` 页面和 `customFields.search` 接入边界，不配置外部索引、爬虫、脚本或凭据。
6. 英文是唯一启用 locale；`zh-CN` 仅作为 reserved locale 记录，直到翻译与 URL 策略获得批准。
7. `build/` 是可部署到 Cloudflare Pages 或 Vercel 的静态产物，但任何项目创建、部署和域名绑定都需要单独批准。

## 理由

- Docusaurus 原生支持文档侧边栏、版本快照和静态构建，适合长期维护的开发者内容。
- current Draft 与不可变快照分离，避免已审阅页面被后续草稿无意覆盖。
- 明确 Draft/TBD 边界避免把目录名称误表述为已支持的硬件、固件或第三方集成。
- 搜索、翻译和托管均保留扩展位，但不会提前引入外部依赖、隐私风险或凭据管理。

## 影响

### 正面影响

- 信息架构可立即被评审、链接和逐页填充。
- 版本选择器能区分 evolving Draft 与 `0.1.0-draft` 快照。
- 静态验证可检查 68 份文档源/产物和硬件参数防护。

### 约束

- 页面不提供可执行硬件或固件操作流程。
- 未部署前，`docs.zeno-ai.org` 不应被写成 active 服务。
- Docusaurus 搜索、中文翻译、API 引用与自动化发布需要后续 ADR 和授权。

## 验证

```bash
cd documentation
npm ci
npm run typecheck
npm run build
npm run validate:docs
```

## 未授权操作

本决策不授权创建 Cloudflare Pages/Vercel 项目、发布预览或生产文档、绑定 `docs.zeno-ai.org`、修改 DNS、启用外部搜索、添加搜索凭据或发布未审阅技术参数。
