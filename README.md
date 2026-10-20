# schedulink-design

The design system of schedulink.io, the ScheduLink marketing site: homepage, feature pages, pricing, about, FAQ. The
app and the mobile app follow the ScheduLink Product design system instead.

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
| What is still open | [13 Roadmap](docs/13-roadmap.md) |
| Why it is this way | [01 Principles](docs/01-principles.md), [the ADR index](docs/adr/README.md) |

## Map

| Path | Holds |
|---|---|
| `tokens/*.tokens.json` | The values: brand input, roles, type, spacing, radius, shadow |
| `tokens/palette.tokens.json` | The brand ramp, generated |
| `tokens/build/` | `globals.css`, `tokens.json` for the Claude design system, `contrast.json`; all generated |
| `scripts/` | `tokens.mjs` (the build), `brand-ramp.mjs`, `color.mjs`, `specimen.mjs` |
| `components/<Name>/` | `README.md` guidelines and `preview.html` |
| `brand/logo/` | The official wordmark and icon files |
| `docs/` | Thirteen numbered docs and `adr/` |
| `specimen/index.html` | Every token and component on one page, generated |

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
