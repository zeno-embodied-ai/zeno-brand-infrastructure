# Zeno Brand Infrastructure

**English** | [简体中文](README.md)

Planning, configuration baselines, and operational knowledge for Zeno's digital brand infrastructure.

Zeno is a full-stack open-source embodied intelligence platform for university teaching, RoboCup competitions, and embodied intelligence research. This repository makes the website, product documentation, domains, collaboration platforms, organization accounts, and observability an auditable, reproducible, and maintainable engineering system.

## Project goals

- Establish the naming system for sites, documentation, and services under `zeno-ai.org`.
- Provide a consistent information architecture for Zeno Core, Link, Brain, Cerebellum, Humanoid, Marine, Cloud, and Simulation.
- Preserve architecture decisions, deployment processes, configuration templates, and change records in version control.
- Ensure that production changes follow a complete plan, review, rehearsal, approval, execution, verification, and rollback process.
- Govern the GitHub Organization, Google Workspace, DNS/CDN, and monitoring together, without storing production secrets in this repository.

## Current phase

The project is currently in **Phase 6: repository documentation localization**. Phases 0 through 5 are complete; this phase adds Chinese and English repository entry points with language-switch links. The GitHub remote for this repository is configured. The Organization handle, Teams, Owners, and security features remain unverified; no GitHub API calls or remote resource creation or modification have been performed.

## Repository structure

```text
.
├── .github/workflows/                 # CI workflows enabled after approval
├── docs/                              # Assets, architecture, domain matrix, and runbooks
│   └── decisions/                    # Important architecture decision records
├── website/                           # Static-first Next.js website for zeno-ai.org
├── documentation/                     # Docusaurus documentation site for docs.zeno-ai.org
├── infrastructure/
│   ├── cloudflare/                    # Declarative DNS/CDN/WAF configuration (templates only)
│   ├── domains/                       # Machine-readable domain asset register
│   ├── github/                        # Organization, repository, and access baselines (templates only)
│   ├── google-workspace/              # Account, group, and security baselines (templates only)
│   └── monitoring/                    # Availability, certificate, and alerting design (templates only)
├── scripts/                           # Credential-free validation and helper scripts
├── tasks/                             # Phased implementation tasks and approval records
├── AGENTS.md                          # Execution rules for Codex and automation agents
└── README.md                          # Chinese project entry point
```

## How to use this repository

### Read the plans

1. Start with [`docs/asset-register.md`](docs/asset-register.md) for known assets and unknown control information.
2. Read [`docs/brand-architecture.md`](docs/brand-architecture.md) for the brand and system boundaries.
3. Review domain priorities, budget, and holding strategy in [`docs/domain-matrix.md`](docs/domain-matrix.md).
4. Track issues that have not yet been authorized for verification in [`docs/open-questions.md`](docs/open-questions.md).
5. Before production implementation, follow [`docs/deployment-runbook.md`](docs/deployment-runbook.md) step by step; every approval gate requires human confirmation.
6. Start DNS migration review with [`docs/dns-plan.md`](docs/dns-plan.md) and the Phase 4 task checklist. Complete a read-only export and obtain L3 approval before implementation.
7. Start GitHub Organization review with [`docs/github-plan.md`](docs/github-plan.md) and the Phase 5 task checklist. Remote creation or permission changes require separate approval.

### Make changes

1. Create a task in `tasks/` that states the scope, owner, dependencies, risks, acceptance criteria, and rollback plan.
2. Create a short-lived branch from the main branch and commit only declarative configuration and documentation that contain no sensitive information.
3. Run `./scripts/check-repository.sh` locally.
4. Open a pull request for review by code owners and the relevant system administrator.
5. Only after implementation approval may a production account be used according to the runbook.

## Security boundaries

This repository may contain:

- Architecture documentation, domain intentions, public contact addresses, and non-sensitive configuration templates.
- Credential-free infrastructure as code, policy baselines, scripts, and workflow definitions.
- Task status, approval results, verification records, and sanitized incident records.

This repository must not contain:

- Passwords, API tokens, cookies, private keys, recovery codes, or payment information.
- Google Workspace user-data exports, session data, or raw production audit logs.
- Configuration that can directly bypass multi-factor authentication, approvals, or least-privilege controls.
- Unauthorized fonts, images, software packages, or other third-party assets.

Automation that requires secrets must receive them from an approved Secret Manager or CI Secret, and logs must be sanitized. If a potential exposure is found, stop committing, revoke the credential, and follow the organization's security process. Removing the value from Git history alone does not complete credential rotation.

## Change principles

- **No production access by default:** prefer documentation and test environments; production operations require explicit approval.
- **Separation of duties:** a contributor should not independently approve high-risk identity, DNS, or organization-permission changes.
- **Least privilege:** use single-purpose roles and short-lived credentials; avoid shared super-administrator accounts.
- **Rollback readiness:** every deployment needs rollback conditions, an executor, and a verification window.
- **Observability:** define health checks, certificate monitoring, alert routing, and status communications before launch.

## Status

The foundational work has completed Phase 6 repository documentation localization. `zeno-ai.org` is the project-confirmed production primary domain. Candidate domains remain `TBD`; website and documentation build artifacts exist only locally in `website/out/` and `documentation/build/`, and do not indicate that any site has been deployed or that DNS has been configured. DNS and GitHub templates are placeholders and do not represent live records, existing remote resources, or an approved production migration.
