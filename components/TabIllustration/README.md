# TabIllustration

The picture beside each platform tab: an almost-true, simplified view of the real screen in ScheduLink, drawn in the site's style with fictional data. Approved examples: Photoshoot management (Picture Day), Task tracking (Student ID Cards), Photographer scheduling (the week of October 12), Client relationships (Lakeview Elementary School) and Email and form automation (Picture Day's emails and forms).

## The rule

Almost true. Every section, label, field and status shown exists in the app; the picture only simplifies. Never draw a feature, field or state the app does not have.

## One size for every tab

- **Desktop:** 760 by 470, fixed. The white card clips anything that does not fit, so content is chosen to fit, never squeezed.
- **Phone:** full width (342 at a 390 screen) by 560, with a fade over the last 14% so the picture reads as continuing.
- Tabs without a picture yet show a placeholder at the same size, so switching tabs never makes the section jump.

## A part that is not live yet

Online booking is not live, so its tab shows a placeholder at the same size: the same frame, a grey header with the part's name, two columns of grey skeleton rows, and a white "Coming soon" label in the middle. No invented screen. When the part ships, it gets a real picture built like the others.

## Shared anatomy

Every tab picture uses the same three layers, so a visitor who has read one can read them all.

1. **Header, about 10% abstract.** A 54px tile on the left, the record's name in Poppins 600 20px, then one line of grey meta with small grey icons (time, client, location or linked photoshoot). Links are plain grey text, never underlined. A photoshoot uses a date tile (month over day, the one abstraction that makes it read as an event); a task uses a blue tile with a tick-box icon. An optional pill sits on the right, for example "Due in 2 days".
2. **Four labelled details.** A grid of four cells between two hairlines: grey label 11.5px over a 600-weight value 14px. Uses the app's real fields. Two by two on phones.
3. **Two columns of sections.** Equal columns 36px apart with a hairline between them. Each section has its title above its rows (Poppins 600 15px). Each row: status icon, a 600-weight label, and grey meta on the right (a date, a role, or a face and date). After the named rows, grey placeholder bars give breathing room. On phones the columns stack and the fade cuts the rest.

## Status in record pictures: by icon, not by word

| Part | Done | In progress or scheduled | Not started |
|---|---|---|---|
| Tasks and steps | Green filled circle with a white tick | Blue half-filled circle | Empty grey ring |
| Emails | Envelope with a green tick badge | Envelope with a blue clock badge | Grey envelope |
| Photographers | Face with a green tick badge (accepted) | Face with a blue clock badge (pending) | none shown |

The grey date on each row explains the icon without words: a tick with a past date reads as done or sent, a clock with a coming date reads as scheduled.

## Status in words: emails and forms

The Email and form automation picture writes each status as a word and date on the right of the row, because the dates are the point (on dates set from the photoshoot): Opened and Delivered for emails, Submitted for forms in green; Sent in blue (the app's colour for a form that has gone out and is waiting); Sending in grey for anything scheduled. Each row's second line says who it goes to, as a person and their role, because emails and forms go to roles. Opened is shown at the owner's request; confirm the app tracks opens before launch.

## The week picture (Photographer scheduling): status in words

The scheduling tab shows the app's Week view, so its body is a week grid instead of two columns. Same frame, size and header (date tile with the week's first day, "Week view", and a "Published" pill with a green tick on the right).

- **Rows:** one per photographer, face, name and role in grey under it (Photographer, Assistant). A last row with a face and a grey bar for breathing room.
- **Columns:** Monday to Friday only; weekends are cropped.
- **Cards:** two lines, always the same height. Line one is the photoshoot name; line two is the status in words with an icon: "✓ Accepted" in green with a green left stripe, or "Waiting" with a clock in amber (`#9A6406` text, `#D9961A` stripe). Most cards accepted, a few waiting. No school name on the card; the photoshoot picture already shows it. No corner badges: the owner found ticks without words meaningless here.
- **Time off:** the cell is tinted `#FCF1F1` with a red dot and the words "Time off".
- **Left out:** the green available dots (everyone is available by default, so a blank cell already says it) and clash warnings.
- **Phone:** the grid starts on Tuesday so a Waiting card is visible, with a fade on the right and at the bottom.

## Content rules

- **School pictures first.** School picture day is the biggest market, so pictures use it: Lakeview Elementary School, Picture Day on October 14, 8:00 AM, Gym.
- **One fictional world across tabs.** The same school and the same team recur (S. Lee, photographer; J. Ortiz, assistant), so the tabs show the parts sharing clients and staff. Do not repeat the same record on every tab.
- **Dates must agree.** Each picture is set at one moment and every status matches it. Photoshoot: a few days before Picture Day, so Confirm details is done, Pack kits is in progress and the reminder is still scheduled. Task: two days before its due date. Scheduling: the week of Picture Day, published Oct 9, with S. Lee accepted and J. Ortiz still waiting for Lakeview, as in the photoshoot picture.
- **Steps only show who and when once started.** A step that has not started has no face or date.
- People are shown by initial and surname with their role in grey, never by role alone.
- Client contacts get a plain person icon, not an illustrated face: faces are for the studio's own team. A contact's role (what they do for the studio, which decides their emails) is a small tag; Primary is light blue, the rest outlined grey.
- Fewer rows with space beat every row crammed in. Two or three named rows per section, then a placeholder bar.
- Give the wrapper `role="img"` and an `aria-label` that says what it shows.

## The two approved pictures

| Tab | Header | Details | Left column | Right column |
|---|---|---|---|---|
| Photoshoot management | Picture Day, date tile Oct 14, 8:00 AM, Lakeview Elementary School, Gym | Setup time 7:30 AM, Background Blue screen, Expected count 420, Kits needed 2 | Tasks; Emails | Photographers; Attachments |
| Task tracking | Student ID Cards, linked to Picture Day and Lakeview Elementary School, "Due in 2 days" | Type Deliverables, Assigned to S. Lee, Starts after Edit images, Due Oct 21 | Steps | Card details (custom fields: ID design, Cards to print 420, Tracking number); Attachments |
| Photographer scheduling | October 12 to 16, Week view, "Published" | none (the week grid replaces them) | Week grid: S. Lee, J. Ortiz, M. Chen, K. Patel | |
| Email and form automation | Picture Day, the same photoshoot header (no details grid) | none | Emails: name, "To R. Diaz · Primary" in grey, status in words on the right: Opened Sep 3, Delivered Oct 7 (green), Sending Oct 13 and Oct 28 (grey, clock badge) | Forms, same row shape: Submitted Sep 18 and Sep 24 (green), Sent Oct 9 (blue, arrow badge), Sending Oct 20 (grey) |
| Client relationships | Lakeview Elementary School, blue building tile, type Elementary School | School district Lakeview District, Address 4200 Lakeview Rd, Status Active, Phone (604) 555-0148 | Contacts (name, job title in grey, role tag: Primary in light blue, others outlined); Photoshoots (Picture Day Oct 14, Retake Day Nov 18, Spring Portraits Apr 8) | Notes (author face, note text, date; pinned shown with a pin icon); Attachments |
