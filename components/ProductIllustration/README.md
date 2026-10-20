# ProductIllustration

The approved homepage hero image: one calm card showing a studio's day across three modules, Photoshoots, Tasks and Photographers. Use this pattern, and the parts in IllustrationParts, for any product illustration on the site, so every visual looks like the same product.

What it says. The H2 promises that ScheduLink handles your clients, photographers and studio admin. The card shows exactly those three, side by side, on one day, all handled.

Structure, outside in:

- **Frame (soft rim):** an 8px rim in `#F3F3F5` with a 1px `#E6E6E9` border and 24px corners, around a white card with a 1px `#E3E3E7` border and 17px corners.
- **Date strip:** the rim grows a 36px strip along the top holding the date in 13px text: a small grey calendar icon, **Today** in semibold, then "Tuesday, October 14" in `#73767B`. The date never takes a row inside the card.
- **Three columns:** Photoshoots, Tasks, Photographers, in that order, divided by 1px `#ECECEF` lines with 24px gaps. Widths roughly 0.92 : 1.13 : 1.1 so the longest school names and pills fit.
- **Column header:** a 42px soft tile (pale blue `#EEF2FC`, 1px `#DBE4FA` border, blue icon) and the title in Poppins 600 at 22px, with a 2px `#DCDDE1` line under the full width.
- **Rows:** 17px semibold names, 14.5px `#73767B` detail, 1px `#F2F2F4` dividers, 14px vertical padding.
- **Detailed, then simplified:** the first two rows of each column are fully detailed (Tasks shows three, so all three statuses appear). Every later row keeps its name, while its detail line and status become plain placeholder shapes in `#ECECF0`.
- **Fade:** the card runs off the bottom of the hero, faded with a mask from 88 percent to transparent. Keep the fade short.

On phones: the three sections stack inside the same card, in the same order, Photoshoots, then Tasks, then Photographers, each with its two detailed rows and no simplified rows. The date strip stays on top of the rim. Sizes step down: 32px tiles, 17px titles, 15px names, 13px detail, 34px faces, and 100 by 40px shoot cards. No fade on phones; the card ends cleanly.

Content rules:

- **Photoshoots:** event name first ("Picture Day"), then the full school name with a building icon. No status, no date (the strip covers it).
- **Tasks:** name, school, and a status pill. Time order: Overdue by 1 day (red), Due today (purple), Due in 2 days (blue).
- **Photographers:** illustrated face, name, role underneath (Photographer, Assistant or Poser), and a shoot card on the right with the event and start time. Every row has the same shoot card, detailed or simplified.
- All data is fictional. Never real schools, students, staff or clients, and never real photos of people.

Do not: add a greeting or a "Today" row inside the card, add a top bar or logo to the frame, nest cards inside cards, tilt or add 3D, or add a fourth column. A new module becomes a new illustration in the same style, not a fourth column here.
