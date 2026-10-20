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
