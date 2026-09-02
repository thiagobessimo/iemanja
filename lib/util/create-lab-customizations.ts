import type { TILabCustomizations, TILabNames, TIVSTheme } from './types.ts'

// The two scoped blocks, keyed by lab theme name.
export const createLabCustomizations = (names: TILabNames, dark: TIVSTheme, light: TIVSTheme): TILabCustomizations => ({
  [`[${names.dark}]`]: dark.colors,
  [`[${names.light}]`]: light.colors,
})
