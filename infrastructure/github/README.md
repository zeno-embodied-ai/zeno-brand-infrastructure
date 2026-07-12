# GitHub Organization Infrastructure

GitHub Organization 的仓库、Teams、规则集、权限和安全基线规划目录。

允许：声明式模板、权限模型、仓库基线和审计检查。

禁止：个人访问 Token、GitHub App 私钥、会话 Cookie、成员个人信息导出和自动提升 Owner 的脚本。

默认权限应最小化；工作流使用只读权限和短期身份，外部 Action 固定到不可变提交版本。
