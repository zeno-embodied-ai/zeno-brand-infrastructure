# Zeno 域名矩阵

状态：`proposed`

主域名：`zeno-ai.org`（由项目方确认已持有）

DNS、注册商锁、证书和托管现状：本阶段未连接生产账户，均待授权核验

## 1. 使用原则

- 主域名承载品牌信任；新增子域必须有明确用途、Owner、生命周期、监控和退役方案。
- 官网使用根域作为 canonical，`www` 只做永久重定向，避免两套内容。
- 技术文档按产品路径组织，默认不为每条产品线创建独立子域。
- 环境名必须显式；预览环境不得被搜索引擎索引，也不得使用生产数据。
- 不在 DNS 名称中暴露内部拓扑、人员姓名、敏感项目或临时凭据。
- 所有记录采用声明式变更、双人评审和可验证回滚；禁止在本规划阶段实施。

## 2. 状态定义

| 状态 | 含义 |
| --- | --- |
| `proposed` | 规划建议，未批准、未创建或未核验 |
| `approved` | 已批准建设，仍不代表 DNS 已生效 |
| `active` | 已核验解析、TLS、内容、Owner 和监控 |
| `deprecated` | 已公告迁移，不接受新的依赖 |
| `retired` | 已下线且完成重定向、防接管和记录清理 |

只有在生产账户中完成验证并留下变更记录后，才能把条目改为 `active`。

## 3. 公共域名矩阵

| FQDN | 用途 | 内容/路由 | 受众 | 优先级 | 状态 | 建议 Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `zeno-ai.org` | 品牌官网主入口 | 官网首页，作为 canonical | 全部 | P0 | `proposed` | Website Owner |
| `www.zeno-ai.org` | 兼容常见访问习惯 | 308 重定向至根域并保留路径 | 全部 | P0 | `proposed` | Website Owner |
| `docs.zeno-ai.org` | 版本化产品文档 | 文档站；产品使用路径分区 | 教师、学生、研究者、开发者 | P0 | `proposed` | Documentation Owner |
| `status.zeno-ai.org` | 服务状态与维护通知 | 独立状态页，避免与主站同故障域 | 用户、维护者 | P1 | `proposed` | Reliability Owner |
| `cloud.zeno-ai.org` | Zeno Cloud 用户入口 | 仅在产品具备身份和支持基线后启用 | Cloud 用户 | P1 | `proposed` | Cloud Product Owner |
| `learn.zeno-ai.org` | 结构化教学内容 | 课程与实验路径；先评估是否并入文档站 | 教师、学生 | P2 | `proposed` | Education Content Owner |
| `assets.zeno-ai.org` | 公共静态资源 | 仅当跨站 CDN 有明确收益时启用 | 网站和文档站 | P2 | `proposed` | Digital Infrastructure Owner |

P0 表示首次公开发布所需，P1 为相邻能力，P2 必须先证明独立子域的必要性。不得仅为营销活动临时增加长期子域。

## 4. 产品 URL 策略

官网产品页面建议使用路径而非产品子域：

| 产品 | 官网路径 | 文档路径 | 独立子域 |
| --- | --- | --- | --- |
| Zeno Core | `/products/core/` | `/core/` | 不建议 |
| Zeno Link | `/products/link/` | `/link/` | 不建议 |
| Zeno Brain | `/products/brain/` | `/brain/` | 不建议 |
| Zeno Cerebellum | `/products/cerebellum/` | `/cerebellum/` | 不建议 |
| Zeno Humanoid | `/products/humanoid/` | `/humanoid/` | 不建议 |
| Zeno Marine | `/products/marine/` | `/marine/` | 不建议 |
| Zeno Cloud | `/products/cloud/` | `/cloud/` | 应用入口可用 `cloud.zeno-ai.org` |
| Zeno Simulation | `/products/simulation/` | `/simulation/` | 不建议 |

文档版本建议采用 `/core/v1/` 或由文档框架提供版本切换；canonical 始终指向明确版本或维护中的稳定版本。路径最终形式需在文档技术栈选定后批准。

## 5. 非生产与预览域名

| FQDN 模式 | 用途 | 访问要求 | 数据要求 | 状态 |
| --- | --- | --- | --- | --- |
| `preview.zeno-ai.org` | 官网共享预览入口 | SSO 或访问策略；禁止索引 | 合成/公开数据 | `proposed` |
| `docs-preview.zeno-ai.org` | 文档共享预览入口 | SSO 或访问策略；禁止索引 | 仅未发布文档 | `proposed` |
| 每个 PR 的托管商临时 URL | 短期审阅 | 随 PR 关闭；不得绑定生产 Cookie | 合成/公开数据 | `proposed` |

不建议创建 `dev.zeno-ai.org`、`test.zeno-ai.org` 等无人负责的常驻环境。若确有需要，应补充 Owner、成本、访问控制、数据分类、自动过期和监控。

## 6. 邮件与 Workspace 地址规划

Google Workspace 已开通是项目方提供的已知资产；本阶段没有登录验证 MX、域名验证、群组或安全设置。

| 地址/功能 | 类型 | 用途 | 状态 | 建议治理 |
| --- | --- | --- | --- | --- |
| 根域 MX | DNS/Workspace | 组织邮件接收 | `proposed`（待核验） | 不在网站发布前盲目修改 |
| `security@zeno-ai.org` | Google Group | 安全报告入口 | `proposed` | 限制成员可见，至少两名接收者 |
| `support@zeno-ai.org` | Group/工单入口 | 产品支持分流 | `proposed` | 明确响应范围与自动回复 |
| `community@zeno-ai.org` | Google Group | 开源社区联系 | `proposed` | 防垃圾邮件与公开归档策略 |
| `press@zeno-ai.org` | Google Group | 媒体和品牌联系 | `proposed` | Brand Owner 负责 |
| `legal@zeno-ai.org` | Google Group | 法律与合规联系 | `proposed` | 受限成员与留存策略 |

公开角色地址优先使用群组或工单系统，不依赖单个员工邮箱。离职或角色变更时只调整成员，不更改公共地址。

## 7. DNS 记录设计基线

以下为记录类别和决策要求，不是待执行记录值：

| 类别 | 基线 |
| --- | --- |
| Apex/WWW | 根域指向经批准的托管入口；`www` 只重定向，不复制站点 |
| Docs | 指向独立文档托管入口，设置自定义域验证并防止悬空记录 |
| MX | 保持已验证的 Workspace 配置；任何修改先导出当前记录并确认邮件连续性 |
| SPF | 仅列出已批准发信方，避免重复 SPF TXT，控制 DNS lookup 数量 |
| DKIM | 每个发信系统独立 selector，私钥由对应服务持有，不进入仓库 |
| DMARC | 先观察报告，再分阶段提高策略；报告邮箱和数据访问需受控 |
| CAA | 仅授权实际使用的 CA；启用前确认托管平台证书签发需求 |
| DNSSEC | 在注册商与权威 DNS 双方支持且回滚流程验证后启用 |
| TXT 验证 | 记录用途、Owner 和到期日；验证完成后能删除的及时删除 |

初次迁移或高风险切换前可临时降低相关记录 TTL；必须提前完成并等待旧 TTL 窗口。稳定后恢复合理 TTL，避免永久低 TTL。

## 8. Web 安全与边界

- 全站 HTTPS；HTTP 永久重定向到 HTTPS，证书自动续期并在到期前告警。
- HSTS 分阶段启用；确认所有子域支持 HTTPS 后再考虑 `includeSubDomains`，满足长期条件后再评估 preload。
- 官网与文档站默认不设置共享父域 Cookie；认证 Cookie 应使用精确 Host、`Secure`、`HttpOnly` 和合适的 `SameSite`。
- CORS 使用精确 origin allowlist，不使用带凭据的通配符。
- 内容安全策略先 report-only 观察，再按站点分别收紧。
- 预览域与生产域身份、数据、缓存和分析配置隔离。
- 第三方脚本必须有 Owner、用途、数据说明和移除方式，默认不加载。

## 9. 监控矩阵

| 对象 | 最低检查 | 建议频率 | 告警 Owner |
| --- | --- | --- | --- |
| 根域和 `www` | DNS、HTTPS、重定向、首页关键字 | 1–5 分钟 | Website/Reliability |
| 文档站 | DNS、HTTPS、关键页面、搜索入口 | 5 分钟 | Documentation/Reliability |
| Cloud 入口 | DNS、TLS、健康端点、登录页 | 按产品 SLO | Cloud/Reliability |
| 状态页 | 独立探测和发布链路 | 5 分钟 | Reliability |
| TLS 证书 | 链、主机名、剩余有效期 | 每日 | Infrastructure |
| 域名注册 | 到期日、自动续费、注册锁、联系人 | 每月及到期前 | Domain Owner |
| 邮件认证 | MX、SPF、DKIM、DMARC 报告趋势 | 每日/每周 | Workspace/Security |

告警不得只发送到被监控的同一故障域。至少保留一个经批准的带外通知渠道，具体地址不写入公开仓库。

## 10. 变更与退役流程

### 新增或修改

1. 在 `tasks/` 建立变更条目，说明业务理由、Owner、记录类型、TTL、依赖、验证与回滚。
2. 检查命名冲突、Cookie/CORS、安全、证书、搜索索引和第三方域名验证影响。
3. 导出并脱敏保存现状摘要；通过 Pull Request 双人评审。
4. 在授权维护窗口实施，按 [`deployment-runbook.md`](deployment-runbook.md) 验证。
5. 监控稳定后把矩阵状态更新为 `active`，并记录变更单引用。

### 退役

1. 识别访问者、API 客户端、Cookie、OAuth 回调、证书和外部链接依赖。
2. 公告迁移并设置可观测的永久重定向；API 不应仅依靠网页重定向。
3. 删除托管绑定前处理 DNS，避免留下可被第三方接管的悬空 CNAME。
4. 保留必要的防御性记录和监控窗口，确认流量降至预期。
5. 更新矩阵为 `retired`，归档验证与回滚记录。

## 11. 首次发布建议顺序

1. 授权核验域名注册、权威 DNS、Workspace 邮件和现有记录，只读导出当前状态。
2. 审批 `zeno-ai.org`、`www.zeno-ai.org` 和 `docs.zeno-ai.org` 的 Owner 与托管方案。
3. 在临时托管 URL 完成官网和文档站构建、链接、安全头与可访问性验证。
4. 配置监控和回滚目标，之后才安排 DNS 发布窗口。
5. 稳定运行后再评估 `status`、`cloud`、`learn` 和 `assets` 子域，避免一次性扩大攻击面。

## 12. 待确认清单

- 注册商、权威 DNS 服务商、注册锁、自动续费与恢复联系人。
- 当前 DNS zone、Google Workspace MX/SPF/DKIM/DMARC 与域名验证状态。
- GitHub Organization 的正式公开 URL、所有者和域名验证状态。
- 官网、文档站、Cloud 与状态页的托管平台、区域和数据处理边界。
- 是否需要中国大陆访问优化、ICP备案或其他地区合规评估。
- 正式支持、安全、隐私、法律和媒体联系地址。
