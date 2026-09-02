// generator.ts — the main script. Writes every theme file into themes/ and installs it into
// the local editors. The lab settings go where .config.json's `lab` says.

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import { homedir } from 'os'
import { fileURLToPath } from 'url'
import { createTheme } from './compiler.ts'
import { createLabCustomizations, createLabTheme, createWorkspaceSettings, installGlobalLab, reportContrast, type TIConfig, type TIPackage } from './util/index.ts'

// ===== ====== =====
// ===== CONFIG =====
// ===== ====== =====

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')
const OUTPUT_DIR = resolve(__dirname, '../themes')
const home = homedir()

const config = JSON.parse(readFileSync(resolve(__dirname, '../.config.json'), 'utf8')) as TIConfig
const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf8')) as TIPackage

// The installed extension folder is <publisher>.<name>, as VS Code and Positron lay it out.
const EXTENSION = `${pkg.publisher}.${pkg.name}`
const POSITRON_DIR = resolve(home, config.folders.positron, EXTENSION, 'themes')
const VS_DIR = resolve(home, config.folders.vscode, EXTENSION, 'themes')
const ZED_DIR = resolve(home, config.folders.zed)

const WORKSPACE_DIR = resolve(__dirname, '../.vscode')
const VS_SETTINGS = resolve(home, config.files.vscodeSettings)

// The lab colour. Alternatives: #ff11ff #11ffff #ff1111 #1111ff #ffff11 #ffffff #000000
const TEST_COLOR = '#11ff11'
const LAB_NAMES = { dark: config.darkLab.name, light: config.lightLab.name }

// ===== ===== =====
// ===== THEME =====
// ===== ===== =====

// Both editors for both modes, rendered once.
const dark = createTheme(config.dark.name, 'dark')
const light = createTheme(config.light.name, 'light')

const zedFile = {
  $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
  name: config.name,
  author: config.author,
  themes: [dark.zed, light.zed],
}

// ===== === =====
// ===== RUN =====
// ===== === =====

console.log('\n-----------------')
console.log('Generating themes')
console.log('-----------------\n')

mkdirSync(OUTPUT_DIR, { recursive: true })
console.log('Directories created successfully')

// Write into a local editor's folder. Returns the editor's name when the folder is missing.
const install = (dir: string, editor: string, fileName: string, contents: string): string[] => {
  if (!existsSync(dir)) return [editor]
  writeFileSync(resolve(dir, fileName), contents)
  return []
}

const write = (fileName: string, contents: string): string[] => {
  writeFileSync(resolve(OUTPUT_DIR, fileName), contents)
  return [...install(POSITRON_DIR, 'Positron', fileName, contents), ...install(VS_DIR, 'VS Code', fileName, contents)]
}

const skippedThemes = [
  ...write(`${config.dark.fileName}.json`, JSON.stringify(dark.vscode, null, 2)),
  ...write(`${config.light.fileName}.json`, JSON.stringify(light.vscode, null, 2)),
]
console.log('Dark theme generated successfully')
console.log('Light theme generated successfully')

const darkLab = createLabTheme(config.darkLab.name, dark.vscode, TEST_COLOR)
const lightLab = createLabTheme(config.lightLab.name, light.vscode, TEST_COLOR)
const skippedLabs = [
  ...write(`${config.darkLab.fileName}.json`, JSON.stringify(darkLab, null, 2)),
  ...write(`${config.lightLab.fileName}.json`, JSON.stringify(lightLab, null, 2)),
]
console.log(`Lab themes generated successfully (${Object.keys(dark.vscode.colors).length} keys each)`)

const zedContents = JSON.stringify(zedFile, null, 2)
writeFileSync(resolve(OUTPUT_DIR, `${config.fileName}-zed.json`), zedContents)
const skippedZed = install(ZED_DIR, 'Zed', `${config.fileName}.json`, zedContents)
console.log('Zed themes generated successfully')

const skipped = new Set([...skippedThemes, ...skippedLabs, ...skippedZed])

// ===== === =====
// ===== LAB =====
// ===== === =====

const customizations = createLabCustomizations(LAB_NAMES, dark.vscode, light.vscode)

if (config.lab !== 'none') {
  mkdirSync(WORKSPACE_DIR, { recursive: true })
  writeFileSync(resolve(WORKSPACE_DIR, 'settings.json'), JSON.stringify(createWorkspaceSettings(LAB_NAMES, customizations), null, 2))
  console.log('Workspace lab settings written successfully')
}

if (config.lab === 'global') installGlobalLab(VS_SETTINGS, customizations)

for (const editor of skipped) console.log(`Skipped ${editor}: no install folder`)

console.log('\n-----------------------------')
console.log('Themes generated successfully')
console.log('-----------------------------\n')

// ===== ======== =====
// ===== CONTRAST =====
// ===== ======== =====

reportContrast([dark.vscode, light.vscode], [dark.zed, light.zed], { text: 4.5, ui: 3 })
