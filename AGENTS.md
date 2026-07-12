# Zeno Brand Infrastructure Agent Rules

## Project purpose

This repository manages the public digital infrastructure of the Zeno
open-source embodied intelligence platform.

## Primary domain

zeno-ai.org

## Operating principles

1. Plan before modifying files.
2. Make small, reviewable changes.
3. Do not modify production infrastructure without explicit approval.
4. Never commit credentials, API tokens, cookies, passwords, private keys,
   service-account files, payment information or recovery codes.
5. Use environment variables for credentials.
6. Provide a dry-run mode for infrastructure changes.
7. Validate generated configuration before application.
8. Record important decisions in docs/decisions/.
9. Update README and runbooks when architecture changes.
10. Create a Git commit after each approved phase.

## Protected operations

The following require explicit human approval:

- Purchasing or renewing a domain
- Changing nameservers
- Changing MX records
- Deleting DNS records
- Modifying Google Workspace users
- Creating paid cloud resources
- Publishing a production deployment
- Changing GitHub organization ownership
- Rotating or deleting credentials

## Domain conventions

Public services should use subdomains of zeno-ai.org:

- www.zeno-ai.org
- docs.zeno-ai.org
- developer.zeno-ai.org
- api.zeno-ai.org
- cloud.zeno-ai.org
- models.zeno-ai.org
- sim.zeno-ai.org
- forum.zeno-ai.org
- status.zeno-ai.org
- download.zeno-ai.org
- security.zeno-ai.org

## Required workflow

For each phase:

1. Read current documentation.
2. Inspect existing files.
3. Produce a written plan.
4. Implement only the requested phase.
5. Run validation and tests.
6. Show the diff.
7. Update the task checklist.
8. Stop before any protected operation.
