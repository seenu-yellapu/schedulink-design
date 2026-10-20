// Color math for the token build: sRGB <-> OKLCH and WCAG 2.2 contrast. No dependencies.
// OKLab matrices are Bjorn Ottosson's published constants (https://bottosson.github.io/posts/oklab/).

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toGamma = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

export function hexToRgb(hex) {
  let h = hex.trim().replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new Error(`not a 6-digit hex color: ${hex}`);
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
}

export function rgbToHex(rgb) {
  return '#' + rgb.map((c) => Math.round(clamp01(c) * 255).toString(16).padStart(2, '0')).join('');
}

function linearToOklab([r, g, b]) {
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

function oklabToLinear([L, a, b]) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

export function hexToOklch(hex) {
  const [L, a, b] = linearToOklab(hexToRgb(hex).map(toLinear));
  const C = Math.hypot(a, b);
  const h = ((Math.atan2(b, a) * 180) / Math.PI + 360) % 360;
  return { L, C, h };
}

const inGamut = (lin) => lin.every((c) => c >= -1e-4 && c <= 1 + 1e-4);

// OKLCH to hex. Out-of-gamut colors keep lightness and hue and lose chroma until they fit.
export function oklchToHex(L, C, h) {
  const rad = (h * Math.PI) / 180;
  let c = C;
  let lin = oklabToLinear([L, c * Math.cos(rad), c * Math.sin(rad)]);
  for (let i = 0; i < 60 && !inGamut(lin); i++) {
    c *= 0.97;
    lin = oklabToLinear([L, c * Math.cos(rad), c * Math.sin(rad)]);
  }
  return rgbToHex(lin.map((x) => toGamma(clamp01(x))));
}

export function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

// Composite a translucent rgba() over an opaque hex ground, for checks on shadows and overlays.
export function over(rgbaHex, alpha, groundHex) {
  const f = hexToRgb(rgbaHex), g = hexToRgb(groundHex);
  return rgbToHex(f.map((c, i) => c * alpha + g[i] * (1 - alpha)));
}

export const fmtOklch = ({ L, C, h }) => `oklch(${(L * 100).toFixed(1)}% ${C.toFixed(3)} ${h.toFixed(1)})`;
