// Rewrites the workbench.colorCustomizations block between the two markers in the user's
// JSONC settings.json. Throws unless exactly one start marker sits above exactly one end marker.

import { copyFileSync, existsSync, readFileSync, renameSync, writeFileSync } from 'fs'
import type { TILabCustomizations } from './types.ts'

const LAB_START = '// START OF GENERATED BLOCK - DO NOT EDIT MANUALLY'
const LAB_END = '// END OF GENERATED BLOCK - DO NOT EDIT MANUALLY'

const findMarker = (lines: string[], marker: string): number[] =>
  lines.reduce<number[]>((found, line, index) => (line.trim() === marker ? [...found, index] : found), [])

// The two marker line numbers. Matched on the trimmed line, so indentation is free.
const locateBlock = (path: string, lines: string[]): [number, number] => {
  const starts = findMarker(lines, LAB_START)
  const ends = findMarker(lines, LAB_END)
  const say = (what: string, found: number[]) => `${found.length} ${what} markers (want exactly 1)`
  if (starts.length !== 1 || ends.length !== 1) throw new Error(`${path}: ${say('start', starts)}, ${say('end', ends)}`)
  if (starts[0] > ends[0]) throw new Error(`${path}: end marker is above the start marker`)
  return [starts[0], ends[0]]
}

// The ===== rule line above the start marker, or one sized to the marker if there is none.
const IS_RULE = /^\/\/ =+$/
const findRule = (lines: string[], start: number): string => {
  const above = (lines[start - 1] ?? '').trim()
  return IS_RULE.test(above) ? above : `// ${'='.repeat(LAB_START.length - 3)}`
}

// The block sits inside an object, so it carries the file's indentation and a trailing comma.
const emitBlock = (indent: string, rule: string, customizations: TILabCustomizations): string[] => {
  const body = JSON.stringify({ 'workbench.colorCustomizations': customizations }, null, 2)
    .split('\n')
    .slice(1, -1) //                                                            Drop the wrapping braces.
    .map((line, index, all) => indent + line.slice(2) + (index === all.length - 1 ? ',' : '')) // Re-indent onto the block's own column; comma on the last line.
  return [indent + rule, '', ...body, '', indent + rule]
}

export const installGlobalLab = (path: string, customizations: TILabCustomizations) => {
  if (!existsSync(path)) throw new Error(`${path}: no such file`)

  const lines = readFileSync(path, 'utf8').split('\n')
  const [start, end] = locateBlock(path, lines)
  const indent = lines[start].slice(0, lines[start].indexOf('//'))
  const rule = findRule(lines, start)
  const next = [...lines.slice(0, start + 1), ...emitBlock(indent, rule, customizations), ...lines.slice(end)]

  // Back up once, write beside the target, check the markers survived, then move it into place.
  const backup = `${path}.bak`
  if (!existsSync(backup)) copyFileSync(path, backup)

  const temp = `${path}.tmp`
  writeFileSync(temp, next.join('\n'))
  const written = readFileSync(temp, 'utf8').split('\n')
  const [checkStart, checkEnd] = locateBlock(temp, written)
  const region = written.slice(checkStart, checkEnd).join('\n')
  if (!region.includes('"workbench.colorCustomizations"')) throw new Error(`${temp}: block did not survive the rewrite`)
  renameSync(temp, path)

  const blocks = Object.keys(customizations)
  console.log(`Global lab settings written successfully (${blocks.length} blocks: ${blocks.join(', ')})`)
}
