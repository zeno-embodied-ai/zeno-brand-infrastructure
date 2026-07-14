# ADR-0006: Platform stack visual

- Status: Accepted
- Date: 2026-07-14

## Context

The Platform page used a small CSS placeholder containing only Brain,
Cerebellum, Core and Link. It omitted the robot platforms, Simulation and Cloud,
and its crossing lines did not explain the platform hierarchy clearly.

The brand architecture defines an information model rather than a technical
compatibility guarantee. The public diagram must preserve that distinction.

## Decision

Use a dedicated landscape PNG for the Platform hero, with this reading order:

1. Teaching, RoboCup and research workflows.
2. Zeno Brain and Zeno Simulation.
3. Zeno Cerebellum, Zeno Core and Zeno Link.
4. Zeno Humanoid and Zeno Marine.

Zeno Cloud is shown separately as an optional, cross-stack collaboration layer.
Solid lines express the main information hierarchy; dashed connectors express
the optional Cloud relationship. The asset uses the existing cyan, lime, navy
and white website palette.

The English and Simplified Chinese Platform routes share the same branded
product names in the image and use localized accessible descriptions in HTML.
Other product pages retain their existing visual modes.

## Consequences

- The complete platform relationship is visible in one scan.
- The image remains responsive and readable without changing page layout.
- The diagram must be updated if `docs/brand-architecture.md` changes.
- Compatibility claims still belong in versioned product documentation.
