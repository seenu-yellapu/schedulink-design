# ScreenshotFrame

How product screenshots appear on the site. They are fragments, not full app windows: one idea per shot, cropped tight, with no browser chrome.

Why fragments. A full screenshot of a dense app at 40 percent scale proves nothing and reads as clutter, which is the opposite of what this system is for. A cropped detail of the one thing the section claims (the conflict flag, the reminder history, the week being published) is readable at a glance and reads as a piece of something larger.

Guidelines:

- Crop to the smallest region that proves the claim. Usually a few rows, a single panel or one card. If a caption is needed to explain what you are looking at, the crop is too wide.
- `radius-lg` corners, a 1px `line` border, no shadow, no browser bar, no traffic-light dots, no URL.
- Let the fragment bleed off one edge of its container so it reads as a detail rather than a complete page. Never tilt it, never add perspective, never float a phone over it.
- One fragment per section. Two side by side only when the section is explicitly a before and after.
- Sit it on `surface-sunken` when the surrounding section is white, and on `surface` when the section is sunken.
- Capture at 2x and render at half size. Light theme only.
- Demo data must be fictional: invented schools, students, leagues and contacts. Never real client data, never blurred real data.
- Optional caption underneath in `caption` style, `ink-muted`, naming the moment: "Publishing a week of assignments", not "The scheduling screen".
