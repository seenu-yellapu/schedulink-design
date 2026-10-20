# BenefitSymbol

One symbol per benefit: a dark line icon on a white rounded tile, with a small coloured badge on its top-right corner that names the change.

## Anatomy

- **Tile:** white `#FFFFFF`, 1px `symbol-line` (`#E3E3E7`) border, corners about 28% of the tile size. Desktop 110px with 30px corners; phone 88px with 24px corners.
- **Icon:** `ink` (`#2F2F2F`) stroke, 1.2 wide, round caps and joins, no fill, drawn at half the tile size on a 24 by 24 grid. (1.8 was tried and read too heavy next to the headlines.)
- **Badge:** a circle 37% of the tile size (desktop 40px, phone 32px), 3px white border, set 25% of its own size above the tile and 28% of its own size past its right edge. White icon inside at 45% of the badge, stroke 2.5.
- **Badge colours:** `brand` (`#2A5BD7`) for growth and for coming back, `confirm` (`#2C9A4B`) for the tick. Colour only ever appears in the badge; the tile and icon stay neutral.

## The three in use

| Benefit | Icon | Badge |
|---|---|---|
| Your admin stays the same as you grow. | Camera | Up arrow, blue |
| Your team always knows their part. | Two people | Tick, green |
| Your clients come back every season. | Client building | Repeat arrow, blue |

Icon paths (24 by 24):

- Camera: `M4 8h3l2-2.5h6L17 8h3v11H4z` plus a circle at 12,13, radius 3.5
- Two people: circles at 9,8.5 r3 and 17,9.5 r2.4; `M3.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5`; `M15.6 14.6c2.2.1 4 1.5 4.6 4.4`
- Client building: `M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6`
- Up arrow: `M12 19V6M6.5 11.5L12 6l5.5 5.5`
- Tick: `M5 12.5l4.5 4.5L19 7.5`
- Repeat arrow: `M16.5 3.5l3 3-3 3`, `M5 11v-.5a4 4 0 0 1 4-4h10.5`, `M7.5 20.5l-3-3 3-3`, `M19 13v.5a4 4 0 0 1-4 4H4.5`

## Rules

- One symbol per benefit, above its headline, left-aligned. Never a scene, chart, face or product screen here.
- Give the wrapper `role="img"` and an `aria-label` that says what it shows ("A camera with an up arrow: more photoshoots"); the inner SVGs are `aria-hidden`.
- The tick is never shown by colour alone: it is always a tick.
- No shadow on the tile or the badge.
- A new benefit gets a new icon from the same family and one of the two badge colours; no new colours.
