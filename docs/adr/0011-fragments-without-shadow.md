# 0011. Screenshot fragments have no shadow

## Status

Accepted (2026-10-20). Narrows point 2 of [0005](0005-flat-page-product-depth.md).

## Context

- The brand book gave screenshot fragments `shadow-product`; the ScreenshotFrame guidelines said no shadow.
- Seenu, 2026-10-20, in the review of PR #1: no shadow.

## Decision

1. Screenshot fragments have no shadow. A 1px `line` border and `radius-lg` carry their edge.
2. Everything else in 0005 stands: no shadows on sections, cards, buttons or panels, and product illustrations keep `shadow-product`.

## Consequences

- ScreenshotFrame, [06 Shape and elevation](../06-shape-elevation.md) and [08 Imagery](../08-imagery.md) say the same thing.

## Alternatives

- `shadow-product` on fragments, as the brand book said.

## Revisit when

- A fragment sits on a ground where a hairline alone does not separate it.
