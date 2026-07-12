# DNS Migration Verification Checklist

状态：`proposed`。仅在获得 L3 批准并完成迁移前导出后执行；命令中的尖括号为占位符，不能原样运行。

## 变更前

- [ ] 受控存储中已有完整旧 zone 导出、记录 ID、TTL、代理状态、DNSSEC/DS、边缘规则和导出哈希；Git 中没有原始导出。
- [ ] 旧权威 nameserver、注册商、DNSSEC 状态、Rollback Owner 和恢复流程由第二人核验。
- [ ] `dns-records.example.yaml` 的每个非占位值均已由记录 Owner 批准；未知记录明确标注为保留。
- [ ] Google Workspace MX、SPF、DKIM、DMARC 和全部域名验证记录已逐条比对，且 Workspace Owner 已签字。
- [ ] 每个代理主机名的 Origin TLS/SNI、健康检查、缓存/WAF 兼容性和服务回滚已在非生产路径验证。

## DNS 与权威委派

从至少两个独立递归解析器执行以下命令；在批准时把 `<APPROVED_RESOLVER_IP>`、`<APPROVED_NS>`、`<EXPECTED_TARGET>` 替换为已核实值。

```bash
dig +noall +answer NS zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer zeno-ai.org A
dig @<APPROVED_RESOLVER_IP> +noall +answer www.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer docs.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer github.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer api.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer cloud.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer models.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer sim.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer forum.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer status.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer download.zeno-ai.org
dig @<APPROVED_RESOLVER_IP> +noall +answer security.zeno-ai.org
dig @<APPROVED_NS> zeno-ai.org SOA +noall +answer
nslookup -type=ns zeno-ai.org <APPROVED_RESOLVER_IP>
nslookup <APPROVED_HOSTNAME> <APPROVED_RESOLVER_IP>
```

- [ ] 每个答案的记录类型、目标、优先级和 TTL 与批准实施副本及导出保留项一致。
- [ ] 代理主机名从公网返回预期边缘地址；`status`、`download` 和所有邮件/验证记录保持 `dns_only`。
- [ ] 如启用 DNSSEC，`dig +dnssec zeno-ai.org` 的结果与已批准 DS/签名状态一致；任何 `SERVFAIL` 均阻断关闭。

## HTTP、TLS、代理与重定向

```bash
curl -sS -I --max-redirs 0 https://zeno-ai.org/
curl -sS -I --max-redirs 0 https://www.zeno-ai.org/<TEST_PATH>?<TEST_QUERY>
curl -sS -I --max-redirs 0 https://docs.zeno-ai.org/
curl -sS -I --max-redirs 0 https://github.zeno-ai.org/
curl -sS -I --max-redirs 0 https://security.zeno-ai.org/
openssl s_client -connect <APPROVED_HOSTNAME>:443 -servername <APPROVED_HOSTNAME> -verify_return_error </dev/null
```

- [ ] 代理端点的 HTTPS、证书主机名、链和有效期正常；Origin 不因代理设置出现 TLS、Host 或循环错误。
- [ ] `www` 的重定向单跳到根域，并保留已批准的路径和查询参数。
- [ ] `github`、`security` 只有在对应 Owner 批准后才重定向到准确目标；其他主机名不被意外重定向。
- [ ] `api`、`cloud`、`sim` 和 `forum` 的关键健康检查、认证/回调及长连接路径由 Service Owner 验收。
- [ ] `status` 和 `download` 从独立网络直连已批准提供商，未被 Cloudflare 代理。

## 观察与结论

- [ ] 在至少一个最大旧 TTL 加上批准观察窗口内持续检查，未因单次成功提前关闭。
- [ ] 监控、告警和状态通告正常；没有新增 4xx/5xx、TLS、邮件或重定向告警。
- [ ] Verifier 记录脱敏命令结果、时间、解析器与结论；变更单更新为 `completed` 或 `rolled-back`。
