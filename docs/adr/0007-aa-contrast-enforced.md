# 0007. WCAG AA contrast, checked by the build

## Status

Proposed (2026-10-20). New with this repo; Seenu confirms or changes it in review. Decisions 1 and 2 superseded by
[0013](0013-all-text-at-seven-to-one.md) for text.

## Context

- The source system stated contrast ratios in usage notes by hand. Several do not match the measured values, and two pairs fail AA.

## Decision

1. Every text role is checked on every ground it sits on: 4.5:1 for body text; 3:1 for large text, icons, control borders and badge shapes.
2. Brand-coloured text is held to 7:1, because it is read at small sizes.
3. A failing pair carried over from the source system is listed as a known failure with its reason. It is reported, not changed, until Seenu decides. The build fails on any other failure, and when a known failure starts passing.

## Consequences

- A colour change that breaks readability cannot merge.
- Two known failures are open: ink-muted on page-grey and on surface-sunken.

## Alternatives

- AAA (7:1) for all text: would darken ink-muted and ink-secondary beyond the look the site was designed with.

## Revisit when

- The site adds a second theme.
