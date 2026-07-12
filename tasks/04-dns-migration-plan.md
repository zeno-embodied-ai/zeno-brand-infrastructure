# Phase 4：`zeno-ai.org` DNS 迁移与配置方案

- 状态：`completed`
- 等级：`L0`（仅规划和占位模板）
- 日期：2026-07-12
- Change Owner：TBD
- Approver：项目方已明确批准 Phase 4 方案生成；未批准任何生产 DNS 操作
- Executor：Repository Agent
- Verifier：Repository Agent（本地文档与仓库检查）
- Rollback Owner：TBD（未来生产变更）
- 计划窗口：不适用；未安排生产窗口

## 目标

为 `zeno-ai.org` 提供不含真实 DNS 值或凭据的迁移、代理、验证、邮件保护和回滚方案。

## 非目标

- 不登录或探测生产 DNS、注册商、Cloudflare 或 Google Workspace。
- 不切换 nameserver、不创建/修改/删除 DNS 记录、不发布边缘规则、不修改邮件配置。
- 不假设 Cloudflare 已采用、服务 Origin 已存在或任何未知记录可删除。

## 任务检查清单

- [x] 阅读 AGENTS、资产清单、未决问题和部署运行手册。
- [x] 将当前 DNS、nameserver、DNSSEC、Origin 和 Workspace 记录标为 `unknown`/占位符。
- [x] 制定根域和 11 个指定子域的用途、代理或仅 DNS 计划。
- [x] 为 Google Workspace MX、SPF、DKIM、DMARC 和域名验证记录建立保留机制。
- [x] 编写变更前导出、批准后分步实施、验证、观察和回滚流程。
- [x] 提供 `dig`、`nslookup`、HTTP/TLS 和经批准邮件验证命令。
- [x] 创建 Cloudflare DNS 示例、重定向规则和验证清单。
- [x] 创建 Workspace 邮件 DNS 保护清单。
- [ ] 取得 L3 生产变更批准后，执行只读盘点和填写受控实施副本。
- [ ] 取得单独批准后，实施 nameserver/DNS/边缘规则变更。

## 验证与交付

- [x] 文档不包含真实 DNS 值、凭据、生产导出或可直接应用的生产配置。
- [x] 运行仓库检查和 Markdown/YAML 语法检查。
- [x] 审阅差异并创建本地 Git 提交。

## 结果与后续事项

Phase 4 仅完成可审阅的方案。生产 DNS 仍未修改；后续必须先取得 L3 批准、导出当前状态并由记录 Owner 填写受控实施副本。
