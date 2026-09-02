// One channel of a #rrggbb string as 0..1. Offset is 1, 3, or 5.
export const hexChannel = (hex: string, offset: number): number => parseInt(hex.slice(offset, offset + 2), 16) / 255
