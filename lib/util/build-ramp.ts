// Eleven luminance steps symmetric about l500: golden-ratio-eased lightness scaled by the
// headroom it moves into, a parabolic chroma drop, and a linear hue rotation outward.

import { clamp } from './clamp.ts'
import { LUMINANCES } from './luminance.ts'
import { oklchToHex } from './oklch-to-hex.ts'
import { parseOKLCH } from './parse-oklch.ts'
import type { TILuminance, TIOKLCH, TIRamp } from './types.ts'

// Signed step distance from the l500 pivot. Positive moves towards white.
const LUMINANCE_STEPS: { [L in TILuminance]: number } = {
  l050: 4.5,
  l100: 4,
  l200: 3,
  l300: 2,
  l400: 1,
  l500: 0,
  l600: -1,
  l700: -2,
  l800: -3,
  l900: -4,
  l950: -4.5,
}

const RAMP = {
  luminance: 16.18 * 3,
  chroma: 0.1618 * 3,
  hue: 1.618 * 3,
}

const EASE_EXPONENT = 1.618

const step = (seed: TIOKLCH, luminance: TILuminance): TIOKLCH => {
  const t = LUMINANCE_STEPS[luminance] / 5

  const tEased = t * Math.pow(Math.abs(t), EASE_EXPONENT)
  const spaceFactor = t > 0 ? (100 - seed.l) / 50 : seed.l / 50
  const l = clamp(seed.l + tEased * RAMP.luminance * spaceFactor, 0, 100)

  const chromaFactor = 1 - Math.pow(Math.abs(t), EASE_EXPONENT) * RAMP.chroma
  const c = clamp(seed.c * chromaFactor, 0, 0.4)

  const h = (((seed.h + t * RAMP.hue) % 360) + 360) % 360

  return { l, c, h }
}

export const buildRamp = (seed: string): TIRamp => {
  const parsed = parseOKLCH(seed)
  return Object.fromEntries(LUMINANCES.map((luminance) => [luminance, oklchToHex(step(parsed, luminance))])) as TIRamp
}
