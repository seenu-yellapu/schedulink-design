# 08. Imagery

Product visuals come in two kinds. Both use the soft-rimmed frame, illustrated faces for people, and fictional data only
([ADR 0006](adr/0006-product-visuals.md)). No stock photos, no illustrated blobs.

## The hero illustration

A studio's day: the date in the rim's top strip, three columns (Photoshoots, Tasks, Photographers) with soft tile
headers, two detailed rows then simplified rows, and a short fade. See
[ProductIllustration](../components/ProductIllustration/README.md) and
[IllustrationParts](../components/IllustrationParts/README.md).

## Tab pictures

Almost-true, simplified views of real ScheduLink screens: every section, field and status shown exists in the app,
statuses are shown by icon rather than words, and nothing is invented. Every tab picture is the same size (760 by 470 on
desktop, 560 tall with a fade on phones) and shares one layout: a header, four labelled details, two columns of
sections. Each must show the linked pieces on screen, such as a photoshoot with its tasks, photographers and emails. See
[TabIllustration](../components/TabIllustration/README.md).

## Story pictures

The pictures under "How it works" on a part page tell one sentence a prospect reads in two seconds, with no caption and
no labels (Seenu, 2026-10-27; the "Ask nobody" picture on Task tracking is the reference).

1. Write the prospect's question in their words. "Where are the Lakeview ID cards?"
2. Name the feature (from the help center) and one benefit: what the owner stops doing or stops fearing.
3. Start from a situation they already know: a text from the office, a school on the calendar, a job passing between
   two people. Not from an app screen.
4. Draw cause and effect: the problem on one side, the product answering it on the other.
5. Cast it with the invented studio: the same schools and the same first names across every picture.
6. Meaning by form, never by label. A checkbox says task. A face with a first name says who. The app's own status
   words in the app's colours say when. A date tile shaped like the shoot's own says a day. No "Task", "Due" or
   "Assigned to" headers.
7. Three to eight readable elements, nothing below 13px, no grey-bar placeholders, no numbers as proof.
8. Test it cold: cover the caption and ask whether a stranger says the sentence from step 1.
9. Bring three ideas, each pairing the feature with a different benefit, and say which to ship.
10. The phone version tells the same story in one column.

Tried and rejected: imitation app screens full of 11px text, abstract grey bars with one readable thing, labels added
to a picture that did not read, dates where the app shows a due status, motion added to rescue a still that failed.

## Screenshot fragments

Screenshots appear as fragments, not full app windows ([ScreenshotFrame](../components/ScreenshotFrame/README.md)).

- Crop to the one thing the section claims. If it needs a caption to be understood, the crop is too wide.
- No browser chrome and no shadow. A 1px `line` border and `radius-lg`, bleeding off one edge of its container ([ADR 0011](adr/0011-fragments-without-shadow.md)).
- One fragment per section. Light theme only, captured at 2x, rendered at half size.
- Never recoloured to match the site; they are the only place with more colour.
- Keep one demo account and one fake season across every capture.
- Never real client or student data, and never blurred real data.

## Motion in product images

Small looping moments inside product images, never decoration, off entirely when the visitor's system asks for reduced
motion.
