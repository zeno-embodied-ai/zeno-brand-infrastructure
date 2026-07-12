# Zeno 品牌架构

状态：`proposed`

适用范围：Zeno 品牌、产品命名、数字触点与内容治理

生产影响：无；本文仅定义规划基线

## 1. 品牌定位

Zeno 是面向高校教学、RoboCup 比赛和具身智能研究的全栈开源具身智能平台。品牌应同时表达三项核心价值：

- **可学习**：从课程、实验到比赛训练，具备清晰的入门路径和可复现实验。
- **可研究**：软硬件接口开放、系统边界明确，支持算法验证与论文复现。
- **可构建**：从连接、计算、控制、机器人本体到云端和仿真形成可组合栈。

一句话描述建议：

> Zeno：面向教学、竞赛与研究的全栈开源具身智能平台。

该描述为信息架构基线，不替代后续正式审批的品牌口号或法律表述。

## 2. 目标受众

| 受众 | 首要任务 | 所需内容 | 主要入口 |
| --- | --- | --- | --- |
| 高校教师 | 建课、备课、管理实验 | 课程包、实验手册、教学案例 | 官网、文档站 |
| 学生与参赛队 | 快速上手、调试、参赛 | Quickstart、教程、示例、FAQ | 文档站、GitHub |
| 研究人员 | 搭建平台、复现实验、扩展算法 | 架构、API、数据与基准 | 文档站、GitHub |
| 开发者与贡献者 | 编译、测试、提交贡献 | 仓库地图、贡献指南、路线图 | GitHub、文档站 |
| 实验室与合作伙伴 | 评估方案、采购或共建 | 产品能力、兼容性、联系渠道 | 官网 |

## 3. 品牌模型

采用 **单一主品牌 + 描述性产品线**（branded house）：`Zeno` 是唯一主品牌，产品使用 `Zeno + 名称`。不为各产品建立独立视觉品牌或互相竞争的口号。

### 3.1 产品线

| 产品 | 在平台中的角色 | 主要内容边界 | 建议导航分组 |
| --- | --- | --- | --- |
| Zeno Core | 公共运行时、基础 API 与核心能力 | 安装、运行时、SDK、核心接口 | Software |
| Zeno Link | 设备、总线与通信连接层 | 设备接入、协议、网关、同步 | Software |
| Zeno Brain | 感知、决策与智能任务层 | 模型、推理、规划、任务编排 | Intelligence |
| Zeno Cerebellum | 实时运动控制与执行层 | 控制器、轨迹、动力学、实时接口 | Intelligence |
| Zeno Humanoid | 人形机器人平台 | 本体、装配、标定、维护、示例 | Robots |
| Zeno Marine | 水面/水下机器人平台 | 本体、传感器、任务与水域安全 | Robots |
| Zeno Cloud | 团队、数据、训练与远程服务 | 账号、项目、数据、计算、设备管理 | Cloud |
| Zeno Simulation | 仿真、数字孪生与测试环境 | 场景、资产、仿真接口、CI 测试 | Tools |

产品角色是规划假设，正式对外发布前须由产品负责人确认。若实际边界变化，应先更新本表，再更新网站导航、文档和仓库描述。

### 3.2 平台关系

```text
Teaching / RoboCup / Research workflows
                    │
        Zeno Brain ─┼─ Zeno Simulation
                    │
          Zeno Cerebellum
                    │
              Zeno Core
                    │
              Zeno Link
                    │
       Zeno Humanoid / Zeno Marine

Zeno Cloud provides optional collaboration, data and remote services
across the stack; local and open-source workflows should remain explicit.
```

此图表达信息架构而非技术依赖保证。实际兼容关系必须由版本化的兼容矩阵定义。

## 4. 命名系统

### 4.1 正式写法

- 主品牌：`Zeno`，首字母大写，不写作全大写或全小写。
- 产品：首次出现使用完整名称，如 `Zeno Cerebellum`；同一页面后续可使用 `Cerebellum`。
- 域名、软件包和命令行按各生态约束使用小写 ASCII。
- 标题不随意加入 AI、OS、Platform 等后缀；新名称需经过品牌与产品架构评审。

### 4.2 仓库与软件包建议

- GitHub 仓库使用小写 kebab-case，如 `zeno-core`、`zeno-simulation`。
- 语言包名按生态规范命名，并在文档中明确其与正式产品名的对应关系。
- 不复用产品名作为不相关服务、内部环境或临时项目的名称。
- 版本、兼容性和生命周期属于产品元数据，不写入主品牌名称。

### 4.3 新产品命名门禁

新增产品线前检查：用户问题是否独立、与现有产品是否重叠、开源边界、域名及仓库可用性、商标与语言风险、维护负责人和生命周期。未经审批的名称标记为 `proposed`。

## 5. 数字触点架构

| 触点 | 单一职责 | 权威内容 | 不应承载 |
| --- | --- | --- | --- |
| `zeno-ai.org` | 品牌与产品总入口 | 定位、产品地图、案例、参与方式 | 详细 API 文档、账号后台 |
| `docs.zeno-ai.org` | 学习与技术文档 | Quickstart、指南、参考、版本文档 | 营销落地页、敏感运维文档 |
| GitHub Organization | 源码与开放协作 | 代码、Issue、Release、贡献治理 | 私钥、生产配置、用户数据 |
| Google Workspace | 身份、邮件与协作 | 群组、共享盘、组织协作 | 公开技术文档的唯一副本 |
| Status 入口（待定） | 对外服务状态 | 事件、维护和可用性 | 内部日志、根因敏感信息 |

所有域名仅为规划，具体状态见 [`domain-matrix.md`](domain-matrix.md)。

## 6. 内容架构

### 6.1 官网一级导航建议

- Platform：平台总览与全栈关系。
- Products：八条产品线入口。
- Solutions：Education、RoboCup、Research。
- Open Source：GitHub、贡献方式、社区治理。
- Documentation：跳转至版本化文档站。
- About：使命、团队/组织公开信息、联系与品牌资源。

### 6.2 文档站层级建议

每条产品线使用相同骨架：Overview、Quickstart、Concepts、Tutorials、How-to、Reference、Compatibility、Troubleshooting、Release notes。跨产品学习路径以场景组织，不复制产品参考文档。

### 6.3 内容来源原则

- 产品能力、兼容性和 API 以版本化产品仓库或文档站为权威来源。
- 官网只概述稳定能力并链接到权威文档，避免复制后产生漂移。
- 课程、比赛规则和论文复现材料标明适用版本、日期和维护人。
- 不能证实的性能指标、用户数量或合作关系不得发布。

## 7. 视觉与语言治理

当前仓库尚未包含已批准的 Logo、色彩、字体、图标和语调规范。相关资产进入仓库前需确认来源、授权、文件格式、可访问性与派生关系。

最低数字体验标准：

- 中文和英文均使用清晰、直接、技术准确的表达；避免无法验证的最高级宣传。
- 颜色组合满足 WCAG AA 的常规文本对比要求，交互状态不可只依赖颜色。
- Logo 保留安全区，不拉伸、不改色、不与产品名称组合成未经批准的新标志。
- 图片提供替代文本；视频提供字幕或文字说明；代码和公式可复制。
- 网站、文档和演示模板使用同一产品名称、大小写和一句话描述。

## 8. 治理与责任

建议每个关键领域至少配置一名 Owner 和一名 Backup：

| 领域 | Accountable | Responsible | 必需评审 |
| --- | --- | --- | --- |
| 品牌定位与命名 | Brand Owner | Content Maintainer | 产品负责人、法务/商标顾问 |
| 官网 | Digital Owner | Website Maintainer | Brand、Security |
| 文档站 | Documentation Owner | 各产品文档负责人 | Product、Developer Experience |
| 域名与 DNS | Infrastructure Owner | DNS Administrator | Security、服务 Owner |
| GitHub Organization | Engineering Owner | GitHub Administrator | Security、仓库 Owner |
| Google Workspace | Operations Owner | Workspace Administrator | Security、HR/Operations |
| 监控与状态 | Reliability Owner | On-call Maintainer | 服务 Owner、Communications |

表中为角色而非具体人员。具体人员和备用联系人应在受控的组织目录中维护，公开仓库只保留角色或公开联系组。

## 9. 生命周期与变更控制

所有产品、域名和数字触点使用统一状态：

1. `proposed`：正在评估，不对外承诺。
2. `approved`：已批准建设，但不代表已上线。
3. `active`：已上线、有 Owner、有监控和支持路径。
4. `deprecated`：停止新增使用，已公布迁移与截止日期。
5. `retired`：已下线，重定向、防接管和归档完成。

影响品牌定位、产品命名、主域导航或域名的变更必须通过 Pull Request 记录决策、影响范围、迁移方式和批准人角色。

## 10. 待决策事项

- 八条产品线的最终技术边界、开源范围和发布顺序。
- 中英文品牌口号、正式语调和法律实体表述。
- 视觉识别系统、字体授权和品牌资源下载政策。
- 文档站技术栈、官网与文档站托管平台及版本策略；官网本地实现已选择 Next.js 静态导出。
- 社区渠道、公开支持承诺和安全漏洞报告渠道。
- 商标检索、域名防御性注册与地区合规评估。
