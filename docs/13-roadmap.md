# 13. Roadmap and open questions

## Calls for Seenu

Each of these was found while moving the system into this repo. Nothing here was changed; each needs an answer.

| # | Question | Options |
|---|---|---|
| 1 | Brand roles now follow the ramp. `brand-strong` and `status-later-text` move from `#1F43A8` to `#1E48B5`; `brand-soft` and `status-later-bg` to `#EBF2FF`. Accept? | Accept ADR 0009 / keep the hand values and drop the aliases |
| 2 | `ink-muted` fails AA on `page-grey` (4.11:1) and `surface-sunken` (4.26:1) | Darken `ink-muted` / keep captions off the grey |
| 3 | Buttons and tabs: 12px or 8px corners? The brand book and `radius-md` say 12px; `radius-sm` and the Button guidelines say 8px | 12px / 8px |
| 4 | Screenshot fragments: `shadow-product` (brand book) or no shadow (ScreenshotFrame guidelines)? | Shadow / no shadow |
| 5 | Some token usage notes quote ratios that the build measures differently (for example `ink` 12.6:1 noted, 13.39:1 measured) | Let the generated tables be the only place ratios appear / keep the notes |
| 6 | Some component guidelines say "module" | Change to "part" / leave as written |
| 7 | The illustration tints (`illus-shootcard`, `illus-shootcard-line`, and the pale blue tile in ProductIllustration) are blue but set by hand | Move them onto ramp steps / leave them |
| 8 | The Cover preview spells the name "Schedulink"; the brand rule is ScheduLink with a capital L | Fix the cover / leave it |
| 9 | The six carried-over ADRs have Context, Alternatives and Revisit-when lines written for this repo, not by the original authors | Review them / cut them to the Decision only |

## Not built yet

- Vector logo files: only PNGs exist.
- The two hero headline sizes (62px and 46px) as named text styles.
- A 6px chip radius token.
- A named icon library.
- A script that publishes `tokens/build/tokens.json` to the Claude design system after a merge.
