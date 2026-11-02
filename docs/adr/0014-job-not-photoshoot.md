# 0014. Job, not photoshoot

## Status

Accepted (2026-11-02).

## Context

- The site said "photoshoot" for the work a studio books, staffs and delivers. The app calls the same record an Event.
- "Photoshoot" fits a portrait session better than a school's picture day, a league's team photos or a dance recital,
  and it is long in menus and pictures. "Event" reads as a calendar entry, and schools already use it for concerts and
  games.
- Volume studio owners already talk about their work as jobs ("we have 12 jobs this week").
- Seenu, 2026-11-02: use "job" instead of "photoshoot" everywhere; say "photo job" where the reader needs to know it is
  about photography; rename the part to Job management at /job-management/.

## Decision

1. The word is **job**. "Photoshoot" and "shoot" on their own are not used.
2. Say **photo job** at the first mention on each page, and wherever nothing else says photography: search titles and
   descriptions, share text, a part page headline.
3. Say **job** after the first mention, inside product pictures (they show the app) and in the menu.
4. Put examples such as picture day or team photos near the first mention, so a reader sees what a job covers.
5. The part is **Job management**, at /job-management/. /photoshoot-management/ redirects to it.

## Consequences

- Every page, picture label and picture description on the site moved to job and photo job (site branch, 2026-11-02).
- Docs and component examples here use job; [11 Content](../11-content.md) carries the rule in its vocabulary table.
- Until the app renames Event to Job, the demo shows "Events" while the site says jobs. Whoever runs a demo says so
  once.

## Alternatives

- Keep "photoshoot": clear, but narrow for volume work and long. Not chosen.
- Use "event", the app's word: one word across app and site, but it reads as a calendar entry. Not chosen.
- "Session": already means a family's booked time slot in Online booking. Not chosen.

## Revisit when

- The app renames Event, or chooses a different word: the site and this rule follow the app.
