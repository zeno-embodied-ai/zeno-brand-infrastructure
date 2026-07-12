# Zeno 阶段 0 待确认问题

- 状态：`open`
- 盘点日期：2026-07-12
- 答案默认值：`TBD`
- 外部访问：本阶段未登录任何外部账户

## 使用方式

- 本清单只记录需要确认的问题，不授权任何生产操作。
- 优先通过资产 Owner 访谈、现有合同/账单的受控副本或经批准的只读访问获取答案。
- 不把密码、API Token、Cookie、私钥、恢复码、付款信息或个人数据复制到仓库。
- 得到答案后同步更新 [`asset-register.md`](asset-register.md)，并记录信息来源、核验日期和核验角色。
- 任何涉及购买、续费、DNS/MX 修改、用户修改、凭据轮换或生产发布的动作都必须另行获得明确批准。

## P0：身份、所有权与恢复

| ID | 资产 | 待确认问题 | 当前答案 | 建议确认方式 | 建议 Owner |
| --- | --- | --- | --- | --- | --- |
| Q-001 | `zeno-ai.org` | 域名注册商是哪一家，注册账号由哪个角色管理？ | TBD | 由 Domain Owner 提供；必要时申请注册商只读核验 | Domain Owner |
| Q-002 | `zeno-ai.org` | 注册到期日、自动续费状态和续费责任人是什么？ | TBD | 查看受控资产/账单摘要，不记录付款信息 | Domain Owner / Finance |
| Q-003 | `zeno-ai.org` | 注册账号是否启用 MFA、注册锁和变更通知？ | TBD | 经批准只读检查安全设置 | Domain Owner / Security |
| Q-004 | `zeno-ai.org` | 恢复联系人、备用管理员和带外恢复流程是什么？ | TBD | 由 Owner 与 Security 在受控系统确认 | Domain Owner / Security |
| Q-005 | Google Workspace | 主域、租户标识和订阅类型是什么？ | TBD | 由 Workspace Owner 提供或经批准只读核验 | Workspace Owner |
| Q-006 | Google Workspace | 超级管理员和备用管理员角色是否至少各有适当覆盖？ | TBD | 只记录角色与覆盖结论，不导出个人目录 | Workspace Owner / Security |
| Q-007 | Google Workspace | 管理员 MFA、恢复和紧急访问流程是否建立？ | TBD | 经批准只读检查策略；恢复资料留在受控存储 | Workspace Owner / Security |
| Q-008 | GitHub Organization | GitHub Organization 的准确登录名和公开 URL 是什么？ | TBD | 由 Organization Owner 提供并核对公开 URL | GitHub Owner |
| Q-009 | GitHub Organization | Organization Owner、备用 Owner 和恢复流程是否建立？ | TBD | 经批准只读检查角色；仓库只记录覆盖结论 | GitHub Owner / Security |
| Q-010 | GitHub Organization | 是否强制 MFA/2FA，是否有受控的恢复与紧急访问机制？ | TBD | 经批准只读检查组织安全设置 | GitHub Owner / Security |

## P1：域名、DNS 与邮件

| ID | 资产 | 待确认问题 | 当前答案 | 建议确认方式 | 建议 Owner |
| --- | --- | --- | --- | --- | --- |
| Q-011 | `zeno-ai.org` | 当前权威 DNS 托管商和 nameserver 是什么？ | TBD | 由 Domain Owner 提供；经授权后比对只读 zone 摘要 | DNS Owner |
| Q-012 | `zeno-ai.org` | 域名和现有子域是否已用于生产？分别支持哪些服务？ | TBD | 由服务 Owner 提供依赖清单，禁止主动修改探测 | DNS / Service Owners |
| Q-013 | `zeno-ai.org` | 当前 DNS 记录、TTL、DNSSEC 和证书签发约束是什么？ | TBD | 经批准只读导出脱敏摘要 | DNS Owner / Security |
| Q-014 | Google Workspace | MX、SPF、DKIM、DMARC 和域名验证的当前状态是什么？ | TBD | 经批准只读核验；不修改 MX 或发信策略 | Workspace / DNS Owners |
| Q-015 | Google Workspace | Workspace 是否已经承担生产邮件和关键告警接收？ | TBD | 由业务和 Workspace Owner 确认依赖 | Workspace Owner |
| Q-016 | Google Workspace | 订阅续费日期、付款责任角色和服务连续性方案是什么？ | TBD | 使用脱敏账单摘要，不记录付款信息 | Workspace Owner / Finance |

## P1：GitHub 与代码治理

| ID | 资产 | 待确认问题 | 当前答案 | 建议确认方式 | 建议 Owner |
| --- | --- | --- | --- | --- | --- |
| Q-017 | GitHub Organization | 当前计划、续费日期和账单责任角色是什么？ | TBD | 使用脱敏订阅摘要，不记录付款信息 | GitHub Owner / Finance |
| Q-018 | GitHub Organization | Organization 是否承载生产代码、Release 或部署工作流？ | TBD | 由仓库 Owner 提供清单；经批准只读核验 | Engineering Owner |
| Q-019 | GitHub Organization | 默认权限、Teams、规则集和外部协作者治理现状是什么？ | TBD | 经批准只读安全审查 | GitHub Owner / Security |
| Q-020 | GitHub Organization | 域名验证、Secret scanning、Dependabot 和审计能力是否启用？ | TBD | 根据实际计划经批准只读检查 | GitHub Owner / Security |
| Q-021 | GitHub Organization | GitHub Apps、部署身份和长期凭据由谁管理？ | TBD | 只记录 App、权限和 Owner，不记录凭据内容 | GitHub Owner / Platform |

## P2：品牌与市场

| ID | 资产 | 待确认问题 | 当前答案 | 建议确认方式 | 建议 Owner |
| --- | --- | --- | --- | --- | --- |
| Q-022 | Zeno 主品牌 | 品牌的法律权利人和正式 Brand Owner 是谁？ | TBD | 由管理层或法务提供经批准的权属摘要 | Brand Owner / Legal |
| Q-023 | Zeno 主品牌 | Zeno 名称及标志的商标申请、注册和续展状态是什么？ | TBD | 由法务/商标顾问核验，不在仓库保存敏感申请资料 | Legal |
| Q-024 | Zeno 主品牌 | 官方 Logo、色彩、字体、图标和素材的权威源在哪里？ | TBD | 建立经批准的资产清单和许可摘要 | Brand Owner |
| Q-025 | Zeno 主品牌 | 中英文正式描述、口号和对外审批流程是什么？ | TBD | Brand、Product 和 Legal 联合确认 | Brand Owner |
| Q-026 | 目标市场定位 | 高校教学、RoboCup、具身智能研究、开源硬件的优先级是什么？ | TBD | 由 Strategy/Product Owner 形成书面决策 | Strategy Owner |
| Q-027 | 目标市场定位 | 目标地域、语言、用户角色和成功指标是什么？ | TBD | 基于访谈或研究形成脱敏摘要 | Strategy / Research Owners |
| Q-028 | 目标市场定位 | “开源硬件”与八条产品线的范围和承诺如何对应？ | TBD | Product、Engineering 和 Community 联合确认 | Product Owner |

## P2：横向治理

| ID | 资产 | 待确认问题 | 当前答案 | 建议确认方式 | 建议 Owner |
| --- | --- | --- | --- | --- | --- |
| Q-029 | 全部资产 | 谁负责维护资产登记表，复核频率是多少？ | TBD | 指定 Register Owner 和季度/年度复核节奏 | Operations Owner |
| Q-030 | 全部资产 | 生产、关键、内部和公开资产的分类标准是什么？ | TBD | 形成并批准资产分类标准 | Security / Operations |
| Q-031 | 全部资产 | 安全事件、域名失效和管理员锁定的升级路径是什么？ | TBD | 在受控值班系统维护联系人，仓库只记录角色 | Security / Reliability |
| Q-032 | 全部资产 | 哪个受控系统保存恢复资料、合同、账单和原始审计证据？ | TBD | 由 Security/Operations 选定并定义访问策略 | Security / Operations |

## 进入下一阶段的最低条件

- [ ] 为域名、Workspace、GitHub、品牌和市场定位指定 Owner 与 Backup。
- [ ] 明确 GitHub Organization 的准确名称。
- [ ] 明确域名注册商、DNS 托管商、到期日和恢复责任。
- [ ] 确认 Workspace 与 GitHub 是否已承担生产用途。
- [ ] 为只读盘点确定范围、执行人、脱敏方式和明确授权。
- [ ] 确认敏感证据的受控存储位置，不把原始资料提交到 Git。

上述条件未满足前，下一阶段只能继续进行离线规划，不得执行受保护操作。
