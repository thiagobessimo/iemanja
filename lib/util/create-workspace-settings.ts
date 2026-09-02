import type { TILabCustomizations, TILabNames } from './types.ts'

// The repo's own .vscode/settings.json, written wholesale.
export const createWorkspaceSettings = (names: TILabNames, customizations: TILabCustomizations) => ({
  'workbench.colorTheme': names.dark,
  'workbench.preferredDarkColorTheme': names.dark,
  'workbench.preferredLightColorTheme': names.light,
  'workbench.colorCustomizations': customizations,
})
