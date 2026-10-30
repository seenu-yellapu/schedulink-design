# 06. Shape and elevation

## Radius

| Token | Value | Use |
|---|---|---|
| `radius-xs` | 4px | Marker dots and tiny UI squares |
| `radius-sm` | 8px | Small controls inside product illustrations; not buttons or tabs |
| `radius-md` | 12px | Buttons and tabs |
| `radius-lg` | 16px | Cards, panels, screenshot fragments |
| `radius-xl` | 24px | Screenshot frames and large feature blocks |
| `radius-card` | 24px | Section cards on the grey page |
| `radius-panel` | 32px | Full-width tinted panels on the homepage |
| `radius-pill` | 999px | Avatars and status dots only, never buttons or tabs |

Chips use 6px, which has no token yet.

Buttons and tabs use 12px (`radius-md`), as the brand book says (Seenu, 2026-10-20).

## Elevation

The page is flat; the product has depth ([ADR 0005](adr/0005-flat-page-product-depth.md)).

| Token | Use |
|---|---|
| `shadow-product` | Product illustrations only. Screenshot fragments ([ADR 0011](adr/0011-fragments-without-shadow.md)) and tab pictures ([ADR 0012](adr/0012-tab-pictures-without-shadow.md)) have no shadow. |
| `shadow-product-lift` | The front-most layer in a stacked product image |

No shadows on sections, cards, buttons or panels. Structure comes from `line` hairlines.

## States

Hover is a bonus, never the only sign: everything a visitor can click already looks clickable. On the preview pages states
change colour only; a hover lift on tabs and buttons was left for the build spec (Seenu, 2026-10-16).

| Element | Rest | Hover | Focus |
|---|---|---|---|
| Primary button | `brand` fill, `on-brand` text, 48px tall | `brand-strong` fill | 2px `line-strong` ring, offset 2px |
| Secondary button | `surface` fill, 1px `line-strong` border, `ink` text | Border turns `ink` | The same ring |
| Nav link | `ink` | `brand` | The same ring |
| Platform menu item | `ink` | `surface-sunken` fill, `brand` text | The same ring |
| Selected platform tab | `ink` label, open with its heading, line and link | | The same ring |
| FAQ question | Plus mark | Plus mark | The same ring |
| Open FAQ question | Minus mark, answer shown | | The same ring |

Hover colours fade over 150ms ([14 Motion](14-motion.md)). Buttons are 48px tall so they are easy to hit on a phone.
The focus ring is set in [components/Button](../components/Button/README.md); the preview pages on the site branch do not
draw it yet, so it goes in the build spec ([13 Roadmap](13-roadmap.md#not-built-yet)).
