import type { TILuminance } from './types.ts'

export const LUMINANCES: readonly TILuminance[] = ['l050', 'l100', 'l200', 'l300', 'l400', 'l500', 'l600', 'l700', 'l800', 'l900', 'l950']

// The mirror of a step is the step at the same distance on the other side of l500.
export const MIRROR: { [L in TILuminance]: TILuminance } = {
  l050: 'l950',
  l100: 'l900',
  l200: 'l800',
  l300: 'l700',
  l400: 'l600',
  l500: 'l500',
  l600: 'l400',
  l700: 'l300',
  l800: 'l200',
  l900: 'l100',
  l950: 'l050',
}
