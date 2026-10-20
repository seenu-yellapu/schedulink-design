# 13. Roadmap and open questions

## Decided

Seenu answered every call on 2026-10-20.

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
| 10 | Tab pictures: shadow or none | No shadow ([ADR 0012](adr/0012-tab-pictures-without-shadow.md)) |
| 11 | Hand-set blues in the tab pictures | New roles `illus-date` and `illus-date-line`, on ramp steps 3 and 5 |
| 12 | Section padding | 80px (`space-8`), so each section fits one laptop screen |
| 13 | Feature page text styles | `display-m` 38px hero, `display-s` 36px section headings |
| 14 | Feature page block titles | `heading` 28px |
| 15 | Nav logo size | 150px wide on every page |
| 16 | Header while scrolling | Stays at the top on every page |
| 17 | Phone sizes on feature pages | Hero 32px, section headings 30px |
| 18 | `display-xl` and `display-l` | 54px and 48px, both weight 600, as on the approved homepage |
| 19 | Homepage grey text | `ink-muted` `#6B6E73` |
| 20 | Homepage headings off the scale | Snapped to the scale |
| 21 | Hand-set homepage details | New `display-sub`, `quote`, `radius-panel`, `grid-line`, `grid-node` and `grid-mark` |
| 22 | `illus-tile-line` as its own role | Accepted |
| 23 | Claude design system README | Built from `docs/` 00 to 12 |
| 24 | Integration logo sizes; no proof card under a platform tab | Kept, in [05 Layout](05-layout.md) |

## Calls for Seenu

None open.

## Not built yet

- Vector logo files: only PNGs exist.
- A 6px chip radius token.
- A named icon library.
- A script that publishes `tokens/build/tokens.json` to the Claude design system after a merge.
