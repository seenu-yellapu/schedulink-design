# 03. Color

The site is near-monochrome: a grey page, white cards, greys, one house dark and the ScheduLink blue. There is no
second accent colour ([ADR 0002](adr/0002-near-monochrome.md)). Values live in `tokens/`; this doc explains them. The
tables marked as generated are written by `node scripts/tokens.mjs`, so they always match the tokens.

## Where blue is allowed

The logo, buttons, links, the selected tab, section tags, the "New" label on a tab, product-card accents and the badge
on a benefit symbol. Never on decoration, never on icons outside product pieces, never on large fills.

Attention states use `attention`: a neutral panel with `ink` text and a 3px `ink` rule. Urgency is carried by weight,
position and words, not by hue.

## The brand family from one colour

One input, `brand.input` in `tokens/brand.tokens.json`, produces a twelve-step ramp in OKLCH
([ADR 0009](adr/0009-brand-family-from-one-colour.md)). Each step has a fixed job:

| Steps | Job |
|---|---|
| 1 to 2 | Backgrounds |
| 3 to 5 | Tints: resting, hovered, selected |
| 6 to 8 | Borders: subtle, normal, strong |
| 9 | The solid: the input itself, unchanged |
| 10 | The solid pressed or hovered |
| 11 | Text in the brand hue |
| 12 | The darkest step |

How each step is found:

1. Steps 1 to 8 sit at fixed lightness targets, with chroma rising toward step 9 as a fixed share of the input's chroma.
2. Step 9 is the input, kept exactly as long as white text on it reaches 4.5:1. If a future input fails, the build
   darkens it until it passes and stops with an error, so the change is never silent.
3. Step 10 moves away from the white label, so a hovered button never loses contrast.
4. Step 11 is searched, not set: the lightest value that reaches 7:1 on white, `page-grey`, `surface-sunken` and step
   3. Brand-coloured text is read at small sizes, so it gets the stricter target.

<!-- generated:ramp:begin -->
| Step | Role | Value | OKLCH |
|---|---|---|---|
| 1 | App background | `#FCFDFF` | oklch(99.4% 0.003 264.5) |
| 2 | Subtle background | `#F6F9FF` | oklch(98.2% 0.009 264.5) |
| 3 | Element tint | `#EBF2FF` | oklch(96.0% 0.019 263.0) |
| 4 | Hovered tint | `#E1EBFF` | oklch(93.9% 0.029 264.4) |
| 5 | Selected tint | `#D1E0FF` | oklch(90.5% 0.046 264.9) |
| 6 | Subtle border | `#BDD2FE` | oklch(86.3% 0.066 265.0) |
| 7 | Border | `#A3C1FD` | oklch(81.1% 0.091 263.9) |
| 8 | Strong border | `#81A7F8` | oklch(73.4% 0.125 264.4) |
| 9 | Solid | `#2A5BD7` | oklch(51.6% 0.198 264.2) |
| 10 | Pressed solid | `#1A48C2` | oklch(45.6% 0.197 264.1) |
| 11 | Brand text | `#1E48B5` | oklch(44.5% 0.179 264.2) |
| 12 | Darkest | `#09205A` | oklch(27.0% 0.108 264.0) |
<!-- generated:ramp:end -->

## Roles

Components use these names, never ramp steps. Five roles follow the ramp; every other value is set by hand, as the
ScheduLink Marketing system set it.

<!-- generated:roles:begin -->
| Role | Value | Source | Use |
|---|---|---|---|
| `surface` | `#FFFFFF` | set by hand | Default page background. Most of the site sits on this. |
| `surface-sunken` | `#F7F7F8` | set by hand | Alternating section bands. Never two sunken bands in a row. |
| `surface-raised` | `#FFFFFF` | set by hand | Cards and panels. On light they need a line border to read, since there are no shadows. |
| `surface-invert` | `#2F2F2F` | set by hand | Reserved. The footer sits on the grey, not on a dark band (Seenu, 2026-10-27), so nothing on the site uses this yet. |
| `ink` | `#2F2F2F` | set by hand | The house dark. Headlines and primary text. |
| `ink-secondary` | `#585A5E` | set by hand | Body copy and supporting paragraphs. |
| `ink-muted` | `#6B6E73` | set by hand | Eyebrow labels, captions, metadata. Never body copy. |
| `brand` | `#2A5BD7` | brand.9 | The ScheduLink blue, from the logo. Buttons, links, active states and the mark itself. Nothing decorative. |
| `brand-strong` | `#1E48B5` | brand.11 (was `#1F43A8`) | Link text on light grounds and primary button hover. |
| `brand-soft` | `#EBF2FF` | brand.3 (was `#ECEFFA`) | Tint behind a positive status chip or an active nav item. Text on it is brand-strong. |
| `on-brand` | `#FFFFFF` | set by hand | Text and icons on brand fills. |
| `attention` | `#EFEFF1` | set by hand | Ground for anything that needs attention: a conflict flag, an overdue chip, a roster still outstanding. Neutral by design, with ink text and a 3px ink rule carrying the emphasis instead of a colour. |
| `line` | `#E6E6E8` | set by hand | Hairline borders, section rules, table dividers. Structure comes from these, not from shadows. |
| `line-strong` | `#8A8C91` | set by hand | Input and control borders, secondary button outlines, focus rings. |
| `page-grey` | `#F3F3F4` | set by hand | The page ground. Sections float on it as white cards. |
| `status-overdue-bg` | `#FDE8E8` | set by hand | Overdue status pill background. |
| `status-overdue-text` | `#B42318` | set by hand | Overdue status pill text. |
| `status-today-bg` | `#F2ECFC` | set by hand | Due-today status pill background. Purple is used for due-today only. |
| `status-today-text` | `#6A3FBF` | set by hand | Due-today status pill text. |
| `status-later-bg` | `#EBF2FF` | brand.3 (was `#EEF2FC`) | Due-later status pill background. |
| `status-later-text` | `#1E48B5` | brand.11 (was `#1F43A8`) | Due-later status pill text. |
| `illus-rim` | `#F3F3F5` | set by hand | Soft rim around product illustrations. |
| `illus-rim-line` | `#E6E6E9` | set by hand | Border of the soft rim. |
| `illus-header-rule` | `#DCDDE1` | set by hand | Line under column headers in product illustrations. |
| `illus-placeholder` | `#ECECF0` | set by hand | Placeholder lines and pills in simplified rows. |
| `illus-shootcard` | `#F6F9FF` | brand.2 (was `#F4F6FB`) | Shoot card background in the Photographers column. |
| `illus-shootcard-line` | `#E1EBFF` | brand.4 (was `#E6EBF6`) | Shoot card border. |
| `illus-tile-line` | `#E1EBFF` | brand.4 (was `#DBE4FA`) | Border of the pale blue column-header tile in product illustrations. The tile itself is brand-soft. |
| `illus-date` | `#EBF2FF` | brand.3 | Date tile and part tile fill in tab pictures. |
| `illus-date-line` | `#D1E0FF` | brand.5 | Border of the date tile in tab pictures. |
| `symbol-line` | `#E3E3E7` | set by hand | Border of the white tile behind a benefit symbol. |
| `confirm` | `#2C9A4B` | set by hand | The green tick badge on a benefit symbol. Shapes only, always with a tick, never text. |
| `grid-line` | `#EBEBEE` | set by hand | Lines of the background grid behind homepage sections (Seenu, 2026-10-20). |
| `grid-node` | `#B3B5B9` | set by hand | Dots where background grid lines meet. |
| `grid-mark` | `#9FA1A6` | set by hand | Corner cross marks on section edges. |
<!-- generated:roles:end -->

## Status colours

Used inside product illustrations only: red for overdue, purple for due today (its only use on the site), blue for due
later or scheduled, green for done or accepted, amber for waiting on a reply (scheduling only, always with the word
"Waiting"). A state is never shown by hue alone: a confirmed row gets a tick as well as green.

## Contrast

Every pair below is checked by the build ([ADR 0007](adr/0007-aa-contrast-enforced.md)). Body text needs 4.5:1 on its
ground, brand text 7:1, control borders, icons and badge shapes 3:1.

<!-- generated:contrast:begin -->
| Text or shape | On | Ratio | Needs | Result |
|---|---|---|---|---|
| `ink` | `surface` | 13.39:1 | 4.5:1 | Pass |
| `ink` | `page-grey` | 12.07:1 | 4.5:1 | Pass |
| `ink` | `surface-sunken` | 12.51:1 | 4.5:1 | Pass |
| `ink` | `attention` | 11.66:1 | 4.5:1 | Pass |
| `ink-secondary` | `surface` | 6.91:1 | 4.5:1 | Pass |
| `ink-secondary` | `page-grey` | 6.23:1 | 4.5:1 | Pass |
| `ink-secondary` | `surface-sunken` | 6.45:1 | 4.5:1 | Pass |
| `ink-muted` | `surface` | 5.12:1 | 4.5:1 | Pass |
| `ink-muted` | `surface-sunken` | 4.78:1 | 4.5:1 | Pass |
| `ink-muted` | `page-grey` | 4.62:1 | 4.5:1 | Pass |
| `brand` | `surface` | 5.87:1 | 4.5:1 | Pass |
| `brand` | `page-grey` | 5.30:1 | 4.5:1 | Pass |
| `on-brand` | `brand` | 5.87:1 | 4.5:1 | Pass |
| `on-brand` | `brand-strong` | 7.93:1 | 4.5:1 | Pass |
| `brand-strong` | `surface` | 7.93:1 | 7:1 | Pass |
| `brand-strong` | `page-grey` | 7.15:1 | 7:1 | Pass |
| `brand-strong` | `brand-soft` | 7.05:1 | 7:1 | Pass |
| `status-overdue-text` | `status-overdue-bg` | 5.60:1 | 4.5:1 | Pass |
| `status-today-text` | `status-today-bg` | 5.91:1 | 4.5:1 | Pass |
| `status-later-text` | `status-later-bg` | 7.05:1 | 4.5:1 | Pass |
| `on-brand` | `surface-invert` | 13.39:1 | 4.5:1 | Pass |
| `line-strong` | `surface` | 3.36:1 | 3:1 | Pass |
| `confirm` | `surface` | 3.60:1 | 3:1 | Pass |
| `on-brand` | `confirm` | 3.60:1 | 3:1 | Pass |


<!-- generated:contrast:end -->
