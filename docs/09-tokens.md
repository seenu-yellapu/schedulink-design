# 09. Tokens

`tokens/` is the source of truth for every value ([ADR 0008](adr/0008-tokens-as-source.md)). A doc that quotes a value
must match the token file; the generated tables in [03 Color](03-color.md) do so by construction.

## Files

| File | Holds | Edited by |
|---|---|---|
| `tokens/brand.tokens.json` | `brand.input`, the one brand colour | Hand, with an ADR |
| `tokens/palette.tokens.json` | `palette.brand.1` to `12` | Generated |
| `tokens/semantic.tokens.json` | 29 colour roles; brand roles alias the palette | Hand |
| `tokens/typography.tokens.json` | Three families and ten text styles | Hand |
| `tokens/dimension.tokens.json` | Spacing and radius | Hand |
| `tokens/shadow.tokens.json` | The two product shadows | Hand |
| `tokens/build/globals.css` | Every token as a CSS custom property, plus `.type-<style>` classes | Generated |
| `tokens/build/tokens.json` | The same values in the Claude design system format | Generated |
| `tokens/build/contrast.json` | Every checked pair and its ratio | Generated |

The files follow the shape of the W3C Design Tokens format (`$type`, `$value`, `$description`, aliases in braces).
Dimensions, line heights and shadows are kept as CSS strings rather than the format's object values, so the CSS output
is a copy, not a conversion.

A role that used to have a hand-set value and now follows the ramp keeps the old value in
`$extensions.schedulink.was`, so the change stays visible.

## The build

```sh
node scripts/tokens.mjs           # rebuild every output
node scripts/tokens.mjs --check   # change nothing; fail if any output is stale (CI runs this)
node scripts/brand-ramp.mjs '#2A5BD7'   # print the ramp for any colour, without writing
```

Node 22, no dependencies. The build fails when:

- a contrast pair falls below its target and is not a listed known failure;
- a known failure starts passing (so the list is cleaned up);
- the brand input would need darkening to carry white text at 4.5:1;
- a doc, ADR or component guideline contains an em dash;
- with `--check`, any output differs from what is committed.

## Using the tokens

On the site, load `tokens/build/globals.css` and read the custom properties by role name: `var(--brand)`,
`var(--space-6)`, `var(--radius-card)`. Never use `--brand-1` to `--brand-12` in a component; they exist for the
specimen and for new roles.

## Syncing the Claude design system

The ScheduLink Marketing design system in Claude is a view of this repo
([ADR 0010](adr/0010-repo-is-the-source.md)). After a merge, publish `tokens/build/tokens.json` to it as
`project/tokens.json`, `tokens/build/claude-readme.md` as `project/README.md`, and any changed `components/<Name>/`
files to the same paths under `project/`. The Claude README is built from every numbered doc in `docs/` except 13 Roadmap, so a rule is changed in
`docs/` and never in the artifact. When publishing, `brand/logo/<file>` paths in the README and previews are
swapped for the artifact's stored logo files. Edits made in
the artifact are copied back here by PR, never left there.
