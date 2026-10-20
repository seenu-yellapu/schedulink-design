# 06. Shape and elevation

## Radius

| Token | Value | Use |
|---|---|---|
| `radius-xs` | 4px | Marker dots and tiny UI squares |
| `radius-sm` | 8px | See the conflict below |
| `radius-md` | 12px | Buttons and tabs |
| `radius-lg` | 16px | Cards, panels, screenshot fragments |
| `radius-xl` | 24px | Screenshot frames and large feature blocks |
| `radius-card` | 24px | Section cards on the grey page |
| `radius-pill` | 999px | Avatars and status dots only, never buttons or tabs |

Chips use 6px, which has no token yet.

**A conflict carried over from the source system:** the brand book and `radius-md` say buttons and tabs use 12px; the
`radius-sm` usage note and the Button guidelines say 8px. This repo keeps both values as they were. The answer is a
call for Seenu ([13 Roadmap](13-roadmap.md)).

## Elevation

The page is flat; the product has depth ([ADR 0005](adr/0005-flat-page-product-depth.md)).

| Token | Use |
|---|---|
| `shadow-product` | Product images only: illustrations and screenshot fragments |
| `shadow-product-lift` | The front-most layer in a stacked product image |

No shadows on sections, cards, buttons or panels. Structure comes from `line` hairlines.
