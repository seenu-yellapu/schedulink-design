# 12. Accessibility

WCAG 2.2 AA, with every piece of text held to 7:1, the AAA level ([ADR 0013](adr/0013-all-text-at-seven-to-one.md)).

| Rule | How it is met |
|---|---|
| All text 7:1 on its ground | Checked by the build for every role on every ground it sits on ([03 Color](03-color.md)); text inside pictures is measured on every page. The primary button label is the one exception, at 5.87:1 on the logo blue |
| Large text, icons, control borders, badges 3:1 | Checked by the build: `line-strong`, `confirm`, the white tick |
| Blue text 7:1 | Blue text uses `brand-strong`, step 11, which the ramp searches until it reaches 7:1 on every ground |
| No meaning by colour alone | A confirmed row gets a tick as well as green; "Waiting" is always written |
| Focus visible | 2px `line-strong` ring, offset 2px, on every button variant |
| Motion | Product loops stop when the visitor asks for reduced motion |
| Images | Benefit symbols carry `role="img"` and a label that says what they show |
| Product pictures | Each picture is one `role="img"` with a label that says the sentence it tells; the text drawn inside is not read twice |
| Reflow | Every page reflows to one column at 320px with nothing lost and no sideways scroll ([05 Layout](05-layout.md#breakpoints)) |
| Text in pictures | 7:1 like the page, nothing below 13px, and phone pictures are drawn for phones, not scaled down |
| Headings | One `h1` per page; sections use `h2` and blocks inside them `h3`, in order |
| Keyboard | Every link, button, tab and question is reachable with Tab and opens with Enter or Space; questions use the browser's own disclosure |
| Links | A link's words say where it goes ("See how switching works"); the help center says it opens in a new tab |
| Forms | Labels above fields and always visible; "(optional)" written out; errors in words next to the field |
| Target size | Buttons 48px tall; links in the footer and header have at least 24px of space around them (WCAG 2.5.8) |

The preview pages on the site branch do not meet three of these yet, so they go in the build spec: no focus ring is
drawn, the help center link does not say it opens a new tab, and the homepage questions are plain rows with no answers
yet rather than the browser's disclosure.

## Testing

| Check | When |
|---|---|
| `node scripts/tokens.mjs --check`: every colour pair | Every PR, by CI |
| Every page at 390, 768, 1024, 1440 and 1512px: no sideways scroll, no broken image, no dead link | Every change to the site branch |
| Keyboard only: reach and open every control | Before launch, then each new page |
| A screen reader on the homepage and one part page | Before launch |
| Reduced motion turned on | Each page with a loop |

## Known failures

None. `ink-muted` was darkened from `#73767B` to `#6B6E73` (Seenu, 2026-10-20), then to `#4D4F53` with `ink-secondary`
to `#46484C` when all text moved to 7:1 (Seenu, 2026-10-29). A new failure needs Seenu's decision before it is listed.
