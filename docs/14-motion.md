# 14. Motion

Motion shows the product doing its job or confirms what the visitor pointed at. It never decorates the page, never makes
anyone wait and never moves on its own outside a product picture.

## What moves today

| Change | Duration | Easing | Where |
|---|---|---|---|
| Hover on links and nav items | 150ms | `ease` | Header, footer, text links |
| Hover on buttons: background, border and text colour | 150ms | `ease` | Every button variant |
| Platform tab opens its row | None: the row and picture change at once | | Homepage platform section |
| FAQ answer opens | None: the browser's own disclosure | | Questions on every page |
| Header Platform menu | None: shown on hover or tap | | Every page |
| Product loop inside a picture | 7s, repeating | `ease-in-out` | Homepage pictures only |
| Page changes, scrolling | None | | Every page |

The values are written in the site's CSS. There are no motion tokens yet ([13 Roadmap](13-roadmap.md#not-built-yet)).

## Product loops

A loop is a small true moment inside a product picture: a count changing, a bar filling, a flag appearing.

- One loop per picture, and only in a picture, never on the page around it.
- The moment repeats every 7 seconds and holds still for most of the cycle, so it can be read.
- A loop shows something the product does. It is never added to rescue a picture that does not read when still
  ([08 Imagery](08-imagery.md#story-pictures)).
- Story pictures on part pages are still.

## Rules

1. **Never delay input.** A hover or a click changes state at once; the colour fade follows.
2. **Nothing slides in from off screen.** Menus appear in place, under what opened them.
3. **No autoplay outside pictures.** Tabs, testimonials and logos never advance on their own.
4. **No scroll effects.** Nothing fades, slides or scales in as the visitor scrolls.
5. **The header does not animate.** It stays fixed at the top from the first frame.

## Reduced motion

When the visitor's system asks for reduced motion (`prefers-reduced-motion: reduce`), every product loop stops on one
still frame that tells the whole moment (the count already changed, the flag already shown), so each picture still
reads. Hover colour fades stay: they are not movement.
