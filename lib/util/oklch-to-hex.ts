// OKLCH in, sRGB hex out. Out-of-gamut colours are mapped back by reducing chroma, not by
// clamping channels.

import { clamp } from './clamp.ts'
import type { TIOKLCH, TIRGB } from './types.ts'

// oklab -> linear sRGB, standard matrices (Björn Ottosson).
const oklchToLinearSRGB = ({ l, c, h }: TIOKLCH): TIRGB => {
  const L = l / 100
  const hr = (h * Math.PI) / 180
  const a = c * Math.cos(hr)
  const b = c * Math.sin(hr)

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b
  const s_ = L - 0.0894841775 * a - 1.291485548 * b

  const l3 = l_ ** 3
  const m3 = m_ ** 3
  const s3 = s_ ** 3

  return {
    r: 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3,
    g: -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3,
    b: -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3,
  }
}

const inGamut = ({ r, g, b }: TIRGB): boolean => {
  const eps = 1e-6
  return r >= -eps && r <= 1 + eps && g >= -eps && g <= 1 + eps && b >= -eps && b <= 1 + eps
}

const encode = (channel: number): number => {
  const v = clamp(channel, 0, 1)
  return v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055
}

const toHex = (rgb: TIRGB): string => {
  const byte = (channel: number) =>
    Math.round(encode(channel) * 255)
      .toString(16)
      .padStart(2, '0')
  return `#${byte(rgb.r)}${byte(rgb.g)}${byte(rgb.b)}`
}

// Bisect chroma down until the colour fits sRGB, holding lightness and hue. `low` always
// fits, `high` never does; after the last halving `low` is the answer.
const fitChroma = (colour: TIOKLCH, low: number, high: number, halvings: number): number => {
  if (halvings === 0) return low
  const mid = (low + high) / 2
  return inGamut(oklchToLinearSRGB({ ...colour, c: mid }))
    ? fitChroma(colour, mid, high, halvings - 1)
    : fitChroma(colour, low, mid, halvings - 1)
}

export const oklchToHex = (colour: TIOKLCH): string => {
  const rgb = oklchToLinearSRGB(colour)
  if (inGamut(rgb)) return toHex(rgb)
  return toHex(oklchToLinearSRGB({ ...colour, c: fitChroma(colour, 0, colour.c, 32) }))
}
