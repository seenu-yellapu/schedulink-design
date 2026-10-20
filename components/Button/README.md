# Button

The site's calls to action, in three weights: primary for Schedule a Demo, secondary for the trial, and quiet for in-page links like "See how Forms works".

Guidelines:

- One primary button per screenful. The nav primary and the hero primary both being solid blue is fine because they are never at rest in view together; two solid blues side by side is not.
- Primary is `brand` fill with `on-brand` text, `radius-md`, `space-3` vertical and `space-5` horizontal padding. Hover moves the fill to `brand-strong`. No shadow.
- Secondary is a `line-strong` hairline with `ink` text on the current ground. Use it beside a primary, never alone as the only CTA in a section.
- Quiet is `brand-strong` text with a chevron and no border. It is a link, so it gets no button padding.
- Focus ring: 2px `line-strong`, offset 2px, on every variant.
- Label in `ui` style. Sentence case, verb first, under four words. "Schedule a demo", not "Learn more about how it works".
- The consumer supplies the href and any analytics attributes. This component is styling only.
