# 0004. Poppins, Inter and IBM Plex Mono

## Status

Accepted (carried over). Decided in the ScheduLink Marketing design system before this repo existed; moved here unchanged on 2026-10-20.

## Context

- The wordmark has geometric letterforms.

## Decision

1. Poppins for headlines and UI labels, because it matches the letterforms of the wordmark.
2. Inter for body copy, because Poppins gets tiring in long paragraphs at small sizes.
3. IBM Plex Mono for eyebrows and captions.

## Consequences

- Three font families load on every page, from Google Fonts.
- Size and weight do the work a second colour would do.

## Alternatives

- Poppins everywhere: tiring to read in paragraphs.

## Revisit when

- Page speed suffers from the font requests.
