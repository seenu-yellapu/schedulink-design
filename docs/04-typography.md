# 04. Typography

Three faces, each with one job ([ADR 0004](adr/0004-three-faces.md)). All three load from Google Fonts; there are no font
files in this repo.

| Role | Face | Why |
|---|---|---|
| Headlines and UI labels | Poppins | Matches the letterforms of the wordmark |
| Body copy | Inter | Poppins gets tiring in long paragraphs at small sizes |
| Eyebrows and captions | IBM Plex Mono | Uppercase with wide tracking for section tags |

## The scale

Values live in `tokens/typography.tokens.json`; the build writes a `.type-<name>` class for each.

| Style | Face | Size / line / weight | Tracking | Use |
|---|---|---|---|---|
| `display-xl` | Poppins | 54px / 1.06 / 600 | -0.03em | Homepage hero and the switching heading |
| `display-sub` | Poppins | 40px / 1.06 / 400 | -0.02em | Second line of the homepage hero |
| `display-l` | Poppins | 48px / 1.08 / 600 | -0.03em | Homepage section headings |
| `display-m` | Poppins | 38px / 1.1 / 600 | -0.03em | Feature page hero |
| `display-s` | Poppins | 36px / 1.1 / 600 | -0.03em | Section headings on feature pages |
| `heading` | Poppins | 28px / 1.2 / 600 | -0.02em | Benefit headlines, sub-sections |
| `quote` | Poppins | 22px / 1.35 / 600 | -0.01em | Customer quotes |
| `subheading` | Poppins | 20px / 1.3 / 600 | -0.01em | Card titles |
| `body-l` | Inter | 19px / 1.6 / 400 | | Section intros |
| `body` | Inter | 18px / 1.6 / 400 | | Running text ([ADR 0013](adr/0013-all-text-at-seven-to-one.md)) |
| `body-s` | Inter | 15px / 1.55 / 400 | | Card bodies |
| `ui` | Inter | 15px / 1.2 / 600 | | Buttons and labels |
| `eyebrow` | IBM Plex Mono | 12px / 1.4 / 500, uppercase | 0.14em | Section tags |
| `caption` | IBM Plex Mono | 13px / 1.45 / 400 | | Captions under fragments |

## Rules

- Body copy tops out around 68 characters a line.
- Headlines break at meaningful points, not wherever the box ends.
- With no accent colour in play, size and weight are the main tools for hierarchy: use the full range of the scale.
- Headlines are tight: -0.03em on display styles.
- The homepage hero headline is two lines: "Studio Management Software" in `display-xl`, then "for Volume
  Photography" in `display-sub` and `ink-secondary`. On narrower screens the whole headline scales down rather than
  wrapping.
