# 0008. Tokens as files, outputs generated

## Status

Proposed (2026-10-20). New with this repo; Seenu confirms or changes it in review.

## Context

- The source system kept its tokens in one file inside a Claude artifact, edited by hand, with no build and no checks.

## Decision

1. tokens/*.tokens.json are the source of truth, in the shape of the W3C Design Tokens format.
2. scripts/tokens.mjs generates the CSS custom properties, the Claude design system file, the contrast report, the tables in docs/03-color.md and the specimen.
3. CI runs the build with --check and fails if any output is stale.
4. No dependencies: plain Node 22.

## Consequences

- A doc can never quote a value the tokens do not have.
- A token change is a reviewed pull request.

## Alternatives

- A token tool such as Style Dictionary: worth it when a second platform needs a different output format.

## Revisit when

- The site needs outputs the script cannot write, such as a Tailwind theme.
