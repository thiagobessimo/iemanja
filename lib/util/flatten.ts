import { composite } from './composite.ts'

// Flatten a theme value (#rrggbb, #rrggbbaa, or #0000) to an opaque hex over the given
// ground. Fully transparent values return undefined.
export const flatten = (hex: string, ground: string): string | undefined => {
  if (hex === '#0000') return undefined
  if (hex.length === 9) {
    const alpha = parseInt(hex.slice(7, 9), 16) / 255
    if (alpha === 0) return undefined
    return composite(hex.slice(0, 7), alpha, ground)
  }
  return hex
}
