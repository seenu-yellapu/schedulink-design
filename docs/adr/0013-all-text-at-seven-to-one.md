# 0013. All text at 7:1, body text at 18px

## Status

Accepted (2026-10-29). Supersedes decisions 1 and 2 of [0007](0007-aa-contrast-enforced.md) for text; its 3:1 rule
for shapes, borders and icons stands.

## Context

- Silverback's design system holds every piece of text to 7:1 and sets larger sizes, under its principle "Big, plain
  and obvious", because many studio owners read with older eyes. The same people buy ScheduLink.
- Ours held body text to 4.5:1 and only brand-coloured text to 7:1. `ink-secondary` measured 6.23:1 and `ink-muted`
  4.62:1 on `page-grey`, and the grey labels inside the product pictures about 3.4:1.
- Seenu, 2026-10-29: adopt all text at 7:1 and a larger base size; keep the main button on the logo blue; raise the
  text inside the pictures now.

## Decision

1. Every text colour reaches 7:1 on every ground it sits on, on the page and inside product pictures.
2. One exception: the primary button label, white on `brand` at 5.87:1. The button stays the logo blue.
3. `ink-secondary` is `#46484C` and `ink-muted` is `#4D4F53`. Overdue text is `#941C13` and due-today text `#58339F`.
4. Blue text (section tags, links, the selected tab's label) uses `brand-strong`, step 11. `brand` is for fills,
   badges and marks.
5. `body` is 18px.
6. The build checks every text pair at 7:1 and fails below it.

## Consequences

- The two greys sit closer together; hierarchy leans on size and weight more than on grey.
- Grey labels in every picture darken to `#4D4F53`, and status words in pictures to darker reds, purples, greens and
  ambers that reach 7:1.
- Any new grey, status colour or picture text is checked against 7:1 before it ships.

## Alternatives

- A deeper blue button (`#1A48C2`, 7.64:1): full 7:1, but the button no longer matches the logo. Not chosen.
- Keep 4.5:1 for body text: the look the site was designed with, but harder to read for the people who buy it.

## Revisit when

- The logo blue changes, so the button can meet 7:1 without leaving it.
