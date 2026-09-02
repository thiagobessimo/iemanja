import type { TIVSTheme } from './types.ts'

// The real theme with every UI colour replaced by the test colour. tokenColors stay real.
export const createLabTheme = (name: string, theme: TIVSTheme, testColor: string): TIVSTheme => ({
  ...theme,
  name,
  colors: Object.fromEntries(Object.keys(theme.colors).map((key) => [key, testColor])),
})
