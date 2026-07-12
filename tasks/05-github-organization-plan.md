# Phase 5：Zeno GitHub Organization 规划

- 状态：`completed`
- 等级：`L0`（仅规划与本地模板）
- 日期：2026-07-12
- Change Owner：TBD
- Approver：项目方已明确批准 Phase 5 规划；未批准任何远程 GitHub 操作
- Executor：Repository Agent
- Verifier：Repository Agent（本地检查）
- Rollback Owner：TBD（未来远程变更）

## 目标

定义推荐 Zeno GitHub Organization 仓库、治理基线、社区健康文件和可复制的自动化模板。

## 非目标

- 不调用 GitHub API，不创建仓库、Teams、成员、Owner、Release 或远程配置。
- 不假定 Organization 名称、功能套餐、维护团队、许可证批准状态或安全联系渠道已存在。
- 不保存 Token、Cookie、私钥、个人信息、漏洞详情或生产工作流凭据。

## 任务检查清单

- [x] 阅读现有 GitHub 基础设施说明、治理运行手册与未决问题。
- [x] 规划 `.github` 和 13 个推荐产品/协作仓库。
- [x] 为每个仓库定义目标、可见性、语言、License、团队、分支、发布、CI、安全和优先级。
- [x] 创建 Organization profile、贡献、行为准则、安全、支持、Issue/PR、Dependabot 和 CODEOWNERS 模板。
- [x] 将所有未知 Organization/Team/联系渠道保留为占位符。
- [x] 记录 ADR、更新 README 和仓库自检。
- [ ] 获得批准后只读确认 Organization 名称、Owners、Teams、功能和现有仓库。
- [ ] 获得单独批准后创建/配置远程 Organization 和仓库。

## 验证与结果

- [x] 检查 Markdown/YAML、仓库检查和差异。
- [x] 创建本地 Git 提交，不包含既有无关工作区改动。

本阶段仅产生本地规划与模板；未调用 GitHub API，未创建或变更任何远程资源。
