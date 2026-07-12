#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

required_directories=(
  docs
  docs/decisions
  website
  documentation
  infrastructure/cloudflare
  infrastructure/github
  infrastructure/google-workspace
  infrastructure/monitoring
  infrastructure/domains
  scripts
  tasks
  .github/workflows
)

required_files=(
  README.md
  AGENTS.md
  .gitignore
  docs/brand-architecture.md
  docs/asset-register.md
  docs/domain-matrix.md
  docs/deployment-runbook.md
  docs/dns-plan.md
  docs/github-plan.md
  docs/open-questions.md
  docs/decisions/0001-domain-portfolio-priorities.md
  docs/decisions/0002-website-v1-stack.md
  docs/decisions/0003-developer-documentation-stack.md
  docs/decisions/0004-github-organization-governance.md
  infrastructure/domains/domain-register.csv
  infrastructure/cloudflare/dns-records.example.yaml
  infrastructure/cloudflare/redirect-rules.md
  infrastructure/cloudflare/verification-checklist.md
  infrastructure/google-workspace/email-dns-checklist.md
  tasks/00-inventory.md
  tasks/01-domain-matrix.md
  tasks/02-website-v1.md
  tasks/03-developer-docs.md
  tasks/04-dns-migration-plan.md
  tasks/05-github-organization-plan.md
  .github/profile/README.md
  .github/CONTRIBUTING.md
  .github/CODE_OF_CONDUCT.md
  .github/SECURITY.md
  .github/SUPPORT.md
  .github/ISSUE_TEMPLATE/config.yml
  .github/ISSUE_TEMPLATE/bug_report.md
  .github/ISSUE_TEMPLATE/feature_request.md
  .github/ISSUE_TEMPLATE/documentation.md
  .github/PULL_REQUEST_TEMPLATE.md
  .github/dependabot.yml
  .github/CODEOWNERS
  tasks/TEMPLATE.md
  website/README.md
  website/package.json
  website/package-lock.json
  website/next.config.ts
  website/src/app/page.tsx
  website/src/app/sitemap.ts
  website/src/app/robots.ts
  website/src/content/pages.ts
  website/scripts/check-static-output.mjs
  documentation/README.md
  documentation/package.json
  documentation/package-lock.json
  documentation/docusaurus.config.ts
  documentation/sidebars.ts
  documentation/versions.json
  documentation/docs/overview/introduction.md
  documentation/versioned_docs/version-0.1.0-draft/overview/introduction.md
  documentation/scripts/validate-docs.mjs
)

failures=0

report_failure() {
  printf 'ERROR: %s\n' "$1" >&2
  failures=$((failures + 1))
}

for directory in "${required_directories[@]}"; do
  [[ -d "$directory" ]] || report_failure "missing directory: $directory"
done

for file in "${required_files[@]}"; do
  [[ -s "$file" ]] || report_failure "missing or empty file: $file"
done

if ! git diff --check; then
  report_failure "git diff contains whitespace errors"
fi

for forbidden_file in \
  '*.pem' '*.key' '*.p12' '*.pfx' '*.tfstate' '*.tfstate.*' \
  '.env' '.env.*' 'credentials.json' 'service-account.json'; do
  while IFS= read -r path; do
    [[ "$path" == './.env.example' ]] && continue
    report_failure "forbidden sensitive file name: ${path#./}"
  done < <(find . -path './.git' -prune -o -type f -name "$forbidden_file" -print)
done

secret_patterns=(
  'AKIA[0-9A-Z]{16}'
  'gh[pousr]_[A-Za-z0-9]{30,}'
  'github_pat_[A-Za-z0-9_]{40,}'
  '-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----'
  'AIza[0-9A-Za-z_-]{35}'
)

for pattern in "${secret_patterns[@]}"; do
  if rg --hidden --glob '!.git/**' --glob '!scripts/check-repository.sh' -n -- "$pattern" .; then
    report_failure "possible high-confidence secret pattern detected"
  fi
done

if rg --hidden --glob '!.git/**' --glob '*.md' --glob '*.sh' --glob '*.csv' --glob '.gitignore' \
  -n -- '[[:blank:]]+$' .; then
  report_failure "trailing whitespace detected"
fi

domain_register='infrastructure/domains/domain-register.csv'
if [[ -s "$domain_register" ]]; then
  if ! awk -F',' 'NF != 12 { print FNR ": expected 12 CSV fields"; invalid = 1 } END { exit invalid }' \
    "$domain_register"; then
    report_failure "invalid domain register CSV structure"
  fi
fi

for document in README.md AGENTS.md docs/*.md tasks/*.md; do
  [[ -e "$document" ]] || continue
  if LC_ALL=C grep -n $'\r' "$document"; then
    report_failure "CRLF line ending detected: $document"
  fi
done

if ((failures > 0)); then
  printf 'Repository checks failed: %d issue(s).\n' "$failures" >&2
  exit 1
fi

printf 'Repository checks passed.\n'
