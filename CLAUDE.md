# schedulink-design

The design system of schedulink.io, the ScheduLink marketing site. Values live in `tokens/`; `scripts/tokens.mjs` builds
every output from them. Read [README.md](README.md) for the map and [docs/00-overview.md](docs/00-overview.md) for how
it is layered.

## Commands

Node 22, no dependencies.

| Command | What it does |
|---|---|
| `node scripts/tokens.mjs` | Rebuild every generated file |
| `node scripts/tokens.mjs --check` | Fail if any generated file is stale, a contrast pair fails, or a doc has an em dash |
| `node scripts/brand-ramp.mjs '<hex>'` | Print the brand ramp for a colour |

## Rules

1. **Tokens are the source.** Change a value in `tokens/*.tokens.json`, then rebuild. Never edit
   `tokens/palette.tokens.json`, `tokens/build/**`, `specimen/index.html` or the generated tables in
   `docs/03-color.md` by hand.
2. **One brand input.** The brand family comes from `brand.input` ([ADR 0009](docs/adr/0009-brand-family-from-one-colour.md)).
   Brand roles alias ramp steps; components use roles, never steps.
3. **Contrast is checked, not claimed.** Do not write contrast ratios into usage notes; the generated tables carry them.
   A new known failure needs Seenu's decision first.
4. **No silent changes.** Every change traces to an ADR or Seenu's words. Anything new or different from what was
   decided (a value, an order, a default, a removed rule) goes under "Calls for Seenu" in the PR and is asked first.
5. **Voice.** Follow [11 Content](docs/11-content.md): no em dashes (the build fails on one), "photoshoot", "part",
   "clients", ScheduLink with a capital L. Plain English, tables over paragraphs, Mermaid labels quoted.
6. **Names.** Example data is invented. Never a real client, school, student or person.
7. **Releases.** Only Seenu merges, tags or publishes to the Claude design system. Never approve or merge yourself.

## Gotchas

- Component previews are fragments with no `<html>` or `<head>`; the specimen wraps them with the tokens and fonts.
- Previews reach the logo files by `../../brand/logo/<file>`; the specimen rewrites that path for its own folder.
