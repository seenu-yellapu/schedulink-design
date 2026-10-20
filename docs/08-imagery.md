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

## Screenshot fragments

Screenshots appear as fragments, not full app windows ([ScreenshotFrame](../components/ScreenshotFrame/README.md)).

- Crop to the one thing the section claims. If it needs a caption to be understood, the crop is too wide.
- No browser chrome. A 1px `line` border, `radius-lg` and `shadow-product`, bleeding off one edge of its container.
- One fragment per section. Light theme only, captured at 2x, rendered at half size.
- Never recoloured to match the site; they are the only place with more colour.
- Keep one demo account and one fake season across every capture.
- Never real client or student data, and never blurred real data.

**A conflict carried over from the source system:** the brand book gives fragments `shadow-product`; the
ScreenshotFrame guidelines say no shadow. The answer is a call for Seenu ([13 Roadmap](13-roadmap.md)).

## Motion in product images

Small looping moments inside product images, never decoration, off entirely when the visitor's system asks for reduced
motion.
