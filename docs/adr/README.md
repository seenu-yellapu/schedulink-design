# Architecture decision records

One file per decision: Status, Context, Decision, Consequences, Alternatives, Revisit when. Once Accepted, an ADR is never edited to change its decision; a new ADR supersedes it. While Proposed, it is edited in its review pull request.

Status values:

- `Proposed (YYYY-MM-DD)`: written and planned against; Seenu confirms or changes it in review.
- `Accepted (YYYY-MM-DD)`: Seenu confirmed it. `Accepted (carried over)` marks a decision made in the ScheduLink Marketing design system before this repo.
- `Superseded by NNNN`: replaced; kept for history.

A carried-over ADR holds only its Status and Decision: the Context, Consequences, Alternatives and Revisit-when lines written for this repo were cut (Seenu, 2026-10-20), since the original authors did not write them.

| # | Decision | Status |
|---|---|---|
| [0001](0001-marketing-not-product.md) | The marketing site has its own design system | Accepted (carried over) |
| [0002](0002-near-monochrome.md) | Near-monochrome, with one brand blue | Accepted (carried over) |
| [0003](0003-light-only.md) | Light theme only | Accepted (carried over) |
| [0004](0004-three-faces.md) | Poppins, Inter and IBM Plex Mono | Accepted (carried over) |
| [0005](0005-flat-page-product-depth.md) | The page is flat; the product has depth | Accepted (carried over) |
| [0006](0006-product-visuals.md) | Product visuals: illustrations and fragments, fictional data | Accepted (carried over) |
| [0007](0007-aa-contrast-enforced.md) | WCAG AA contrast, checked by the build | Proposed (2026-10-20); decisions 1 and 2 superseded by 0013 |
| [0008](0008-tokens-as-source.md) | Tokens as files, outputs generated | Proposed (2026-10-20) |
| [0009](0009-brand-family-from-one-colour.md) | The brand family from one colour | Accepted (2026-10-20) |
| [0010](0010-repo-is-the-source.md) | This repo is the source; the Claude design system is a view | Proposed (2026-10-20) |
| [0011](0011-fragments-without-shadow.md) | Screenshot fragments have no shadow | Accepted (2026-10-20) |
| [0012](0012-tab-pictures-without-shadow.md) | Tab pictures have no shadow | Accepted (2026-10-20) |
| [0013](0013-all-text-at-seven-to-one.md) | All text at 7:1, body text at 18px | Accepted (2026-10-29) |
