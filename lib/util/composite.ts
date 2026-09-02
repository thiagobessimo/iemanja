import { hexChannel } from './hex-channel.ts'

// Composite a colour with alpha over an opaque ground.
export const composite = (hex: string, alpha: number, ground: string): string => {
  const mix = (offset: number) => {
    const top = hexChannel(hex, offset)
    const bottom = hexChannel(ground, offset)
    return Math.round((top * alpha + bottom * (1 - alpha)) * 255)
      .toString(16)
      .padStart(2, '0')
  }
  return `#${mix(1)}${mix(3)}${mix(5)}`
}
