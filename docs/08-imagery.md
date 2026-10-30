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
no labels (Seenu, 2026-10-27). Reference pictures on Task tracking: "Ask nobody" (block 02, a text asking where the ID
cards are, beside the checklist that already answers it) and "Priya's week" (block 03, the people filter choosing Priya
and her tasks across five schools filling the list).

1. Write the prospect's question in their words. "Where are the Lakeview ID cards?" "What is everyone on, across every job?"
2. Name the feature, its controls and one benefit. Read the help center page and list what the user can actually do:
   buttons, filters, views, triggers. Each control is a possible concept. The benefit is what the owner stops doing or
   stops fearing. No benefit, no picture yet.
3. Pick three concept sources, all different, and none the same page has already used:

   | Source | What it shows | Used |
   |---|---|---|
   | The moment | A message or question the owner recognises, and the product answering it | Ask nobody |
   | The control in action | One of the feature's own controls doing its job, a visible choice and a visible result | Priya's week |
   | Cause and effect | What the owner does on one side, what the product makes of it on the other | Book the shoot, four tasks appear |
   | Scale with one lifted out | Many jobs, people or schools at once, calm, and the one that needs attention stands out | |
   | The hand-off | One job passing between people, and where it is now | |
   | The order of things | Items placed in time, before and after a day that matters | |
   | Scattered to one place | The old way on one side, the product on the other. Used once on the site already, so last resort | Homepage |

4. Start from a situation they already know: a text from the office, a school on the calendar, a Monday huddle. Not
   from an app screen.
5. Give the picture a verb. A question being answered, a name being chosen, tasks arriving. A static table has no verb.
6. Cast it with the invented studio: the same schools and the same first names across every picture.
7. Meaning by form, never by label. A checkbox says task. A face with a first name says who. The app's own status
   words in the app's colours say when. A date tile shaped like the shoot's own says a day. No "Task", "Due" or
   "Assigned to" headers.
8. Three to eight readable elements, nothing below 13px, every text colour at 7:1, no grey-bar placeholders, no numbers as proof. If a control
   has several parts (three filter groups, say), show one open and the rest folded to a line.
9. Test it cold: cover the caption and ask whether a stranger says the sentence from step 1.
10. Bring three ideas, pick one, say why. Seenu judges. His yes is a direction, not the finish: expect rounds on
    layout after it, and make each change exactly as asked.
11. The phone version tells the same story in one column.

Tried and rejected: imitation app screens full of 11px text, abstract grey bars with one readable thing, labels added
to a picture that did not read, dates where the app shows a due status, motion added to rescue a still that failed,
the concept that just won reused on the next block, a dropdown open over the list it filters.

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
