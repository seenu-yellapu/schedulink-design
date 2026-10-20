# 01. Principles

Six rules that break ties. Each points to the decision behind it.

| # | Principle | In practice | Decision |
|---|---|---|---|
| 1 | Calm beats loud | A grey page, white cards, generous spacing. Section padding of 80px keeps each section to one laptop screen. | [0001](adr/0001-marketing-not-product.md) |
| 2 | One colour carries meaning | Blue only where the visitor acts or the brand appears. No second accent. | [0002](adr/0002-near-monochrome.md) |
| 3 | The page is flat; the product has depth | No shadows on sections, cards, buttons or panels. Only the hero product illustration gets `shadow-product`; screenshot fragments and tab pictures have none ([0011](adr/0011-fragments-without-shadow.md), [0012](adr/0012-tab-pictures-without-shadow.md)). | [0005](adr/0005-flat-page-product-depth.md) |
| 4 | The product is the proof | Illustrations and cropped fragments of real screens, with fictional data. No stock photos, no blobs. | [0006](adr/0006-product-visuals.md) |
| 5 | Say only what is true | The app flags conflicts, it does not prevent them, so the site says flags. | [11 Content](11-content.md) |
| 6 | Readable for everyone | Text clears 4.5:1 on its ground; the build checks every pair. | [0007](adr/0007-aa-contrast-enforced.md) |

## Tried and rejected

Grid strips between sections, nodes, the dark footer, the floating rounded header, black buttons, a tile pattern behind
the closing call to action, icon plates with corner dots, a statement band ("Everything scheduled. Everything
linked."), a "What is ScheduLink?" section, a problem section, the small-feature grid. Gradients, glassmorphism and a
blue-purple glow are out as well.
