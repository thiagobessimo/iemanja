import type { TIToken } from './types.ts'

// VS Code's fontStyle string. Empty when no flag is set.
export const renderFontStyle = (token: TIToken): string =>
  [token.bold && 'bold', token.italic && 'italic', token.underline && 'underline', token.strikethrough && 'strikethrough'].filter(Boolean).join(' ')
