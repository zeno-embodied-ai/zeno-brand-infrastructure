# Google Workspace Email DNS Protection Checklist

状态：`proposed`。邮件 DNS 是 L3 高风险范围。当前记录和策略为 `unknown`；以下项目必须从经批准的只读导出填写，绝不以 Google 的通用示例或猜测值覆盖生产记录。

## 迁移前保护

- [ ] Workspace Owner 和 DNS Owner 共同确认生产邮件、告警、群组、第三方发件人与域名验证依赖。
- [ ] 从当前权威 DNS 导出所有 MX 与 TXT/CNAME 记录，保存在受控存储；仓库仅保留脱敏状态和占位符。
- [ ] 将每条 MX 的优先级、目标和 TTL，以及 SPF、DKIM selector/公钥、DMARC 策略与报告地址逐字核对到导出。
- [ ] 盘点并保留 Google 域名验证记录以及其他仍在使用的验证、ACME、SaaS、邮件追踪或 BIMI 记录；不因不认识而删除。
- [ ] 所有邮件相关记录均标为 `dns_only`。MX 记录、TXT 记录和验证 CNAME/TXT 不得启用代理。
- [ ] 确认至少两名受保护 Workspace 超级管理员和带外恢复方式；恢复资料不写入本仓库。

## 核验命令

在批准窗口中将占位符替换为实际已批准值，并从至少两个递归解析器比对。以下查询只读；最后的发送测试会投递邮件，必须由 Workspace Owner 明确批准后才运行。

```bash
dig +noall +answer MX zeno-ai.org
dig +noall +answer TXT zeno-ai.org
dig +noall +answer TXT _dmarc.zeno-ai.org
dig +noall +answer TXT <APPROVED_DKIM_SELECTOR>._domainkey.zeno-ai.org
dig +noall +answer <APPROVED_GOOGLE_VERIFICATION_NAME>.zeno-ai.org TXT
dig +noall +answer <APPROVED_GOOGLE_VERIFICATION_NAME>.zeno-ai.org CNAME
nslookup -type=mx zeno-ai.org <APPROVED_RESOLVER_IP>
nslookup -type=txt zeno-ai.org <APPROVED_RESOLVER_IP>
nslookup -type=txt _dmarc.zeno-ai.org <APPROVED_RESOLVER_IP>
nslookup -type=txt <APPROVED_DKIM_SELECTOR>._domainkey.zeno-ai.org <APPROVED_RESOLVER_IP>
```

Approved delivery test only:

```bash
swaks --server <APPROVED_SMTP_RELAY> --tls \
  --from <APPROVED_TEST_SENDER@zeno-ai.org> \
  --to <APPROVED_EXTERNAL_TEST_RECIPIENT> \
  --header "Subject: approved DNS migration mail test" \
  --body "Approved non-sensitive delivery test."
```

## 变更后验收与回滚

- [ ] MX 记录集、优先级、SPF 单一策略、DKIM selector/公钥、DMARC 策略和验证记录与批准快照一致。
- [ ] 从外部收件箱检查经批准测试邮件的 `Authentication-Results`：SPF、DKIM 和 DMARC 的结果及对齐情况符合 Workspace Owner 的验收标准；不将完整邮件头或邮件正文提交到 Git。
- [ ] 从 Workspace 向外部地址和从外部地址向 Workspace 的测试均成功；群组/告警收件地址按批准范围抽样验证。
- [ ] 无邮件延迟、退信、DMARC 报告异常或管理员告警后，才在至少一个旧 TTL 和观察窗口结束时关闭变更。
- [ ] 任一收发或认证异常：停止 DNS 后续步骤，恢复受控快照中的完整邮件/验证记录（含 TTL 与优先级），再次验证 MX/TXT 和双向收发，并通知 Rollback Owner。
