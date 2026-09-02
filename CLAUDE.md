# Iemanjá

A colour theme for VS Code, Positron, and Zed. One TypeScript generator produces every theme file.

- **Iemanjá** is the dark theme. Named after the Yorubá and Brazilian goddess of the sea.
- **Iara** is the light theme. Named after the indigenous guardian of the waters.

## Discipline

**Work on `main`.** Do not create branches. Commit directly to `main` and never push. This is a single-author repository and branches only add friction here.

**Bump the version with every commit.** Each commit changes `version` in `package.json`. A patch
bump (`0.0.x`) for most changes, a minor bump (`0.x.0`) for changes to the structure, and a major
bump (`x.0.0`) only when User has approved it.

**Write plain English.** Uncomplicated, minimal, direct. This applies to commit messages, code
comments, and anything written back to the user. No filler, no hedging, no ceremony. Say the thing.

**Never hand-edit files in `themes/`.** They are generated. Edit the files in `lib/` and re-run the generator. A hand edit is silently destroyed on the next run.

## Repository

```
lib/palette.ts     The values: OKLCH seeds, roles, semantic names, the UI tree, the SYNTAX tree.
lib/compiler.ts    The wiring: blocks that map VS Code and Zed keys onto the palette, and
                   createTheme, which renders both editors for one mode.
lib/util/          The machinery, one function per file: the ramp, OKLCH maths, the channel
                   resolver, the lab rig, the contrast report. `types.ts` holds every type;
                   `index.ts` re-exports everything, import from there.
lib/generator.ts   The script: reads the config, renders both modes, writes and installs the files.
.config.json    Names, filenames, and install paths.
themes/         Generated output. Do not edit by hand.
```

Every UI key has a leaf in `UI` or `OVERRIDES` in `palette.ts` and a line in a block in
`compiler.ts`; `createTheme` only spreads the blocks. A block owns a VS Code key root completely, so
that a search for the root finds one place. To add a key: add the leaf, add the line to its block.
A new root gets a new block and a new spread.

The Zed blocks (`ZED_*`) read the same leaves wherever Zed and VS Code name the same element, so
one leaf paints both editors. A Zed key whose VS Code twin is in doubt carries a literal channel in
its block instead of a palette leaf; that is a decision still to be made, kept visible where it
sits.

Syntax follows the same shape. `SYNTAX` in `palette.ts` holds one token per rule, a channel plus
bold, italic, underline, and strikethrough flags, grouped by TextMate top-level scope. The
`TOKEN_*` blocks wire TextMate scopes to tokens and render as `tokenColors`; `SEMANTIC_TOKENS`
wires semantic selectors; `ZED_SYNTAX` wires Zed's keys. Every Zed syntax key reads a token or a
UI leaf, none carries a literal. Zed drops the underline and strikethrough flags.

Run `npm run theme`. It writes five files (the two themes, their lab twins, and the Zed file) into
`themes/` and installs them into the local editors, skipping any editor that is not installed:

| Output | Also written to |
|---|---|
| `themes/iemanja.json` | the installed extension's folder in VS Code and Positron |
| `themes/iara.json` | the installed extension's folder in VS Code and Positron |
| `themes/iemanja-zed.json` | `~/.config/zed/themes/iemanja.json` |

The `lab` field in `.config.json` decides where the lab settings go: `none`, `local` (the repo's
`.vscode/settings.json`), or `global` (that, and the generated block in the user's own VS Code
`settings.json`). Paths in `.config.json` are home-relative; the extension folder name is
`<publisher>.<name>` from `package.json`.

There is no build, no test, and no lint step. `npm run theme` is the entire toolchain.

## `createTheme` in `compiler.ts`

One call per mode returns `{ vscode, zed }`. The generator calls it twice, once for each mode,
and writes both halves.

| Half | What it is |
|---|---|
| `vscode` | `colors` (UI blocks) then `tokenColors` (token blocks) then `semanticTokenColors`. |
| `zed` | Zed's UI blocks and its `syntax` block. |

The colours themselves live in `lib/palette.ts`: the OKLCH seeds, the role and semantic maps.
Start there.

The token blocks are one per TextMate top-level scope, rendered in this order: STANDARD, COMMENT,
ENTITY, CONSTANT, KEYWORD, FUNCTION, DECORATOR, PUNCTUATION, STORAGE, STRING, TYPE, SUPPORT,
INVALID, MARKUP. All markdown lives under MARKUP. Order matters: TextMate breaks ties between
equally specific selectors by taking the later rule.

## The palette

Every colour is an OKLCH seed in `lib/palette.ts`; the golden-ratio ramp derives eleven luminance steps
l050–l950 from it, and `l500` is the seed itself. To change a colour, change its seed.

Every declaration is a channel: `paint({ color, luminance, transparency })`. `color` is a hue, a
role, or a semantic name (`git.added`, `status.error`, …); `transparency` is 0..1. `luminance` is
the load-bearing part: **l-values are absolute** (the same step in both themes), **r-values are
relative** (authored as seen in the dark theme, the anchor, and mirrored across `l500` in Iara —
`r300` means `l300` in dark, `l700` in light). Default is `r500`, the mirror's fixed point. A
genuine per-mode divergence is a `{ dark, light }` pair of complete channels, l-values only.

The hues are the 18 named ones (red, brown, orange, yellow, citron, lime, green, emerald, teal,
cyan, azure, blue, marine, purple, violet, fuchsia, pink, rose) plus white, grey, and black,
identical in both themes. Five *role* colours flip between themes:

| Role | Dark theme | Light theme |
|---|---|---|
| `foreground` | white | black |
| `background` | black | white |
| `midground` | grey | grey |
| `accent` | rose | blue |
| `special` | blue | rose |

`SEMANTICS` in `lib/palette.ts` maps semantic names (`git.added`, `status.error`, `indent.depth1`, …)
onto those hues so meaning is declared in one place.

### The one rule that matters

**Text is relative, surfaces are absolute.**

Text uses r-values (`r300` for chromatic tokens): bright enough on black in dark, mirrored dark
enough on white in light. Getting this wrong produces a very specific symptom: colours that look
**too bright in light mode and too dark in dark mode**. If a user reports that, look for an l-value
where an r-value belongs.

Background surfaces use l-values, because **surfaces do not flip — they deepen**. A surface that
should sit behind the editor uses `l700` in both themes: `#070b15` in dark, `#dddddd` in light,
both a step further out than the editor's `l500` background. Only the direction matters, and away
is darker either way. An r-value on a surface caused a real bug in the old notation: the strip
around the tabs came out *lighter* than the tabs in dark mode while light mode looked correct. If
tabs, panels, or sidebars lose their separation in exactly one theme, check for an r-value on a
surface.

Markdown headings 4–6 are the deliberate exception: `rose` at `l500` for both, the one step that
clears ~4:1 against *both* backgrounds, so it reads as a dimmer heading either way.

### Lightness is not uniform across hues

This is the thing that is not obvious and cost real time to find. The ramp steps lightness by a
fixed amount per hue, but hues are not equally light to begin with: yellow through cyan are
intrinsically *light* and their `l700` can land too pale for a white background; marine through
violet are intrinsically *dark* and their `l300` can land too dim for a black one. Since the switch
to ramp-derived steps the seeds carry this burden — a hue that fails contrast is fixed by moving
its seed, not by editing a step.

**If you add or change a colour, check its contrast before committing.** Do not trust the eye and
do not assume the ramp protects you. Marine's `l300` looked fine and was 2.9:1.

Four tokens sit below 4.5:1 on purpose: Metadata, Separator, Markdown Syntax Punctuation (all the
grey `midground` tier, ~4:1) and Headers 4–6. These are meant to recede or are bold display text,
where 3:1 is the right bar.

## Markdown

Markdown is declared once, in `SYNTAX.markup` in `palette.ts`. The `TOKEN_MARKUP` block and the
Zed `ZED_SYNTAX` block both read it, so the two editors agree by construction.

| Element | Hue | Style |
|---|---|---|
| Body | `foreground` | |
| Headings 1–3 | rose `r300` | bold |
| Headings 4–6 | rose `l500` | bold |
| Bold and italic | orange | bold / italic |
| Inline code, fenced code | cyan | |
| List markers | violet | |
| Tables | emerald | |
| Quotes and callouts | yellow | |
| Link text | blue | |
| Link URL | azure | underline |
| Citations | fuchsia | |
| Math | pink | |
| All syntax characters (`#`, backticks, `>`, `*`, fences) | `midground` | |

Two principles behind that table: **syntax recedes, content comes forward**, and **no two adjacent
markdown elements share a hue** — otherwise a bullet and a code span look identical.

### TextMate traps

- VS Code's markdown grammar emits `beginning.punctuation.definition.list.markdown` and
  `beginning.punctuation.definition.quote.markdown`. The older Sublime names
  (`punctuation.definition.list.begin.markdown`) are **not** emitted. Target both.
- `markup.list` wraps the entire list item *including its prose*, not just the marker. Style only the
  marker punctuation.
- TextMate never merges `fontStyle` — the winning rule replaces it wholesale. That is why every
  bold/italic/underline permutation needs its own rule. But `foreground` and `fontStyle` resolve
  *independently*, so a rule that sets only `fontStyle` still inherits colour from a less specific
  rule.

## Roadmap

- Zed exposes no keys for blockquotes or tables, so those two cannot be matched to VS Code yet.
- `semanticTokenColors` coverage is thin next to `tokenColors`. Adding a selector is one line in
  `SEMANTIC_TOKENS` pointing at an existing token.
