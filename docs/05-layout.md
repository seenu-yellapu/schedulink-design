# 05. Layout and spacing

A soft grey page with white cards floating on it.

## The page

- **Ground:** `page-grey` (#F3F3F4). Sections are white cards with 24px corners (`radius-card`) and a 1px `line` border,
  inset 40px from the page edges.
- **Some sections sit straight on the grey** to vary the rhythm: the logo row, the benefits, testimonials and the FAQ.
- **Between sections:** a 64px grey gap with a thin line across the full page width and a small + where it meets the side
  rails. The rails are 1px lines 23px in from each page edge, running from under the header to the bottom.
- **Header:** plain white, full width, a hairline underneath, fixed to the top while the page scrolls. Not floating, not
  rounded, not inset.

## The homepage

The brand book fixes the hero, then the logo row, then the benefits. It names the other section tags in this order but does not state the full page order, so the order below past the benefits is the order of those tags, not a decision.

| Section | Tag | Notes |
|---|---|---|
| Hero | none | Three-line headline ([04](04-typography.md)), the hero illustration ([08](08-imagery.md)) |
| Logo row | none | On the grey |
| Benefits | none | On the grey, three columns, each a BenefitSymbol, a 28px headline, one line. Benefits only, never features. In order: admin that stays the same as the studio grows, a team that always knows its part, clients who come back every season |
| Platform | THE PLATFORM | "One system instead of a stack of apps." Then the platform tabs |
| Integrations | INTEGRATIONS | A 2 by 2 grid divided by thin lines; logo above name; the last cell "More on the way" |
| Testimonials | TESTIMONIALS | On the grey |
| Switching | SWITCHING | |
| FAQ | FAQ | On the grey |
| Closing call to action | none | The only centred heading |

Headings are always left-aligned under their tag; only the closing call to action is centred.

Each section fits one laptop screen at full size: about 750px tall at 1440px wide (Seenu, 2026-10-20). An FAQ shows its questions with the answers closed.

The header stays at the top of the screen while the page scrolls (Seenu, 2026-10-20).

## Platform tabs

One tab per part, in this order: Photoshoot management, Task tracking, Photographer scheduling, Client relationships,
Email and form automation, Online booking. The footer's Platform column lists the same names in the same order.

- Each tab: a small mono label, a headline, one line, a "Learn more" link, and a large picture.
- Tab headings share one shape: what the part handles, a comma, then the problem gone, in plain literal words, 5 to 9
  words, each with a different problem word: "never scattered again", "nothing slips", "without calling around", "no
  retyping", "none sent by hand", "not chased".
- The line under it says how it works, in plain facts the help center confirms.
- A part that is not live gets a grey "Coming soon" label and a placeholder picture at the same size; when it ships it
  switches to a blue "New" label for its first months.
- Adding a part means adding a tab; nothing else changes.

## Spacing

| Token | Value | Use |
|---|---|---|
| `space-1` | 4px | Between a marker dot and its label |
| `space-2` | 8px | Inside chips, between stacked list items |
| `space-3` | 12px | Button padding, between a heading and its eyebrow |
| `space-4` | 16px | Between a heading and its paragraph |
| `space-5` | 24px | Card padding and gutters on phones |
| `space-6` | 32px | Card padding on desktop, between cards |
| `space-7` | 48px | Between a section header and its content |
| `space-8` | 80px | Section padding on desktop and phones, page side margin on desktop |
| `space-9` | 120px | Large gaps between blocks inside a section |
