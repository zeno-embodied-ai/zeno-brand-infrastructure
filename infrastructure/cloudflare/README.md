# Cloudflare Infrastructure

DNS、CDN、TLS、WAF 和边缘规则的规划目录。目录名称不代表 Cloudflare 已被采用或已连接生产 zone。

允许：不含凭据的配置模板、导入说明、只读 plan、策略和回滚文档。

禁止：API Token、账号 Cookie、Terraform/OpenTofu state、生产 zone 原始导出及未经批准的 apply 脚本。

任何实现必须先确认权威 DNS 服务商和现状，再按 `docs/deployment-runbook.md` 执行。
