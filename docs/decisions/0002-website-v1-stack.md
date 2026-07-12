# ADR-0002：官方网站第一版技术栈

- 状态：`accepted`
- 日期：2026-07-12
- 决策范围：`zeno-ai.org` 官网第一版本地实现
- 生产部署：未授权、未执行

## 背景

Zeno 需要一个面向教育、研究和机器人竞赛受众的英文官网第一版，同时保持低运维成本、可移植部署、基础无障碍和可持续内容治理。正式视觉资产、GitHub Organization URL、社区渠道和联系地址仍未确认。

## 决策

1. 使用 Next.js `16.2.10` 当前稳定版、React `19.2.7` 和 TypeScript `6.0.3` 兼容稳定线。
2. 使用 Tailwind CSS `4.3.2` 构建设计系统和响应式布局。
3. 使用 App Router 与 `output: "export"`，所有公开页面在构建期生成到 `website/out/`。
4. 首页单独实现；13 个内页由 `src/content/pages.ts` 的类型安全内容模型和静态参数生成。
5. 英文使用根路径；在 `src/i18n/config.ts` 预留 `zh-CN`，但在翻译和 URL 策略批准前不生成中文页面。
6. 使用原创 CSS/SVG 几何占位图，不引入未经授权的第三方商标、照片、字体或图库素材。
7. 生成 per-page metadata、Open Graph、sitemap、robots 和 manifest，并用本地脚本验证静态产物。
8. 静态 `out/` 可部署到 Cloudflare Pages 或 Vercel，但创建项目和发布部署必须另行批准。

## 理由

- 静态导出不依赖生产 Node.js 服务器，减少运行面和供应商锁定。
- App Router 在构建期生成 HTML，兼顾 SEO、快速首屏和可移植静态托管。
- 共享内容模型让页面、metadata 和 sitemap 使用同一组路由，降低漂移。
- 系统字体和原创占位图避免构建期外部字体请求与素材授权风险。
- Cloudflare Pages 和 Vercel 都能托管 `out/`，平台选择可以与网站实现解耦。

## 影响

### 正面影响

- 14 个公开页面均可预渲染为静态 HTML。
- 不需要运行时环境变量、数据库、Cookie、表单后端或外部 API。
- lint、typecheck、build 和导出验证形成可重复的本地门禁。
- 中文国际化可以在不重写英文内容模型的情况下继续扩展。

### 约束

- 静态导出不能直接使用依赖请求上下文的 Server Actions、Cookie、动态路由或默认图片优化。
- 联系表单、搜索、账号和动态社区数据必须作为独立架构决策处理。
- `_headers` 为 Cloudflare Pages 提供静态安全头；Vercel 的生产头策略需要部署阶段单独配置和验证。
- Open Graph SVG 是明确的占位资产，正式发布前应替换为批准的 1200×630 品牌图。

## 验证

最低门禁：

```bash
cd website
npm ci
npm run lint
npm run typecheck
npm run build
npm run validate:static
```

最终生产发布还需要浏览器级响应式、键盘、屏幕阅读器、性能和安全头验证，不由本 ADR 授权。

## 未授权操作

本决策不授权创建 Cloudflare Pages/Vercel 项目、添加生产 Secret、发布预览或生产部署、绑定 `zeno-ai.org`、修改 DNS、启用分析或收集用户数据。
