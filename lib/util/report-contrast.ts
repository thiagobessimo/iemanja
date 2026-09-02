// Warnings only. Every foreground is flattened over its ground and everything below its
// floor is tabled, worst first; `!!` marks pairs below 3:1.

import { contrastRatio } from './contrast-ratio.ts'
import { flatten } from './flatten.ts'
import type { TIContrastFloors, TIContrastRow, TIVSTheme, TIZedTheme } from './types.ts'

// One foreground against its ground, before flattening.
type TIPair = { theme: string; kind: string; key: string; value: string; ground: string; groundKey: string }

// Every pair a VS Code theme offers: UI foregrounds, token rules, semantic rules.
const vsPairs = (theme: TIVSTheme): TIPair[] => {
  const colors = theme.colors
  const editorGround = colors['editor.background']

  // The ground for a foreground key: its background sibling if the theme sets
  // one, else its component's background, else the editor's.
  const groundFor = (key: string): [string, string] => {
    const sibling = key.replace(/[Ff]oreground/, (word) => (word === 'Foreground' ? 'Background' : 'background'))
    const siblingFlat = sibling !== key && colors[sibling] ? flatten(colors[sibling], editorGround) : undefined
    if (siblingFlat) return [siblingFlat, sibling]
    const component = key.includes('.') ? `${key.split('.')[0]}.background` : ''
    const componentFlat = component && colors[component] ? flatten(colors[component], editorGround) : undefined
    if (componentFlat) return [componentFlat, component]
    return [editorGround, 'editor.background']
  }

  const ui = Object.entries(colors)
    .filter(([key]) => /[Ff]oreground/.test(key))
    .map(([key, value]) => {
      const [ground, groundKey] = groundFor(key)
      return { theme: theme.name, kind: 'ui', key, value, ground, groundKey }
    })
  const tokens = theme.tokenColors.flatMap((rule) =>
    rule.settings.foreground
      ? [{ theme: theme.name, kind: 'token', key: rule.name ?? 'default', value: rule.settings.foreground, ground: editorGround, groundKey: 'editor.background' }]
      : [],
  )
  const semantic = Object.entries(theme.semanticTokenColors.rules).map(([key, value]) => ({
    theme: theme.name,
    kind: 'semantic',
    key,
    value,
    ground: editorGround,
    groundKey: 'editor.background',
  }))
  return [...ui, ...tokens, ...semantic]
}

// Every pair a Zed theme offers: its syntax colours.
const zedPairs = (theme: TIZedTheme): TIPair[] => {
  const ground = theme.style['editor.background'] as string
  return Object.entries(theme.style.syntax).flatMap(([key, entry]) =>
    entry.color ? [{ theme: theme.name, kind: 'zed', key, value: entry.color, ground, groundKey: 'editor.background' }] : [],
  )
}

export const reportContrast = (vsThemes: TIVSTheme[], zedThemes: TIZedTheme[], floors: TIContrastFloors) => {
  const pairs = [...vsThemes.flatMap(vsPairs), ...zedThemes.flatMap(zedPairs)]

  // Flatten each foreground over its ground. A fully transparent value has nothing to check.
  const checked = pairs.flatMap((pair) => {
    const foreground = flatten(pair.value, pair.ground)
    return foreground ? [{ ...pair, foreground }] : []
  })

  const rows: TIContrastRow[] = checked
    .map(({ theme, kind, key, foreground, ground, groundKey }) => ({
      theme,
      kind,
      key,
      foreground,
      ground,
      groundKey,
      ratio: contrastRatio(foreground, ground),
      floor: kind === 'ui' ? floors.ui : floors.text,
    }))
    .filter((row) => row.ratio < row.floor)
  const sorted = [...rows].sort((a, b) => a.ratio - b.ratio)

  console.log(`Contrast: ${checked.length} pairs checked, ${sorted.length} below their floor (text ${floors.text}:1, ui ${floors.ui}:1)`)
  if (sorted.length === 0) return
  const headers = ['RATIO', 'WANTS', 'THEME', 'KIND', 'KEY', 'FOREGROUND', 'ON', 'GROUND']
  const table = sorted.map((row) => [
    row.ratio.toFixed(2) + (row.ratio < 3 ? ' !!' : ' !'),
    row.floor.toFixed(1),
    row.theme,
    row.kind,
    row.key,
    row.foreground,
    row.ground,
    row.groundKey,
  ])
  const widths = headers.map((header, column) => Math.max(header.length, ...table.map((row) => row[column].length)))
  const line = (cells: string[]) => cells.map((cell, column) => cell.padEnd(widths[column])).join('  ')
  console.log(`\n${line(headers)}`)
  for (const row of table) console.log(line(row))
  console.log()
}
