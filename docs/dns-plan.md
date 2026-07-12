# Phase 4：`zeno-ai.org` DNS 迁移与配置方案

状态：`proposed`（L0 规划文档；不构成生产 DNS 变更授权）

## 目标与边界

本方案为 `zeno-ai.org` 迁移到**经批准后才可采用的**权威 DNS/CDN 平台提供记录清单、代理策略、验证和回滚框架。它覆盖根域、`www`、`docs`、`github`、`api`、`cloud`、`models`、`sim`、`forum`、`status`、`download`、`security`，并保护 Google Workspace 的邮件和域名验证记录。

当前权威 DNS、nameserver、记录值、TTL、DNSSEC、服务 Origin、Google Workspace MX/SPF/DKIM/DMARC 和验证记录均为 `unknown`。本文绝不把占位符当作现网值，且不授权登录控制台、切换 nameserver、创建/修改/删除 DNS 记录、启用 Cloudflare 或发布服务。

## 记录模型与代理策略

下表是迁移完成后的**建议目标模式**；每个 Origin、记录类型、目标值和 TTL 都必须由 DNS Owner 与相应 Service Owner 根据导出快照填写并批准。`proxied` 只适用于已确认接入 Cloudflare 的 HTTP(S) 主机名，不代表当前已经代理。

| 主机名 | 计划用途 | 建议模式 | 条件 |
| --- | --- | --- | --- |
| `zeno-ai.org` | 官网 canonical | 代理 | 已批准的 HTTPS Origin、证书、健康检查和回滚版本就绪 |
| `www` | 官网别名 | 代理 | 通过边缘规则永久重定向到根域，保留路径与查询参数 |
| `docs` | 开发者文档 | 代理 | 静态站托管与自定义域验证均已完成 |
| `github` | GitHub Organization 入口 | 代理 | 仅用于经批准的边缘重定向；目标组织 URL 已核实 |
| `api` | 公共 API | 代理 | API Owner 批准缓存、WAF、CORS、TLS、速率限制与协议兼容性 |
| `cloud` | 云端控制台 | 代理 | 身份、回调 URL、WebSocket/长连接及登录流程已预演 |
| `models` | 模型目录或分发前端 | 代理 | Origin 和大文件策略已评审；不得默认代理大体积二进制下载 |
| `sim` | 仿真服务入口 | 代理 | 服务协议、Origin 端口与 WebSocket 兼容性已验证 |
| `forum` | 社区论坛 | 代理 | 应用 Origin、上传限制、会话 Cookie 与邮件依赖已确认 |
| `status` | 独立状态页 | 仅 DNS | 指向经批准的独立状态页提供商；避免与主站同一故障域 |
| `download` | 发布下载入口 | 仅 DNS | 直接指向经批准下载/CDN 提供商；大文件、签名和带宽策略单独评审 |
| `security` | 安全联系/披露入口 | 代理 | 已批准的 HTTPS Origin 或已配置的边缘重定向；公开渠道尚未确认时不启用 |
| Google Workspace MX、SPF、DKIM、DMARC、域名验证 | 邮件与所有权证明 | 仅 DNS | 永不代理；保留全部已验证记录，未确认前不得合并、替换或删除 |

## 迁移前：只读盘点与导出

1. 取得 DNS Owner、Security/Operations 与每个受影响 Service Owner 的 L3 书面批准；确认 Change Owner、Executor、Verifier、Rollback Owner、维护窗口和沟通渠道。
2. 在受控存储（不提交 Git）导出完整 zone、记录 ID、类型、名称、值、TTL、优先级、代理状态、注释、DNSSEC/DS、重定向、WAF/缓存/TLS 设置和证书绑定；同时保存导出时间、操作者和哈希。
3. 逐条标记记录 Owner 与依赖，特别核对所有 MX、根域 SPF TXT、`<DKIM_SELECTOR>._domainkey` TXT、`_dmarc` TXT、Google 域名验证 TXT/CNAME，以及第三方验证、ACME、SaaS、邮件/告警和 GitHub 记录。
4. 将经过脱敏的差异摘要与 `infrastructure/cloudflare/dns-records.example.yaml` 比较。未知记录默认保留，禁止导入工具自动删除、替换或接管。
5. 在批准窗口前降低将要切换记录的 TTL；具体旧值、新值和降低时间从导出填写，不能在本仓库预设。
6. 在临时域或服务商预览地址验证每个 Origin、TLS、健康检查与重定向；先保持旧权威 DNS 不变。

## 批准后的分步执行

1. 复核导出快照仍与现网一致；发现漂移立即暂停并重新评审。
2. 将已核实的值填写到**受控、非 Git 的实施副本**；本仓库示例文件保留占位符。先导入/创建非邮件 Web 记录，再逐条验证。
3. 保留并逐条复核邮件和验证记录；不得以“新模板中不存在”为由删除任何记录。
4. 仅在 Cloudflare 已获批准、目标 nameserver 已由第二人核验、DNSSEC/DS 恢复路径已准备的前提下切换委派。nameserver 变更是受保护操作，需单独明确批准。
5. 在每个代理主机名启用前，验证 Origin TLS、SNI、健康检查、缓存规则和安全策略；先小范围、可逆地启用，避免一次开启全部边缘功能。
6. 按 `infrastructure/cloudflare/verification-checklist.md` 从多个递归解析器和独立网络验证，并至少观察一个完整 TTL/传播窗口。

## 回滚

立即停止后续变更，并由 Rollback Owner 决策回滚，若出现任一情况：关键网站/API 不可达、TLS/SNI 不匹配、重定向循环、登录或回调失败、邮件收发/认证异常、未知记录缺失，或现网与批准快照不一致。

1. 保留脱敏证据，记录受影响记录、时间和解析器，不在仓库粘贴原始导出或凭据。
2. 恢复受控快照中对应的旧记录值、TTL、优先级和代理模式；不要删除新记录，除非其删除已被单独批准。
3. 如委派切换导致广泛故障，按批准的注册商流程恢复旧 nameserver 与 DNSSEC/DS 对应状态；由第二人交叉核验。
4. 对根域、`www`、关键子域、MX/TXT 与邮件收发执行验证，持续观察至少一个旧 TTL 传播窗口。
5. 通知相关方、更新变更单状态为 `rolled-back`，再进行无责复盘；恢复稳定前不得重试迁移。

## 交付物与未决项

- 声明式占位模板：`infrastructure/cloudflare/dns-records.example.yaml`
- 重定向设计：`infrastructure/cloudflare/redirect-rules.md`
- DNS/TLS 验证清单：`infrastructure/cloudflare/verification-checklist.md`
- Workspace 邮件保护清单：`infrastructure/google-workspace/email-dns-checklist.md`
- 未决项：权威 DNS/注册商、nameserver、完整记录与 TTL、DNSSEC、所有 Origin、公开 GitHub/安全入口、状态页和下载提供商、Workspace selector 与验证记录均为 `TBD`。
