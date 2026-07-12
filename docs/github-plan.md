# Phase 5：Zeno GitHub Organization 规划

状态：`proposed`。本文件只定义建议的 Organization 治理、仓库边界和社区文件；不代表 GitHub Organization 已存在，也不授权调用 GitHub API、创建仓库、邀请成员、变更 Owner 或修改远程设置。

## 已知边界与审批门槛

Organization 登录名、公开 URL、现有仓库、成员、Teams、订阅能力、安全功能和生产工作流均为 `unknown`。本文中的 `<GITHUB_ORGANIZATION>`、`@<GITHUB_ORGANIZATION>/<TEAM>`、联系人和版本号都是占位符，必须由 GitHub Owner、Engineering、Security 和 Legal 核验后替换。

创建 Organization、设置至少两名 MFA 保护的 Owner、启用/调整安全功能、修改成员/Teams 或发布仓库均须另行批准。任何生产密钥、个人信息、私钥、Token、Cookie、恢复码和实际漏洞报告内容不得进入仓库。

## Organization 基线

- 默认仓库权限：`none`；以 Teams 授权，不直接长期授予个人管理员。
- Owner：至少两名具备 MFA 和带外恢复路径的 Owner；日常维护使用最小权限角色。
- 可见性：以下规划仓库默认公开，但只有在 License、敏感信息、出口/第三方依赖和发布内容审查完成后才可公开。
- 保护：默认分支为 `main`；禁止直接推送、禁止强制推送、要求 PR、至少一名独立审批、所有批准评论失效于新提交、要求状态检查和已解决会话。高风险目录额外要求 CODEOWNERS 审批。
- CI：工作流最小权限 `contents: read`；第三方 Action 固定不可变提交；Fork PR 不访问 Secret；部署使用短期 OIDC 身份，不使用长期云密钥。
- 安全：启用能力以实际套餐和审批结果为准；至少规划 Secret scanning、Dependabot、私有漏洞报告、依赖审查、分支保护和审计复核。不可用的功能要记录替代控制，不得假定已启用。
- 发布：只从受保护的 tag/Release 工作流发布不可变产物；每个 Release 附带变更说明、校验和/签名策略（若适用）、兼容性说明和回滚方式。发布前不得使用真实生产凭据。

## 建议仓库矩阵

下列语言、许可证、团队和优先级均为建议而非已存在事实。许可证须经 Legal 批准；仓库建立时应含 `LICENSE`、README、贡献与安全入口。

| 仓库 | 目标 | 公开 | 主要语言 | 拟议 License | 维护团队 | 分支策略 | 发布策略 | CI | 安全要求 | 优先级 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `.github` | Organization profile、社区健康文件、Issue/PR 模板与治理默认项 | 是 | Markdown、YAML | CC-BY-4.0 | `@<GITHUB_ORGANIZATION>/github-admins` | `main` 受保护；Security/Community 审批 | 模板变更随 PR；无软件包 Release | Markdown/YAML 校验、链接与 Secret 扫描 | CODEOWNERS；模板不得索要凭据；审批安全联系内容 | P0 |
| `zeno-hardware` | 开放硬件设计、BOM、制造和版本化硬件文档 | 是 | KiCad、Markdown、Python | CERN-OHL-S-2.0 | `hardware-maintainers` | `main` 受保护；硬件与安全 Owner 审批 | 版本 tag 与制造包；物料/制造变更附兼容性说明 | 格式/文件完整性、BOM/生成物可复现检查 | 发布前敏感设计与第三方授权审查；CODEOWNERS | P0 |
| `zeno-firmware` | 板级固件、驱动和安全更新 | 是 | C、C++ | Apache-2.0 | `firmware-maintainers` | `main` 受保护；至少一名固件 Owner | 语义化 tag；发布二进制、校验和、升级/回滚说明 | 编译矩阵、单元/静态分析、格式、依赖与许可证扫描 | Secret/依赖扫描；签名和安全公告流程待批准 | P0 |
| `zeno-sdk` | 面向应用开发者的稳定 SDK 与客户端库 | 是 | Python、C++ | Apache-2.0 | `sdk-maintainers` | `main` 受保护；API 变更需 Owner 审批 | 语义化版本和包登记；兼容性与弃用说明 | 单元、类型、lint、文档、包构建 | 依赖更新、SBOM/许可证和发布身份最小权限 | P0 |
| `zeno-ros2` | ROS 2 集成、节点、消息与 launch 配置 | 是 | C++、Python | Apache-2.0 | `ros2-maintainers` | `main` 受保护；接口变更需 ROS 2 Owner | tag 和 ROS 包发布；声明支持矩阵 | colcon 构建、lint、测试、接口兼容检查 | 依赖扫描；不得在 CI 连接硬件或生产 ROS 图 | P0 |
| `zeno-description` | 机器人描述、URDF/Xacro、网格元数据与可视化配置 | 是 | XML、Python | Apache-2.0 | `description-maintainers` | `main` 受保护；模型 Owner 审批 | 与平台版本 tag 对齐 | XML/URDF 校验、静态加载和许可证检查 | 第三方网格来源与许可证审查；CODEOWNERS | P1 |
| `zeno-simulation` | 仿真场景、适配层、复现实验和工具配置 | 是 | Python、C++ | Apache-2.0 | `simulation-maintainers` | `main` 受保护；场景/平台 Owner 审批 | tag、可复现实验说明和兼容性矩阵 | 单元、lint、示例启动、固定依赖检查 | 不提交数据集凭据或云密钥；依赖/许可证扫描 | P1 |
| `zeno-brain` | 高层感知、规划和学习接口的开源实现 | 是 | Python、C++ | Apache-2.0 | `brain-maintainers` | `main` 受保护；算法与安全 Owner 审批 | 语义化 tag；模型/数据发布另行审查 | 单元、类型、lint、可复现性最小检查 | 模型、数据、基准和安全限制经过审查；无训练凭据 | P1 |
| `zeno-cerebellum` | 实时控制、运动协调与接口实现 | 是 | C++、Python | Apache-2.0 | `cerebellum-maintainers` | `main` 受保护；控制与安全 Owner 审批 | tag；风险变更附升级/回滚说明 | 单元、静态分析、确定性/接口检查 | 高风险控制变更要求 CODEOWNERS 与安全审阅 | P1 |
| `zeno-humanoid` | 人形平台集成、配置与平台级示例 | 是 | Python、C++ | Apache-2.0 | `humanoid-maintainers` | `main` 受保护；平台 Owner 审批 | 与硬件/固件兼容版本 tag 对齐 | 构建、配置校验、仿真冒烟测试 | 不含现场配置、凭据或未审阅安全参数 | P2 |
| `zeno-marine` | 海洋平台集成、配置与平台级示例 | 是 | Python、C++ | Apache-2.0 | `marine-maintainers` | `main` 受保护；平台 Owner 审批 | 与硬件/固件兼容版本 tag 对齐 | 构建、配置校验、仿真冒烟测试 | 不含现场配置、凭据或未审阅安全参数 | P2 |
| `zeno-docs` | 对外开发者文档源文件与版本化内容 | 是 | Markdown、TypeScript | CC-BY-4.0 | `docs-maintainers` | `main` 受保护；技术内容 Owner 审批 | 文档版本与软件 Release 对齐；静态发布另行批准 | 类型、构建、链接、可访问性与拼写检查 | 不含未审阅规格、内部 URL 或私有支持信息 | P0 |
| `zeno-website` | 对外官网源代码与静态构建配置 | 是 | TypeScript、CSS | Apache-2.0 | `website-maintainers` | `main` 受保护；品牌与安全 Owner 审批 | 不可变构建；生产部署和域名绑定另行批准 | 类型、lint、构建、链接、可访问性和依赖检查 | Fork 不接触部署 Secret；安全头/第三方脚本审查 | P1 |
| `zeno-examples` | 入门示例、教程配套代码与参考集成 | 是 | Python、C++ | Apache-2.0 | `developer-experience-maintainers` | `main` 受保护；示例 Owner 审批 | tag 与兼容 SDK/ROS 2 版本对应 | 格式、单元、示例运行和文档链接检查 | 示例不得包含 Token、私有端点、真实学生/客户数据 | P1 |

`<TEAM>` 在 GitHub 创建前必须由 Organization Owner 确认。矩阵中的裸团队名对应 `@<GITHUB_ORGANIZATION>/<TEAM>`；P0 为建立组织基线的阻断项，P1 为首批生态仓库，P2 待平台范围和 Owner 确认。

## 本地生成的 `.github` 仓库内容

本仓库 `.github/` 下的文件是未来 `.github` Organization 仓库的可审阅起点。创建远程 `.github` 仓库后，需将这些文件按 GitHub Community Health Files 规则迁入并重新验证：

- `profile/README.md`：Organization profile。
- `CONTRIBUTING.md`、`CODE_OF_CONDUCT.md`、`SECURITY.md`、`SUPPORT.md`：全局协作与支持基线。
- `ISSUE_TEMPLATE/` 和 `PULL_REQUEST_TEMPLATE.md`：结构化 Issue/PR 输入，且不收集 Secret 或私人信息。
- `dependabot.yml`：可复制到每个代码仓库后按其生态系统调整的依赖更新模板。
- `CODEOWNERS`：使用未解析占位团队的示例；创建 Teams 后才可替换并启用强制审阅。

## 实施前清单

1. GitHub Owner 提供 Organization 登录名、现有状态、两名 Owner 覆盖与恢复流程的脱敏结论。
2. Engineering、Security、Legal 批准每个仓库范围、可见性、许可证、维护团队和首批优先级。
3. 为每个仓库建立 README、LICENSE、CODEOWNERS、分支规则、必需检查、Secret/依赖扫描和 Dependabot 配置；不把组织模板误认为已自动继承的运行设置。
4. 在无生产 Secret 的临时仓库预演 PR、Fork、CODEOWNERS、Dependabot 和 Release 流程。
5. 经单独批准后逐仓创建，先验证 `.github` 与 P0 仓库，再按优先级创建后续仓库；每一步保留脱敏审计记录。
