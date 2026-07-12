# Zeno Brand Infrastructure

Zeno 品牌数字基础设施的规划、配置基线与运维知识库。

Zeno 面向高校教学、RoboCup 比赛和具身智能研究，提供全栈开源具身智能平台。本仓库用于把官网、产品文档、域名、协作平台、组织账号和可观测性建设为一套可审查、可复现、可长期维护的工程。

## 项目目标

- 建立 `zeno-ai.org` 的站点、文档和服务命名体系。
- 为 Zeno Core、Link、Brain、Cerebellum、Humanoid、Marine、Cloud 和 Simulation 提供一致的信息架构。
- 用版本控制保存架构决策、部署流程、配置模板和变更记录。
- 让生产变更遵循“计划、评审、预演、批准、执行、验证、回滚”的闭环。
- 将 GitHub Organization、Google Workspace、DNS/CDN 和监控纳入统一治理，但不在本仓库保存生产密钥。

## 当前阶段

当前为 **Phase 5：GitHub Organization 规划**。Phase 0–4 已完成；本阶段新增推荐的 Zeno 仓库地图、组织治理基线和 `.github` 社区健康模板。Organization 登录名、远程仓库、Teams、Owners 和安全功能均未核验，未调用 GitHub API 或创建、变更任何远程资源。

## 仓库结构

```text
.
├── .github/workflows/                 # 经批准后启用的 CI 工作流
├── docs/                              # 资产、架构、域名矩阵和运行手册
│   └── decisions/                    # 重要架构决策记录
├── website/                           # zeno-ai.org 静态优先 Next.js 官网
├── documentation/                     # docs.zeno-ai.org Docusaurus 文档站
├── infrastructure/
│   ├── cloudflare/                    # DNS/CDN/WAF 声明式配置（仅模板）
│   ├── domains/                       # 域名机器可读资产登记
│   ├── github/                        # Organization、仓库与权限基线（仅模板）
│   ├── google-workspace/              # 账号、群组与安全基线（仅模板）
│   └── monitoring/                    # 可用性、证书与告警设计（仅模板）
├── scripts/                           # 不含凭据的检查和辅助脚本
├── tasks/                             # 分阶段实施任务与审批记录
├── AGENTS.md                          # Codex 与自动化代理执行规则
└── README.md                          # 项目入口
```

## 使用方式

### 阅读规划

1. 从 [`docs/asset-register.md`](docs/asset-register.md) 了解已知资产和未知控制信息。
2. 从 [`docs/brand-architecture.md`](docs/brand-architecture.md) 了解品牌和系统边界。
3. 在 [`docs/domain-matrix.md`](docs/domain-matrix.md) 审核域名优先级、预算和持有策略。
4. 在 [`docs/open-questions.md`](docs/open-questions.md) 跟踪尚未授权核验的问题。
5. 生产实施前逐步执行 [`docs/deployment-runbook.md`](docs/deployment-runbook.md)，每个批准点均需人工确认。
6. DNS 迁移评审从 [`docs/dns-plan.md`](docs/dns-plan.md) 和 Phase 4 任务清单开始；实施前必须先完成只读导出和 L3 批准。
7. GitHub Organization 评审从 [`docs/github-plan.md`](docs/github-plan.md) 和 Phase 5 任务清单开始；远程创建或权限变更需要单独批准。

### 开展变更

1. 在 `tasks/` 中建立任务，写明范围、所有者、依赖、风险、验收条件和回滚方案。
2. 从主分支创建短生命周期分支，只提交不含敏感信息的声明式配置和文档。
3. 本地运行 `./scripts/check-repository.sh`。
4. 提交 Pull Request，由代码所有者和对应系统管理员审核。
5. 只有在批准进入实施阶段后，才可按运行手册使用生产账户执行变更。

## 安全边界

本仓库允许保存：

- 架构文档、域名意向、公开联系地址和非敏感配置模板；
- 不含凭据的 IaC、策略基线、脚本和工作流定义；
- 任务状态、审批结果、验证记录和脱敏后的故障记录。

本仓库禁止保存：

- 密码、API Token、Cookie、私钥、恢复码和付款信息；
- Google Workspace 用户个人信息导出、会话数据或生产审计日志原文；
- 可直接绕过多因素认证、审批或最小权限控制的配置；
- 未经授权的字体、图片、软件包或其他第三方资产。

任何需要密钥的自动化应从受控的 Secret Manager 或 CI Secret 注入，日志中必须脱敏。发现疑似泄露时应停止提交、撤销凭据，并按组织安全流程处置；仅从 Git 历史删除并不等于完成轮换。

## 变更原则

- **默认无生产权限**：文档和测试环境优先，生产操作必须显式批准。
- **职责分离**：提交者不应独自批准高风险的身份、DNS 或组织权限变更。
- **最小权限**：使用单用途角色和短期凭据，避免共享超级管理员账号。
- **可回滚**：每项部署都要有回滚条件、执行人和验证窗口。
- **可观测**：上线前定义健康检查、证书监控、告警路由和状态通告方式。

## 状态

基础工程已完成 Phase 5 GitHub Organization 规划。`zeno-ai.org` 是项目方确认的现有生产主域；候选域名仍为 `TBD`，官网与文档站构建产物只存在于本地 `website/out/` 和 `documentation/build/`，不代表任何站点已经部署或 DNS 已配置。DNS 与 GitHub 模板均为占位符，不代表现网记录、既有远程资源或已批准的生产迁移。
