// WCAG contrast ratio between two opaque hex colours.

import { hexChannel } from './hex-channel.ts'

const linearize = (channel: number): number => (channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4))

const relativeLuminance = (hex: string): number => {
  const r = linearize(hexChannel(hex, 1))
  const g = linearize(hexChannel(hex, 3))
  const b = linearize(hexChannel(hex, 5))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export const contrastRatio = (a: string, b: string): number => {
  const la = relativeLuminance(a)
  const lb = relativeLuminance(b)
  const [hi, lo] = la > lb ? [la, lb] : [lb, la]
  return (hi + 0.05) / (lo + 0.05)
}
