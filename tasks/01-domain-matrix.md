# Phase 1：Zeno 域名矩阵

- 状态：`completed`
- 等级：`L0`（规划）
- 日期：2026-07-12
- Change Owner：TBD
- Approver：项目方已明确批准阶段 1 的本地规划工作
- Executor：Repository Agent
- Verifier：Repository Agent（本地静态检查）
- 外部账户登录：无
- 注册商可注册性查询：无
- 外部写操作：无
- 域名购买或续费：无

## 目标

为现有主域和九个候选域建立 P0–P3 优先级、购买建议、品牌/混淆评估、预算门禁、跳转目标与三年持有策略，同时提供可机器读取的 CSV 登记表。

## 非目标

- 不假设或查询任何候选域名的可注册性、当前持有人或报价。
- 不登录注册商、DNS、Cloudflare、Google Workspace 或其他生产账户。
- 不购买、续费、转让、经纪、竞价或预订域名。
- 不修改 nameserver、DNS、MX、证书、重定向或生产网站。
- 不记录付款信息、登录凭据、API Token、Cookie、私钥或恢复码。

## 输入范围

- 现有生产主域：`zeno-ai.org`
- 候选：`zeno.ai`、`zeno-robotics.com`、`zeno-robotics.org`、`zeno.dev`、`zeno-embodied.ai`、`zeno-humanoid.org`、`zeno-humanoid.com`、`zeno-marine.com`、`zeno-platform.ai`
- 项目方指定字段：域名、用途、优先级、购买建议、目标用户、品牌价值、混淆风险、年度预算上限、当前状态、购买渠道、自动续费要求、跳转目标

## 交付物

| 文件 | 用途 | 状态 |
| --- | --- | --- |
| [`docs/domain-matrix.md`](../docs/domain-matrix.md) | 四级矩阵、预算、三年策略和安全门禁 | 已更新 |
| [`infrastructure/domains/domain-register.csv`](../infrastructure/domains/domain-register.csv) | 10 个域名的机器可读登记 | 已创建 |
| [`docs/decisions/0001-domain-portfolio-priorities.md`](../docs/decisions/0001-domain-portfolio-priorities.md) | 记录长期优先级和预算决策 | 已创建 |
| [`tasks/01-domain-matrix.md`](01-domain-matrix.md) | 阶段范围、检查与结果 | 已创建 |

## 任务检查清单

### 规划与研究

- [x] 阅读 AGENTS、阶段 0 资产登记、现有域名矩阵和待确认问题。
- [x] 检查工作树并建立书面计划。
- [x] 只阅读公开官方定价、registry/registrar 和 `.dev` 安全资料。
- [x] 未执行候选可注册性查询，所有候选状态保持 `TBD`。

### 实施

- [x] 建立 P0、P1、P2、P3 四级定义和持有原则。
- [x] 对现有域名和九个候选填写全部 12 个评估字段。
- [x] 给出第一年建议预算、单域停止价格和三年持有策略。
- [x] 创建 10 行域名 CSV 登记表。
- [x] 记录 ADR-0001 域名组合决策。
- [x] 更新 README 和部署运行手册的阶段说明。
- [x] 更新离线仓库检查脚本。

### 验证与交付

- [x] 验证 Markdown 覆盖全部字段、域名、优先级和安全边界。
- [x] 验证 CSV 为 12 列、10 个域名且每个域名唯一。
- [x] 验证 ADR 和相关文档链接。
- [x] 运行 `./scripts/check-repository.sh`。
- [x] 运行 `git diff --check`。
- [x] 展示阶段差异。
- [x] 将任务状态更新为 `completed`。
- [x] 创建 Phase 1 本地 Git 提交。
- [x] 在购买、续费、DNS 或其他受保护操作前停止。

## 阶段结论

- P0：`zeno-ai.org`，保持唯一 canonical 和长期保护。
- P1：`zeno.ai`、`zeno-robotics.com`、`zeno-robotics.org`，建议在独立授权后优先评估。
- P2：`zeno.dev`、`zeno-embodied.ai`、`zeno-platform.ai`，按入口成熟度选择；两个定位型 `.ai` 第一年度最多选择一个。
- P3：`zeno-humanoid.com`、`zeno-humanoid.org`、`zeno-marine.com`，第一年默认不购买。
- 第一年度建议核心预算 USD 1800；含 P2 条件储备的建议授权上限 USD 2400；P3 默认不支出。
- 所有候选当前状态均为 `TBD（未查询可注册性；未购买）`。

## 风险与限制

- 可注册性、持有人、premium 分类和实时价格都未查询，购买可行性未知。
- 公开价格仅用于制定门禁，可能因 registry、注册商、税费和汇率变化。
- 域名名称与商标、法律实体或地区权利的冲突尚未核验。
- `zeno-ai.org` 的注册商、续费日期、MFA、恢复和 DNS 托管信息仍为 TBD。
- 辅助域名会增加账号、续费、证书、监控和退役成本，不能只按首年促销价决策。

## 下一阶段门禁

如需查询可注册性或报价，必须先指定 Domain Owner、Approver 和 Executor，批准查询范围与时间戳规则，并确认不会触发购买、预订、经纪或付款。每个实际购买仍需独立人工批准。

## 执行记录

| 日期 | 动作 | 结果 |
| --- | --- | --- |
| 2026-07-12 | 读取阶段 0 基线和本地规则 | 完成；工作树初始为干净 |
| 2026-07-12 | 阅读公开官方 TLD、注册商和 `.dev` 资料 | 完成；未查询候选可注册性 |
| 2026-07-12 | 更新域名矩阵和 CSV | 完成；所有候选保持 TBD |
| 2026-07-12 | 记录 ADR 并同步 README/Runbook | 完成 |
| 2026-07-12 | 创建阶段任务清单 | 完成 |
| 2026-07-12 | 运行全仓检查并展示阶段差异 | 完成；检查通过，等待本地阶段提交 |
| 2026-07-12 | 创建 Phase 1 本地 Git 提交 | 完成；未查询或购买域名，未推送远程 |
