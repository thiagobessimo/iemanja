import { ANCHOR, ROLES, palette } from '../palette.ts'
import { buildRamp } from './build-ramp.ts'
import { MIRROR } from './luminance.ts'
import type { TIChannel, TILuminance, TIMode, TIRamp } from './types.ts'

// Every hue's ramp, built once.
const RAMPS: { [hue: string]: TIRamp } = Object.fromEntries(Object.entries(palette).map(([hue, seed]) => [hue, buildRamp(seed)]))

export const resolveChannel = (channel: TIChannel, mode: TIMode): string => {
  const hue = ROLES[mode][channel.color] ?? channel.color
  const ramp = RAMPS[hue]
  if (!ramp) throw new Error(`Unknown hue: ${hue}`)

  const luminance = channel.luminance ?? 'r500'
  const step: TILuminance = luminance.startsWith('r')
    ? mode === ANCHOR
      ? (`l${luminance.slice(1)}` as TILuminance)
      : MIRROR[`l${luminance.slice(1)}` as TILuminance]
    : (luminance as TILuminance)

  const base = ramp[step]
  if (!base) throw new Error(`Unknown luminance: ${luminance}`)

  const transparency = channel.transparency ?? 1
  if (transparency === 0) return '#0000'
  if (transparency === 1) return base
  const alpha = Math.round(Math.min(Math.max(transparency, 0), 1) * 255)
    .toString(16)
    .padStart(2, '0')
  return `${base}${alpha}`
}
