# 12. Accessibility

WCAG 2.2 AA, with brand text held to 7:1 ([ADR 0007](adr/0007-aa-contrast-enforced.md)).

| Rule | How it is met |
|---|---|
| Body text 4.5:1 on its ground | Checked by the build for every role on every ground it sits on ([03 Color](03-color.md)) |
| Large text, icons, control borders, badges 3:1 | Checked by the build: `line-strong`, `confirm`, the white tick |
| Brand text 7:1 | The ramp searches step 11 until it reaches 7:1 on every ground |
| No meaning by colour alone | A confirmed row gets a tick as well as green; "Waiting" is always written |
| Focus visible | 2px `line-strong` ring, offset 2px, on every button variant |
| Motion | Product loops stop when the visitor asks for reduced motion |
| Images | Benefit symbols carry `role="img"` and a label that says what they show |

## Known failures

None. `ink-muted` was darkened from `#73767B` to `#6B6E73` (Seenu, 2026-10-20) so captions pass AA on `page-grey` and
`surface-sunken` as well as on white. A new failure needs Seenu's decision before it is listed.
