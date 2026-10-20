# 0012. Tab pictures have no shadow

## Status

Accepted (2026-10-20). Narrows point 2 of [0011](0011-fragments-without-shadow.md), which kept `shadow-product` on product illustrations.

## Context

- ADR 0005 and 0011 give product illustrations `shadow-product`.
- The homepage tab pictures (TabIllustration) were approved with no shadow.
- Seenu, 2026-10-20, in the review of PR #1: no shadow.

## Decision

1. Tab pictures have no shadow. The `illus-rim` rim and its `illus-rim-line` border carry their edge.
2. Other product illustrations keep `shadow-product` until decided otherwise.

## Consequences

- TabIllustration and [06 Shape and elevation](../06-shape-elevation.md) say the same thing.

## Alternatives

- `shadow-product` on tab pictures, as 0005 said.

## Revisit when

- A tab picture sits on a ground where the rim alone does not separate it.
