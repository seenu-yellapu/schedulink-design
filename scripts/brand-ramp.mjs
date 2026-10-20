// The brand family from one color (ADR 0009). One input, a 12-step ramp out, every text step searched
// until it reaches its contrast target. Usage: node scripts/brand-ramp.mjs '#2A5BD7'
import { hexToOklch, oklchToHex, contrast } from './color.mjs';
import { pathToFileURL } from 'node:url';

// Step roles (the Radix twelve-step model):
//  1-2 backgrounds, 3 element tint, 4 hover tint, 5 selected tint, 6 subtle border, 7 border, 8 strong border,
//  9 the solid (the input itself), 10 its pressed or hover state, 11 text in the brand hue, 12 the darkest.
// Lightness targets for steps 1 to 8, and chroma as a share of the input's chroma.
const TINT_L = [0.993, 0.982, 0.96, 0.938, 0.905, 0.863, 0.81, 0.734];
const TINT_C = [0.015, 0.045, 0.1, 0.18, 0.26, 0.35, 0.46, 0.63];

export const TARGETS = {
  onSolid: 4.5, // white text on the solid button: WCAG AA (ADR 0007)
  text: 7, // brand-colored text (step 11) on every ground it sits on
};

// The grounds brand text sits on. White and page-grey come from tokens/semantic.tokens.json; step 3 is added
// below because brand-strong text sits on brand-soft.
export const TEXT_GROUNDS = ['#FFFFFF', '#F3F3F4', '#F7F7F8'];

const WHITE = '#FFFFFF';

export function brandRamp(input, { grounds = TEXT_GROUNDS, targets = TARGETS } = {}) {
  const hex = input.toUpperCase();
  const { L, C, h } = hexToOklch(hex);
  const tints = TINT_L.map((l, i) => oklchToHex(l, C * TINT_C[i], h).toUpperCase());

  // Step 9 keeps the input exactly when white text clears the target on it; otherwise darken until it does.
  let solidL = L;
  let solid = hex;
  let nudged = false;
  while (contrast(WHITE, solid) < targets.onSolid && solidL > 0.2) {
    solidL -= 0.005;
    solid = oklchToHex(solidL, C, h).toUpperCase();
    nudged = true;
  }
  // Step 10 moves away from the white text, so hover never loses contrast.
  const hover = oklchToHex(solidL - 0.06, C, h).toUpperCase();

  // Step 11: the lightest value that reaches the text target on every ground, step 3 included.
  const textGrounds = [...grounds, tints[2]];
  let text = null;
  for (let l = Math.min(solidL, 0.7); l > 0.15; l -= 0.0025) {
    const cand = oklchToHex(l, C * 0.9, h).toUpperCase();
    if (textGrounds.every((g) => contrast(cand, g) >= targets.text)) { text = cand; break; }
  }
  const darkest = oklchToHex(0.27, C * 0.55, h).toUpperCase();

  const steps = [...tints, solid, hover, text, darkest];
  const checks = {
    onSolid: +contrast(WHITE, solid).toFixed(2),
    onHover: +contrast(WHITE, hover).toFixed(2),
    textWorst: +Math.min(...textGrounds.map((g) => contrast(text, g))).toFixed(2),
  };
  return { input: hex, nudged, steps, checks };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const input = process.argv[2];
  if (!input) { console.error("usage: node scripts/brand-ramp.mjs '#2A5BD7'"); process.exit(1); }
  const r = brandRamp(input);
  console.log(`${r.input}${r.nudged ? ' (darkened to reach white text at 4.5:1)' : ''}`);
  r.steps.forEach((s, i) => console.log(`  ${String(i + 1).padStart(2)}  ${s}`));
  console.log(r.checks);
}
