// Every type in lib/, in one place.

// ----- Modes and luminance -----

export type TIMode = 'dark' | 'light'

// The eleven ramp steps. l500 is the seed.
export type TILuminance = 'l050' | 'l100' | 'l200' | 'l300' | 'l400' | 'l500' | 'l600' | 'l700' | 'l800' | 'l900' | 'l950'

export type TIRamp = { [L in TILuminance]: string }

// ----- Colour spaces -----

export type TIOKLCH = { l: number; c: number; h: number }

export type TIRGB = { r: number; g: number; b: number }

// ----- The channel language -----

// `color` is a hue, a role, or a semantic name. l-values are absolute; r-values are authored
// in the anchor mode and mirrored across l500 in the other. `deactivate` drops the key.
export type TIChannel = {
  color: string
  luminance?: string
  transparency?: number
  deactivate?: boolean
}

// A per-mode divergence: two complete channels, l-values only.
export type TISplit = { dark: TIChannel; light: TIChannel }

export type TILeaf = TIChannel | TISplit

// A syntax token: a leaf plus font flags. The colour is optional, so a rule that sets only
// a style is a token too.
export type TIToken = {
  color?: TILeaf
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
}

// ----- Blocks -----

// A block maps editor keys to leaves.
export type TIBlock = { [key: string]: TILeaf }

// A token block maps rule names to a scope list and a token. An entry with an empty scope
// is the default rule: it renders without a name or scope.
export type TITokenRule = { scope: string | string[]; token: TIToken }
export type TITokenBlock = { [name: string]: TITokenRule }

// A style block maps a key (a semantic token selector, or a Zed syntax key) to a token.
export type TIStyleBlock = { [key: string]: TIToken }

// ----- Rendered themes -----

export type TITokenSettings = { foreground?: string; fontStyle?: string }

export type TIVSTheme = {
  name: string
  type: TIMode
  semanticHighlighting: boolean
  colors: { [key: string]: string }
  tokenColors: { name?: string; scope?: string | string[]; settings: TITokenSettings }[]
  semanticTokenColors: { enabled: boolean; rules: { [selector: string]: string } }
}

export type TIZedSyntaxEntry = { color?: string; font_weight?: number; font_style?: string }

export type TIZedTheme = {
  name: string
  appearance: TIMode
  style: { [key: string]: unknown; syntax: { [key: string]: TIZedSyntaxEntry } }
}

// ----- The generator -----

export type TIConfig = {
  author: string
  name: string //                                                             Display name, may be accented.
  fileName: string //                                                         On-disk name, ASCII only: macOS stores filenames NFD, git stores them NFC.
  dark: {
    name: string
    fileName: string
  }
  light: {
    name: string
    fileName: string
  }
  // Lab themes paint every UI key with a test colour.
  darkLab: {
    name: string
    fileName: string
  }
  lightLab: {
    name: string
    fileName: string
  }
  // Home-relative. The extension folders get `<publisher>.<name>/themes` appended.
  folders: {
    positron: string
    vscode: string
    zed: string
  }
  files: {
    vscodeSettings: string
  }
  // none: no lab settings. local: the repo's .vscode/settings.json. global: that and the
  // generated block in the user's own VS Code settings.json.
  lab: 'none' | 'local' | 'global'
}

// The fields of package.json the generator reads.
export type TIPackage = { name: string; publisher: string }

// The lab theme names, as VS Code scopes them in settings: `[Iemanjá Lab]`.
export type TILabNames = { dark: string; light: string }

// workbench.colorCustomizations, keyed by scoped lab theme name.
export type TILabCustomizations = { [scopedName: string]: { [key: string]: string } }

// ----- Contrast -----

export type TIContrastFloors = { text: number; ui: number }

export type TIContrastRow = {
  theme: string
  kind: string
  key: string
  foreground: string
  ground: string
  groundKey: string
  ratio: number
  floor: number
}
