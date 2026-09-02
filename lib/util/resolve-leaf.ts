import { resolveChannel } from './resolve-channel.ts'
import type { TILeaf, TIMode, TISplit } from './types.ts'

const isSplit = (leaf: TILeaf): leaf is TISplit => 'dark' in leaf && 'light' in leaf

export const resolveLeaf = (leaf: TILeaf, mode: TIMode): string => resolveChannel(isSplit(leaf) ? leaf[mode] : leaf, mode)
