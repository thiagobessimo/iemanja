# Iemanjá

A colour theme for VS Code, Positron, and Zed, in a dark and a light version.

- **Iemanjá** is the dark theme, named after the Yorubá and Brazilian goddess of the sea.
- **Iara** is the light theme, named after the indigenous guardian of the waters.

Every colour is an OKLCH seed. A ramp derives eleven luminance steps from each seed, and one
declaration paints both editors and both modes.

## Install

VS Code and Positron: install the `Iemanjá` extension from the Marketplace.

Zed: copy `themes/iemanja-zed.json` to `~/.config/zed/themes/iemanja.json`.

## Build

```
npm install
npm run theme
```

Every run writes the five theme files into `themes/` and installs them: the VS Code and Positron
copies go into the installed extension's folder, the Zed copy into Zed's themes folder. An editor
that is not installed is skipped and named at the end of the run. So the first run after the
Marketplace install is enough to see the generated theme in the editor.

The `lab` field in `.config.json` controls the lab settings, which mirror every UI colour into
`workbench.colorCustomizations` so a change shows without reloading:

| `lab` | Writes |
|---|---|
| `none` | nothing |
| `local` | `.vscode/settings.json` in this repository |
| `global` | that, and the generated block in the user's own VS Code `settings.json`, which must already carry the two marker lines |

The install folders and the settings file path are in `.config.json`, relative to the home
directory. The extension folder name comes from `publisher` and `name` in `package.json`.

## Source

`CLAUDE.md` describes the structure of `lib/` and the rules the palette follows.

## Licence

MIT. See `license.md`.
