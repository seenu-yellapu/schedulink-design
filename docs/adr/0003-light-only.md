# 0003. Light theme only

## Status

Accepted (carried over). Decided in the ScheduLink Marketing design system before this repo existed; moved here unchanged on 2026-10-20.

## Context

- There is no dark mode on the marketing site.

## Decision

1. Tokens carry a single value; there is one theme.

## Consequences

- Engineers build one set of states.
- Adding a theme later means a second value per role and a second set of contrast checks.

## Alternatives

- A dark mode that follows the visitor's system.

## Revisit when

- Visitors ask for a dark mode, or a dark section is added to the site.
