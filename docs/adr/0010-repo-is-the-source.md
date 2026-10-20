# 0010. This repo is the source; the Claude design system is a view

## Status

Proposed (2026-10-20). New with this repo; Seenu confirms or changes it in review.

## Context

- The people building the site read the system; designers browse it in Claude.

## Decision

1. Changes are made here by pull request. Seenu merges.
2. After a merge, tokens/build/tokens.json and components/<Name>/ are published to the ScheduLink Marketing design system in Claude.
3. An edit made in the Claude artifact is copied back here by pull request.

## Consequences

- Two places show the system; one place changes it.
- Until the publish step is scripted, the artifact can lag the repo.

## Alternatives

- Keep the Claude artifact as the source: no review, no checks, no history.

## Revisit when

- Publishing by hand is forgotten more than once.
