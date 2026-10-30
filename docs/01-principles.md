# 01. Principles

Eight rules that decide arguments. When two of them conflict, the one higher in
[the tie-break order](#when-principles-conflict) wins.

## 1. Calm beats loud

Simple and plain: Apple-clean with a little fun. A grey page, white cards, big type and generous space.

- Section padding of 80px keeps each section to one laptop screen ([05 Layout](05-layout.md#the-page)).
- Headings are short and literal. Size and weight carry hierarchy, not colour.
- A little fun lives in the product pictures (faces, a date tile, a small loop), never in the page chrome.

Watch for: corporate and cold, playful and cheap, busy, looking like everyone else.
Decision: [ADR 0001](adr/0001-marketing-not-product.md).

## 2. A platform, not a product

ScheduLink runs the whole studio, like HubSpot or Procore. It is a set of parts that work together, each useful on its
own, all sharing the same clients, staff and data.

- The homepage shows the parts as a set (the platform tabs), not as step 1, step 2, step 3.
- Every section holds for any volume studio: schools, sports, grads, dance and seniors.
- A new part is a new tab, a new page from the part page template and a new footer link. Nothing else changes
  ([15 Patterns](15-patterns.md#part-page)).

Watch for: a linear process, a single photoshoot, a single season, a section that breaks when an eighth part arrives.

## 3. One idea per screen

Every section makes one point, with one heading, one line and one picture.

- A section fits one laptop screen at full size: about 750px tall at 1440px wide.
- An FAQ shows its questions with the answers closed.
- Two ideas on one screen means one of them moves or goes, as the "Part of the whole studio" section did.

Watch for: two headings in one section, side-by-side ideas, a picture that needs a caption.

## 4. One colour carries meaning

Blue only where the visitor acts or the brand appears. No second accent.

- Buttons, links, the selected tab, section tags, the badge on a benefit symbol ([03 Color](03-color.md#where-blue-is-allowed)).
- Urgency is weight, position and words, never a new hue.

Watch for: blue icons outside product pieces, tinted decoration, a second accent.
Decision: [ADR 0002](adr/0002-near-monochrome.md).

## 5. Say only what is true

Proof and specificity beat a clever headline. Every claim matches the help center.

- The app flags scheduling conflicts; it does not prevent them, so the site says flags.
- Permissions are per area, not per client.
- Numbers are the published ones: reminders every 3 days up to 5 times, live in 1 to 2 weeks, $10 per active employee
  per month, a 30-day trial with no card.
- Consolidation is said concretely: open a picture day and the school, schedule, photographers, roster form, emails and
  tasks are on that one photoshoot.

Watch for: "all in one place", "unify", "streamline", "seamless", "everything your studio needs", and any line
Airstudio could run on its homepage tomorrow ([11 Content](11-content.md)).

## 6. Answer the fear of switching

Studios lose deals to a stack of tools, and moving off several tools means several migrations. The fear is the
objection, not the price.

- Switching has its own homepage section and its own page, not a line in an FAQ.
- Each part page has one question on switching in its Questions section.
- The answers are concrete: who moves the data, how long it takes, what happens mid-season, who to ask.

Watch for: "easy to switch" with nothing behind it, the move tucked into a footnote.

## 7. The page is flat; the product has depth

The product is the proof, so the pictures carry the detail and the page stays quiet.

- No shadows on sections, cards, buttons or panels. Structure comes from hairlines and tinted panels.
- Only the hero illustration gets `shadow-product`; screenshot fragments and tab pictures have none
  ([0011](adr/0011-fragments-without-shadow.md), [0012](adr/0012-tab-pictures-without-shadow.md)).
- Pictures are simplified true screens and story pictures with fictional schools and people. No stock photos, no blobs
  ([08 Imagery](08-imagery.md)).

Watch for: drop shadows, gradients, glow, frosted glass, a real client's or student's name.
Decisions: [ADR 0005](adr/0005-flat-page-product-depth.md), [ADR 0006](adr/0006-product-visuals.md).

## 8. Readable for everyone

Text clears 4.5:1 on its ground and brand text 7:1; the build checks every pair.

- Nothing below 13px in a picture, and no meaning by colour alone ([12 Accessibility](12-accessibility.md)).
- Product loops stop when the visitor asks for reduced motion ([14 Motion](14-motion.md)).

Decision: [ADR 0007](adr/0007-aa-contrast-enforced.md).

## Objections we answer

Each objection heard at the booth has a place on the site.

| Objection | The site's answer | Where |
|---|---|---|
| Moving our data means retyping it | We import it before your setup call | [Switching](15-patterns.md#switching) |
| My team will not learn another tool | Photographers get their week by email and text and answer from their dashboard | [Switching](15-patterns.md#switching) |
| We cannot change mid-season | Start with the part you need most and add the rest when ready | [Switching](15-patterns.md#switching) |
| Who helps when it breaks | The assistant inside the app, and email answered within 24 hours | [Switching](15-patterns.md#switching) |
| We already have a tool for each job | Each tool has a part that takes its place, so the move happens once | [Switching](15-patterns.md#switching) |
| It costs more than what we have | One published price per active employee, with every part included | [Pricing](15-patterns.md#pricing) |
| Is student data safe | Four plain promises and where the data lives | [Security](15-patterns.md#statement-pages) |

## When principles conflict

| Order | Principle | Why it ranks here |
|---|---|---|
| 1 | Say only what is true | A false claim costs the trust the booth earned |
| 2 | Readable for everyone | Its floors (contrast, 13px, words with colour) never give way |
| 3 | A platform, not a product | The positioning; a section that breaks it is wrong |
| 4 | Answer the fear of switching | The objection that decides the deal |
| 5 | One idea per screen | What keeps the page plain |
| 6 | The page is flat; the product has depth | The look |
| 7 | One colour carries meaning | The look |
| 8 | Calm beats loud | The first to give way, for a little fun |

## Tried and rejected

Grid strips between sections, nodes, the dark footer, the floating rounded header, black buttons, a tile pattern behind
the closing call to action, icon plates with corner dots, a statement band ("Everything scheduled. Everything
linked."), a "What is ScheduLink?" section, a problem section, the small-feature grid, a "Part of the whole studio"
section on part pages. Gradients, glassmorphism and a blue-purple glow are out as well.
