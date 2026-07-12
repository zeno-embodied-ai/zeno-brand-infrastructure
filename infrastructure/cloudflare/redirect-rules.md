# Redirect Rules Plan

状态：`proposed`。以下是未来边缘规则的设计输入，不是 Cloudflare 配置、API 调用或发布授权。只有 DNS 已经获准接入 Cloudflare 且对应主机名处于 `proxied` 模式时，边缘重定向才会生效。

## 前置条件

- DNS Owner、Security/Operations 和 Service Owner 已批准具体规则与维护窗口。
- 目标 URL、证书、页面内容和监控已独立验证；未知的公开地址使用占位符，不能用猜测值替代。
- `github`、`www` 或 `security` 的 DNS 记录已经以批准的 Origin 存在并启用代理；禁止为未批准服务创建占位记录。
- 规则按优先级评审，避免与托管平台重定向、应用路由、Workers 或现有规则冲突。

## 建议规则表

| 优先级 | 请求条件 | 动作 | 目标 | 保留内容 | 状态 |
| --- | --- | --- | --- | --- | --- |
| 10 | Host 等于 `www.zeno-ai.org` | `301` 重定向 | `https://zeno-ai.org/<PATH_AND_QUERY>` | 路径和查询参数 | 仅方案 |
| 20 | Host 等于 `github.zeno-ai.org` | `302` 验收后改 `301` | `<APPROVED_GITHUB_ORGANIZATION_URL>/<PATH_AND_QUERY_IF_SUPPORTED>` | 仅在目标支持时保留路径/查询 | 仅方案 |
| 30 | Host 等于 `security.zeno-ai.org` 且 Security Owner 已批准 | `302` 验收后改 `301` | `<APPROVED_SECURITY_DISCLOSURE_URL>/<PATH_AND_QUERY_IF_SUPPORTED>` | 仅在目标支持时保留路径/查询 | 仅方案 |

`docs`、`api`、`cloud`、`models`、`sim`、`forum`、`status`、`download` 和根域不设默认重定向。它们必须保留各自已批准的服务行为；任何后续规则需由对应 Owner 单独审阅。

## 验收与回滚

先以临时响应验证规则顺序、目标、编码路径、查询参数、HTTPS 和循环，再改为永久响应。每次启用只加入一条规则，并使用：

```bash
curl -sS -I --max-redirs 0 "https://www.zeno-ai.org/<TEST_PATH>?<TEST_QUERY>"
curl -sS -I --max-redirs 0 "https://github.zeno-ai.org/<TEST_PATH>?<TEST_QUERY>"
curl -sS -I --max-redirs 0 "https://security.zeno-ai.org/<TEST_PATH>?<TEST_QUERY>"
```

成功条件是单跳、预期状态码、预期 `Location` 和有效 TLS；不得把测试 URL、Cookie、认证头或真实凭据写入变更记录。出现循环、错误目标、路径丢失、TLS 错误或登录/回调异常时，禁用最近启用的规则，复测原服务，然后由 Rollback Owner 决定是否恢复旧规则。
