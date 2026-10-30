# 13. Roadmap and open questions

## Where it stands

Version 0.1 was merged on 2026-10-20: the tokens, the build, ten components, docs 00 to 13 and ADRs 0001 to 0011.
Since then Seenu has merged the email picture fix, the Claude README built from the docs, and the benefit symbols,
light footer and section marks. Version 0.2 brings the depth of the Silverback design system: principles, an overview
of who the site is for, motion, page patterns, breakpoints, states, formats and testing.

| Version | Delivers | Done when |
|---|---|---|
| 0.1 | Tokens, the build, the specimen, ten components, docs 00 to 13, ADRs 0001 to 0011 | Merged 2026-10-20 |
| 0.2 | 14 Motion, 15 Patterns; principles, overview, layout, states, content, accessibility deepened | Calls answered 2026-10-29; Seenu merges the PR |
| Before the build | The build spec for the engineers takes the patterns and states from here | The engineers start the React site |
| Before launch | Logos, a customer quote, the security statement, legal text, vector logo files | The site goes live |
| 1.0 | Stable tokens, components and patterns | The site is live and a seventh part has shipped without a redesign |

## Decided

Seenu answered every call on 2026-10-20, and calls 31 to 42 on 2026-10-29.

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
| 25 | Benefit symbol size | 80px tile on desktop, 64px on phones (was 110px and 88px) |
| 26 | Space around a row with no heading on the grey | 48px above and below |
| 27 | Footer: light on the grey or a dark band | Light, on every page. `surface-invert` is reserved |
| 28 | Section hairlines, + marks and side rails | On every page, not only the homepage |
| 29 | Section cross marks colour | `grid-node`, the same grey as the grid dots (was a hand-set `#B9BBC0`) |
| 30 | How to draw the How it works pictures | The story-pictures process in [08 Imagery](08-imagery.md): three ideas from three different concept sources, none reused on the same page |
| 31 | Version name | 0.2 |
| 32 | New docs without renumbering | 14 Motion and 15 Patterns |
| 33 | Claude design system README | Every numbered doc except 13 Roadmap |
| 34 | Principles | Eight, with the tie-break order in [01 Principles](01-principles.md) |
| 35 | Phone gap between sections | 32px on every page, the homepage included |
| 36 | One-column breakpoints | 1000px on the homepage, 900px elsewhere |
| 37 | Photoshoot management block tags | 01 · Booked, 02 · Staffed, 03 · Tracked |
| 38 | Client relationships questions | "How do our clients get in?" swapped for a question on moving over |
| 39 | Hover on buttons and tabs | Colour only, no lift |
| 40 | Patterns rules | No pop-ups or chat bubbles over the page; no tiers or "contact sales"; no phone or job title fields |
| 41 | Motion rules | Nothing slides in, no autoplay outside pictures, no scroll effects |
| 42 | Content rules | Formats, tone by page and the invented cast |

## Calls for Seenu

None open.

## Not built yet

- Vector logo files: only PNGs exist.
- A 6px chip radius token.
- A named icon library.
- A script that publishes `tokens/build/tokens.json` to the Claude design system after a merge.
- Motion tokens: the site's 150ms hover and 7s loops are written in its CSS ([14 Motion](14-motion.md)).
- On the preview pages: the focus ring, the help center's new-tab notice, and the homepage questions as real
  disclosures with answers ([12 Accessibility](12-accessibility.md)).
- The Contact form's sent state.
- The security statement: hosting, encryption, backups, certifications.
