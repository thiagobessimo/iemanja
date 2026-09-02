// The palette. Every colour the theme is built from, declarations only.

import type { TIMode } from './util/types.ts'

// r-values are authored as seen in the dark theme; Iara mirrors them.
export const ANCHOR: TIMode = 'dark'

// One OKLCH seed per hue. The ramp derives eleven luminance steps l050–l950 from
// each; l500 is the seed itself.
export const palette = {
  // Absolute Hues
  white: 'oklch(98.5% 0.01875 268)',
  black: 'oklch(16.5% 0.025 268)',

  // Neutral Hues
  slate: 'oklch(77% 0.057 271)',
  grey: 'oklch(77% 0.036 286)',
  stone: 'oklch(80% 0.005 39)',

  // Red Hues
  red: 'oklch(56% 0.190 26)',
  brown: 'oklch(58% 0.141 33)',

  // Orange Hues
  orange: 'oklch(67% 0.209 40)',
  amber: 'oklch(72% 0.180 54)',
  yellow: 'oklch(79% 0.166 74)',

  // Green Hues
  citron: 'oklch(83% 0.164 110)',
  lime: 'oklch(77% 0.195 133)',
  green: 'oklch(74% 0.227 143)',
  emerald: 'oklch(81% 0.203 153)',

  // Light Blue Hues
  teal: 'oklch(83% 0.172 168)',
  cyan: 'oklch(81% 0.140 195)',
  azure: 'oklch(68% 0.145 238)',

  // Deep Blue Hues
  blue: 'oklch(53% 0.193 262)',
  marine: 'oklch(45% 0.242 268)',
  indigo: 'oklch(45% 0.246 278)',

  // Purple Hues
  purple: 'oklch(48% 0.242 288)',
  lavender: 'oklch(51% 0.254 299)',
  violet: 'oklch(56% 0.269 309)',

  // Pink Hues
  fuchsia: 'oklch(63% 0.270 328)',
  pink: 'oklch(62% 0.251 347)',
  rose: 'oklch(60% 0.228 11)',
} as const

export type TISeed = keyof typeof palette

// The five role colours that flip between themes.
export const ROLES: { [M in TIMode]: { [role: string]: TISeed } } = {
  dark: {
    foreground: 'white',
    midground: 'slate',
    background: 'black',
    accent: 'rose',
    special: 'azure',
  },
  light: {
    foreground: 'black',
    midground: 'stone',
    background: 'white',
    accent: 'azure',
    special: 'rose',
  },
}

// Semantic names, so meaning is declared in one place. Each leaf is the name's
// canonical channel; a declaration that diverges spreads the leaf and overrides.
export const SEMANTICS = {
  git: {
    diff: { color: 'blue', luminance: 'r300' },
    added: { color: 'emerald', luminance: 'r300' },
    renamed: { color: 'citron', luminance: 'r300' },
    modified: { color: 'yellow', luminance: 'r300' },
    conflicted: { color: 'orange', luminance: 'r300' },
    deleted: { color: 'red', luminance: 'r300' },
    ignored: { color: 'grey', luminance: 'r300' },
    untracked: { color: 'violet', luminance: 'r300' },
    sub_module: { color: 'brown', luminance: 'r300' },
  },
  status: {
    hint: { color: 'azure', luminance: 'r300' },
    info: { color: 'blue', luminance: 'r300' },
    success: { color: 'green', luminance: 'r300' },
    warning: { color: 'yellow', luminance: 'r300' },
    unresolved: { color: 'orange', luminance: 'r300' },
    error: { color: 'red', luminance: 'r300' },
    invalid: { color: 'fuchsia', luminance: 'r300' },
  },
  indent: {
    depth1: { color: 'azure', luminance: 'r400' },
    depth2: { color: 'emerald', luminance: 'r400' },
    depth3: { color: 'yellow', luminance: 'r400' },
    depth4: { color: 'orange', luminance: 'r400' },
    depth5: { color: 'pink', luminance: 'r400' },
    depth6: { color: 'purple', luminance: 'r400' },
  },
  syntax: {
    comment: { color: 'grey', luminance: 'r300' },
  },
} as const

// Shared channels for recurring UI elements, so they stay identical wherever they appear.
export const CONVENTIONS = {
  divider: {
    border: { color: 'midground', luminance: 'r400', transparency: 0.166 },
    shadow: { color: 'black', luminance: 'r300', transparency: 0.1 },
  },
} as const

export const UI = {
  global: {
    // The dotless keys and the few one-key roots that reach every component.
    base: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      disabledForeground: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
      errorForeground: { ...SEMANTICS.status.error, transparency: 1 },
      descriptionForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      iconForeground: { color: 'foreground', luminance: 'r500', transparency: 0.8 },
      focusBorder: { color: 'background', luminance: 'r500', transparency: 0 },
      contrastBorder: { color: 'background', luminance: 'r500', transparency: 0 },
      contrastActiveBorder: { color: 'background', luminance: 'r500', transparency: 0 },
      selectionBackground: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      sashHoverBorder: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      progressBarBackground: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    // The ground the floating cards of the modern layout sit on. Absolute: a surface deepens,
    // it does not flip.
    surface: {
      background: { color: 'background', luminance: 'l700', transparency: 1 },
      border: { color: 'background', luminance: 'l700', transparency: 1 },
    },
    // The window frame itself. macOS and Linux only.
    window: {
      activeBorder: { color: 'background', luminance: 'r500', transparency: 0 },
      inactiveBorder: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    scrollbar: {
      shadow: { color: 'background', luminance: 'r500', transparency: 0 },
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      slider: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
        hoverBackground: { color: 'blue', luminance: 'r300', transparency: 1 },
        activeBackground: { color: 'blue', luminance: 'r300', transparency: 0.75 },
      },
    },
  },
  editor: {
    foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    background: { color: 'background', luminance: 'r500', transparency: 1 },
    border: { color: 'background', luminance: 'l700', transparency: 1 },

    // HEADER GROUP
    editorGroupHeader: {
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      tabs: {
        background: { color: 'background', luminance: 'r300', transparency: 1 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
      },
      noTabs: {
        background: { color: 'background', luminance: 'r300', transparency: 1 },
      },
    },
    tab: {
      border: {
        base: { color: 'accent', luminance: 'r500', transparency: 0 },
        dragAndDrop: { color: 'accent', luminance: 'r500', transparency: 1 },
        lastPinned: { color: 'accent', luminance: 'r500', transparency: 0 },
      },
      selected: {
        foreground: { color: 'white', luminance: 'r500', transparency: 1 },
        background: { color: 'accent', luminance: 'r500', transparency: 1 },
        borderTop: { color: 'accent', luminance: 'r500', transparency: 0 },
      },
      hover: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'background', luminance: 'r300', transparency: 0.8 },
        border: { color: 'accent', luminance: 'r500', transparency: 0 },
      },
      active: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 0.8 },
        background: { color: 'background', luminance: 'r300', transparency: 0.6 },
        border: { color: 'accent', luminance: 'r300', transparency: 0 },
        borderTop: { color: 'accent', luminance: 'r300', transparency: 0 },
        modifiedBorder: { ...SEMANTICS.git.modified, transparency: 0 },
      },
      inactive: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 0.6 },
        background: { color: 'background', luminance: 'r300', transparency: 0 },
        modifiedBorder: { ...SEMANTICS.git.modified, transparency: 0 },
      },
      unfocused: {
        hover: {
          foreground: { color: 'foreground', luminance: 'r500', transparency: 0.6 },
          background: { color: 'background', luminance: 'r300', transparency: 0.5 },
          border: { color: 'accent', luminance: 'r500', transparency: 0 },
        },
        active: {
          foreground: { color: 'foreground', luminance: 'r500', transparency: 0.4 },
          background: { color: 'background', luminance: 'r300', transparency: 0.2 },
          border: { color: 'accent', luminance: 'r500', transparency: 0 },
          borderTop: { color: 'accent', luminance: 'r500', transparency: 0 },
          modifiedBorder: { ...SEMANTICS.git.modified, transparency: 0 },
        },
        inactive: {
          foreground: { color: 'foreground', luminance: 'r500', transparency: 0.2 },
          background: { color: 'background', luminance: 'r300', transparency: 0 },
          modifiedBorder: { ...SEMANTICS.git.modified, transparency: 0 },
        },
      },
    },
    breadcrumb: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      focusForeground: { color: 'foreground', luminance: 'r500', transparency: 0.8 },
      activeSelection: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      },
      picker: {
        background: { color: 'background', luminance: 'r500', transparency: 1 },
      },
    },
    stickyScroll: {
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      border: CONVENTIONS.divider.border,
      shadow: CONVENTIONS.divider.shadow,
      gutter: {
        background: { color: 'background', luminance: 'r500', transparency: 1 },
      },
      hover: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.125 },
      },
    },

    // GUTTER GROUP
    lineNumber: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.2 },
      activeForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      dimmedForeground: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
    },
    gutter: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foldingControl: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      },
      item: {
        glyphForeground: { color: 'blue', luminance: 'r300', transparency: 1 },
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      },
      git: {
        added: { ...SEMANTICS.git.added, luminance: 'r500', transparency: 1 },
        addedSecondary: { ...SEMANTICS.git.added, transparency: 0.9 },
        modified: { ...SEMANTICS.git.modified, luminance: 'r500', transparency: 1 },
        modifiedSecondary: { ...SEMANTICS.git.modified, transparency: 0.9 },
        deleted: { ...SEMANTICS.git.deleted, luminance: 'r500', transparency: 1 },
        deletedSecondary: { ...SEMANTICS.git.deleted, transparency: 0.9 },
      },
      comment: {
        glyph: { color: 'blue', luminance: 'r300', transparency: 1 },
        draftGlyph: { color: 'yellow', luminance: 'r300', transparency: 1 },
        unresolvedGlyph: { ...SEMANTICS.status.unresolved, transparency: 1 },
        range: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
    },
    minimap: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foregroundOpacity: { color: 'midground', luminance: 'r500', transparency: 0.8 },
      slider: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
        hoverBackground: { color: 'blue', luminance: 'r300', transparency: 1 },
        activeBackground: { color: 'blue', luminance: 'r300', transparency: 0.75 },
      },
      highlight: {
        findMatch: { color: 'blue', luminance: 'r300', transparency: 0.5 },
        selection: { color: 'blue', luminance: 'r300', transparency: 0.5 },
        selectionOccurrence: { color: 'blue', luminance: 'r300', transparency: 0.5 },
        info: { ...SEMANTICS.status.info, transparency: 1 },
        warning: { ...SEMANTICS.status.warning, transparency: 1 },
        error: { ...SEMANTICS.status.error, transparency: 1 },
        chatEdit: { color: 'emerald', luminance: 'r300', transparency: 0.25 },
      },
      gutter: {
        added: { ...SEMANTICS.git.added, luminance: 'r500', transparency: 0.5 },
        modified: { ...SEMANTICS.git.modified, luminance: 'r500', transparency: 0.5 },
        deleted: { ...SEMANTICS.git.deleted, luminance: 'r500', transparency: 0.5 },
        inlineChatInserted: { ...SEMANTICS.git.added, luminance: 'r500', transparency: 0.5 },
      },
    },
    overviewRuler: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      marker: {
        findMatch: { color: 'blue', luminance: 'r300', transparency: 0.8 },
        rangeHighlight: { color: 'background', luminance: 'r500', transparency: 0 },
        selectionHighlight: { color: 'background', luminance: 'r500', transparency: 0 },
        wordHighlight: { color: 'background', luminance: 'r500', transparency: 0 },
        wordHighlightStrong: { color: 'background', luminance: 'r500', transparency: 0 },
        wordHighlightText: { color: 'red', luminance: 'r300', transparency: 0.5 },
        added: { ...SEMANTICS.git.added, luminance: 'r500', transparency: 0.5 },
        modified: { ...SEMANTICS.git.modified, luminance: 'r500', transparency: 0.5 },
        deleted: { ...SEMANTICS.git.deleted, luminance: 'r500', transparency: 0.5 },
        error: { ...SEMANTICS.status.error, transparency: 1 },
        warning: { ...SEMANTICS.status.warning, transparency: 1 },
        info: { ...SEMANTICS.status.info, transparency: 1 },
        bracketMatch: { color: 'foreground', luminance: 'r500', transparency: 1 },
        inlineChatInserted: { ...SEMANTICS.git.added, luminance: 'r500', transparency: 0.5 },
        inlineChatRemoved: { ...SEMANTICS.git.deleted, luminance: 'r500', transparency: 0.5 },
        commentDraft: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        comment: { color: 'blue', luminance: 'r300', transparency: 1 },
        commentUnresolved: { ...SEMANTICS.status.unresolved, transparency: 1 },
        currentContent: { color: 'blue', luminance: 'r300', transparency: 1 },
        incomingContent: { color: 'emerald', luminance: 'r300', transparency: 1 },
        commonContent: { color: 'yellow', luminance: 'r300', transparency: 1 },
      },
    },

    // FLOATING GROUP
    peekView: {
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      editor: {
        background: { color: 'background', luminance: 'r500', transparency: 1 },
        matchHighlight: {
          background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
          border: { color: 'background', luminance: 'r500', transparency: 0 },
        },
        gutter: {
          background: { color: 'background', luminance: 'r500', transparency: 1 },
        },
        stickyScroll: {
          background: { color: 'background', luminance: 'r500', transparency: 1 },
          gutter: {
            background: { color: 'background', luminance: 'r300', transparency: 1 },
          },
        },
      },
      result: {
        background: { color: 'background', luminance: 'r300', transparency: 1 },
        fileForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        lineForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        matchHighlight: {
          background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        },
        selection: {
          background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
          foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        },
      },
      title: {
        background: { color: 'background', luminance: 'r300', transparency: 1 },
        description: {
          foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        },
        label: {
          foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        },
      },
    },

    // INLINE GROUP

    // HIGHLIGHT GROUP
    find: {
      match: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
        highlight: {
          foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
          background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
          border: { color: 'background', luminance: 'r500', transparency: 0 },
        },
      },
      range: {
        highlight: {
          background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
          border: { color: 'background', luminance: 'r500', transparency: 0 },
        },
      },
    },
    word: {
      highlight: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
        strong: {
          background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
          border: { color: 'background', luminance: 'r500', transparency: 0 },
        },
        text: {
          background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
          border: { color: 'background', luminance: 'r500', transparency: 0 },
        },
      },
    },
    line: {
      highlight: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.125 },
        border: { color: 'blue', luminance: 'r300', transparency: 0.1 },
      },
    },
    range: {
      highlight: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
      },
    },
    symbol: {
      highlight: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        border: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
    },
    hover: {
      highlight: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      },
    },
    unicode: {
      highlight: {
        background: { color: 'red', luminance: 'r300', transparency: 0.125 },
        border: { color: 'red', luminance: 'r300', transparency: 1 },
      },
    },
    linkedEditing: {
      background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    },

    // MARKING GROUP
    cursor: {
      foreground: { color: 'blue', luminance: 'r300', transparency: 1 },
      background: { color: 'foreground', luminance: 'r500', transparency: 1 },
      multi: {
        primary: {
          foreground: { color: 'rose', luminance: 'r300', transparency: 1 },
          background: { color: 'foreground', luminance: 'r500', transparency: 1 },
        },
        secondary: {
          foreground: { color: 'rose', luminance: 'r300', transparency: 1 },
          background: { color: 'foreground', luminance: 'r500', transparency: 1 },
        },
      },
    },
    guide: {
      unexpectedBracket: { color: 'red', luminance: 'r300', transparency: 1 },
      bracketMatch: {
        foreground: { color: 'special', luminance: 'r500', transparency: 1, deactivate: true },
        background: { color: 'accent', luminance: 'r300', transparency: 0.15 },
        border: { color: 'accent', luminance: 'r300', transparency: 0.1 },
      },
      bracketPair: {
        inactive: {
          depth1: { ...SEMANTICS.indent.depth1, transparency: 0.66 },
          depth2: { ...SEMANTICS.indent.depth2, transparency: 0.66 },
          depth3: { ...SEMANTICS.indent.depth3, transparency: 0.66 },
          depth4: { ...SEMANTICS.indent.depth4, transparency: 0.66 },
          depth5: { ...SEMANTICS.indent.depth5, transparency: 0.66 },
          depth6: { ...SEMANTICS.indent.depth6, transparency: 0.66 },
        },
        active: {
          depth1: { ...SEMANTICS.indent.depth1, luminance: 'r500', transparency: 1 },
          depth2: { ...SEMANTICS.indent.depth2, luminance: 'r500', transparency: 1 },
          depth3: { ...SEMANTICS.indent.depth3, luminance: 'r500', transparency: 1 },
          depth4: { ...SEMANTICS.indent.depth4, luminance: 'r500', transparency: 1 },
          depth5: { ...SEMANTICS.indent.depth5, luminance: 'r500', transparency: 1 },
          depth6: { ...SEMANTICS.indent.depth6, luminance: 'r500', transparency: 1 },
        },
      },
      bracket: {
        depth1: { ...SEMANTICS.indent.depth1, transparency: 0.66 },
        depth2: { ...SEMANTICS.indent.depth2, transparency: 0.66 },
        depth3: { ...SEMANTICS.indent.depth3, transparency: 0.66 },
        depth4: { ...SEMANTICS.indent.depth4, transparency: 0.66 },
        depth5: { ...SEMANTICS.indent.depth5, transparency: 0.66 },
        depth6: { ...SEMANTICS.indent.depth6, transparency: 0.66 },
      },
      indent: {
        inactive: {
          depth1: { ...SEMANTICS.indent.depth1, transparency: 0.33 },
          depth2: { ...SEMANTICS.indent.depth2, transparency: 0.33 },
          depth3: { ...SEMANTICS.indent.depth3, transparency: 0.33 },
          depth4: { ...SEMANTICS.indent.depth4, transparency: 0.33 },
          depth5: { ...SEMANTICS.indent.depth5, transparency: 0.33 },
          depth6: { ...SEMANTICS.indent.depth6, transparency: 0.33 },
        },
        active: {
          depth1: { ...SEMANTICS.indent.depth1, luminance: 'r500', transparency: 1 },
          depth2: { ...SEMANTICS.indent.depth2, luminance: 'r500', transparency: 1 },
          depth3: { ...SEMANTICS.indent.depth3, luminance: 'r500', transparency: 1 },
          depth4: { ...SEMANTICS.indent.depth4, luminance: 'r500', transparency: 1 },
          depth5: { ...SEMANTICS.indent.depth5, luminance: 'r500', transparency: 1 },
          depth6: { ...SEMANTICS.indent.depth6, luminance: 'r500', transparency: 1 },
        },
      },
    },

    // SELECTION GROUP
    selection: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      inactiveBackground: { color: 'blue', luminance: 'r300', transparency: 0.125 },
      highlight: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
      },
    },

    // TEXT GROUP: decorations drawn over or around the text itself.
    text: {
      placeholderForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      compositionBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
      whitespaceForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      linkActiveForeground: { color: 'rose', luminance: 'r500', transparency: 1 },
      rulerForeground: { color: 'background', luminance: 'r500', transparency: 0 },
      codeLensForeground: { color: 'midground', luminance: 'r500', transparency: 1 },
      fold: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.125 },
        placeholderForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      },
      unnecessaryCode: {
        border: { color: 'background', luminance: 'r500', transparency: 0 },
        opacity: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      },
      lightBulb: {
        foreground: { color: 'emerald', luminance: 'r300', transparency: 1 },
        aiForeground: { color: 'rose', luminance: 'r300', transparency: 1 },
        autoFixForeground: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
      snippet: {
        tabstop: {
          background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
          border: { color: 'background', luminance: 'r500', transparency: 0 },
        },
        finalTabstop: {
          background: { color: 'background', luminance: 'r500', transparency: 0 },
          border: { color: 'background', luminance: 'r500', transparency: 0 },
        },
      },
    },

    // DIAGNOSTIC GROUP: squiggles and the problems icons. Hint has no background.
    diagnostic: {
      error: {
        icon: { ...SEMANTICS.status.error, transparency: 1 },
        foreground: { color: 'background', luminance: 'r500', transparency: 0 },
        background: { ...SEMANTICS.status.error, transparency: 0.25 },
        border: { ...SEMANTICS.status.error, transparency: 1 },
      },
      warning: {
        icon: { ...SEMANTICS.status.warning, transparency: 1 },
        foreground: { color: 'background', luminance: 'r500', transparency: 0 },
        background: { ...SEMANTICS.status.warning, transparency: 0.25 },
        border: { ...SEMANTICS.status.warning, transparency: 1 },
      },
      info: {
        icon: { ...SEMANTICS.status.info, transparency: 1 },
        foreground: { color: 'background', luminance: 'r500', transparency: 0 },
        background: { ...SEMANTICS.status.info, transparency: 0.25 },
        border: { ...SEMANTICS.status.info, transparency: 1 },
      },
      hint: {
        foreground: { color: 'background', luminance: 'r500', transparency: 0 },
        border: { ...SEMANTICS.status.hint, transparency: 1 },
      },
    },

    // Inlay hints: the base pair and the two kinds VS Code distinguishes.
    inlayHint: {
      foreground: { ...SEMANTICS.status.hint, transparency: 1 },
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      type: {
        foreground: { ...SEMANTICS.status.hint, transparency: 1 },
        background: { color: 'background', luminance: 'r500', transparency: 0 },
      },
      parameter: {
        foreground: { ...SEMANTICS.status.hint, transparency: 1 },
        background: { color: 'background', luminance: 'r500', transparency: 0 },
      },
    },

    // The editor's own debug decorations.
    debug: {
      stackFrameHighlightBackground: { color: 'yellow', luminance: 'r300', transparency: 0.25 },
      focusedStackFrameHighlightBackground: { color: 'yellow', luminance: 'r300', transparency: 0.5 },
      inlineValues: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      },
      exceptionWidget: {
        background: { color: 'red', luminance: 'r300', transparency: 0.25 },
        border: { color: 'red', luminance: 'r300', transparency: 1 },
      },
    },

    // GROUP: the container of editors, plus the pane and side-by-side borders around it.
    editorGroup: {
      border: { color: 'background', luminance: 'r300', transparency: 1 },
      dropBackground: { color: 'midground', luminance: 'r500', transparency: 0.5 },
      emptyBackground: { color: 'background', luminance: 'r500', transparency: 0 },
      focusedEmptyBorder: { color: 'background', luminance: 'r500', transparency: 0 },
      dropIntoPrompt: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'background', luminance: 'r300', transparency: 1 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
      },
      pane: {
        background: { color: 'background', luminance: 'r500', transparency: 1 },
      },
      sideBySide: {
        horizontalBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
        verticalBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
    },
  },

  // The top strip. Its active/inactive axis is the window's focus, not the element's
  titleBar: {
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    active: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'background', luminance: 'r300', transparency: 1 },
    },
    inactive: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      background: { color: 'background', luminance: 'r300', transparency: 1 },
    },
  },

  // The icon strip. VS Code gives its top/bottom placement a key root of its
  // own, so `top` is the same strip in the other position, not another element.
  activityBar: {
    foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    background: { color: 'background', luminance: 'r300', transparency: 1 },
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    inactiveForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    dropBorder: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    active: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
      focusBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    top: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'background', luminance: 'r300', transparency: 1 },
      inactiveForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      dropBorder: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      active: {
        background: { color: 'background', luminance: 'r500', transparency: 0 },
        border: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
    },
    // White, not `foreground`: the badge sits on blue in both themes.
    badge: {
      foreground: { color: 'white', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
  },

  // The left strip: the container for the explorer, search, and the rest.
  sideBar: {
    foreground: { color: 'foreground', luminance: 'r500', transparency: 0.8 },
    background: { color: 'background', luminance: 'r500', transparency: 1 },
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    dropBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    sectionHeader: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    title: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    activityBarTop: {
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    stickyScroll: {
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      border: CONVENTIONS.divider.border,
      shadow: CONVENTIONS.divider.shadow,
    },
  },

  // The bottom strip. The bar itself has three whole-bar modes; its items have
  // five variants, each with a resting and a hover pair.
  statusBar: {
    foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    background: { color: 'background', luminance: 'r300', transparency: 1 },
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    focusBorder: { color: 'background', luminance: 'r500', transparency: 0 },
    debugging: {
      foreground: { color: 'background', luminance: 'r500', transparency: 1 },
      background: { color: 'rose', luminance: 'r300', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    noFolder: {
      foreground: { color: 'background', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    item: {
      activeBackground: { color: 'background', luminance: 'r300', transparency: 1 },
      focusBorder: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      hover: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'background', luminance: 'r500', transparency: 0 },
      },
      compact: {
        hover: {
          background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        },
      },
      prominent: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        background: { color: 'background', luminance: 'r300', transparency: 1 },
        hover: {
          foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
          background: { color: 'background', luminance: 'r300', transparency: 1 },
        },
      },
      remote: {
        foreground: { color: 'teal', luminance: 'r300', transparency: 0.5 },
        background: { color: 'background', luminance: 'r500', transparency: 0 },
        hover: {
          foreground: { color: 'teal', luminance: 'r300', transparency: 1 },
          background: { color: 'background', luminance: 'r500', transparency: 0 },
        },
      },
      error: {
        foreground: { ...SEMANTICS.status.error, transparency: 0.5 },
        background: { color: 'background', luminance: 'r500', transparency: 0 },
        hover: {
          foreground: { ...SEMANTICS.status.error, transparency: 1 },
          background: { color: 'background', luminance: 'r500', transparency: 0 },
        },
      },
      warning: {
        foreground: { ...SEMANTICS.status.warning, transparency: 0.5 },
        background: { color: 'background', luminance: 'r500', transparency: 0 },
        hover: {
          foreground: { ...SEMANTICS.status.warning, transparency: 1 },
          background: { color: 'background', luminance: 'r500', transparency: 0 },
        },
      },
      offline: {
        foreground: { color: 'midground', luminance: 'r500', transparency: 0.5 },
        background: { color: 'background', luminance: 'r500', transparency: 0 },
        hover: {
          foreground: { color: 'background', luminance: 'r500', transparency: 0 },
          background: { color: 'midground', luminance: 'r500', transparency: 1 },
        },
      },
    },
  },

  // Toasts and the notification centre.
  notification: {
    foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    background: { color: 'background', luminance: 'r500', transparency: 1 },
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    link: {
      foreground: { color: 'special', luminance: 'r500', transparency: 1 },
    },
    toast: {
      border: { color: 'background', luminance: 'r300', transparency: 1 },
    },
    center: {
      border: { color: 'background', luminance: 'r300', transparency: 1 },
      header: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'background', luminance: 'r300', transparency: 1 },
      },
    },
    icon: {
      error: { ...SEMANTICS.status.error, transparency: 1 },
      warning: { ...SEMANTICS.status.warning, transparency: 1 },
      info: { ...SEMANTICS.status.info, transparency: 1 },
    },
  },

  // The terminal, which carries its own palette. The sixteen ANSI slots are named for what
  // the program asks for, not for the hue that answers.
  terminal: {
    foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    background: { color: 'background', luminance: 'r500', transparency: 1 },
    border: { color: 'background', luminance: 'r300', transparency: 1 },
    dropBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    hoverHighlightBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    initialHintForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    commandGuideForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    selection: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      inactiveBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    },
    findMatch: {
      background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      highlightBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      highlightBorder: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    cursor: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    tab: {
      activeBorder: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    ansi: {
      black: { color: 'background', luminance: 'r700', transparency: 1 },
      brightBlack: { color: 'background', luminance: 'r300', transparency: 1 },
      white: { color: 'foreground', luminance: 'r300', transparency: 1 },
      brightWhite: { color: 'foreground', luminance: 'r700', transparency: 1 },
      red: { color: 'red', luminance: 'r500', transparency: 1 },
      brightRed: { color: 'red', luminance: 'r300', transparency: 1 },
      green: { color: 'emerald', luminance: 'r500', transparency: 1 },
      brightGreen: { color: 'emerald', luminance: 'r300', transparency: 1 },
      yellow: { color: 'yellow', luminance: 'r500', transparency: 1 },
      brightYellow: { color: 'yellow', luminance: 'r300', transparency: 1 },
      blue: { color: 'blue', luminance: 'r500', transparency: 1 },
      brightBlue: { color: 'blue', luminance: 'r300', transparency: 1 },
      magenta: { color: 'fuchsia', luminance: 'r500', transparency: 1 },
      brightMagenta: { color: 'fuchsia', luminance: 'r300', transparency: 1 },
      cyan: { color: 'cyan', luminance: 'r500', transparency: 1 },
      brightCyan: { color: 'cyan', luminance: 'r300', transparency: 1 },
    },
    commandDecoration: {
      base: { color: 'foreground', luminance: 'r500', transparency: 1 },
      success: { ...SEMANTICS.status.success, transparency: 1 },
      error: { ...SEMANTICS.status.error, transparency: 1 },
    },
    overviewRuler: {
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      cursorForeground: { color: 'blue', luminance: 'r300', transparency: 1 },
      findMatchForeground: { color: 'red', luminance: 'r300', transparency: 1 },
    },
    stickyScroll: {
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      border: CONVENTIONS.divider.border,
      hover: {
        background: { color: 'background', luminance: 'r300', transparency: 1 },
      },
    },
    // The suggest widget's icons. One hue per kind of thing the shell offers.
    symbolIcon: {
      alias: { color: 'blue', luminance: 'r300', transparency: 1 },
      argument: { color: 'orange', luminance: 'r300', transparency: 1 },
      branch: { color: 'cyan', luminance: 'r500', transparency: 1 },
      commit: { color: 'cyan', luminance: 'r500', transparency: 1 },
      file: { color: 'blue', luminance: 'r300', transparency: 1 },
      flag: { color: 'yellow', luminance: 'r300', transparency: 1 },
      folder: { color: 'yellow', luminance: 'r300', transparency: 1 },
      inlineSuggestion: { color: 'emerald', luminance: 'r300', transparency: 1 },
      method: { color: 'emerald', luminance: 'r300', transparency: 1 },
      option: { color: 'blue', luminance: 'r300', transparency: 1 },
      optionValue: { color: 'rose', luminance: 'r300', transparency: 1 },
      pullRequest: { color: 'blue', luminance: 'r300', transparency: 1 },
      pullRequestDone: { color: 'emerald', luminance: 'r300', transparency: 1 },
      remote: { color: 'cyan', luminance: 'r500', transparency: 1 },
      stash: { color: 'violet', luminance: 'r300', transparency: 1 },
      symbolicLinkFile: { color: 'pink', luminance: 'r300', transparency: 1 },
      symbolicLinkFolder: { color: 'pink', luminance: 'r300', transparency: 1 },
      symbolText: { color: 'foreground', luminance: 'r500', transparency: 1 },
      tag: { color: 'rose', luminance: 'r500', transparency: 1 },
    },
  },

  // The three form controls. Each has a resting pair, a hover, and where VS Code
  // offers one, a disabled or inactive pair.
  controls: {
    button: {
      separator: { color: 'background', luminance: 'r500', transparency: 0 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'white', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 0.8 },
      hoverBackground: { color: 'blue', luminance: 'r300', transparency: 1 },
      secondary: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
        background: { color: 'midground', luminance: 'r500', transparency: 0.8 },
        hoverBackground: { color: 'midground', luminance: 'r500', transparency: 1 },
      },
    },
    checkbox: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      select: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
      },
      disabled: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        background: { color: 'midground', luminance: 'r500', transparency: 0.5 },
      },
    },
    radio: {
      active: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'blue', luminance: 'r300', transparency: 1 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
      },
      inactive: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        background: { color: 'midground', luminance: 'r500', transparency: 0.5 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
        hoverBackground: { color: 'midground', luminance: 'r500', transparency: 1 },
      },
    },
    input: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      placeholderForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      border: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      option: {
        active: {
          background: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
          border: { color: 'background', luminance: 'r500', transparency: 0 },
          foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        },
        hoverBackground: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
      },
    },
    dropdown: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      listBackground: { color: 'background', luminance: 'r500', transparency: 1 },
      border: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    },
  },

  // Validation messages under input boxes. Three severities, each a full triple.
  inputValidation: {
    error: {
      background: { ...SEMANTICS.status.error, transparency: 1 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    warning: {
      background: { ...SEMANTICS.status.warning, transparency: 1 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    info: {
      background: { ...SEMANTICS.status.info, transparency: 1 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
  },

  // The menu bar and the menus it drops.
  menu: {
    bar: {
      selection: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'blue', luminance: 'r500', transparency: 0.1 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
      },
    },
    foreground: { color: 'foreground', luminance: 'r500', transparency: 0.8 },
    background: { color: 'background', luminance: 'r500', transparency: 1 },
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    separatorBackground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    selection: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r500', transparency: 0.5 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
  },

  // The search box in the middle of the title bar.
  commandCenter: {
    foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    background: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    active: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    inactive: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    debuggingBackground: { color: 'rose', luminance: 'r500', transparency: 0.5 },
  },

  // Keyboard shortcuts: the inline label and the table in the keybindings editor.
  keybinding: {
    label: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'midground', luminance: 'r500', transparency: 0.5 },
      border: { color: 'midground', luminance: 'r500', transparency: 0.25 },
      bottomBorder: { color: 'midground', luminance: 'r500', transparency: 0.5 },
    },
    table: {
      headerBackground: { color: 'background', luminance: 'r300', transparency: 1 },
      rowsBackground: { color: 'background', luminance: 'r500', transparency: 0.5 },
    },
  },

  // File labels and the SCM viewlet.
  git: {
    decoration: {
      added: { ...SEMANTICS.git.added, transparency: 1 },
      renamed: { ...SEMANTICS.git.renamed, transparency: 1 },
      modified: { ...SEMANTICS.git.modified, transparency: 1 },
      stageModified: { ...SEMANTICS.git.modified, transparency: 0.8 },
      conflicting: { ...SEMANTICS.git.conflicted, transparency: 1 },
      deleted: { ...SEMANTICS.git.deleted, transparency: 1 },
      stageDeleted: { ...SEMANTICS.git.deleted, transparency: 0.8 },
      ignored: { ...SEMANTICS.git.ignored, transparency: 0.8 },
      untracked: { ...SEMANTICS.git.untracked, transparency: 0.8 },
      submodule: { ...SEMANTICS.git.sub_module, transparency: 1 },
    },
    blame: {
      editorDecorationForeground: { color: 'midground', luminance: 'r500', transparency: 0.8 },
    },
  },

  // The source control graph.
  scmGraph: {
    lane1: { color: 'blue', luminance: 'r300', transparency: 1 },
    lane2: { color: 'rose', luminance: 'r500', transparency: 1 },
    lane3: { color: 'emerald', luminance: 'r300', transparency: 1 },
    lane4: { color: 'yellow', luminance: 'r300', transparency: 1 },
    lane5: { color: 'cyan', luminance: 'r500', transparency: 1 },
    ref: {
      base: { color: 'blue', luminance: 'r300', transparency: 1 },
      remote: { color: 'cyan', luminance: 'r300', transparency: 1 },
      baseRef: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    hover: {
      labelForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      additionsForeground: { color: 'emerald', luminance: 'r300', transparency: 1 },
      deletionsForeground: { color: 'red', luminance: 'r300', transparency: 1 },
      defaultLabel: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      },
    },
  },

  // The extensions view: its buttons, badges, and the icons beside a listing.
  extensions: {
    button: {
      separator: { color: 'background', luminance: 'r500', transparency: 0 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'white', luminance: 'r500', transparency: 1 },
      background: { color: 'special', luminance: 'r500', transparency: 1 },
      hoverBackground: { color: 'special', luminance: 'r500', transparency: 0.8 },
      prominent: {
        foreground: { color: 'white', luminance: 'r500', transparency: 1 },
        background: { color: 'accent', luminance: 'r500', transparency: 1 },
        hoverBackground: { color: 'accent', luminance: 'r500', transparency: 0.8 },
      },
    },
    badge: {
      remote: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'emerald', luminance: 'r500', transparency: 1 },
      },
    },
    icon: {
      mcpStar: { color: 'citron', luminance: 'r500', transparency: 1 },
      star: { color: 'yellow', luminance: 'r500', transparency: 1 },
      preRelease: { color: 'azure', luminance: 'r500', transparency: 1 },
      verified: { color: 'blue', luminance: 'r500', transparency: 1 },
      sponsor: { color: 'marine', luminance: 'r500', transparency: 1 },
      private: { color: 'purple', luminance: 'r500', transparency: 1 },
    },
  },

  // The Error Lens extension. Four severities, each a foreground and two grounds.
  errorLens: {
    error: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { ...SEMANTICS.status.error, transparency: 1 },
      messageBackground: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    warning: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { ...SEMANTICS.status.warning, transparency: 1 },
      messageBackground: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    hint: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { ...SEMANTICS.status.hint, transparency: 1 },
      messageBackground: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    info: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { ...SEMANTICS.status.info, transparency: 1 },
      messageBackground: { color: 'background', luminance: 'r500', transparency: 0 },
    },
  },

  // The debugger's views, icons, and console.
  debug: {
    view: {
      exceptionLabel: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'red', luminance: 'r300', transparency: 1 },
      },
      stateLabel: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
      valueChangedHighlight: { color: 'yellow', luminance: 'r300', transparency: 1 },
    },
    tokenExpression: {
      name: { color: 'foreground', luminance: 'r500', transparency: 1 },
      value: { color: 'teal', luminance: 'r300', transparency: 1 },
      string: { color: 'teal', luminance: 'r300', transparency: 1 },
      boolean: { color: 'violet', luminance: 'r300', transparency: 1 },
      number: { color: 'violet', luminance: 'r300', transparency: 1 },
      error: { ...SEMANTICS.status.error, transparency: 1 },
      type: { color: 'pink', luminance: 'r300', transparency: 1 },
    },
    icon: {
      breakpoint: { color: 'red', luminance: 'r300', transparency: 1 },
      breakpointDisabled: { color: 'midground', luminance: 'r500', transparency: 1 },
      breakpointUnverified: { color: 'yellow', luminance: 'r300', transparency: 1 },
      breakpointCurrentStackframe: { color: 'emerald', luminance: 'r300', transparency: 1 },
      breakpointStackframe: { color: 'blue', luminance: 'r300', transparency: 1 },
      start: { ...SEMANTICS.status.success, transparency: 1 },
      pause: { ...SEMANTICS.status.warning, transparency: 1 },
      stop: { ...SEMANTICS.status.error, transparency: 1 },
      disconnect: { color: 'foreground', luminance: 'r500', transparency: 1 },
      restart: { ...SEMANTICS.status.success, transparency: 1 },
      stepOver: { ...SEMANTICS.status.info, transparency: 1 },
      stepInto: { ...SEMANTICS.status.info, transparency: 1 },
      stepOut: { ...SEMANTICS.status.info, transparency: 1 },
      continue: { ...SEMANTICS.status.success, transparency: 1 },
      stepBack: { color: 'midground', luminance: 'r500', transparency: 1 },
    },
    console: {
      info: { ...SEMANTICS.status.info, transparency: 1 },
      warning: { ...SEMANTICS.status.warning, transparency: 1 },
      error: { ...SEMANTICS.status.error, transparency: 1 },
      source: { color: 'foreground', luminance: 'r500', transparency: 1 },
      inputIcon: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
  },

  // The test explorer and the inline test decorations.
  testing: {
    runAction: { color: 'blue', luminance: 'r300', transparency: 1 },
    icon: {
      errored: { ...SEMANTICS.status.error, transparency: 1 },
      failed: { ...SEMANTICS.status.error, transparency: 1 },
      passed: { ...SEMANTICS.status.success, transparency: 1 },
      queued: { ...SEMANTICS.status.info, transparency: 1 },
      unset: { color: 'midground', luminance: 'r500', transparency: 1 },
      skipped: { ...SEMANTICS.status.warning, transparency: 1 },
      retired: {
        errored: { ...SEMANTICS.status.error, transparency: 0.5 },
        failed: { ...SEMANTICS.status.error, transparency: 0.5 },
        passed: { ...SEMANTICS.status.success, transparency: 0.5 },
        queued: { ...SEMANTICS.status.info, transparency: 0.5 },
        unset: { color: 'midground', luminance: 'r500', transparency: 0.5 },
        skipped: { ...SEMANTICS.status.warning, transparency: 0.5 },
      },
    },
    peek: {
      border: { ...SEMANTICS.status.info, transparency: 1 },
      headerBackground: { color: 'background', luminance: 'r300', transparency: 1 },
    },
    messagePeek: {
      border: { ...SEMANTICS.status.info, transparency: 1 },
      headerBackground: { color: 'background', luminance: 'r300', transparency: 1 },
    },
    message: {
      error: {
        lineBackground: { ...SEMANTICS.status.error, transparency: 0.125 },
        badgeBackground: { ...SEMANTICS.status.error, transparency: 1 },
        badgeBorder: { ...SEMANTICS.status.error, transparency: 1 },
        badgeForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      },
      info: {
        decorationForeground: { ...SEMANTICS.status.info, transparency: 1 },
        lineBackground: { ...SEMANTICS.status.info, transparency: 0.125 },
      },
    },
    coverage: {
      covered: {
        background: { ...SEMANTICS.status.success, transparency: 0.25 },
        border: { ...SEMANTICS.status.success, transparency: 1 },
        gutterBackground: { ...SEMANTICS.status.success, transparency: 0.125 },
      },
      uncovered: {
        branchBackground: { ...SEMANTICS.status.error, transparency: 0.25 },
        background: { ...SEMANTICS.status.error, transparency: 0.25 },
        border: { ...SEMANTICS.status.error, transparency: 1 },
        gutterBackground: { ...SEMANTICS.status.error, transparency: 0.125 },
      },
      countBadge: {
        background: { ...SEMANTICS.status.info, transparency: 1 },
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      },
    },
  },

  // The symbol icons in the outline, breadcrumbs, and suggest widget. One hue per kind.
  symbolIcon: {
    array: { color: 'blue', luminance: 'r300', transparency: 1 },
    boolean: { color: 'violet', luminance: 'r300', transparency: 1 },
    class: { color: 'blue', luminance: 'r300', transparency: 1 },
    color: { color: 'cyan', luminance: 'r500', transparency: 1 },
    constant: { color: 'blue', luminance: 'r300', transparency: 1 },
    constructor: { color: 'emerald', luminance: 'r300', transparency: 1 },
    enumerator: { color: 'blue', luminance: 'r300', transparency: 1 },
    enumeratorMember: { color: 'blue', luminance: 'r300', transparency: 1 },
    event: { color: 'orange', luminance: 'r300', transparency: 1 },
    field: { color: 'violet', luminance: 'r300', transparency: 1 },
    file: { color: 'blue', luminance: 'r300', transparency: 1 },
    folder: { color: 'yellow', luminance: 'r300', transparency: 1 },
    function: { color: 'emerald', luminance: 'r300', transparency: 1 },
    interface: { color: 'blue', luminance: 'r300', transparency: 1 },
    key: { color: 'violet', luminance: 'r300', transparency: 1 },
    keyword: { color: 'cyan', luminance: 'r500', transparency: 1 },
    method: { color: 'emerald', luminance: 'r300', transparency: 1 },
    module: { color: 'blue', luminance: 'r300', transparency: 1 },
    namespace: { color: 'blue', luminance: 'r300', transparency: 1 },
    null: { color: 'midground', luminance: 'r500', transparency: 1 },
    number: { color: 'violet', luminance: 'r300', transparency: 1 },
    object: { color: 'blue', luminance: 'r300', transparency: 1 },
    operator: { color: 'cyan', luminance: 'r500', transparency: 1 },
    package: { color: 'blue', luminance: 'r300', transparency: 1 },
    property: { color: 'violet', luminance: 'r300', transparency: 1 },
    reference: { color: 'cyan', luminance: 'r500', transparency: 1 },
    snippet: { color: 'emerald', luminance: 'r300', transparency: 1 },
    string: { color: 'cyan', luminance: 'r500', transparency: 1 },
    struct: { color: 'blue', luminance: 'r300', transparency: 1 },
    text: { color: 'foreground', luminance: 'r500', transparency: 1 },
    typeParameter: { color: 'blue', luminance: 'r300', transparency: 1 },
    unit: { color: 'blue', luminance: 'r300', transparency: 1 },
    variable: { color: 'violet', luminance: 'r300', transparency: 1 },
  },

  // Charts in the workbench. `charts` is the named palette, `chart` the line chart.
  charts: {
    foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    lines: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    red: { color: 'red', luminance: 'r300', transparency: 1 },
    blue: { color: 'blue', luminance: 'r300', transparency: 1 },
    yellow: { color: 'yellow', luminance: 'r300', transparency: 1 },
    orange: { color: 'orange', luminance: 'r300', transparency: 1 },
    green: { color: 'green', luminance: 'r300', transparency: 1 },
    purple: { color: 'purple', luminance: 'r300', transparency: 1 },
    line: { color: 'blue', luminance: 'r300', transparency: 1 },
    axis: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    guide: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
  },

  // GitHub-style alerts in rendered markdown.
  markdownAlert: {
    note: { color: 'blue', luminance: 'r300', transparency: 1 },
    tip: { color: 'emerald', luminance: 'r300', transparency: 1 },
    important: { color: 'purple', luminance: 'r300', transparency: 1 },
    warning: { color: 'yellow', luminance: 'r300', transparency: 1 },
    caution: { color: 'red', luminance: 'r300', transparency: 1 },
  },

  // Badges: the generic one, the two activity-bar severities, and the profile badge.
  badge: {
    foreground: { color: 'white', luminance: 'r500', transparency: 1 },
    background: { color: 'special', luminance: 'r300', transparency: 1 },
    activity: {
      warning: {
        foreground: { color: 'white', luminance: 'r500', transparency: 1 },
        background: { ...SEMANTICS.status.warning, luminance: 'r500', transparency: 1 },
      },
      error: {
        foreground: { color: 'white', luminance: 'r500', transparency: 1 },
        background: { ...SEMANTICS.status.error, luminance: 'r500', transparency: 1 },
      },
    },
    profile: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'white', luminance: 'r500', transparency: 0.5 },
    },
  },

  // The profiles editor.
  profiles: {
    sashBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
  },

  // The banner below the title bar.
  banner: {
    background: { color: 'background', luminance: 'r300', transparency: 1 },
    foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    iconForeground: { color: 'blue', luminance: 'r300', transparency: 1 },
  },

  // Lists and trees, the explorer included. Selection and focus are separate axes: an item
  // can be selected, focused, both, or neither, each in an active and an inactive form.
  list: {
    selection: {
      active: {
        background: { color: 'background', luminance: 'r500', transparency: 0 },
        foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        iconForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      },
      inactive: {
        background: { color: 'background', luminance: 'r500', transparency: 0 },
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        iconForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      },
    },
    focus: {
      background: { color: 'blue', luminance: 'r700', transparency: 1 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      highlightForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      outline: { color: 'blue', luminance: 'r300', transparency: 1 },
      andSelectionOutline: { color: 'blue', luminance: 'r300', transparency: 1 },
      inactive: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.125 },
        outline: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      },
    },
    hover: {
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    },
    drop: {
      background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      betweenBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    },
    highlightForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    deemphasizedForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    warningForeground: { ...SEMANTICS.status.warning, transparency: 1 },
    errorForeground: { ...SEMANTICS.status.error, transparency: 1 },
    invalidItemForeground: { ...SEMANTICS.status.invalid, luminance: 'r700', transparency: 1 },
    filterMatch: {
      background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    filterWidget: {
      background: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      outline: { color: 'blue', luminance: 'r300', transparency: 1 },
      noMatchesOutline: { color: 'red', luminance: 'r300', transparency: 1 },
      shadow: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    tree: {
      indentGuidesStroke: { color: 'azure', luminance: 'r300', transparency: 1 },
      inactiveIndentGuidesStroke: { color: 'azure', luminance: 'r300', transparency: 0.5 },
      table: {
        columnsBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
        oddRowsBackground: { color: 'background', luminance: 'r500', transparency: 0.5 },
      },
    },
  },

  // The bottom panel: terminal, output, problems. VS Code spreads it over
  // seven key roots; they are one surface here.
  panel: {
    background: { color: 'background', luminance: 'r300', transparency: 1 },
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    dropBorder: { color: 'background', luminance: 'r500', transparency: 0 },
    title: {
      activeBorder: { color: 'foreground', luminance: 'r500', transparency: 1 },
      activeForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      inactiveForeground: { color: 'foreground', luminance: 'r500', transparency: 0.8 },
      border: { color: 'blue', luminance: 'r300', transparency: 0 },
      badge: {
        foreground: { color: 'white', luminance: 'r500', transparency: 1 },
        background: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
    },
    input: {
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    section: {
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
      dropBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      header: {
        background: { color: 'background', luminance: 'r500', transparency: 1 },
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        border: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
    },
    stickyScroll: {
      background: { color: 'midground', luminance: 'r500', transparency: 0.5 },
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
      shadow: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    output: {
      background: { color: 'background', luminance: 'r300', transparency: 1 },
      stickyScroll: {
        background: { color: 'background', luminance: 'r300', transparency: 1 },
      },
    },
  },

  // Floating widgets over the editor: find, suggest, hover, and their kin.
  widget: {
    shadow: { color: 'background', luminance: 'r500', transparency: 0 },
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    editor: {
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'background', luminance: 'r300', transparency: 1 },
      resizeBorder: { color: 'foreground', luminance: 'r500', transparency: 1 },
    },
    ghostText: {
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      background: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    },
    pickerGroup: {
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    },
    debugToolBar: {
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      background: { color: 'background', luminance: 'r300', transparency: 1 },
    },
    simpleFind: {
      sashBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    suggest: {
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      highlightForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      focusHighlightForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      selected: {
        background: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
        foreground: { color: 'background', luminance: 'r700', transparency: 1 },
        iconForeground: { color: 'background', luminance: 'r700', transparency: 1 },
      },
      statusForeground: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    hover: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'background', luminance: 'r300', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 1 },
      highlightForeground: { color: 'blue', luminance: 'r300', transparency: 1 },
      statusBarBackground: { color: 'background', luminance: 'r700', transparency: 1 },
    },
    // The marker navigation widget: Go to Next Error or Warning.
    markerNavigation: {
      background: { color: 'background', luminance: 'r500', transparency: 0.8 },
      error: {
        headerBackground: { ...SEMANTICS.status.error, transparency: 1 },
        background: { color: 'background', luminance: 'r500', transparency: 0.8 },
      },
      warning: {
        headerBackground: { ...SEMANTICS.status.warning, transparency: 1 },
        background: { color: 'background', luminance: 'r500', transparency: 0.8 },
      },
      info: {
        headerBackground: { ...SEMANTICS.status.info, transparency: 1 },
        background: { color: 'background', luminance: 'r500', transparency: 0.8 },
      },
    },
  },

  // The quick input: command palette, pickers, and the like.
  quickInput: {
    background: { color: 'background', luminance: 'r500', transparency: 1 },
    foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    titleBackground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    list: {
      focus: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        iconForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      },
    },
  },

  // Action affordances: toolbars, the action bar, and the code action list.
  action: {
    toolbar: {
      hoverBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      hoverOutline: { color: 'background', luminance: 'r500', transparency: 0 },
      activeBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    },
    bar: {
      toggledBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    },
    list: {
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      focus: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      },
    },
  },

  // Text inside rendered documents such as the welcome page and hovers.
  text: {
    blockQuote: {
      background: { color: 'midground', luminance: 'r500', transparency: 0.5 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    codeBlock: {
      background: { color: 'midground', luminance: 'r500', transparency: 0.5 },
    },
    link: {
      foreground: { color: 'blue', luminance: 'r300', transparency: 1 },
      activeForeground: { color: 'blue', luminance: 'r500', transparency: 1 },
    },
    preformat: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    separatorForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
  },

  // Comment threads: the widget in the editor and the comments view.
  comments: {
    widget: {
      resolvedBorder: { ...SEMANTICS.status.success, transparency: 1 },
      unresolvedBorder: { ...SEMANTICS.status.unresolved, transparency: 1 },
      rangeBackground: { color: 'background', luminance: 'r500', transparency: 1 },
      rangeActiveBackground: { color: 'background', luminance: 'r300', transparency: 1 },
      replyInputBackground: { color: 'background', luminance: 'r500', transparency: 1 },
    },
    view: {
      resolvedIcon: { ...SEMANTICS.status.success, transparency: 1 },
      unresolvedIcon: { ...SEMANTICS.status.unresolved, transparency: 1 },
    },
  },

  // The search view and the search editor.
  search: {
    resultsInfoForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    editor: {
      findMatch: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        border: { color: 'background', luminance: 'r500', transparency: 0 },
      },
      textInputBorder: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
    },
  },

  // The ports view.
  ports: {
    iconRunningProcessForeground: { color: 'emerald', luminance: 'r300', transparency: 1 },
  },

  // The diff editor. Inserted and removed are the same shape; unchanged is the
  // collapsed region between them.
  diffEditor: {
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    diagonalFill: { color: 'blue', luminance: 'r300', transparency: 0.125 },
    move: {
      border: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      activeBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    inserted: {
      textBackground: { color: 'green', luminance: 'r500', transparency: 0.125 },
      textBorder: { color: 'background', luminance: 'r500', transparency: 0 },
      lineBackground: { color: 'green', luminance: 'r500', transparency: 0.1 },
      gutterLineBackground: { color: 'green', luminance: 'r500', transparency: 0.1 },
      overviewForeground: { color: 'green', luminance: 'r500', transparency: 1 },
    },
    removed: {
      textBackground: { color: 'red', luminance: 'r500', transparency: 0.125 },
      textBorder: { color: 'background', luminance: 'r500', transparency: 0 },
      lineBackground: { color: 'red', luminance: 'r500', transparency: 0.1 },
      gutterLineBackground: { color: 'red', luminance: 'r500', transparency: 0.1 },
      overviewForeground: { color: 'red', luminance: 'r500', transparency: 1 },
    },
    unchanged: {
      regionBackground: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      regionForeground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
      regionShadow: { color: 'background', luminance: 'r500', transparency: 0 },
      codeBackground: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
    },
    multi: {
      headerBackground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
  },

  // Merge conflicts: the inline markers in a file, and the three-way merge editor.
  merge: {
    border: { color: 'background', luminance: 'r500', transparency: 0 },
    current: {
      headerBackground: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      contentBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    },
    incoming: {
      headerBackground: { color: 'teal', luminance: 'r300', transparency: 0.5 },
      contentBackground: { color: 'teal', luminance: 'r300', transparency: 0.25 },
    },
    common: {
      headerBackground: { color: 'purple', luminance: 'r300', transparency: 0.5 },
      contentBackground: { color: 'purple', luminance: 'r300', transparency: 0.25 },
    },
    editor: {
      change: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        wordBackground: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      },
      changeBase: {
        background: { ...SEMANTICS.git.modified, transparency: 0.25 },
        wordBackground: { ...SEMANTICS.git.modified, transparency: 0.5 },
      },
      conflict: {
        unhandled: {
          unfocusedBorder: { ...SEMANTICS.git.conflicted, transparency: 0.8 },
          focusedBorder: { ...SEMANTICS.git.conflicted, luminance: 'r500', transparency: 1 },
          minimapOverviewRuler: { ...SEMANTICS.git.conflicted, transparency: 1 },
        },
        handled: {
          unfocusedBorder: { ...SEMANTICS.git.added, transparency: 0.8 },
          focusedBorder: { ...SEMANTICS.git.added, luminance: 'r500', transparency: 1 },
          minimapOverviewRuler: { ...SEMANTICS.git.added, transparency: 1 },
        },
        input1Background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        input2Background: { color: 'emerald', luminance: 'r300', transparency: 0.25 },
      },
      conflictingLinesBackground: { ...SEMANTICS.git.conflicted, transparency: 0.25 },
    },
  },

  // Chat: the chat view, the inline chat widget in the editor, and agent sessions.
  chat: {
    request: {
      border: { color: 'foreground', luminance: 'r500', transparency: 0.2 },
      background: { color: 'foreground', luminance: 'r500', transparency: 0.2 },
      codeBorder: { color: 'background', luminance: 'r500', transparency: 0.8 },
      bubble: {
        background: { color: 'background', luminance: 'r500', transparency: 0.65 },
        hoverBackground: { color: 'background', luminance: 'r500', transparency: 0.8 },
      },
    },
    slashCommand: {
      background: { color: 'special', luminance: 'r300', transparency: 1 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.8 },
    },
    avatar: {
      background: { color: 'special', luminance: 'r300', transparency: 1 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 0.8 },
    },
    editedFileForeground: { color: 'rose', luminance: 'r500', transparency: 1 },
    linesAddedForeground: { color: 'emerald', luminance: 'r300', transparency: 0.8 },
    linesRemovedForeground: { color: 'red', luminance: 'r300', transparency: 0.8 },
    checkpointSeparator: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
    thinkingShimmer: { color: 'special', luminance: 'r300', transparency: 0.8 },
    inline: {
      background: { color: 'background', luminance: 'r300', transparency: 1 },
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      shadow: { color: 'background', luminance: 'r500', transparency: 0 },
      input: {
        placeholderForeground: { color: 'foreground', luminance: 'r500', transparency: 0.25 },
        background: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
        border: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
        focusBorder: { color: 'foreground', luminance: 'r500', transparency: 0.2 },
      },
      diff: {
        inserted: { color: 'emerald', luminance: 'r300', transparency: 0.25 },
        removed: { color: 'red', luminance: 'r300', transparency: 0.25 },
      },
    },
    agent: {
      readIndicatorForeground: { color: 'midground', luminance: 'r500', transparency: 1 },
      selectedBadgeBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
      selectedUnfocusedBadgeBorder: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      statusIndicatorBackground: { color: 'background', luminance: 'r500', transparency: 1 },
    },
  },

  // Inline edits: the next-edit suggestions and their gutter indicator.
  inlineEdit: {
    gutterIndicator: {
      background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      primary: {
        border: { color: 'blue', luminance: 'r300', transparency: 1 },
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      },
      secondary: {
        border: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        foreground: { color: 'foreground', luminance: 'r500', transparency: 0.5 },
        background: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      },
      successful: {
        border: { color: 'emerald', luminance: 'r300', transparency: 1 },
        foreground: { color: 'emerald', luminance: 'r300', transparency: 1 },
        background: { color: 'emerald', luminance: 'r300', transparency: 0.25 },
      },
    },
    original: {
      background: { color: 'red', luminance: 'r500', transparency: 0.25 },
      changedLineBackground: { color: 'red', luminance: 'r500', transparency: 0.125 },
      changedTextBackground: { color: 'red', luminance: 'r500', transparency: 0.25 },
      border: { color: 'red', luminance: 'r500', transparency: 1 },
      tabWillAcceptBorder: { color: 'red', luminance: 'r500', transparency: 1 },
    },
    modified: {
      background: { ...SEMANTICS.git.modified, transparency: 0.25 },
      changedLineBackground: { ...SEMANTICS.git.modified, transparency: 0.125 },
      changedTextBackground: { ...SEMANTICS.git.modified, transparency: 0.25 },
      border: { ...SEMANTICS.git.modified, transparency: 1 },
      tabWillAcceptBorder: { ...SEMANTICS.git.modified, transparency: 1 },
    },
  },
} as const

export const OVERRIDES = {
  // The welcome page and the walkthroughs it launches. VS Code spells the two walkthrough
  // key roots differently: walkThrough and walkthrough.
  welcomePage: {
    background: { color: 'background', luminance: 'r500', transparency: 1 },
    progress: {
      foreground: { color: 'blue', luminance: 'r300', transparency: 1 },
      background: { color: 'background', luminance: 'r500', transparency: 1 },
    },
    tile: {
      background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
      hover: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      },
    },
    walkthrough: {
      embeddedEditorBackground: { color: 'background', luminance: 'r500', transparency: 1 },
      stepTitleForeground: { color: 'foreground', luminance: 'r500', transparency: 1 },
    },
  },

  // The GUI settings editor. Its dropdown, checkbox, and input keys are its own.
  settings: {
    modifiedItemIndicator: { ...SEMANTICS.git.modified, transparency: 1 },
    sashBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
    header: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
      hover: {
        foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      },
    },
    row: {
      focused: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.2 },
        border: { color: 'blue', luminance: 'r300', transparency: 0.2 },
      },
      hover: {
        background: { color: 'background', luminance: 'r500', transparency: 1 },
      },
    },
    dropdown: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      border: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      listBorder: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
    },
    checkbox: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      border: { color: 'background', luminance: 'r500', transparency: 0 },
    },
    textInput: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      border: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
    },
    numberInput: {
      foreground: { color: 'foreground', luminance: 'r500', transparency: 1 },
      background: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
      border: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
    },
  },

  // The notebook editor: its own keys, its own overview ruler, and its own scrollbar slider.
  notebook: {
    editorBackground: { color: 'background', luminance: 'r500', transparency: 1 },
    symbolHighlightBackground: { color: 'blue', luminance: 'r300', transparency: 0.25 },
    cell: {
      background: { color: 'background', luminance: 'r500', transparency: 1 },
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
      insertionIndicator: { color: 'emerald', luminance: 'r300', transparency: 1 },
      toolbarSeparator: { color: 'blue', luminance: 'r300', transparency: 1 },
      hover: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.125 },
      },
      focused: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.125 },
        border: { color: 'blue', luminance: 'r300', transparency: 1 },
        editorBorder: { color: 'blue', luminance: 'r300', transparency: 1 },
        inactiveBorder: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      },
      selected: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.25 },
        border: { color: 'blue', luminance: 'r300', transparency: 1 },
        inactiveBorder: { color: 'blue', luminance: 'r300', transparency: 0.25 },
      },
      statusBar: {
        item: {
          hover: {
            background: { color: 'foreground', luminance: 'r500', transparency: 0.1 },
          },
        },
      },
    },
    output: {
      background: { color: 'background', luminance: 'r300', transparency: 1 },
      border: { color: 'blue', luminance: 'r300', transparency: 1 },
    },
    status: {
      running: { ...SEMANTICS.status.info, transparency: 1 },
      success: { ...SEMANTICS.status.success, transparency: 1 },
      error: { ...SEMANTICS.status.error, transparency: 1 },
    },
    // The notebook's overview ruler.
    overviewRuler: {
      runningCell: { ...SEMANTICS.status.info, transparency: 1 },
    },
    // The notebook's scrollbar slider.
    scrollbar: {
      slider: {
        background: { color: 'blue', luminance: 'r300', transparency: 0.5 },
        hoverBackground: { color: 'blue', luminance: 'r300', transparency: 0.75 },
        activeBackground: { color: 'blue', luminance: 'r300', transparency: 1 },
      },
    },
    interactive: {
      codeBorder: {
        active: { color: 'blue', luminance: 'r300', transparency: 1 },
        inactive: { color: 'blue', luminance: 'r300', transparency: 0.5 },
      },
    },
  },
} as const

// Syntax. One token per rule, grouped by TextMate top-level scope, named by meaning.
// A token with no colour only sets a style.
export const SYNTAX = {
  standard: {
    default: { color: { color: 'foreground', luminance: 'r500', transparency: 1 } },
    variable: { color: { color: 'foreground', luminance: 'r500', transparency: 1 } },
    variableLanguage: { color: { color: 'foreground', luminance: 'r500', transparency: 1 } },
    constant: { color: { color: 'foreground', luminance: 'r500', transparency: 1 } },
    enumMember: { color: { color: 'foreground', luminance: 'r500', transparency: 1 } },
  },
  comment: {
    line: { color: { ...SEMANTICS.syntax.comment, transparency: 1 } },
    block: { color: { ...SEMANTICS.syntax.comment, transparency: 1 } },
  },
  entity: {
    base: { color: { color: 'blue', luminance: 'r300', transparency: 1 } },
    filename: { color: { color: 'lime', luminance: 'r300', transparency: 1 } },
    supportProperty: { color: { color: 'blue', luminance: 'r300', transparency: 1 } },
    objectArray: { color: { color: 'blue', luminance: 'r300', transparency: 1 } },
    namespace: { color: { color: 'azure', luminance: 'r300', transparency: 1 } },
    alias: { color: { color: 'azure', luminance: 'r300', transparency: 1 } },
    enum: { color: { color: 'blue', luminance: 'r300', transparency: 1 } },
  },
  constant: {
    base: { color: { color: 'violet', luminance: 'r300', transparency: 1 } },
    symbol: { color: { color: 'violet', luminance: 'r300', transparency: 1 } },
  },
  keyword: {
    control: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
    new: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
    operator: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
    declaration: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
    label: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
    preprocessor: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
  },
  function: {
    base: { color: { color: 'blue', luminance: 'r300', transparency: 1 } },
    constructor: { color: { color: 'blue', luminance: 'r300', transparency: 1 } },
    parameter: { color: { color: 'orange', luminance: 'r300', transparency: 1 } },
    parentSelector: { color: { color: 'orange', luminance: 'r300', transparency: 1 } },
    propertyAccess: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
  },
  decorator: {
    base: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
    object: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
  },
  punctuation: {
    base: { color: { color: 'foreground', luminance: 'r500', transparency: 1 } },
    tag: { color: { color: 'pink', luminance: 'r300', transparency: 1 } },
    embedded: { color: { color: 'foreground', luminance: 'r500', transparency: 1 } },
  },
  storage: {
    modifier: { color: { color: 'cyan', luminance: 'r300', transparency: 1 } },
    type: { color: { color: 'purple', luminance: 'r300', transparency: 1 } },
  },
  string: {
    base: { color: { color: 'teal', luminance: 'r300', transparency: 1 } },
    regexp: { color: { color: 'citron', luminance: 'r300', transparency: 1 } },
    regexpEscape: { color: { color: 'cyan', luminance: 'r300', transparency: 1 } },
  },
  type: {
    base: { color: { color: 'pink', luminance: 'r300', transparency: 1 } },
    class: { color: { color: 'fuchsia', luminance: 'r300', transparency: 1 } },
  },
  support: {
    base: { color: { color: 'yellow', luminance: 'r300', transparency: 1 } },
  },
  // CSS selectors.
  selector: {
    base: { color: { color: 'rose', luminance: 'r300', transparency: 1 } },
    pseudo: { color: { color: 'orange', luminance: 'r300', transparency: 1 } },
  },
  invalid: {
    base: { color: { color: 'red', luminance: 'r300', transparency: 1 } },
    broken: { color: { color: 'red', luminance: 'r300', transparency: 0.8 } },
    illegal: { color: { color: 'red', luminance: 'r300', transparency: 0.5 } },
    deprecated: { strikethrough: true },
    unimplemented: { italic: true },
  },
  // Markdown. Syntax recedes, content comes forward, and no two adjacent elements share a
  // hue. TextMate never merges fontStyle, so every style combination is its own token.
  markup: {
    base: { color: { color: 'foreground', luminance: 'r500', transparency: 1 } },
    string: { color: { color: 'teal', luminance: 'r300', transparency: 1 } },
    math: { color: { color: 'pink', luminance: 'r300', transparency: 1 } },
    metadata: { color: { color: 'midground', luminance: 'r500', transparency: 1 } },
    punctuation: { color: { color: 'midground', luminance: 'r500', transparency: 1 } },
    headingWrapper: { color: { color: 'yellow', luminance: 'r300', transparency: 1 } },
    heading: { color: { color: 'rose', luminance: 'r300', transparency: 1 }, bold: true },
    // l500 on purpose: the one step that clears ~4:1 against both backgrounds.
    subheading: { color: { color: 'rose', luminance: 'r500', transparency: 1 }, bold: true },
    table: { color: { color: 'emerald', luminance: 'r300', transparency: 1 } },
    separator: { color: { color: 'midground', luminance: 'r500', transparency: 1 } },
    list: { color: { color: 'violet', luminance: 'r300', transparency: 1 } },
    code: { color: { color: 'cyan', luminance: 'r300', transparency: 1 } },
    quote: { color: { color: 'yellow', luminance: 'r300', transparency: 1 } },
    citation: { color: { color: 'fuchsia', luminance: 'r300', transparency: 1 } },
    linkUri: { color: { color: 'azure', luminance: 'r300', transparency: 1 }, underline: true },
    linkText: { color: { color: 'blue', luminance: 'r300', transparency: 1 } },
    reference: { color: { color: 'blue', luminance: 'r300', transparency: 1 } },
    italic: { color: { color: 'orange', luminance: 'r300', transparency: 1 }, italic: true },
    bold: { color: { color: 'orange', luminance: 'r300', transparency: 1 }, bold: true },
    underline: { underline: true },
    strikethrough: { strikethrough: true },
    boldItalic: { bold: true, italic: true },
    boldStrikethrough: { bold: true, strikethrough: true },
    italicStrikethrough: { italic: true, strikethrough: true },
    boldItalicStrikethrough: { bold: true, italic: true, strikethrough: true },
    boldUnderline: { bold: true, underline: true },
    italicUnderline: { italic: true, underline: true },
    boldItalicUnderline: { bold: true, italic: true, underline: true },
    diff: { color: { ...SEMANTICS.git.diff, transparency: 0.8 } },
    added: { color: { ...SEMANTICS.git.added, transparency: 0.8 } },
    ignored: { color: { ...SEMANTICS.git.ignored, transparency: 0.8 } },
    untracked: { color: { ...SEMANTICS.git.untracked, transparency: 0.8 } },
    modified: { color: { ...SEMANTICS.git.modified, transparency: 0.8 } },
    removed: { color: { ...SEMANTICS.git.deleted, transparency: 1 } },
  },
} as const
