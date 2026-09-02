import type { TIOKLCH } from './types.ts'

export const parseOKLCH = (seed: string): TIOKLCH => {
  const match = seed.match(/oklch\(([\d.]+)%\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*[\d.]+)?\)/)
  if (!match) throw new Error(`Invalid OKLCH colour: ${seed}`)
  return { l: Number(match[1]), c: Number(match[2]), h: Number(match[3]) }
}
