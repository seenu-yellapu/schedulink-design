# 10. Components

Ten components, carried over from the ScheduLink Marketing design system with their guidelines unchanged. Each folder
holds a `README.md` (guidelines) and a `preview.html` (a fragment rendered with the tokens in the specimen).

| Component | What it is | Used on |
|---|---|---|
| [Button](../components/Button/README.md) | Primary, secondary and quiet calls to action | Everywhere |
| [SectionHeader](../components/SectionHeader/README.md) | Tag, heading and intro that open a section | Every section |
| [FeatureCard](../components/FeatureCard/README.md) | A card with an icon plate, title and body | Feature pages |
| [BenefitSymbol](../components/BenefitSymbol/README.md) | Line icon on a tile with a coloured badge | Benefits row |
| [ProductIllustration](../components/ProductIllustration/README.md) | The hero: a studio's day in three columns | Homepage hero |
| [IllustrationParts](../components/IllustrationParts/README.md) | The parts the hero is built from | Feature heroes |
| [TabIllustration](../components/TabIllustration/README.md) | Simplified true views of real screens | Platform tabs |
| [ScreenshotFrame](../components/ScreenshotFrame/README.md) | How a cropped fragment sits on the page | Feature pages |
| [Logo](../components/Logo/README.md) | The wordmark and icon in use | Header, footer |
| Cover | The cover card of the design system | The Claude artifact only |

Previews are fragments: no `<html>` or `<head>`. They rely on `tokens/build/globals.css` and the three Google Fonts
being loaded around them, which the specimen and the Claude design system both do. A preview refers to repo files by
relative path (`../../brand/logo/wordmark-blue.png`).

Guidelines say "part", never "module", as [11 Content](11-content.md) asks (Seenu, 2026-10-20).
