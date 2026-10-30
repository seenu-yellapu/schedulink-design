# schedulink-design

The design system of schedulink.io, the ScheduLink marketing site: the homepage, six part pages, pricing, switching,
book a demo, contact, security, about and the legal pages. The app and the mobile app follow the ScheduLink Product
design system instead.

Version 0.1 was merged on 2026-10-20. Version 0.2, in review, adds the depth of the Silverback design system:
principles, who the site is for, motion, page patterns, breakpoints, states, formats and testing
([13 Roadmap](docs/13-roadmap.md#where-it-stands)). The engineers build the site in React from these docs and
`tokens/build/globals.css`; there is no component code here.

The values came from the ScheduLink Marketing design system in Claude and are unchanged, except the brand family, which
is now generated from one colour ([ADR 0009](docs/adr/0009-brand-family-from-one-colour.md)). `tokens/` holds the values,
`scripts/tokens.mjs` builds everything from them, `docs/` sets the rules, `components/` holds each component's
guidelines and preview, `brand/` holds the logo files, and `specimen/index.html` shows it all.

## Where to start

| Need | Go to |
|---|---|
| See it | `specimen/index.html` in a browser |
| The CSS for the site | `tokens/build/globals.css` |
| The colours and why | [03 Color](docs/03-color.md) |
| The logo files | [02 Brand](docs/02-brand.md) and `brand/logo/` |
| How to write for the site | [11 Content](docs/11-content.md) |
| How a page is built, section by section | [15 Patterns](docs/15-patterns.md) |
| Sizes at each screen width | [05 Layout](docs/05-layout.md#breakpoints) |
| What moves and how fast | [14 Motion](docs/14-motion.md) |
| What is still open | [13 Roadmap](docs/13-roadmap.md) |
| Why it is this way | [01 Principles](docs/01-principles.md), [the ADR index](docs/adr/README.md) |

## Map

| Path | Holds |
|---|---|
| `tokens/*.tokens.json` | The values: brand input, roles, type, spacing, radius, shadow |
| `tokens/palette.tokens.json` | The brand ramp, generated |
| `tokens/build/` | `globals.css`, `tokens.json` and `claude-readme.md` for the Claude design system, `contrast.json`; all generated |
| `scripts/` | `tokens.mjs` (the build), `brand-ramp.mjs`, `color.mjs`, `specimen.mjs` |
| `components/<Name>/` | `README.md` guidelines and `preview.html` |
| `brand/logo/` | The official wordmark and icon files |
| `docs/` | Sixteen numbered docs and `adr/` |
| `specimen/index.html` | Every token and component on one page, generated |

## Docs

| Doc | What it settles |
|---|---|
| [00 Overview](docs/00-overview.md) | The idea, who the site is for, every page, how the system is layered |
| [01 Principles](docs/01-principles.md) | Eight rules that break ties, the objections they answer, the tie-break order |
| [02 Brand](docs/02-brand.md) | Logo files and their rules |
| [03 Color](docs/03-color.md) | The ramp, the roles, contrast results |
| [04 Typography](docs/04-typography.md) | Three faces and the scale |
| [05 Layout](docs/05-layout.md) | The page, breakpoints, grids, the homepage, platform tabs, spacing |
| [06 Shape and elevation](docs/06-shape-elevation.md) | Radius, shadow, states |
| [07 Iconography](docs/07-iconography.md) | Line icons and benefit symbols |
| [08 Imagery](docs/08-imagery.md) | The hero, tab pictures, story pictures, fragments |
| [09 Tokens](docs/09-tokens.md) | Files, the build, syncing the Claude design system |
| [10 Components](docs/10-components.md) | The ten components and where each is used |
| [11 Content](docs/11-content.md) | Voice, tone by page, vocabulary, formats, the invented cast |
| [12 Accessibility](docs/12-accessibility.md) | WCAG 2.2 AA, how each rule is met, testing |
| [13 Roadmap](docs/13-roadmap.md) | Versions, decisions, calls for Seenu, what is not built |
| [14 Motion](docs/14-motion.md) | What moves, product loops, reduced motion |
| [15 Patterns](docs/15-patterns.md) | The site map, page types, header, footer, each page's sections |
| [ADRs](docs/adr/README.md) | One file per decision |

## Commands

Node 22. No install step and no dependencies.

| Command | Does |
|---|---|
| `node scripts/tokens.mjs` | Rebuilds every generated file; fails on any contrast or house-style failure |
| `node scripts/tokens.mjs --check` | Changes nothing; fails if a generated file is out of date (CI runs this) |
| `node scripts/brand-ramp.mjs '#2A5BD7'` | Prints the ramp for any colour |

## Repo rules

- `tokens/` is the source of truth. A doc that quotes a value must match the token file. Never edit a generated file.
- Components use role names (`var(--brand)`), never ramp steps (`var(--brand-9)`).
- Every change traces to an ADR or Seenu's words. Anything new is listed under "Calls for Seenu" in the PR.
- Only Seenu merges and tags.
- Example data is invented. This repo names no real client, school, student or person.
