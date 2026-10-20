# 13. Roadmap and open questions

## Decided

Seenu answered the calls found while moving the system into this repo on 2026-10-20.

| # | Question | Decision |
|---|---|---|
| 1 | Brand roles follow the ramp | Accepted ([ADR 0009](adr/0009-brand-family-from-one-colour.md)) |
| 2 | `ink-muted` failed AA on `page-grey` and `surface-sunken` | Darkened to `#6B6E73`; it now passes on both |
| 3 | Buttons and tabs: 12px or 8px corners | 12px (`radius-md`) |
| 4 | Screenshot fragments: shadow or none | No shadow ([ADR 0011](adr/0011-fragments-without-shadow.md)) |
| 5 | Usage notes quoted contrast ratios | Removed; the generated tables in [03 Color](03-color.md) are the only place ratios appear |
| 6 | Guidelines said "module" | Changed to "part" |
| 7 | Hand-set blue illustration tints | Moved onto ramp steps 2, 3 and 4 |
| 8 | The Cover spelled "Schedulink" | Fixed to ScheduLink, with the other previews that had it |
| 9 | Carried-over ADRs had lines Claude wrote | Cut to Status and Decision |

## Calls for Seenu

| # | Question | Options |
|---|---|---|
| 10 | ADR 0005 gives product illustrations `shadow-product`, but the approved homepage tab pictures have none | Tab pictures get the shadow / extend ADR 0011 to tab pictures |
| 12 | Section padding moved from 120px (`space-9`) to 80px (`space-8`) so each section fits one laptop screen, and the platform tab picture shows at 85% on the homepage. Accept as the rule? | Accept / keep 120px |
| 11 | The TabIllustration preview still uses hand-set blues (`#EAF0FD`, `#C9D8F6`) for the date and part tiles | Move onto the ramp / leave them |
| 13 | New text styles for feature pages: `display-m` 38px for the hero and `display-s` 36px for section headings (Seenu, 2026-10-20). Both are weight 600, as the pages use, while `display-xl` and `display-l` stay at 700 | Accept / change sizes |
| 14 | Feature page block titles use `heading` (28px) instead of the hand-set 30px | Accept / keep 30px |
| 15 | Nav logo at 150px wide (about 42px tall) instead of 28px tall, to match the homepage | Accept / 28px tall |
| 16 | The header stays at the top of the screen while scrolling, on every page | Accept / scrolls away |
| 17 | Phones: feature page hero 32px, section headings 30px | Accept / change |
| 18 | `display-xl` is now 54px, weight 600, line 1.06, and `display-l` weight 600: the values on the approved homepage. The old 68px and 700 were never used on a page | Accept / go back to 68px and 700 |
| 19 | Homepage grey text (`#73767B` and `#8A8C91`) now uses `ink-muted` (`#6B6E73`), the grey that passes contrast. Slightly darker | Accept / keep the lighter greys |
| 20 | Homepage headings snapped to the scale: benefit headings line height 1.2 (was 1.15), the part title 28px (was 30px), "Switching is on us." 54px (was 56px) | Accept / keep the hand-set values |
| 21 | Still hand-set on the homepage, with no style in the system yet: the hero second line (40px, weight 400), quotes (22px), the 32px panel corners, and the light greys of the background grid | Add styles for them / leave as page details |

## Not built yet

- Vector logo files: only PNGs exist.
- The two hero headline sizes (62px and 46px) as named text styles.
- A 6px chip radius token.
- A named icon library.
- A script that publishes `tokens/build/tokens.json` to the Claude design system after a merge.
