# ADR 0004：GitHub Organization 采用分域仓库与集中治理模板

- 状态：proposed
- 日期：2026-07-12

## 背景

Zeno 需要把硬件、固件、SDK、ROS 2、仿真、平台、文档、官网和示例以可审阅的开源边界组织起来。Organization 名称、现有状态、成员和远程设置尚未核验，不能假设任何仓库已经创建。

## 决策

采用 `docs/github-plan.md` 中的分域仓库建议，并以 `.github` 仓库集中保存可复用的 profile、社区健康文件、Issue/PR 模板和 CODEOWNERS 示例。每个仓库仍须独立配置并验证分支规则、CI、Dependabot、许可证、安全控制和发布流程；集中模板不自动构成远程安全配置。

默认分支为受保护的 `main`，协作通过 PR、最小权限 Teams 和 CODEOWNERS 进行。License、公开可见性、团队名称和功能可用性在创建前由 Engineering、Legal、Security 与 GitHub Owner 审批。

## 后果

- 更清楚的维护归属、Release 边界与权限控制，但增加跨仓库版本协调成本。
- `.github` 模板降低协作起步成本，但不能替代逐仓实施和验证。
- 本决策不授权创建 Organization/仓库、邀请成员、修改 Owner、启用付费功能、发布 Release 或调用 GitHub API。
