# Agents

Read [CLAUDE.md](CLAUDE.md) first; its rules apply to every agent.

- Never approve or merge a pull request, push to `main`, create a tag, or publish to the Claude design system. Seenu
  does those.
- Never edit, unless Seenu asks in the task: `.github/**`, `AGENTS.md`, `CLAUDE.md`, `.claude/**`,
  `tokens/brand.tokens.json`, an Accepted ADR, or the `KNOWN` contrast list in `scripts/tokens.mjs`.
- Never edit a generated file; change its source and run `node scripts/tokens.mjs`.
- Before pushing: `node scripts/tokens.mjs`, then `node scripts/tokens.mjs --check`, then open `specimen/index.html`
  and look at what changed.
