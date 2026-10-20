# 0009. The brand family from one colour

## Status

Accepted (2026-10-20). Seenu accepted the four generated values in the review of PR #1.

## Context

- Seenu, 2026-10-20: keep the primary colour, and calculate the others from it the way the Silverback design system does.
- The source system set brand, brand-strong, brand-soft and the due-later pill colours by hand.

## Decision

1. One input, brand.input (#2A5BD7, from the logo files), produces a twelve-step ramp in OKLCH. Step 9 is the input, unchanged.
2. Step 9 must carry white text at 4.5:1. If a future input cannot, the build stops rather than changing it.
3. Step 11 is searched until it reaches 7:1 on white, page-grey, surface-sunken and step 3.
4. brand is step 9, brand-strong step 11, brand-soft step 3, status-later-text step 11, status-later-bg step 3. Every other colour stays hand-set.

## Consequences

- brand-strong and status-later-text move from #1F43A8 to #1E48B5; brand-soft and status-later-bg move to #EBF2FF. Each token keeps its old value as "was".
- Changing the brand later is one value and a rebuild.

## Alternatives

- Keep every brand value hand-set: no change, but nothing keeps them in step.
- A 7:1 target for white on the button, as in Silverback: would darken the blue to about #1E4CC8, away from the logo.

## Revisit when

- The illustration tints should follow the ramp too (13 Roadmap, question 7).
