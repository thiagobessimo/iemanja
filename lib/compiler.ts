import { OVERRIDES, SEMANTICS, SYNTAX, UI } from './palette.ts'
import {
  renderFontStyle,
  resolveLeaf,
  type TIBlock,
  type TILeaf,
  type TIMode,
  type TIStyleBlock,
  type TIToken,
  type TITokenBlock,
  type TIVSTheme,
  type TIZedTheme,
} from './util/index.ts'

// ===== ====== =====
// ===== GLOBAL =====
// ===== ====== =====
// Keys that paint every surface in the workbench unless a component overrides them.

export const GLOBAL_BASE: TIBlock = {
  foreground: UI.global.base.foreground, // Overall foreground color. This color is only used if not overridden by a component.
  disabledForeground: UI.global.base.disabledForeground, // Overall foreground for disabled elements. This color is only used if not overridden by a component.
  errorForeground: UI.global.base.errorForeground, // Overall foreground color for error messages (this color is only used if not overridden by a component).
  descriptionForeground: UI.global.base.descriptionForeground, // Foreground color for description text providing additional information, for example for a label.
  'icon.foreground': UI.global.base.iconForeground, // The default color for icons in the workbench.
  focusBorder: UI.global.base.focusBorder, // Overall border color for focused elements. This color is only used if not overridden by a component.
  contrastBorder: UI.global.base.contrastBorder, // An extra border around elements to separate them from others for greater contrast.
  contrastActiveBorder: UI.global.base.contrastActiveBorder, // An extra border around active elements to separate them from others for greater contrast.
  'selection.background': UI.global.base.selectionBackground, // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
  'sash.hoverBorder': UI.global.base.sashHoverBorder, // The hover border color for draggable sashes.
  'progressBar.background': UI.global.base.progressBarBackground, // Background color of the progress bar shown for long running operations.
}

// Modern layout surfaces: the ground the floating "cards" sit on.
export const GLOBAL_SURFACE: TIBlock = {
  'surface.background': UI.global.surface.background, // Background color of framed container surfaces ("cards"), such as the floating workbench panels in the modern layout.
  'surface.border': UI.global.surface.border, // Border color of framed container surfaces ("cards"), such as the floating workbench panels in the modern layout.
}

export const GLOBAL_WINDOW: TIBlock = {
  // Window border - The theme colors for VS Code window border. MacOS and Linux.
  'window.activeBorder': UI.global.window.activeBorder, // Border color for the active (focused) window.
  'window.inactiveBorder': UI.global.window.inactiveBorder, // Border color for the inactive (unfocused) windows.
}

export const GLOBAL_SCROLLBAR: TIBlock = {
  'scrollbar.shadow': UI.global.scrollbar.shadow, // Scrollbar slider shadow to indicate that the view is scrolled.
  'scrollbar.background': UI.global.scrollbar.background, // Scrollbar track background color.

  'scrollbarSlider.background': UI.global.scrollbar.slider.background, // Scrollbar slider background color.
  'scrollbarSlider.hoverBackground': UI.global.scrollbar.slider.hoverBackground, // Scrollbar slider background color when hovering.
  'scrollbarSlider.activeBackground': UI.global.scrollbar.slider.activeBackground, // Scrollbar slider background color when clicked on.
}

// ===== ====== =====
// ===== EDITOR =====
// ===== ====== =====
// Keys scoped to the editor and nothing else.

export const EDITOR_BASE: TIBlock = {
  'editor.foreground': UI.editor.foreground, // Editor default foreground color
  'editor.background': UI.editor.background, // Editor background color
  'editor.border': UI.editor.border, // Border color of the editor surface in the modern layout.
}

// ----- Header strip -----

export const EDITOR_GROUP_HEADER: TIBlock = {
  'editorGroupHeader.tabsBackground': UI.editor.editorGroupHeader.tabs.background, // Background color of the Tabs container.
  'editorGroupHeader.tabsBorder': UI.editor.editorGroupHeader.tabs.border, // Border color below the editor tabs control when tabs are enabled.
  'editorGroupHeader.noTabsBackground': UI.editor.editorGroupHeader.noTabs.background, // Background color of the editor group title header when using single Tab (set "workbench.editor.showTabs"": "single").
  'editorGroupHeader.border': UI.editor.editorGroupHeader.border, // Border color between editor group header and editor (below breadcrumbs if enabled).
}

export const EDITOR_TABS: TIBlock = {
  'tab.border': UI.editor.tab.border.base, // Border to separate Tabs from each other.
  'tab.dragAndDropBorder': UI.editor.tab.border.dragAndDrop, // Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
  'tab.lastPinnedBorder': UI.editor.tab.border.lastPinned, // Border on the right of the last pinned editor to separate from unpinned editors.

  'tab.selectedForeground': UI.editor.tab.selected.foreground, // Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
  'tab.selectedBackground': UI.editor.tab.selected.background, // Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
  'tab.selectedBorderTop': UI.editor.tab.selected.borderTop, // Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.

  'tab.activeForeground': UI.editor.tab.active.foreground, // Active Tab foreground color in an active group.
  'tab.activeBackground': UI.editor.tab.active.background, // Active Tab background color in an active group.
  'tab.activeBorderTop': UI.editor.tab.active.borderTop, // Top border for the active tab.
  'tab.activeBorder': UI.editor.tab.active.border, // Bottom border for the active tab.
  'tab.activeModifiedBorder': UI.editor.tab.active.modifiedBorder, // Border on the top of modified (dirty) active tabs in an active group.

  'tab.hoverForeground': UI.editor.tab.hover.foreground, // Tab foreground color when hovering
  'tab.hoverBackground': UI.editor.tab.hover.background, // Tab background color when hovering
  'tab.hoverBorder': UI.editor.tab.hover.border, // Border to highlight tabs when hovering

  'tab.inactiveForeground': UI.editor.tab.inactive.foreground, // Inactive Tab foreground color in an active group.
  'tab.inactiveBackground': UI.editor.tab.inactive.background, // Inactive Tab background color.
  'tab.inactiveModifiedBorder': UI.editor.tab.inactive.modifiedBorder, // Border on the top of modified (dirty) inactive tabs in an active group.

  'tab.unfocusedActiveForeground': UI.editor.tab.unfocused.active.foreground, // Active tab foreground color in an inactive editor group.
  'tab.unfocusedActiveBackground': UI.editor.tab.unfocused.active.background, // Active Tab background color in an inactive editor group.
  'tab.unfocusedActiveBorderTop': UI.editor.tab.unfocused.active.borderTop, // Top border for the active tab in an inactive editor group
  'tab.unfocusedActiveBorder': UI.editor.tab.unfocused.active.border, // Bottom border for the active tab in an inactive editor group.
  'tab.unfocusedActiveModifiedBorder': UI.editor.tab.unfocused.active.modifiedBorder, // Border on the top of modified (dirty) active tabs in an unfocused group.

  'tab.unfocusedHoverForeground': UI.editor.tab.unfocused.hover.foreground, // Tab foreground color in an unfocused group when hovering
  'tab.unfocusedHoverBackground': UI.editor.tab.unfocused.hover.background, // Tab background color in an unfocused group when hovering
  'tab.unfocusedHoverBorder': UI.editor.tab.unfocused.hover.border, // Border to highlight tabs in an unfocused group when hovering

  'tab.unfocusedInactiveForeground': UI.editor.tab.unfocused.inactive.foreground, // Inactive tab foreground color in an inactive editor group.
  'tab.unfocusedInactiveBackground': UI.editor.tab.unfocused.inactive.background, // Inactive Tab background color in an unfocused group
  'tab.unfocusedInactiveModifiedBorder': UI.editor.tab.unfocused.inactive.modifiedBorder, // Border on the top of modified (dirty) inactive tabs in an unfocused group.
}

export const EDITOR_BREADCRUMBS: TIBlock = {
  'breadcrumb.foreground': UI.editor.breadcrumb.foreground, // Color of breadcrumb items.
  'breadcrumb.background': UI.editor.breadcrumb.background, // Background color of breadcrumb items.
  'breadcrumb.focusForeground': UI.editor.breadcrumb.focusForeground, // Color of focused breadcrumb items.
  'breadcrumb.activeSelectionForeground': UI.editor.breadcrumb.activeSelection.foreground, // Color of selected breadcrumb items.
  'breadcrumbPicker.background': UI.editor.breadcrumb.picker.background, // Background color of breadcrumb item picker.
}

export const EDITOR_STICKY_SCROLL: TIBlock = {
  'editorStickyScroll.background': UI.editor.stickyScroll.background, // Editor sticky scroll background color.
  'editorStickyScroll.border': UI.editor.stickyScroll.border, // Border color of sticky scroll in the editor.
  'editorStickyScroll.shadow': UI.editor.stickyScroll.shadow, // Shadow color of sticky scroll in the editor.
  'editorStickyScrollGutter.background': UI.editor.stickyScroll.gutter.background, // Background color of the gutter part of sticky scroll in the editor.
  'editorStickyScrollHover.background': UI.editor.stickyScroll.hover.background, // Editor sticky scroll on hover background color.
}

// ----- Gutter strip -----

export const EDITOR_LINE_NUMBER: TIBlock = {
  'editorLineNumber.foreground': UI.editor.lineNumber.foreground, // Color of editor line numbers
  'editorLineNumber.activeForeground': UI.editor.lineNumber.activeForeground, // Color of the active editor line number.
  'editorLineNumber.dimmedForeground': UI.editor.lineNumber.dimmedForeground, // Color of the final editor line when editor.renderFinalNewline is set to dimmed.
}

export const EDITOR_GUTTER: TIBlock = {
  'editorGutter.background': UI.editor.gutter.background, // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.

  'editorGutter.addedBackground': UI.editor.gutter.git.added, // Editor gutter background color for lines that are added.
  'editorGutter.addedSecondaryBackground': UI.editor.gutter.git.addedSecondary, // Editor gutter secondary background color for lines that are added.
  'editorGutter.modifiedBackground': UI.editor.gutter.git.modified, // Editor gutter background color for lines that are modified.
  'editorGutter.modifiedSecondaryBackground': UI.editor.gutter.git.modifiedSecondary, // Editor gutter secondary background color for lines that are modified.
  'editorGutter.deletedBackground': UI.editor.gutter.git.deleted, // Editor gutter background color for lines that are deleted.
  'editorGutter.deletedSecondaryBackground': UI.editor.gutter.git.deletedSecondary, // Editor gutter secondary background color for lines that are deleted.

  'editorGutter.foldingControlForeground': UI.editor.gutter.foldingControl.foreground, // Color of the folding control in the editor gutter.
  'editorGutter.itemGlyphForeground': UI.editor.gutter.item.glyphForeground, // Editor gutter decoration color for gutter item glyphs.
  'editorGutter.itemBackground': UI.editor.gutter.item.background, // Editor gutter decoration color for gutter item background. This color should be opaque.
  'editorGutter.commentDraftGlyphForeground': UI.editor.gutter.comment.draftGlyph, // Editor gutter decoration color for commenting glyphs for comment threads with draft comments.
  'editorGutter.commentRangeForeground': UI.editor.gutter.comment.range, // Editor gutter decoration color for commenting ranges.
  'editorGutter.commentGlyphForeground': UI.editor.gutter.comment.glyph, // Editor gutter decoration color for commenting glyphs.
  'editorGutter.commentUnresolvedGlyphForeground': UI.editor.gutter.comment.unresolvedGlyph, // Editor gutter decoration color for commenting glyphs for unresolved comment threads.
}

// ----- Minimap and overview ruler -----
// The right-hand strip.

export const EDITOR_MINIMAP: TIBlock = {
  'minimap.background': UI.editor.minimap.background, // Minimap background color.
  'minimap.foregroundOpacity': UI.editor.minimap.foregroundOpacity, // Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.

  'minimapSlider.background': UI.editor.minimap.slider.background, // Minimap slider background color.
  'minimapSlider.hoverBackground': UI.editor.minimap.slider.hoverBackground, // Minimap slider background color when hovering.
  'minimapSlider.activeBackground': UI.editor.minimap.slider.activeBackground, // Minimap slider background color when clicked on.

  'minimap.findMatchHighlight': UI.editor.minimap.highlight.findMatch, // Highlight color for matches from search within files.
  'minimap.selectionHighlight': UI.editor.minimap.highlight.selection, // Highlight color for the editor selection.
  'minimap.selectionOccurrenceHighlight': UI.editor.minimap.highlight.selectionOccurrence, // Minimap marker color for repeating editor selections.
  'minimap.infoHighlight': UI.editor.minimap.highlight.info, // Minimap marker color for infos.
  'minimap.warningHighlight': UI.editor.minimap.highlight.warning, // Highlight color for warnings within the editor.
  'minimap.errorHighlight': UI.editor.minimap.highlight.error, // Highlight color for errors within the editor.
  'minimap.chatEditHighlight': UI.editor.minimap.highlight.chatEdit, // Color of pending edit regions in the minimap.

  'minimapGutter.addedBackground': UI.editor.minimap.gutter.added, // Minimap gutter color for added content.
  'minimapGutter.modifiedBackground': UI.editor.minimap.gutter.modified, // Minimap gutter color for modified content.
  'minimapGutter.deletedBackground': UI.editor.minimap.gutter.deleted, // Minimap gutter color for deleted content.
  'editorMinimap.inlineChatInserted': UI.editor.minimap.gutter.inlineChatInserted, // Minimap marker color for inline chat inserted content.
}

export const EDITOR_OVERVIEW_RULER: TIBlock = {
  'editorOverviewRuler.background': UI.editor.overviewRuler.background, // Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
  'editorOverviewRuler.border': UI.editor.overviewRuler.border, // Color of the overview ruler border.

  'editorOverviewRuler.findMatchForeground': UI.editor.overviewRuler.marker.findMatch, // Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.rangeHighlightForeground': UI.editor.overviewRuler.marker.rangeHighlight, // Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.selectionHighlightForeground': UI.editor.overviewRuler.marker.selectionHighlight, // Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.wordHighlightForeground': UI.editor.overviewRuler.marker.wordHighlight, // Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.wordHighlightStrongForeground': UI.editor.overviewRuler.marker.wordHighlightStrong, // Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.wordHighlightTextForeground': UI.editor.overviewRuler.marker.wordHighlightText, // Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.addedForeground': UI.editor.overviewRuler.marker.added, // Overview ruler marker color for added content.
  'editorOverviewRuler.modifiedForeground': UI.editor.overviewRuler.marker.modified, // Overview ruler marker color for modified content.
  'editorOverviewRuler.deletedForeground': UI.editor.overviewRuler.marker.deleted, // Overview ruler marker color for deleted content.
  'editorOverviewRuler.errorForeground': UI.editor.overviewRuler.marker.error, // Overview ruler marker color for errors.
  'editorOverviewRuler.warningForeground': UI.editor.overviewRuler.marker.warning, // Overview ruler marker color for warnings.
  'editorOverviewRuler.infoForeground': UI.editor.overviewRuler.marker.info, // Overview ruler marker color for infos.
  'editorOverviewRuler.bracketMatchForeground': UI.editor.overviewRuler.marker.bracketMatch, // Overview ruler marker color for matching brackets.
  'editorOverviewRuler.inlineChatInserted': UI.editor.overviewRuler.marker.inlineChatInserted, // Overview ruler marker color for inline chat inserted content.
  'editorOverviewRuler.inlineChatRemoved': UI.editor.overviewRuler.marker.inlineChatRemoved, // Overview ruler marker color for inline chat removed content.
  'editorOverviewRuler.commentDraftForeground': UI.editor.overviewRuler.marker.commentDraft, // Editor overview ruler decoration color for comment threads with draft comments. This color should be opaque.
  'editorOverviewRuler.commentForeground': UI.editor.overviewRuler.marker.comment, // Editor overview ruler decoration color for resolved comments. This color should be opaque.
  'editorOverviewRuler.commentUnresolvedForeground': UI.editor.overviewRuler.marker.commentUnresolved, // Editor overview ruler decoration color for unresolved comments. This color should be opaque.
  'editorOverviewRuler.currentContentForeground': UI.editor.overviewRuler.marker.currentContent, // Current overview ruler foreground for inline merge conflicts.
  'editorOverviewRuler.incomingContentForeground': UI.editor.overviewRuler.marker.incomingContent, // Incoming overview ruler foreground for inline merge conflicts.
  'editorOverviewRuler.commonContentForeground': UI.editor.overviewRuler.marker.commonContent, // Common ancestor overview ruler foreground for inline merge conflicts.
}

// ----- Body -----

export const EDITOR_CURSOR: TIBlock = {
  'editorCursor.foreground': UI.editor.cursor.foreground, // Color of the editor cursor.
  'editorCursor.background': UI.editor.cursor.background, // The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
  'editorMultiCursor.primary.foreground': UI.editor.cursor.multi.primary.foreground, // Color of the primary editor cursor when multiple cursors are present.
  'editorMultiCursor.primary.background': UI.editor.cursor.multi.primary.background, // The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
  'editorMultiCursor.secondary.foreground': UI.editor.cursor.multi.secondary.foreground, // Color of secondary editor cursors when multiple cursors are present.
  'editorMultiCursor.secondary.background': UI.editor.cursor.multi.secondary.background, // The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
}

// To see the editor indent guides, set
// "editor.guides.indentation": True,
// "editor.guides.highlightActiveIndentation": True,
export const EDITOR_GUIDE: TIBlock = {
  'editorBracketHighlight.unexpectedBracket.foreground': UI.editor.guide.unexpectedBracket, // Foreground color of unexpected brackets.

  'editorIndentGuide.background1': UI.editor.guide.indent.inactive.depth1, // Color of the editor indentation guides (2).
  'editorBracketHighlight.foreground1': UI.editor.guide.bracket.depth1, // Foreground color of brackets (1). Requires enabling bracket pair colorization.
  'editorBracketPairGuide.background1': UI.editor.guide.bracketPair.inactive.depth1, // Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
  'editorIndentGuide.activeBackground1': UI.editor.guide.indent.active.depth1, // Color of the active editor indentation guides (2).
  'editorBracketPairGuide.activeBackground1': UI.editor.guide.bracketPair.active.depth1, // Background color of active bracket pair guides (1). Requires enabling bracket pair guides.

  'editorIndentGuide.background2': UI.editor.guide.indent.inactive.depth2, // Color of the editor indentation guides (1).
  'editorBracketHighlight.foreground2': UI.editor.guide.bracket.depth2, // Foreground color of brackets (2). Requires enabling bracket pair colorization.
  'editorBracketPairGuide.background2': UI.editor.guide.bracketPair.inactive.depth2, // Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
  'editorIndentGuide.activeBackground2': UI.editor.guide.indent.active.depth2, // Color of the active editor indentation guides (1).
  'editorBracketPairGuide.activeBackground2': UI.editor.guide.bracketPair.active.depth2, // Background color of active bracket pair guides (2). Requires enabling bracket pair guides.

  'editorIndentGuide.background3': UI.editor.guide.indent.inactive.depth3, // Color of the editor indentation guides (4).
  'editorBracketHighlight.foreground3': UI.editor.guide.bracket.depth3, // Foreground color of brackets (3). Requires enabling bracket pair colorization.
  'editorBracketPairGuide.background3': UI.editor.guide.bracketPair.inactive.depth3, // Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
  'editorIndentGuide.activeBackground3': UI.editor.guide.indent.active.depth3, // Color of the active editor indentation guides (4).
  'editorBracketPairGuide.activeBackground3': UI.editor.guide.bracketPair.active.depth3, // Background color of active bracket pair guides (3). Requires enabling bracket pair guides.

  'editorIndentGuide.background4': UI.editor.guide.indent.inactive.depth4, // Color of the editor indentation guides (5).
  'editorBracketHighlight.foreground4': UI.editor.guide.bracket.depth4, // Foreground color of brackets (4). Requires enabling bracket pair colorization.
  'editorBracketPairGuide.background4': UI.editor.guide.bracketPair.inactive.depth4, // Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
  'editorIndentGuide.activeBackground4': UI.editor.guide.indent.active.depth4, // Color of the active editor indentation guides (5).
  'editorBracketPairGuide.activeBackground4': UI.editor.guide.bracketPair.active.depth4, // Background color of active bracket pair guides (4). Requires enabling bracket pair guides.

  'editorIndentGuide.background5': UI.editor.guide.indent.inactive.depth5, // Color of the editor indentation guides (6).
  'editorBracketHighlight.foreground5': UI.editor.guide.bracket.depth5, // Foreground color of brackets (5). Requires enabling bracket pair colorization.
  'editorBracketPairGuide.background5': UI.editor.guide.bracketPair.inactive.depth5, // Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
  'editorIndentGuide.activeBackground5': UI.editor.guide.indent.active.depth5, // Color of the active editor indentation guides (6).
  'editorBracketPairGuide.activeBackground5': UI.editor.guide.bracketPair.active.depth5, // Background color of active bracket pair guides (5). Requires enabling bracket pair guides.

  'editorIndentGuide.background6': UI.editor.guide.indent.inactive.depth6, // Color of the editor indentation guides (3).
  'editorBracketHighlight.foreground6': UI.editor.guide.bracket.depth6, // Foreground color of brackets (6). Requires enabling bracket pair colorization.
  'editorBracketPairGuide.background6': UI.editor.guide.bracketPair.inactive.depth6, // Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.
  'editorIndentGuide.activeBackground6': UI.editor.guide.indent.active.depth6, // Color of the active editor indentation guides (3).
  'editorBracketPairGuide.activeBackground6': UI.editor.guide.bracketPair.active.depth6, // Background color of active bracket pair guides (6). Requires enabling bracket pair guides.

  'editorBracketMatch.background': UI.editor.guide.bracketMatch.background, // Background color behind matching brackets.
  'editorBracketMatch.border': UI.editor.guide.bracketMatch.border, // Color for matching brackets boxes.
  'editorBracketMatch.foreground': UI.editor.guide.bracketMatch.foreground, // Foreground color for matching brackets.
}

// ----- Selection -----
// Selection colors are visible when selecting one or more characters. In
// addition to the selection also all regions with the same content are highlighted.

export const EDITOR_SELECTION: TIBlock = {
  'editor.selectionForeground': UI.editor.selection.foreground, // Color of the selection text.
  'editor.selectionBackground': UI.editor.selection.background, // Color of the selection.
  'editor.inactiveSelectionBackground': UI.editor.selection.inactiveBackground, // Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
  'editor.selectionHighlightBackground': UI.editor.selection.highlight.background, // Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
  'editor.selectionHighlightBorder': UI.editor.selection.highlight.border, // Border color for regions with the same content as the selection.
}

// ----- Text decorations -----

export const EDITOR_TEXT: TIBlock = {
  'editor.placeholder.foreground': UI.editor.text.placeholderForeground, // Foreground color of the placeholder text in the editor.
  'editor.compositionBorder': UI.editor.text.compositionBorder, // The border color for an IME composition.
  'editorWhitespace.foreground': UI.editor.text.whitespaceForeground, // Color of whitespace characters in the editor. To see the editor white spaces, enable Toggle Render Whitespace.
  'editorLink.activeForeground': UI.editor.text.linkActiveForeground, // Color of active links.
  'editorRuler.foreground': UI.editor.text.rulerForeground, // Color of the editor rulers.
  'editorCodeLens.foreground': UI.editor.text.codeLensForeground, // Foreground color of an editor CodeLens.

  'editor.foldBackground': UI.editor.text.fold.background, // Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
  'editor.foldPlaceholderForeground': UI.editor.text.fold.placeholderForeground, // Color of the collapsed text after the first line of a folded range.

  'editorUnnecessaryCode.border': UI.editor.text.unnecessaryCode.border, // Border color of unnecessary (unused) source code in the editor.
  'editorUnnecessaryCode.opacity': UI.editor.text.unnecessaryCode.opacity, // Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code instead of fading it out.

  'editorLightBulb.foreground': UI.editor.text.lightBulb.foreground, // The color used for the lightbulb actions icon.
  'editorLightBulbAi.foreground': UI.editor.text.lightBulb.aiForeground, // The color used for the lightbulb AI icon.
  'editorLightBulbAutoFix.foreground': UI.editor.text.lightBulb.autoFixForeground, // The color used for the lightbulb auto fix actions icon.

  'editor.snippetTabstopHighlightBackground': UI.editor.text.snippet.tabstop.background, // Highlight background color of a snippet tabstop.
  'editor.snippetTabstopHighlightBorder': UI.editor.text.snippet.tabstop.border, // Highlight border color of a snippet tabstop.
  'editor.snippetFinalTabstopHighlightBackground': UI.editor.text.snippet.finalTabstop.background, // Highlight background color of the final tabstop of a snippet.
  'editor.snippetFinalTabstopHighlightBorder': UI.editor.text.snippet.finalTabstop.border, // Highlight border color of the final tabstop of a snippet.
}

// ----- Diagnostics -----

export const EDITOR_DIAGNOSTIC: TIBlock = {
  'problemsErrorIcon.foreground': UI.editor.diagnostic.error.icon, // The color used for the problems error icon.
  'editorError.foreground': UI.editor.diagnostic.error.foreground, // Foreground color of error squiggles in the editor.
  'editorError.background': UI.editor.diagnostic.error.background, // Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
  'editorError.border': UI.editor.diagnostic.error.border, // Border color of error boxes in the editor.

  'problemsWarningIcon.foreground': UI.editor.diagnostic.warning.icon, // The color used for the problems warning icon.
  'editorWarning.foreground': UI.editor.diagnostic.warning.foreground, // Foreground color of warning squiggles in the editor.
  'editorWarning.background': UI.editor.diagnostic.warning.background, // Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
  'editorWarning.border': UI.editor.diagnostic.warning.border, // Border color of warning boxes in the editor.

  'problemsInfoIcon.foreground': UI.editor.diagnostic.info.icon, // The color used for the problems info icon.
  'editorInfo.foreground': UI.editor.diagnostic.info.foreground, // Foreground color of info squiggles in the editor.
  'editorInfo.background': UI.editor.diagnostic.info.background, // Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
  'editorInfo.border': UI.editor.diagnostic.info.border, // Border color of info boxes in the editor.

  'editorHint.foreground': UI.editor.diagnostic.hint.foreground, // Foreground color of hints in the editor.
  'editorHint.border': UI.editor.diagnostic.hint.border, // Border color of hint boxes in the editor.
}

// To see the editor inline hints, set "editor.inlineSuggest.enabled": True.
export const EDITOR_INLAY_HINT: TIBlock = {
  'editorInlayHint.background': UI.editor.inlayHint.background, // Background color of inline hints.
  'editorInlayHint.foreground': UI.editor.inlayHint.foreground, // Foreground color of inline hints.
  'editorInlayHint.typeForeground': UI.editor.inlayHint.type.foreground, // Foreground color of inline hints for types
  'editorInlayHint.typeBackground': UI.editor.inlayHint.type.background, // Background color of inline hints for types
  'editorInlayHint.parameterForeground': UI.editor.inlayHint.parameter.foreground, // Foreground color of inline hints for parameters
  'editorInlayHint.parameterBackground': UI.editor.inlayHint.parameter.background, // Background color of inline hints for parameters
}

// ----- Debug decorations -----

export const EDITOR_DEBUG: TIBlock = {
  'editor.stackFrameHighlightBackground': UI.editor.debug.stackFrameHighlightBackground, // Background color of the top stack frame highlight in the editor.
  'editor.focusedStackFrameHighlightBackground': UI.editor.debug.focusedStackFrameHighlightBackground, // Background color of the focused stack frame highlight in the editor.
  'editor.inlineValuesForeground': UI.editor.debug.inlineValues.foreground, // Color for the debug inline value text.
  'editor.inlineValuesBackground': UI.editor.debug.inlineValues.background, // Color for the debug inline value background.

  // The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.
  'debugExceptionWidget.background': UI.editor.debug.exceptionWidget.background, // Exception widget background color.
  'debugExceptionWidget.border': UI.editor.debug.exceptionWidget.border, // Exception widget border color.
}

// ----- Editor groups -----
// Editor Groups are the containers of editors. There can be many editor groups.
// A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.

export const EDITOR_GROUP: TIBlock = {
  'editorGroup.border': UI.editor.editorGroup.border, // Color to separate multiple editor groups from each other.
  'editorGroup.dropBackground': UI.editor.editorGroup.dropBackground, // Background color when dragging editors around.
  'editorGroup.emptyBackground': UI.editor.editorGroup.emptyBackground, // Background color of an empty editor group.
  'editorGroup.focusedEmptyBorder': UI.editor.editorGroup.focusedEmptyBorder, // Border color of an empty editor group that is focused.
  'editorGroup.dropIntoPromptForeground': UI.editor.editorGroup.dropIntoPrompt.foreground, // Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
  'editorGroup.dropIntoPromptBackground': UI.editor.editorGroup.dropIntoPrompt.background, // Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
  'editorGroup.dropIntoPromptBorder': UI.editor.editorGroup.dropIntoPrompt.border, // Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.

  'editorPane.background': UI.editor.editorGroup.pane.background, // Background color of the editor pane visible on the left and right side of the centered editor layout.
  'sideBySideEditor.horizontalBorder': UI.editor.editorGroup.sideBySide.horizontalBorder, // Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
  'sideBySideEditor.verticalBorder': UI.editor.editorGroup.sideBySide.verticalBorder, // Color to separate two editors from each other when shown side by side in an editor group from left to right.
}

// ----- Highlights -----

export const EDITOR_HIGHLIGHT: TIBlock = {
  'editor.findMatchForeground': UI.editor.find.match.foreground, // Text color of the current search match.
  'editor.findMatchBackground': UI.editor.find.match.background, // Color of the current search match.
  'editor.findMatchBorder': UI.editor.find.match.border, // Border color of the current search match.
  'editor.findMatchHighlightForeground': UI.editor.find.match.highlight.foreground, // Foreground color of the other search matches.
  'editor.findMatchHighlightBackground': UI.editor.find.match.highlight.background, // Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
  'editor.findMatchHighlightBorder': UI.editor.find.match.highlight.border, // Border color of the other search matches.
  'editor.findRangeHighlightBackground': UI.editor.find.range.highlight.background, // Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
  'editor.findRangeHighlightBorder': UI.editor.find.range.highlight.border, // Border color the range limiting the search (Enable 'Find in Selection' in the find widget).

  'editor.wordHighlightBackground': UI.editor.word.highlight.background, // Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
  'editor.wordHighlightBorder': UI.editor.word.highlight.border, // Border color of a symbol during read-access, for example when reading a variable.
  'editor.wordHighlightStrongBackground': UI.editor.word.highlight.strong.background, // Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
  'editor.wordHighlightStrongBorder': UI.editor.word.highlight.strong.border, // Border color of a symbol during write-access, for example when writing to a variable.
  'editor.wordHighlightTextBackground': UI.editor.word.highlight.text.background, // Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
  'editor.wordHighlightTextBorder': UI.editor.word.highlight.text.border, // Border color of a textual occurrence for a symbol.

  'editor.lineHighlightBackground': UI.editor.line.highlight.background, // Background color for the highlight of line at the cursor position.
  'editor.lineHighlightBorder': UI.editor.line.highlight.border, // Background color for the border around the line at the cursor position.

  'editor.rangeHighlightBackground': UI.editor.range.highlight.background, // Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
  'editor.rangeHighlightBorder': UI.editor.range.highlight.border, // Background color of the border around highlighted ranges.

  'editor.symbolHighlightBackground': UI.editor.symbol.highlight.background, // Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
  'editor.symbolHighlightBorder': UI.editor.symbol.highlight.border, // Background color of the border around highlighted symbols.

  'editor.hoverHighlightBackground': UI.editor.hover.highlight.background, // Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.

  'editorUnicodeHighlight.background': UI.editor.unicode.highlight.background, // Background color used to highlight unicode characters.
  'editorUnicodeHighlight.border': UI.editor.unicode.highlight.border, // Border color used to highlight unicode characters.

  'editor.linkedEditingBackground': UI.editor.linkedEditing.background, // Background color when the editor is in linked editing mode.
}

// ===== ========= =====
// ===== TITLE BAR =====
// ===== ========= =====

export const TITLE_BAR: TIBlock = {
  'titleBar.border': UI.titleBar.border, // Title bar border color.

  'titleBar.activeForeground': UI.titleBar.active.foreground, // Title Bar foreground when the window is active.
  'titleBar.activeBackground': UI.titleBar.active.background, // Title Bar background when the window is active.

  'titleBar.inactiveForeground': UI.titleBar.inactive.foreground, // Title Bar foreground when the window is inactive.
  'titleBar.inactiveBackground': UI.titleBar.inactive.background, // Title Bar background when the window is inactive.
}

// ===== ============ =====
// ===== ACTIVITY BAR =====
// ===== ============ =====

export const ACTIVITY_BAR: TIBlock = {
  'activityBar.foreground': UI.activityBar.foreground, // Activity Bar foreground color (for example used for the icons).
  'activityBar.background': UI.activityBar.background, // Activity Bar background color.
  'activityBar.border': UI.activityBar.border, // Activity Bar border color with the Side Bar.
  'activityBar.inactiveForeground': UI.activityBar.inactiveForeground, // Activity Bar item foreground color when it is inactive.
  'activityBar.dropBorder': UI.activityBar.dropBorder, // Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.

  'activityBar.activeBackground': UI.activityBar.active.background, // Activity Bar optional background color for the active element.
  'activityBar.activeBorder': UI.activityBar.active.border, // Activity Bar active indicator border color.
  'activityBar.activeFocusBorder': UI.activityBar.active.focusBorder, // Activity bar focus border color for the active item.

  'activityBarTop.foreground': UI.activityBar.top.foreground, // Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
  'activityBarTop.background': UI.activityBar.top.background, // Background color of the activity bar when set to top / bottom.
  'activityBarTop.inactiveForeground': UI.activityBar.top.inactiveForeground, // Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
  'activityBarTop.dropBorder': UI.activityBar.top.dropBorder, // Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar.

  'activityBarTop.activeBackground': UI.activityBar.top.active.background, // Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
  'activityBarTop.activeBorder': UI.activityBar.top.active.border, // Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.

  'activityBarBadge.foreground': UI.activityBar.badge.foreground, // Activity notification badge foreground color.
  'activityBarBadge.background': UI.activityBar.badge.background, // Activity notification badge background color.
}

// ===== ======== =====
// ===== SIDE BAR =====
// ===== ======== =====

export const SIDE_BAR: TIBlock = {
  'sideBar.foreground': UI.sideBar.foreground, // Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
  'sideBar.background': UI.sideBar.background, // Side Bar background color.
  'sideBar.border': UI.sideBar.border, // Side Bar border color on the side separating the editor.
  'sideBar.dropBackground': UI.sideBar.dropBackground, // Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.

  'sideBarSectionHeader.foreground': UI.sideBar.sectionHeader.foreground, // Side Bar section header foreground color.
  'sideBarSectionHeader.background': UI.sideBar.sectionHeader.background, // Side Bar section header background color.
  'sideBarSectionHeader.border': UI.sideBar.sectionHeader.border, // Side bar section header border color.

  'sideBarTitle.foreground': UI.sideBar.title.foreground, // Side Bar title foreground color.
  'sideBarTitle.background': UI.sideBar.title.background, // Side bar title background color. The side bar is the container for views like explorer and search.
  'sideBarTitle.border': UI.sideBar.title.border, // Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search.

  'sideBarActivityBarTop.border': UI.sideBar.activityBarTop.border, // Border color between the activity bar at the top/bottom and the views.

  'sideBarStickyScroll.background': UI.sideBar.stickyScroll.background, // Background color of sticky scroll in the side bar.
  'sideBarStickyScroll.border': UI.sideBar.stickyScroll.border, // Border color of sticky scroll in the side bar.
  'sideBarStickyScroll.shadow': UI.sideBar.stickyScroll.shadow, // Shadow color of sticky scroll in the side bar.
}

// ===== ========== =====
// ===== STATUS BAR =====
// ===== ========== =====

export const STATUS_BAR: TIBlock = {
  'statusBar.foreground': UI.statusBar.foreground, // Bar foreground color.
  'statusBar.background': UI.statusBar.background, // Status Bar background color.
  'statusBar.border': UI.statusBar.border, // Bar border color separating the Status Bar and editor.
  'statusBar.focusBorder': UI.statusBar.focusBorder, // Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.

  'statusBar.debuggingForeground': UI.statusBar.debugging.foreground, // Bar foreground color when a program is being debugged.
  'statusBar.debuggingBackground': UI.statusBar.debugging.background, // Bar background color when a program is being debugged.
  'statusBar.debuggingBorder': UI.statusBar.debugging.border, // Bar border color separating the Status Bar and editor when a program is being debugged.

  'statusBar.noFolderForeground': UI.statusBar.noFolder.foreground, // Bar foreground color when no folder is opened.
  'statusBar.noFolderBackground': UI.statusBar.noFolder.background, // Bar background color when no folder is opened.
  'statusBar.noFolderBorder': UI.statusBar.noFolder.border, // Bar border color separating the Status Bar and editor when no folder is opened.

  'statusBarItem.activeBackground': UI.statusBar.item.activeBackground, // Status Bar item background color when clicking.
  'statusBarItem.focusBorder': UI.statusBar.item.focusBorder, // Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
  'statusBarItem.hoverForeground': UI.statusBar.item.hover.foreground, // Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
  'statusBarItem.hoverBackground': UI.statusBar.item.hover.background, // Status Bar item background color when hovering.
  'statusBarItem.compactHoverBackground': UI.statusBar.item.compact.hover.background, // Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.

  'statusBarItem.prominentForeground': UI.statusBar.item.prominent.foreground, // Status Bar prominent items foreground color.
  'statusBarItem.prominentBackground': UI.statusBar.item.prominent.background, // Status Bar prominent items background color.
  'statusBarItem.prominentHoverForeground': UI.statusBar.item.prominent.hover.foreground, // Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
  'statusBarItem.prominentHoverBackground': UI.statusBar.item.prominent.hover.background, // Status Bar prominent items background color when hovering.

  'statusBarItem.remoteForeground': UI.statusBar.item.remote.foreground, // Foreground color for the remote indicator on the status bar.
  'statusBarItem.remoteBackground': UI.statusBar.item.remote.background, // Background color for the remote indicator on the status bar.
  'statusBarItem.remoteHoverForeground': UI.statusBar.item.remote.hover.foreground, // Foreground color for the remote indicator on the status bar when hovering.
  'statusBarItem.remoteHoverBackground': UI.statusBar.item.remote.hover.background, // Background color for the remote indicator on the status bar when hovering.

  'statusBarItem.errorForeground': UI.statusBar.item.error.foreground, // Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
  'statusBarItem.errorBackground': UI.statusBar.item.error.background, // Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
  'statusBarItem.errorHoverForeground': UI.statusBar.item.error.hover.foreground, // Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
  'statusBarItem.errorHoverBackground': UI.statusBar.item.error.hover.background, // Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.

  'statusBarItem.warningForeground': UI.statusBar.item.warning.foreground, // Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
  'statusBarItem.warningBackground': UI.statusBar.item.warning.background, // Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
  'statusBarItem.warningHoverForeground': UI.statusBar.item.warning.hover.foreground, // Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
  'statusBarItem.warningHoverBackground': UI.statusBar.item.warning.hover.background, // Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.

  'statusBarItem.offlineForeground': UI.statusBar.item.offline.foreground, // Status bar item foreground color when the workbench is offline.
  'statusBarItem.offlineBackground': UI.statusBar.item.offline.background, // Status bar item background color when the workbench is offline.
  'statusBarItem.offlineHoverForeground': UI.statusBar.item.offline.hover.foreground, // Status bar item foreground hover color when the workbench is offline.
  'statusBarItem.offlineHoverBackground': UI.statusBar.item.offline.hover.background, // Status bar item background hover color when the workbench is offline.
}

// ===== ======== =====
// ===== TERMINAL =====
// ===== ======== =====

export const TERMINAL: TIBlock = {
  'terminal.foreground': UI.terminal.foreground, // The default foreground color of the Integrated Terminal.
  'terminal.background': UI.terminal.background, // The background of the Integrated Terminal's viewport.
  'terminal.border': UI.terminal.border, // The color of the border that separates split panes within the terminal. This defaults to panel.border.
  'terminal.dropBackground': UI.terminal.dropBackground, // The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
  'terminal.hoverHighlightBackground': UI.terminal.hoverHighlightBackground, // Color of the highlight when hovering a link in the terminal.
  'terminal.initialHintForeground': UI.terminal.initialHintForeground, // Foreground color of the terminal initial hint.
  'terminalCommandGuide.foreground': UI.terminal.commandGuideForeground, // The foreground color of the terminal command guide that appears to the left of a command and its output on hover.

  'terminal.selectionForeground': UI.terminal.selection.foreground, // The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
  'terminal.selectionBackground': UI.terminal.selection.background, // The selection background color of the terminal.
  'terminal.inactiveSelectionBackground': UI.terminal.selection.inactiveBackground, // The selection background color of the terminal when it does not have focus.

  'terminal.findMatchBackground': UI.terminal.findMatch.background, // Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
  'terminal.findMatchBorder': UI.terminal.findMatch.border, // Border color of the current search match in the terminal.
  'terminal.findMatchHighlightBackground': UI.terminal.findMatch.highlightBackground, // Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
  'terminal.findMatchHighlightBorder': UI.terminal.findMatch.highlightBorder, // Border color of the other search matches in the terminal.

  'terminalCursor.foreground': UI.terminal.cursor.foreground, // The foreground color of the terminal cursor.
  'terminalCursor.background': UI.terminal.cursor.background, // The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.

  'terminal.tab.activeBorder': UI.terminal.tab.activeBorder, // Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.

  'terminalCommandDecoration.defaultBackground': UI.terminal.commandDecoration.base, // The default terminal command decoration background color.
  'terminalCommandDecoration.successBackground': UI.terminal.commandDecoration.success, // The terminal command decoration background color for successful commands.
  'terminalCommandDecoration.errorBackground': UI.terminal.commandDecoration.error, // The terminal command decoration background color for error commands.

  'terminalOverviewRuler.border': UI.terminal.overviewRuler.border, // The overview ruler left-side border color.
  'terminalOverviewRuler.cursorForeground': UI.terminal.overviewRuler.cursorForeground, // The overview ruler cursor color.
  'terminalOverviewRuler.findMatchForeground': UI.terminal.overviewRuler.findMatchForeground, // Overview ruler marker color for find matches in the terminal.

  'terminalStickyScroll.background': UI.terminal.stickyScroll.background, // The background color of the sticky scroll overlay in the terminal.
  'terminalStickyScroll.border': UI.terminal.stickyScroll.border, // The border of the sticky scroll overlay in the terminal.
  'terminalStickyScrollHover.background': UI.terminal.stickyScroll.hover.background, // The background color of the sticky scroll overlay in the terminal when hovered.
}

// The sixteen slots programs address by name. The name is the slot, not the hue.
export const TERMINAL_ANSI: TIBlock = {
  'terminal.ansiBlack': UI.terminal.ansi.black, // Black ANSI color in the terminal.
  'terminal.ansiBrightBlack': UI.terminal.ansi.brightBlack, // Bright Black ANSI color in the terminal.
  'terminal.ansiWhite': UI.terminal.ansi.white, // White ANSI color in the terminal.
  'terminal.ansiBrightWhite': UI.terminal.ansi.brightWhite, // Bright White ANSI color in the terminal.
  'terminal.ansiRed': UI.terminal.ansi.red, // Red ANSI color in the terminal.
  'terminal.ansiBrightRed': UI.terminal.ansi.brightRed, // Bright Red ANSI color in the terminal.
  'terminal.ansiGreen': UI.terminal.ansi.green, // Green ANSI color in the terminal.
  'terminal.ansiBrightGreen': UI.terminal.ansi.brightGreen, // Bright Green ANSI color in the terminal.
  'terminal.ansiYellow': UI.terminal.ansi.yellow, // Yellow ANSI color in the terminal.
  'terminal.ansiBrightYellow': UI.terminal.ansi.brightYellow, // Bright Yellow ANSI color in the terminal.
  'terminal.ansiBlue': UI.terminal.ansi.blue, // Blue ANSI color in the terminal.
  'terminal.ansiBrightBlue': UI.terminal.ansi.brightBlue, // Bright Blue ANSI color in the terminal.
  'terminal.ansiMagenta': UI.terminal.ansi.magenta, // Magenta ANSI color in the terminal.
  'terminal.ansiBrightMagenta': UI.terminal.ansi.brightMagenta, // Bright Magenta ANSI color in the terminal.
  'terminal.ansiCyan': UI.terminal.ansi.cyan, // Cyan ANSI color in the terminal.
  'terminal.ansiBrightCyan': UI.terminal.ansi.brightCyan, // Bright Cyan ANSI color in the terminal.
}

// The icons in the terminal's suggest widget.
export const TERMINAL_SYMBOL_ICON: TIBlock = {
  'terminalSymbolIcon.aliasForeground': UI.terminal.symbolIcon.alias, // The foreground color for an alias icon. These icons will appear in the terminal suggest widget
  'terminalSymbolIcon.argumentForeground': UI.terminal.symbolIcon.argument, // The foreground color for an argument icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.branchForeground': UI.terminal.symbolIcon.branch, // The foreground color for a branch icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.commitForeground': UI.terminal.symbolIcon.commit, // The foreground color for a commit icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.fileForeground': UI.terminal.symbolIcon.file, // The foreground color for a file icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.flagForeground': UI.terminal.symbolIcon.flag, // The foreground color for an flag icon. These icons will appear in the terminal suggest widget
  'terminalSymbolIcon.folderForeground': UI.terminal.symbolIcon.folder, // The foreground color for a folder icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.inlineSuggestionForeground': UI.terminal.symbolIcon.inlineSuggestion, // The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.methodForeground': UI.terminal.symbolIcon.method, // The foreground color for a method icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.optionForeground': UI.terminal.symbolIcon.option, // The foreground color for an option icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.optionValueForeground': UI.terminal.symbolIcon.optionValue, // The foreground color for an enum member icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.pullRequestForeground': UI.terminal.symbolIcon.pullRequest, // The foreground color for a pull request icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.pullRequestDoneForeground': UI.terminal.symbolIcon.pullRequestDone, // The foreground color for a completed pull request icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.remoteForeground': UI.terminal.symbolIcon.remote, // The foreground color for a remote icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.stashForeground': UI.terminal.symbolIcon.stash, // The foreground color for a stash icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.symbolText': UI.terminal.symbolIcon.symbolText, // The foreground color for a plaintext suggestion. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.symbolicLinkFileForeground': UI.terminal.symbolIcon.symbolicLinkFile, // The foreground color for a symbolic link file icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.symbolicLinkFolderForeground': UI.terminal.symbolIcon.symbolicLinkFolder, // The foreground color for a symbolic link folder icon. These icons will appear in the terminal suggest widget.
  'terminalSymbolIcon.tagForeground': UI.terminal.symbolIcon.tag, // The foreground color for a tag icon. These icons will appear in the terminal suggest widget.
}

// ===== ========= =====
// ===== PEEK VIEW =====
// ===== ========= =====

export const PEEK_VIEW: TIBlock = {
  'peekView.border': UI.editor.peekView.border, // Color of the peek view borders and arrow.

  'peekViewEditor.background': UI.editor.peekView.editor.background, // Background color of the peek view editor.
  'peekViewEditor.matchHighlightBackground': UI.editor.peekView.editor.matchHighlight.background, // Match highlight color in the peek view editor.
  'peekViewEditor.matchHighlightBorder': UI.editor.peekView.editor.matchHighlight.border, // Match highlight border color in the peek view editor.
  'peekViewEditorGutter.background': UI.editor.peekView.editor.gutter.background, // Background color of the gutter in the peek view editor.
  'peekViewEditorStickyScroll.background': UI.editor.peekView.editor.stickyScroll.background, // Background color of sticky scroll in the peek view editor.
  'peekViewEditorStickyScrollGutter.background': UI.editor.peekView.editor.stickyScroll.gutter.background, // Background color of the gutter part of sticky scroll in the peek view editor.

  'peekViewResult.background': UI.editor.peekView.result.background, // Background color of the peek view result list.
  'peekViewResult.fileForeground': UI.editor.peekView.result.fileForeground, // Foreground color for file nodes in the peek view result list.
  'peekViewResult.lineForeground': UI.editor.peekView.result.lineForeground, // Foreground color for line nodes in the peek view result list.
  'peekViewResult.matchHighlightBackground': UI.editor.peekView.result.matchHighlight.background, // Match highlight color in the peek view result list.
  'peekViewResult.selectionBackground': UI.editor.peekView.result.selection.background, // Background color of the selected entry in the peek view result list.
  'peekViewResult.selectionForeground': UI.editor.peekView.result.selection.foreground, // Foreground color of the selected entry in the peek view result list.

  'peekViewTitle.background': UI.editor.peekView.title.background, // Background color of the peek view title area.
  'peekViewTitleDescription.foreground': UI.editor.peekView.title.description.foreground, // Color of the peek view title info.
  'peekViewTitleLabel.foreground': UI.editor.peekView.title.label.foreground, // Color of the peek view title.
}

// ===== ============ =====
// ===== NOTIFICATION =====
// ===== ============ =====

export const NOTIFICATION: TIBlock = {
  'notifications.foreground': UI.notification.foreground, // Notification foreground color.
  'notifications.background': UI.notification.background, // Notification background color.
  'notifications.border': UI.notification.border, // Notification border color separating from other notifications in the Notification Center.
  'notificationLink.foreground': UI.notification.link.foreground, // Notification links foreground color.

  'notificationToast.border': UI.notification.toast.border, // Notification toast border color.

  'notificationCenter.border': UI.notification.center.border, // Notification Center border color.
  'notificationCenterHeader.foreground': UI.notification.center.header.foreground, // Notification Center header foreground color.
  'notificationCenterHeader.background': UI.notification.center.header.background, // Notification Center header background color.

  'notificationsErrorIcon.foreground': UI.notification.icon.error, // The color used for the notification error icon.
  'notificationsWarningIcon.foreground': UI.notification.icon.warning, // The color used for the notification warning icon.
  'notificationsInfoIcon.foreground': UI.notification.icon.info, // The color used for the notification info icon.
}

// ===== ========= =====
// ===== OVERRIDES =====
// ===== ========= =====
// Surfaces that paint themselves whether or not the theme says anything.

// ----- Welcome page -----

export const WELCOME_PAGE: TIBlock = {
  'welcomePage.background': OVERRIDES.welcomePage.background, // Background color for the Welcome page.
  'welcomePage.progress.foreground': OVERRIDES.welcomePage.progress.foreground, // Foreground color for the Welcome page progress bars.
  'welcomePage.progress.background': OVERRIDES.welcomePage.progress.background, // Background color for the Welcome page progress bars.
  'welcomePage.tileBackground': OVERRIDES.welcomePage.tile.background, // Background color for the tiles on the Welcome page.
  'welcomePage.tileHoverBackground': OVERRIDES.welcomePage.tile.hover.background, // Hover background color for the tiles on the Welcome page.
  'welcomePage.tileBorder': OVERRIDES.welcomePage.tile.border, // Border color for the tiles on the Welcome page.

  // VS Code spells these two roots differently. Both are the walkthroughs.
  'walkThrough.embeddedEditorBackground': OVERRIDES.welcomePage.walkthrough.embeddedEditorBackground, // Background color for the embedded editors on the Interactive Playground.
  'walkthrough.stepTitle.foreground': OVERRIDES.welcomePage.walkthrough.stepTitleForeground, // Foreground color of the heading of each walkthrough step.
}

// ----- Settings editor -----
// These colors are for the GUI settings editor which can be opened with the
// Preferences: Open Settings (UI) command.

export const SETTINGS: TIBlock = {
  'settings.modifiedItemIndicator': OVERRIDES.settings.modifiedItemIndicator, // The line that indicates a modified setting.
  'settings.sashBorder': OVERRIDES.settings.sashBorder, // The color of the Settings editor splitview sash border.

  'settings.headerForeground': OVERRIDES.settings.header.foreground, // The foreground color for a section header or active title.
  'settings.headerBorder': OVERRIDES.settings.header.border, // The color of the header container border.
  'settings.settingsHeaderHoverForeground': OVERRIDES.settings.header.hover.foreground, // The foreground color for a section header or hovered title.

  'settings.focusedRowBackground': OVERRIDES.settings.row.focused.background, // Background color of a focused setting row.
  'settings.focusedRowBorder': OVERRIDES.settings.row.focused.border, // The color of the row's top and bottom border when the row is focused.
  'settings.rowHoverBackground': OVERRIDES.settings.row.hover.background, // The background color of a settings row when hovered.

  'settings.dropdownForeground': OVERRIDES.settings.dropdown.foreground, // Dropdown foreground.
  'settings.dropdownBackground': OVERRIDES.settings.dropdown.background, // Dropdown background.
  'settings.dropdownBorder': OVERRIDES.settings.dropdown.border, // Dropdown border.
  'settings.dropdownListBorder': OVERRIDES.settings.dropdown.listBorder, // Dropdown list border.

  'settings.checkboxForeground': OVERRIDES.settings.checkbox.foreground, // Checkbox foreground.
  'settings.checkboxBackground': OVERRIDES.settings.checkbox.background, // Checkbox background.
  'settings.checkboxBorder': OVERRIDES.settings.checkbox.border, // Checkbox border.

  'settings.textInputForeground': OVERRIDES.settings.textInput.foreground, // Text input box foreground.
  'settings.textInputBackground': OVERRIDES.settings.textInput.background, // Text input box background.
  'settings.textInputBorder': OVERRIDES.settings.textInput.border, // Text input box border.

  'settings.numberInputForeground': OVERRIDES.settings.numberInput.foreground, // Number input box foreground.
  'settings.numberInputBackground': OVERRIDES.settings.numberInput.background, // Number input box background.
  'settings.numberInputBorder': OVERRIDES.settings.numberInput.border, // Number input box border.
}

// ----- Notebook -----

export const NOTEBOOK: TIBlock = {
  'notebook.editorBackground': OVERRIDES.notebook.editorBackground, // Notebook background color.
  'notebook.symbolHighlightBackground': OVERRIDES.notebook.symbolHighlightBackground, // Background color of highlighted cell

  'notebook.cellEditorBackground': OVERRIDES.notebook.cell.background, // The color of the notebook cell editor background
  'notebook.cellBorderColor': OVERRIDES.notebook.cell.border, // The border color for notebook cells.
  'notebook.cellInsertionIndicator': OVERRIDES.notebook.cell.insertionIndicator, // The color of the notebook cell insertion indicator.
  'notebook.cellToolbarSeparator': OVERRIDES.notebook.cell.toolbarSeparator, // The color of the separator in the cell bottom toolbar
  'notebook.cellHoverBackground': OVERRIDES.notebook.cell.hover.background, // The background color of a cell when the cell is hovered.
  'notebook.cellStatusBarItemHoverBackground': OVERRIDES.notebook.cell.statusBar.item.hover.background, // The background color of notebook cell status bar items.

  'notebook.focusedCellBackground': OVERRIDES.notebook.cell.focused.background, // The background color of a cell when the cell is focused.
  'notebook.focusedCellBorder': OVERRIDES.notebook.cell.focused.border, // The color of the cell's focus indicator borders when the cell is focused.
  'notebook.focusedEditorBorder': OVERRIDES.notebook.cell.focused.editorBorder, // The color of the notebook cell editor border.
  'notebook.inactiveFocusedCellBorder': OVERRIDES.notebook.cell.focused.inactiveBorder, // The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.

  'notebook.selectedCellBackground': OVERRIDES.notebook.cell.selected.background, // The background color of a cell when the cell is selected.
  'notebook.selectedCellBorder': OVERRIDES.notebook.cell.selected.border, // The color of the cell's top and bottom border when the cell is selected but not focused.
  'notebook.inactiveSelectedCellBorder': OVERRIDES.notebook.cell.selected.inactiveBorder, // The color of the cell's borders when multiple cells are selected.

  'notebook.outputContainerBackgroundColor': OVERRIDES.notebook.output.background, // The Color of the notebook output container background.
  'notebook.outputContainerBorderColor': OVERRIDES.notebook.output.border, // The border color of the notebook output container.

  'notebookStatusRunningIcon.foreground': OVERRIDES.notebook.status.running, // The running icon color of notebook cells in the cell status bar.
  'notebookStatusSuccessIcon.foreground': OVERRIDES.notebook.status.success, // The success icon color of notebook cells in the cell status bar.
  'notebookStatusErrorIcon.foreground': OVERRIDES.notebook.status.error, // The error icon color of notebook cells in the cell status bar.

  // The notebook's overview ruler.
  'notebookEditorOverviewRuler.runningCellForeground': OVERRIDES.notebook.overviewRuler.runningCell, // The color of the running cell decoration in the notebook editor overview ruler.

  // The notebook's scrollbar slider.
  'notebookScrollbarSlider.background': OVERRIDES.notebook.scrollbar.slider.background, // Notebook scrollbar slider background color.
  'notebookScrollbarSlider.hoverBackground': OVERRIDES.notebook.scrollbar.slider.hoverBackground, // Notebook scrollbar slider background color when hovering.
  'notebookScrollbarSlider.activeBackground': OVERRIDES.notebook.scrollbar.slider.activeBackground, // Notebook scrollbar slider background color when clicked on.

  //
  'interactive.activeCodeBorder': OVERRIDES.notebook.interactive.codeBorder.active, // The border color for the current interactive code cell when the editor has focus.
  'interactive.inactiveCodeBorder': OVERRIDES.notebook.interactive.codeBorder.inactive, // The border color for the current interactive code cell when the editor does not have focus.
}

// ===== ======== =====
// ===== CONTROLS =====
// ===== ======== =====

export const CONTROLS: TIBlock = {
  // Button control
  'button.separator': UI.controls.button.separator, // Button separator color.
  'button.border': UI.controls.button.border, // Button border color.
  'button.foreground': UI.controls.button.foreground, // Button foreground color.
  'button.background': UI.controls.button.background, // Button background color.
  'button.hoverBackground': UI.controls.button.hoverBackground, // Button background color when hovering.
  'button.secondaryForeground': UI.controls.button.secondary.foreground, // Secondary button foreground color.
  'button.secondaryBorder': UI.controls.button.secondary.border, // Secondary button border color.
  'button.secondaryBackground': UI.controls.button.secondary.background, // Secondary button background color.
  'button.secondaryHoverBackground': UI.controls.button.secondary.hoverBackground, // Secondary button background color when hovering.

  // Checkboxes
  'checkbox.foreground': UI.controls.checkbox.foreground, // Foreground color of checkbox widget.
  'checkbox.background': UI.controls.checkbox.background, // Background color of checkbox widget.
  'checkbox.border': UI.controls.checkbox.border, // Border color of checkbox widget.
  'checkbox.selectBackground': UI.controls.checkbox.select.background, // Background color of checkbox widget when the element it's in is selected.
  'checkbox.selectBorder': UI.controls.checkbox.select.border, // Border color of checkbox widget when the element it's in is selected.
  'checkbox.disabled.foreground': UI.controls.checkbox.disabled.foreground, // Foreground of a disabled checkbox.
  'checkbox.disabled.background': UI.controls.checkbox.disabled.background, // Background of a disabled checkbox.

  // Radio Buttons
  'radio.activeForeground': UI.controls.radio.active.foreground, // Foreground color of active radio option.
  'radio.activeBackground': UI.controls.radio.active.background, // Background color of active radio option.
  'radio.activeBorder': UI.controls.radio.active.border, // Border color of the active radio option.
  'radio.inactiveForeground': UI.controls.radio.inactive.foreground, // Foreground color of inactive radio option.
  'radio.inactiveBackground': UI.controls.radio.inactive.background, // Background color of inactive radio option.
  'radio.inactiveBorder': UI.controls.radio.inactive.border, // Border color of the inactive radio option.
  'radio.inactiveHoverBackground': UI.controls.radio.inactive.hoverBackground, // Background color of inactive active radio option when hovering.

  // Input control
  // Colors for input controls such as in the Search view or the Find/Replace dialog.
  'input.foreground': UI.controls.input.foreground, // Input box foreground.
  'input.placeholderForeground': UI.controls.input.placeholderForeground, // Input box foreground color for placeholder text.
  'input.background': UI.controls.input.background, // Input box background.
  'input.border': UI.controls.input.border, // Input box border.
  'inputOption.activeBackground': UI.controls.input.option.active.background, // Background color of activated options in input fields.
  'inputOption.activeBorder': UI.controls.input.option.active.border, // Border color for input validation message.
  'inputOption.activeForeground': UI.controls.input.option.active.foreground, // Foreground color of activated options in input fields.
  'inputOption.hoverBackground': UI.controls.input.option.hoverBackground, // Background color of activated options in input fields.

  // Dropdown control
  // A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.
  'dropdown.background': UI.controls.dropdown.background, // Dropdown background.
  'dropdown.listBackground': UI.controls.dropdown.listBackground, // Dropdown list background.
  'dropdown.border': UI.controls.dropdown.border, // Dropdown border.
  'dropdown.foreground': UI.controls.dropdown.foreground, // Dropdown foreground.
}

// ===== ================ =====
// ===== INPUT VALIDATION =====
// ===== ================ =====

export const INPUT_VALIDATION: TIBlock = {
  'inputValidation.errorBackground': UI.inputValidation.error.background, // Input validation background color for error severity.
  'inputValidation.errorForeground': UI.inputValidation.error.foreground, // Input validation foreground color for error severity.
  'inputValidation.errorBorder': UI.inputValidation.error.border, // Input validation border color for error severity.
  'inputValidation.warningBackground': UI.inputValidation.warning.background, // Input validation background color for information warning.
  'inputValidation.warningForeground': UI.inputValidation.warning.foreground, // Input validation foreground color for warning severity.
  'inputValidation.warningBorder': UI.inputValidation.warning.border, // Input validation border color for warning severity.
  'inputValidation.infoBackground': UI.inputValidation.info.background, // Input validation background color for information severity.
  'inputValidation.infoForeground': UI.inputValidation.info.foreground, // Input validation foreground color for information severity.
  'inputValidation.infoBorder': UI.inputValidation.info.border, // Input validation border color for information severity.
}

// ===== ==== =====
// ===== MENU =====
// ===== ==== =====

export const MENU: TIBlock = {
  'menubar.selectionForeground': UI.menu.bar.selection.foreground, // Foreground color of the selected menu item in the menubar.
  'menubar.selectionBackground': UI.menu.bar.selection.background, // Background color of the selected menu item in the menubar.
  'menubar.selectionBorder': UI.menu.bar.selection.border, // Border color of the selected menu item in the menubar.
  'menu.foreground': UI.menu.foreground, // Foreground color of menu items.
  'menu.background': UI.menu.background, // Background color of menu items.
  'menu.selectionForeground': UI.menu.selection.foreground, // Foreground color of the selected menu item in menus.
  'menu.selectionBackground': UI.menu.selection.background, // Background color of the selected menu item in menus.
  'menu.selectionBorder': UI.menu.selection.border, // Border color of the selected menu item in menus.
  'menu.separatorBackground': UI.menu.separatorBackground, // Color of a separator menu item in menus.
  'menu.border': UI.menu.border, // Border color of menus.
}

// ===== ============== =====
// ===== COMMAND CENTER =====
// ===== ============== =====

export const COMMAND_CENTER: TIBlock = {
  'commandCenter.foreground': UI.commandCenter.foreground, // Foreground color of the Command Center.
  'commandCenter.activeForeground': UI.commandCenter.active.foreground, // Active foreground color of the Command Center.
  'commandCenter.background': UI.commandCenter.background, // Background color of the Command Center.
  'commandCenter.activeBackground': UI.commandCenter.active.background, // Active background color of the Command Center.
  'commandCenter.border': UI.commandCenter.border, // Border color of the Command Center.
  'commandCenter.inactiveForeground': UI.commandCenter.inactive.foreground, // Foreground color of the Command Center when the window is inactive.
  'commandCenter.inactiveBorder': UI.commandCenter.inactive.border, // Border color of the Command Center when the window is inactive.
  'commandCenter.activeBorder': UI.commandCenter.active.border, // Active border color of the Command Center.
  'commandCenter.debuggingBackground': UI.commandCenter.debuggingBackground, // Command Center background color when a program is being debugged.
}

// ===== ========== =====
// ===== KEYBINDING =====
// ===== ========== =====

export const KEYBINDING: TIBlock = {
  // Keybinding label
  'keybindingLabel.background': UI.keybinding.label.background, // Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
  'keybindingLabel.foreground': UI.keybinding.label.foreground, // Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
  'keybindingLabel.border': UI.keybinding.label.border, // Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
  'keybindingLabel.bottomBorder': UI.keybinding.label.bottomBorder, // Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.

  // Keyboard shortcut table colors
  'keybindingTable.headerBackground': UI.keybinding.table.headerBackground, // Background color for the keyboard shortcuts table header.
  'keybindingTable.rowsBackground': UI.keybinding.table.rowsBackground, // Background color for the keyboard shortcuts table alternating rows.
}

// ===== === =====
// ===== GIT =====
// ===== === =====

export const GIT: TIBlock = {
  'gitDecoration.addedResourceForeground': UI.git.decoration.added, // Color for added Git resources. Used for file labels and the SCM viewlet.
  'gitDecoration.renamedResourceForeground': UI.git.decoration.renamed, // Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
  'gitDecoration.modifiedResourceForeground': UI.git.decoration.modified, // Color for modified Git resources. Used for file labels and the SCM viewlet.
  'gitDecoration.stageModifiedResourceForeground': UI.git.decoration.stageModified, // Color for staged modifications git decorations. Used for file labels and the SCM viewlet.
  'gitDecoration.conflictingResourceForeground': UI.git.decoration.conflicting, // Color for conflicting Git resources. Used for file labels and the SCM viewlet.
  'gitDecoration.deletedResourceForeground': UI.git.decoration.deleted, // Color for deleted Git resources. Used for file labels and the SCM viewlet.
  'gitDecoration.stageDeletedResourceForeground': UI.git.decoration.stageDeleted, // Color for staged deletions git decorations. Used for file labels and the SCM viewlet.
  'gitDecoration.ignoredResourceForeground': UI.git.decoration.ignored, // Color for ignored Git resources. Used for file labels and the SCM viewlet.
  'gitDecoration.untrackedResourceForeground': UI.git.decoration.untracked, // Color for untracked Git resources. Used for file labels and the SCM viewlet.
  'gitDecoration.submoduleResourceForeground': UI.git.decoration.submodule, // Color for submodule resources.
  'git.blame.editorDecorationForeground': UI.git.blame.editorDecorationForeground, // Color for the blame editor decoration.
}

export const SCM_GRAPH: TIBlock = {
  'scmGraph.historyItemHoverLabelForeground': UI.scmGraph.hover.labelForeground, // History item hover label foreground color.
  'scmGraph.foreground1': UI.scmGraph.lane1, // Source control graph foreground color (1).
  'scmGraph.foreground2': UI.scmGraph.lane2, // Source control graph foreground color (2).
  'scmGraph.foreground3': UI.scmGraph.lane3, // Source control graph foreground color (3).
  'scmGraph.foreground4': UI.scmGraph.lane4, // Source control graph foreground color (4).
  'scmGraph.foreground5': UI.scmGraph.lane5, // Source control graph foreground color (5).
  'scmGraph.historyItemHoverAdditionsForeground': UI.scmGraph.hover.additionsForeground, // History item hover additions foreground color.
  'scmGraph.historyItemHoverDeletionsForeground': UI.scmGraph.hover.deletionsForeground, // History item hover deletions foreground color.
  'scmGraph.historyItemRefColor': UI.scmGraph.ref.base, // History item reference color.
  'scmGraph.historyItemRemoteRefColor': UI.scmGraph.ref.remote, // History item remote reference color.
  'scmGraph.historyItemBaseRefColor': UI.scmGraph.ref.baseRef, // History item base reference color.
  'scmGraph.historyItemHoverDefaultLabelForeground': UI.scmGraph.hover.defaultLabel.foreground, // History item hover default label foreground color.
  'scmGraph.historyItemHoverDefaultLabelBackground': UI.scmGraph.hover.defaultLabel.background, // History item hover default label background color.
}

// ===== ========== =====
// ===== EXTENSIONS =====
// ===== ========== =====

export const EXTENSIONS: TIBlock = {
  'extensionButton.separator': UI.extensions.button.separator, // Button separator color for extension actions.
  'extensionButton.border': UI.extensions.button.border, // Button border color for extension actions.

  'extensionButton.foreground': UI.extensions.button.foreground, // Button foreground color for extension actions.
  'extensionButton.background': UI.extensions.button.background, // Button background color for extension actions.
  'extensionButton.hoverBackground': UI.extensions.button.hoverBackground, // Button background hover color for extension actions.

  'extensionButton.prominentForeground': UI.extensions.button.prominent.foreground, // Extension view button foreground color (for example Install button).
  'extensionButton.prominentBackground': UI.extensions.button.prominent.background, // Extension view button background color.
  'extensionButton.prominentHoverBackground': UI.extensions.button.prominent.hoverBackground, // Extension view button background hover color.

  'extensionBadge.remoteForeground': UI.extensions.badge.remote.foreground, // Foreground color for the remote badge in the extensions view.
  'extensionBadge.remoteBackground': UI.extensions.badge.remote.background, // Background color for the remote badge in the extensions view.

  'mcpIcon.starForeground': UI.extensions.icon.mcpStar, // The icon color for mcp starred.
  'extensionIcon.starForeground': UI.extensions.icon.star, // The icon color for extension ratings.
  'extensionIcon.preReleaseForeground': UI.extensions.icon.preRelease, // The icon color for pre-release extension.
  'extensionIcon.verifiedForeground': UI.extensions.icon.verified, // The icon color for extension verified publisher.
  'extensionIcon.sponsorForeground': UI.extensions.icon.sponsor, // The icon color for extension sponsor.
  'extensionIcon.privateForeground': UI.extensions.icon.private, // The icon color for private extensions.
}

// ===== ========== =====
// ===== ERROR LENS =====
// ===== ========== =====

export const ERROR_LENS: TIBlock = {
  'errorLens.errorBackground': UI.errorLens.error.background,
  'errorLens.errorForeground': UI.errorLens.error.foreground,
  'errorLens.errorMessageBackground': UI.errorLens.error.messageBackground,
  'errorLens.warningBackground': UI.errorLens.warning.background,
  'errorLens.warningForeground': UI.errorLens.warning.foreground,
  'errorLens.warningMessageBackground': UI.errorLens.warning.messageBackground,
  'errorLens.hintBackground': UI.errorLens.hint.background,
  'errorLens.hintForeground': UI.errorLens.hint.foreground,
  'errorLens.hintMessageBackground': UI.errorLens.hint.messageBackground,
  'errorLens.infoBackground': UI.errorLens.info.background,
  'errorLens.infoForeground': UI.errorLens.info.foreground,
  'errorLens.infoMessageBackground': UI.errorLens.info.messageBackground,
}

// ===== ===== =====
// ===== DEBUG =====
// ===== ===== =====

export const DEBUG: TIBlock = {
  'debugView.exceptionLabelForeground': UI.debug.view.exceptionLabel.foreground, // Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
  'debugView.exceptionLabelBackground': UI.debug.view.exceptionLabel.background, // Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
  'debugView.stateLabelForeground': UI.debug.view.stateLabel.foreground, // Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
  'debugView.stateLabelBackground': UI.debug.view.stateLabel.background, // Background color for a label in the CALL STACK view showing the current session's or thread's state.
  'debugView.valueChangedHighlight': UI.debug.view.valueChangedHighlight, // Color used to highlight value changes in the debug views (such as in the Variables view).
  'debugTokenExpression.name': UI.debug.tokenExpression.name, // Foreground color for the token names shown in debug views (such as in the Variables or Watch view).
  'debugTokenExpression.value': UI.debug.tokenExpression.value, // Foreground color for the token values shown in debug views.
  'debugTokenExpression.string': UI.debug.tokenExpression.string, // Foreground color for strings in debug views.
  'debugTokenExpression.boolean': UI.debug.tokenExpression.boolean, // Foreground color for booleans in debug views.
  'debugTokenExpression.number': UI.debug.tokenExpression.number, // Foreground color for numbers in debug views.
  'debugTokenExpression.error': UI.debug.tokenExpression.error, // Foreground color for expression errors in debug views.
  'debugTokenExpression.type': UI.debug.tokenExpression.type, // Foreground color for the token types shown in the debug views (ie. the Variables or Watch view).

  // Debug Icons colors
  'debugIcon.breakpointForeground': UI.debug.icon.breakpoint, // Icon color for breakpoints.
  'debugIcon.breakpointDisabledForeground': UI.debug.icon.breakpointDisabled, // Icon color for disabled breakpoints.
  'debugIcon.breakpointUnverifiedForeground': UI.debug.icon.breakpointUnverified, // Icon color for unverified breakpoints.
  'debugIcon.breakpointCurrentStackframeForeground': UI.debug.icon.breakpointCurrentStackframe, // Icon color for the current breakpoint stack frame.
  'debugIcon.breakpointStackframeForeground': UI.debug.icon.breakpointStackframe, // Icon color for all breakpoint stack frames.
  'debugIcon.startForeground': UI.debug.icon.start, // Debug toolbar icon for start debugging.
  'debugIcon.pauseForeground': UI.debug.icon.pause, // Debug toolbar icon for pause.
  'debugIcon.stopForeground': UI.debug.icon.stop, // Debug toolbar icon for stop.
  'debugIcon.disconnectForeground': UI.debug.icon.disconnect, // Debug toolbar icon for disconnect.
  'debugIcon.restartForeground': UI.debug.icon.restart, // Debug toolbar icon for restart.
  'debugIcon.stepOverForeground': UI.debug.icon.stepOver, // Debug toolbar icon for step over.
  'debugIcon.stepIntoForeground': UI.debug.icon.stepInto, // Debug toolbar icon for step into.
  'debugIcon.stepOutForeground': UI.debug.icon.stepOut, // Debug toolbar icon for step over.
  'debugIcon.continueForeground': UI.debug.icon.continue, // Debug toolbar icon for continue.
  'debugIcon.stepBackForeground': UI.debug.icon.stepBack, // Debug toolbar icon for step back.
  'debugConsole.infoForeground': UI.debug.console.info, // Foreground color for info messages in debug REPL console.
  'debugConsole.warningForeground': UI.debug.console.warning, // Foreground color for warning messages in debug REPL console.
  'debugConsole.errorForeground': UI.debug.console.error, // Foreground color for error messages in debug REPL console.
  'debugConsole.sourceForeground': UI.debug.console.source, // Foreground color for source filenames in debug REPL console.
  'debugConsoleInputIcon.foreground': UI.debug.console.inputIcon, // Foreground color for debug console input marker icon.
}

// ===== ======= =====
// ===== TESTING =====
// ===== ======= =====

export const TESTING: TIBlock = {
  'testing.runAction': UI.testing.runAction, // Color for 'run' icons in the editor.
  'testing.iconErrored': UI.testing.icon.errored, // Color for the 'Errored' icon in the test explorer.
  'testing.iconFailed': UI.testing.icon.failed, // Color for the 'failed' icon in the test explorer.
  'testing.iconPassed': UI.testing.icon.passed, // Color for the 'passed' icon in the test explorer.
  'testing.iconQueued': UI.testing.icon.queued, // Color for the 'Queued' icon in the test explorer.
  'testing.iconUnset': UI.testing.icon.unset, // Color for the 'Unset' icon in the test explorer.
  'testing.iconSkipped': UI.testing.icon.skipped, // Color for the 'Skipped' icon in the test explorer.
  'testing.iconErrored.retired': UI.testing.icon.retired.errored, // Retired color for the 'Errored' icon in the test explorer.
  'testing.iconFailed.retired': UI.testing.icon.retired.failed, // Retired color for the 'failed' icon in the test explorer.
  'testing.iconPassed.retired': UI.testing.icon.retired.passed, // Retired color for the 'passed' icon in the test explorer.
  'testing.iconQueued.retired': UI.testing.icon.retired.queued, // Retired color for the 'Queued' icon in the test explorer.
  'testing.iconUnset.retired': UI.testing.icon.retired.unset, // Retired color for the 'Unset' icon in the test explorer.
  'testing.iconSkipped.retired': UI.testing.icon.retired.skipped, // Retired color for the 'Skipped' icon in the test explorer.
  'testing.peekBorder': UI.testing.peek.border, // Color of the peek view borders and arrow.
  'testing.peekHeaderBackground': UI.testing.peek.headerBackground, // Color of the peek view borders and arrow.
  'testing.message.error.lineBackground': UI.testing.message.error.lineBackground, // Margin color beside error messages shown inline in the editor.
  'testing.message.info.decorationForeground': UI.testing.message.info.decorationForeground, // Text color of test info messages shown inline in the editor.
  'testing.message.info.lineBackground': UI.testing.message.info.lineBackground, // Margin color beside info messages shown inline in the editor.
  'testing.messagePeekBorder': UI.testing.messagePeek.border, // Color of the peek view borders and arrow when peeking a logged message.
  'testing.messagePeekHeaderBackground': UI.testing.messagePeek.headerBackground, // Color of the peek view background when peeking a logged message.
  'testing.coveredBackground': UI.testing.coverage.covered.background, // Background color of text that was covered.
  'testing.coveredBorder': UI.testing.coverage.covered.border, // Border color of text that was covered.
  'testing.coveredGutterBackground': UI.testing.coverage.covered.gutterBackground, // Gutter color of regions where code was covered.
  'testing.uncoveredBranchBackground': UI.testing.coverage.uncovered.branchBackground, // Background of the widget shown for an uncovered branch.
  'testing.uncoveredBackground': UI.testing.coverage.uncovered.background, // Background color of text that was not covered.
  'testing.uncoveredBorder': UI.testing.coverage.uncovered.border, // Border color of text that was not covered.
  'testing.uncoveredGutterBackground': UI.testing.coverage.uncovered.gutterBackground, // Gutter color of regions where code not covered.
  'testing.coverCountBadgeBackground': UI.testing.coverage.countBadge.background, // Background for the badge indicating execution count
  'testing.coverCountBadgeForeground': UI.testing.coverage.countBadge.foreground, // Foreground for the badge indicating execution count
  'testing.message.error.badgeBackground': UI.testing.message.error.badgeBackground, // Background color of test error messages shown inline in the editor.
  'testing.message.error.badgeBorder': UI.testing.message.error.badgeBorder, // Border color of test error messages shown inline in the editor.
  'testing.message.error.badgeForeground': UI.testing.message.error.badgeForeground, // Text color of test error messages shown inline in the editor.
}

// ===== =========== =====
// ===== SYMBOL ICON =====
// ===== =========== =====
// The theme colors for symbol icons that appear in the Outline view, breadcrumb
// navigation, and suggest widget.

export const SYMBOL_ICON: TIBlock = {
  'symbolIcon.arrayForeground': UI.symbolIcon.array, // The foreground color for array symbols.
  'symbolIcon.booleanForeground': UI.symbolIcon.boolean, // The foreground color for boolean symbols.
  'symbolIcon.classForeground': UI.symbolIcon.class, // The foreground color for class symbols.
  'symbolIcon.colorForeground': UI.symbolIcon.color, // The foreground color for color symbols.
  'symbolIcon.constantForeground': UI.symbolIcon.constant, // The foreground color for constant symbols.
  'symbolIcon.constructorForeground': UI.symbolIcon.constructor, // The foreground color for constructor symbols.
  'symbolIcon.enumeratorForeground': UI.symbolIcon.enumerator, // The foreground color for enumerator symbols.
  'symbolIcon.enumeratorMemberForeground': UI.symbolIcon.enumeratorMember, // The foreground color for enumerator member symbols.
  'symbolIcon.eventForeground': UI.symbolIcon.event, // The foreground color for event symbols.
  'symbolIcon.fieldForeground': UI.symbolIcon.field, // The foreground color for field symbols.
  'symbolIcon.fileForeground': UI.symbolIcon.file, // The foreground color for file symbols.
  'symbolIcon.folderForeground': UI.symbolIcon.folder, // The foreground color for folder symbols.
  'symbolIcon.functionForeground': UI.symbolIcon.function, // The foreground color for function symbols.
  'symbolIcon.interfaceForeground': UI.symbolIcon.interface, // The foreground color for interface symbols.
  'symbolIcon.keyForeground': UI.symbolIcon.key, // The foreground color for key symbols.
  'symbolIcon.keywordForeground': UI.symbolIcon.keyword, // The foreground color for keyword symbols.
  'symbolIcon.methodForeground': UI.symbolIcon.method, // The foreground color for method symbols.
  'symbolIcon.moduleForeground': UI.symbolIcon.module, // The foreground color for module symbols.
  'symbolIcon.namespaceForeground': UI.symbolIcon.namespace, // The foreground color for namespace symbols.
  'symbolIcon.nullForeground': UI.symbolIcon.null, // The foreground color for null symbols.
  'symbolIcon.numberForeground': UI.symbolIcon.number, // The foreground color for number symbols.
  'symbolIcon.objectForeground': UI.symbolIcon.object, // The foreground color for object symbols.
  'symbolIcon.operatorForeground': UI.symbolIcon.operator, // The foreground color for operator symbols.
  'symbolIcon.packageForeground': UI.symbolIcon.package, // The foreground color for package symbols.
  'symbolIcon.propertyForeground': UI.symbolIcon.property, // The foreground color for property symbols.
  'symbolIcon.referenceForeground': UI.symbolIcon.reference, // The foreground color for reference symbols.
  'symbolIcon.snippetForeground': UI.symbolIcon.snippet, // The foreground color for snippet symbols.
  'symbolIcon.stringForeground': UI.symbolIcon.string, // The foreground color for string symbols.
  'symbolIcon.structForeground': UI.symbolIcon.struct, // The foreground color for struct symbols.
  'symbolIcon.textForeground': UI.symbolIcon.text, // The foreground color for text symbols.
  'symbolIcon.typeParameterForeground': UI.symbolIcon.typeParameter, // The foreground color for type parameter symbols.
  'symbolIcon.unitForeground': UI.symbolIcon.unit, // The foreground color for unit symbols.
  'symbolIcon.variableForeground': UI.symbolIcon.variable, // The foreground color for variable symbols.
}

// ===== ====== =====
// ===== CHARTS =====
// ===== ====== =====

export const CHARTS: TIBlock = {
  'charts.foreground': UI.charts.foreground, // Contrast color for text in charts.
  'charts.lines': UI.charts.lines, // Color for lines in charts.
  'charts.red': UI.charts.red, // Color for red elements in charts.
  'charts.blue': UI.charts.blue, // Color for blue elements in charts.
  'charts.yellow': UI.charts.yellow, // Color for yellow elements in charts.
  'charts.orange': UI.charts.orange, // Color for orange elements in charts.
  'charts.green': UI.charts.green, // Color for green elements in charts.
  'charts.purple': UI.charts.purple, // Color for purple elements in charts.
  'chart.line': UI.charts.line, // Line color for the chart.
  'chart.axis': UI.charts.axis, // Axis color for the chart.
  'chart.guide': UI.charts.guide, // Guide line for the chart.
}

// ===== ============== =====
// ===== MARKDOWN ALERT =====
// ===== ============== =====

export const MARKDOWN_ALERT: TIBlock = {
  'markdownAlert.note.foreground': UI.markdownAlert.note, // Foreground color for note alerts in markdown.
  'markdownAlert.tip.foreground': UI.markdownAlert.tip, // Foreground color for tip alerts in markdown.
  'markdownAlert.important.foreground': UI.markdownAlert.important, // Foreground color for important alerts in markdown.
  'markdownAlert.warning.foreground': UI.markdownAlert.warning, // Foreground color for warning alerts in markdown.
  'markdownAlert.caution.foreground': UI.markdownAlert.caution, // Foreground color for caution alerts in markdown.
}

// ===== ===== =====
// ===== BADGE =====
// ===== ===== =====

export const BADGE: TIBlock = {
  'badge.foreground': UI.badge.foreground, // Badge foreground color.
  'badge.background': UI.badge.background, // Badge background color.

  'activityWarningBadge.foreground': UI.badge.activity.warning.foreground, // Foreground color of the warning activity badge
  'activityWarningBadge.background': UI.badge.activity.warning.background, // Background color of the warning activity badge
  'activityErrorBadge.foreground': UI.badge.activity.error.foreground, // Foreground color of the error activity badge
  'activityErrorBadge.background': UI.badge.activity.error.background, // Background color of the error activity badge

  'profileBadge.background': UI.badge.profile.background, // Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
  'profileBadge.foreground': UI.badge.profile.foreground, // Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.
}

export const PROFILES: TIBlock = {
  'profiles.sashBorder': UI.profiles.sashBorder, // The color of the Profiles editor splitview sash border.
}

// ===== ====== =====
// ===== BANNER =====
// ===== ====== =====
// The banner appears below the title bar and spans the entire width of the workbench when visible.

export const BANNER: TIBlock = {
  'banner.background': UI.banner.background, // Banner background color.
  'banner.foreground': UI.banner.foreground, // Banner foreground color.
  'banner.iconForeground': UI.banner.iconForeground, // Color for the icon in front of the banner text.
}

// ===== ==== =====
// ===== LIST =====
// ===== ==== =====
// Colors for list and trees like the File Explorer. An active list/tree has
// keyboard focus, an inactive does not.

export const LIST: TIBlock = {
  'list.activeSelectionBackground': UI.list.selection.active.background, // List/Tree background color for the selected item when the list/tree is active.
  'list.activeSelectionForeground': UI.list.selection.active.foreground, // List/Tree foreground color for the selected item when the list/tree is active.
  'list.activeSelectionIconForeground': UI.list.selection.active.iconForeground, // List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
  'list.inactiveSelectionBackground': UI.list.selection.inactive.background, // List/Tree background color for the selected item when the list/tree is inactive.
  'list.inactiveSelectionForeground': UI.list.selection.inactive.foreground, // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
  'list.inactiveSelectionIconForeground': UI.list.selection.inactive.iconForeground, // List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.

  'list.focusBackground': UI.list.focus.background, // List/Tree background color for the focused item when the list/tree is active.
  'list.focusForeground': UI.list.focus.foreground, // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
  'list.focusHighlightForeground': UI.list.focus.highlightForeground, // List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
  'list.focusOutline': UI.list.focus.outline, // List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
  'list.focusAndSelectionOutline': UI.list.focus.andSelectionOutline, // List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
  'list.inactiveFocusBackground': UI.list.focus.inactive.background, // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
  'list.inactiveFocusOutline': UI.list.focus.inactive.outline, // List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.

  'list.hoverBackground': UI.list.hover.background, // List/Tree background when hovering over items using the mouse.
  'list.hoverForeground': UI.list.hover.foreground, // List/Tree foreground when hovering over items using the mouse.

  'list.dropBackground': UI.list.drop.background, // List/Tree drag and drop background when moving items around using the mouse.
  'list.dropBetweenBackground': UI.list.drop.betweenBackground, // List/Tree drag and drop border color when moving items between items when using the mouse.

  'list.highlightForeground': UI.list.highlightForeground, // List/Tree foreground color of the match highlights when searching inside the list/tree.
  'list.deemphasizedForeground': UI.list.deemphasizedForeground, // List/Tree foreground color for items that are deemphasized.
  'list.warningForeground': UI.list.warningForeground, // Foreground color of list items containing warnings.
  'list.errorForeground': UI.list.errorForeground, // Foreground color of list items containing errors.
  'list.invalidItemForeground': UI.list.invalidItemForeground, // List/Tree foreground color for invalid items, for example an unresolved root in explorer.

  'list.filterMatchBackground': UI.list.filterMatch.background, // Background color of the filtered matches in lists and trees.
  'list.filterMatchBorder': UI.list.filterMatch.border, // Border color of the filtered matches in lists and trees.

  'listFilterWidget.background': UI.list.filterWidget.background, // List/Tree Filter background color of typed text when searching inside the list/tree.
  'listFilterWidget.outline': UI.list.filterWidget.outline, // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
  'listFilterWidget.noMatchesOutline': UI.list.filterWidget.noMatchesOutline, // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
  'listFilterWidget.shadow': UI.list.filterWidget.shadow, // Shadow color of the type filter widget in lists and tree.

  'tree.indentGuidesStroke': UI.list.tree.indentGuidesStroke, // Tree Widget's stroke color for indent guides.
  'tree.inactiveIndentGuidesStroke': UI.list.tree.inactiveIndentGuidesStroke, // Tree stroke color for the indentation guides that are not active.
  'tree.tableColumnsBorder': UI.list.tree.table.columnsBorder, // Tree stroke color for the indentation guides.
  'tree.tableOddRowsBackground': UI.list.tree.table.oddRowsBackground, // Background color for odd table rows.
}

// ===== ===== =====
// ===== PANEL =====
// ===== ===== =====
// Areas like Terminal and Output Panel. Panels are shown below the editor area.

export const PANEL: TIBlock = {
  'panel.background': UI.panel.background, // Panel background color.
  'panel.border': UI.panel.border, // Panel border color to separate the panel from the editor.
  'panel.dropBorder': UI.panel.dropBorder, // Drag and drop feedback color for the panel titles.

  'panelTitle.activeBorder': UI.panel.title.activeBorder, // Border color for the active panel title.
  'panelTitle.activeForeground': UI.panel.title.activeForeground, // Title color for the active panel.
  'panelTitle.inactiveForeground': UI.panel.title.inactiveForeground, // Title color for the inactive panel.
  'panelTitle.border': UI.panel.title.border, // Panel title border color on the bottom, separating the title from the views.
  'panelTitleBadge.foreground': UI.panel.title.badge.foreground, // Panel title badge foreground color.
  'panelTitleBadge.background': UI.panel.title.badge.background, // Panel title badge background color.

  'panelInput.border': UI.panel.input.border, // Input box border for inputs in the panel.

  'panelSection.border': UI.panel.section.border, // Panel section border color used when multiple views are stacked horizontally in the panel.
  'panelSection.dropBackground': UI.panel.section.dropBackground, // Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through.
  'panelSectionHeader.background': UI.panel.section.header.background, // Panel section header background color.
  'panelSectionHeader.foreground': UI.panel.section.header.foreground, // Panel section header foreground color.
  'panelSectionHeader.border': UI.panel.section.header.border, // Panel section header border color used when multiple views are stacked vertically in the panel.

  'panelStickyScroll.background': UI.panel.stickyScroll.background, // Background color of sticky scroll in the panel.
  'panelStickyScroll.border': UI.panel.stickyScroll.border, // Border color of sticky scroll in the panel.
  'panelStickyScroll.shadow': UI.panel.stickyScroll.shadow, // Shadow color of sticky scroll in the panel.

  'outputView.background': UI.panel.output.background, // Output view background color.
  'outputViewStickyScroll.background': UI.panel.output.stickyScroll.background, // Output view sticky scroll background color.
}

// ===== ====== =====
// ===== WIDGET =====
// ===== ====== =====

export const WIDGET: TIBlock = {
  'widget.shadow': UI.widget.shadow, // Shadow color of widgets such as Find/Replace inside the editor.
  'widget.border': UI.widget.border, // Border color of widgets such as Find/Replace inside the editor.

  // Editor widget - the container for editor widgets in the editor area (Find/Replace in files, suggestions widget, etc.).
  'editorWidget.border': UI.widget.editor.border, // Border color of the editor widget unless the widget does not contain a border or defines its own border color.
  'editorWidget.foreground': UI.widget.editor.foreground, // Foreground color of editor widgets, such as find/replace.
  'editorWidget.background': UI.widget.editor.background, // Background color of editor widgets, such as Find/Replace.
  'editorWidget.resizeBorder': UI.widget.editor.resizeBorder, // Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.

  'editorGhostText.border': UI.widget.ghostText.border, // Border color of the ghost text shown by inline completion providers and the suggest preview.
  'editorGhostText.background': UI.widget.ghostText.background, // Background color of the ghost text in the editor.
  'editorGhostText.foreground': UI.widget.ghostText.foreground, // Foreground color of the ghost text shown by inline completion providers and the suggest preview.

  'pickerGroup.border': UI.widget.pickerGroup.border, // Quick picker (Quick Open) color for grouping borders.
  'pickerGroup.foreground': UI.widget.pickerGroup.foreground, // Quick picker (Quick Open) color for grouping labels.

  'debugToolBar.border': UI.widget.debugToolBar.border, // Debug toolbar border color.
  'debugToolBar.background': UI.widget.debugToolBar.background, // Debug toolbar background color.

  'simpleFindWidget.sashBorder': UI.widget.simpleFind.sashBorder, // Border color of the sash border.
}

export const SUGGEST_WIDGET: TIBlock = {
  'editorSuggestWidget.background': UI.widget.suggest.background, // Background color of the suggestion widget.
  'editorSuggestWidget.border': UI.widget.suggest.border, // Border color of the suggestion widget.
  'editorSuggestWidget.foreground': UI.widget.suggest.foreground, // Foreground color of the suggestion widget.
  'editorSuggestWidget.highlightForeground': UI.widget.suggest.highlightForeground, // Color of the match highlights in the suggestion widget.
  'editorSuggestWidget.focusHighlightForeground': UI.widget.suggest.focusHighlightForeground, // Color of the match highlights in the suggest widget when an item is focused.
  'editorSuggestWidget.selectedBackground': UI.widget.suggest.selected.background, // Background color of the selected entry in the suggestion widget.
  'editorSuggestWidget.selectedForeground': UI.widget.suggest.selected.foreground, // Foreground color of the selected entry in the suggest widget.
  'editorSuggestWidget.selectedIconForeground': UI.widget.suggest.selected.iconForeground, // Icon foreground color of the selected entry in the suggest widget.
  'editorSuggestWidgetStatus.foreground': UI.widget.suggest.statusForeground, // Foreground color of the suggest widget status.
}

export const HOVER_WIDGET: TIBlock = {
  'editorHoverWidget.foreground': UI.widget.hover.foreground, // Foreground color of the editor hover.
  'editorHoverWidget.background': UI.widget.hover.background, // Background color of the editor hover.
  'editorHoverWidget.border': UI.widget.hover.border, // Border color of the editor hover.
  'editorHoverWidget.highlightForeground': UI.widget.hover.highlightForeground, // Foreground color of the active item in the parameter hint.
  'editorHoverWidget.statusBarBackground': UI.widget.hover.statusBarBackground, // Background color of the editor hover status bar.
}

// The editor marker view shows when navigating to errors and warnings in the editor (Go to Next Error or Warning command).
export const MARKER_NAVIGATION: TIBlock = {
  'editorMarkerNavigation.background': UI.widget.markerNavigation.background, // Editor marker navigation widget background.
  'editorMarkerNavigationError.headerBackground': UI.widget.markerNavigation.error.headerBackground, // Editor marker navigation widget error heading background.
  'editorMarkerNavigationError.background': UI.widget.markerNavigation.error.background, // Editor marker navigation widget error color.
  'editorMarkerNavigationWarning.headerBackground': UI.widget.markerNavigation.warning.headerBackground, // Editor marker navigation widget warning heading background.
  'editorMarkerNavigationWarning.background': UI.widget.markerNavigation.warning.background, // Editor marker navigation widget warning color.
  'editorMarkerNavigationInfo.headerBackground': UI.widget.markerNavigation.info.headerBackground, // Editor marker navigation widget info heading background.
  'editorMarkerNavigationInfo.background': UI.widget.markerNavigation.info.background, // Editor marker navigation widget info color.
}

// ===== =========== =====
// ===== QUICK INPUT =====
// ===== =========== =====
// The quick input widget is the container for views like the color theme picker and the Command Palette.

export const QUICK_INPUT: TIBlock = {
  'quickInput.background': UI.quickInput.background, // Quick input background color.
  'quickInput.foreground': UI.quickInput.foreground, // Quick input foreground color.
  'quickInputTitle.background': UI.quickInput.titleBackground, // Quick picker title background color.
  'quickInputList.focusBackground': UI.quickInput.list.focus.background, // Quick picker background color for the focused item.
  'quickInputList.focusForeground': UI.quickInput.list.focus.foreground, // Quick picker foreground color for the focused item.
  'quickInputList.focusIconForeground': UI.quickInput.list.focus.iconForeground, // Quick picker icon foreground color for the focused item.
}

// ===== ====== =====
// ===== ACTION =====
// ===== ====== =====
// A set of colors to control the interactions with actions across the workbench.

export const ACTION: TIBlock = {
  'toolbar.hoverBackground': UI.action.toolbar.hoverBackground, // Toolbar background when hovering over actions using the mouse
  'toolbar.hoverOutline': UI.action.toolbar.hoverOutline, // Toolbar outline when hovering over actions using the mouse
  'toolbar.activeBackground': UI.action.toolbar.activeBackground, // Toolbar background when holding the mouse over actions
  'actionBar.toggledBackground': UI.action.bar.toggledBackground, // Background color for toggled action items in action bar.
  'editorActionList.background': UI.action.list.background, // Action List background color.
  'editorActionList.foreground': UI.action.list.foreground, // Action List foreground color.
  'editorActionList.focusForeground': UI.action.list.focus.foreground, // Action List foreground color for the focused item.
  'editorActionList.focusBackground': UI.action.list.focus.background, // Action List background color for the focused item.
}

// ===== ==== =====
// ===== TEXT =====
// ===== ==== =====
// Colors inside a text document, such as the welcome page.

export const TEXT: TIBlock = {
  'textBlockQuote.background': UI.text.blockQuote.background, // Background color for block quotes in text.
  'textBlockQuote.border': UI.text.blockQuote.border, // Border color for block quotes in text.
  'textCodeBlock.background': UI.text.codeBlock.background, // Background color for code blocks in text.
  'textLink.foreground': UI.text.link.foreground, // Foreground color for links in text.
  'textLink.activeForeground': UI.text.link.activeForeground, // Foreground color for links in text when clicked on and on mouse hover.
  'textPreformat.foreground': UI.text.preformat.foreground, // Foreground color for preformatted text segments.
  'textPreformat.background': UI.text.preformat.background, // Background color for preformatted text segments.
  'textPreformat.border': UI.text.preformat.border, // Border color for preformatted text segments.
  'textSeparator.foreground': UI.text.separatorForeground, // Color for text separators.
}

// ===== ======== =====
// ===== COMMENTS =====
// ===== ======== =====

export const COMMENTS: TIBlock = {
  'editorCommentsWidget.resolvedBorder': UI.comments.widget.resolvedBorder, // Color of borders and arrow for resolved comments.
  'editorCommentsWidget.unresolvedBorder': UI.comments.widget.unresolvedBorder, // Color of borders and arrow for unresolved comments.
  'editorCommentsWidget.rangeBackground': UI.comments.widget.rangeBackground, // Color of background for comment ranges.
  'editorCommentsWidget.rangeActiveBackground': UI.comments.widget.rangeActiveBackground, // Color of background for currently selected or hovered comment range.
  'editorCommentsWidget.replyInputBackground': UI.comments.widget.replyInputBackground, // Background color for comment reply input box.
  'commentsView.resolvedIcon': UI.comments.view.resolvedIcon, // Icon color for resolved comments.
  'commentsView.unresolvedIcon': UI.comments.view.unresolvedIcon, // Icon color for unresolved comments.
}

// ===== ====== =====
// ===== SEARCH =====
// ===== ====== =====

export const SEARCH: TIBlock = {
  'search.resultsInfoForeground': UI.search.resultsInfoForeground, // Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "{x} results in {y} files".
  'searchEditor.findMatchBackground': UI.search.editor.findMatch.background, // Color of the editor's results.
  'searchEditor.findMatchBorder': UI.search.editor.findMatch.border, // Border color of the editor's results.
  'searchEditor.textInputBorder': UI.search.editor.textInputBorder, // Search editor text input box border.
}

// ===== ===== =====
// ===== PORTS =====
// ===== ===== =====

export const PORTS: TIBlock = {
  'ports.iconRunningProcessForeground': UI.ports.iconRunningProcessForeground, // The color of the icon for a port that has an associated running process.
}

// ===== =========== =====
// ===== DIFF EDITOR =====
// ===== =========== =====
// For coloring inserted and removed text, use either a background or a border color but not both.

export const DIFF_EDITOR: TIBlock = {
  'diffEditor.border': UI.diffEditor.border, // Border color between the two text editors.
  'diffEditor.diagonalFill': UI.diffEditor.diagonalFill, // Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
  'diffEditor.move.border': UI.diffEditor.move.border, // The border color for text that got moved in the diff editor.
  'diffEditor.moveActive.border': UI.diffEditor.move.activeBorder, // The active border color for text that got moved in the diff editor.

  'diffEditor.insertedTextBackground': UI.diffEditor.inserted.textBackground, // Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
  'diffEditor.insertedTextBorder': UI.diffEditor.inserted.textBorder, // Outline color for the text that got inserted.
  'diffEditor.insertedLineBackground': UI.diffEditor.inserted.lineBackground, // Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
  'diffEditorGutter.insertedLineBackground': UI.diffEditor.inserted.gutterLineBackground, // Background color for the margin where lines got inserted.
  'diffEditorOverview.insertedForeground': UI.diffEditor.inserted.overviewForeground, // Diff overview ruler foreground for inserted content.

  'diffEditor.removedTextBackground': UI.diffEditor.removed.textBackground, // Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
  'diffEditor.removedTextBorder': UI.diffEditor.removed.textBorder, // Outline color for text that got removed.
  'diffEditor.removedLineBackground': UI.diffEditor.removed.lineBackground, // Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
  'diffEditorGutter.removedLineBackground': UI.diffEditor.removed.gutterLineBackground, // Background color for the margin where lines got removed.
  'diffEditorOverview.removedForeground': UI.diffEditor.removed.overviewForeground, // Diff overview ruler foreground for removed content.

  'diffEditor.unchangedRegionBackground': UI.diffEditor.unchanged.regionBackground, // The color of unchanged blocks in diff editor.
  'diffEditor.unchangedRegionForeground': UI.diffEditor.unchanged.regionForeground, // The foreground color of unchanged blocks in the diff editor.
  'diffEditor.unchangedRegionShadow': UI.diffEditor.unchanged.regionShadow, // The color of the shadow around unchanged region widgets.
  'diffEditor.unchangedCodeBackground': UI.diffEditor.unchanged.codeBackground, // The background color of unchanged code in the diff editor.

  'multiDiffEditor.headerBackground': UI.diffEditor.multi.headerBackground, // The background color of the diff editor's header
  'multiDiffEditor.background': UI.diffEditor.multi.background, // The background color of the multi file diff editor
  'multiDiffEditor.border': UI.diffEditor.multi.border, // The border color of the multi file diff editor
}

// ===== ===== =====
// ===== MERGE =====
// ===== ===== =====

export const MERGE: TIBlock = {
  // Inline merge conflicts
  'merge.border': UI.merge.border, // Border color on headers and the splitter in inline merge conflicts.
  'merge.currentHeaderBackground': UI.merge.current.headerBackground, // Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
  'merge.currentContentBackground': UI.merge.current.contentBackground, // Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
  'merge.incomingHeaderBackground': UI.merge.incoming.headerBackground, // Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
  'merge.incomingContentBackground': UI.merge.incoming.contentBackground, // Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
  'merge.commonHeaderBackground': UI.merge.common.headerBackground, // Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
  'merge.commonContentBackground': UI.merge.common.contentBackground, // Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.

  // The three-way merge editor
  'mergeEditor.change.background': UI.merge.editor.change.background, // The background color for changes.
  'mergeEditor.change.word.background': UI.merge.editor.change.wordBackground, // The background color for word changes.
  'mergeEditor.changeBase.background': UI.merge.editor.changeBase.background, // The background color for changes in base.
  'mergeEditor.changeBase.word.background': UI.merge.editor.changeBase.wordBackground, // The background color for word changes in base.
  'mergeEditor.conflict.unhandledUnfocused.border': UI.merge.editor.conflict.unhandled.unfocusedBorder, // The border color of unhandled unfocused conflicts.
  'mergeEditor.conflict.unhandledFocused.border': UI.merge.editor.conflict.unhandled.focusedBorder, // The border color of unhandled focused conflicts.
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': UI.merge.editor.conflict.unhandled.minimapOverviewRuler, // The foreground color for changes in input 1.
  'mergeEditor.conflict.handledUnfocused.border': UI.merge.editor.conflict.handled.unfocusedBorder, // The border color of handled unfocused conflicts.
  'mergeEditor.conflict.handledFocused.border': UI.merge.editor.conflict.handled.focusedBorder, // The border color of handled focused conflicts.
  'mergeEditor.conflict.handled.minimapOverViewRuler': UI.merge.editor.conflict.handled.minimapOverviewRuler, // The foreground color for changes in input 1.
  'mergeEditor.conflict.input1.background': UI.merge.editor.conflict.input1Background, // The background color of decorations in input 1.
  'mergeEditor.conflict.input2.background': UI.merge.editor.conflict.input2Background, // The background color of decorations in input 2.
  'mergeEditor.conflictingLines.background': UI.merge.editor.conflictingLinesBackground, // The background of the "Conflicting Lines" text.
}

// ===== ==== =====
// ===== CHAT =====
// ===== ==== =====

export const CHAT: TIBlock = {
  'chat.requestBorder': UI.chat.request.border, // The border color of a chat request.
  'chat.requestBackground': UI.chat.request.background, // The background color of a chat request.
  'chat.requestCodeBorder': UI.chat.request.codeBorder, // Border color of code blocks within the chat request bubble.
  'chat.requestBubbleBackground': UI.chat.request.bubble.background, // Background color of the chat request bubble.
  'chat.requestBubbleHoverBackground': UI.chat.request.bubble.hoverBackground, // Background color of the chat request bubble on hover.
  'chat.slashCommandBackground': UI.chat.slashCommand.background, // The background color of a chat slash command.
  'chat.slashCommandForeground': UI.chat.slashCommand.foreground, // The foreground color of a chat slash command.
  'chat.avatarBackground': UI.chat.avatar.background, // The background color of a chat avatar.
  'chat.avatarForeground': UI.chat.avatar.foreground, // The foreground color of a chat avatar.
  'chat.editedFileForeground': UI.chat.editedFileForeground, // The foreground color of a chat edited file in the edited file list.
  'chat.linesAddedForeground': UI.chat.linesAddedForeground, // Foreground color of lines added in chat code block pill.
  'chat.linesRemovedForeground': UI.chat.linesRemovedForeground, // Foreground color of lines removed in chat code block pill.
  'chat.checkpointSeparator': UI.chat.checkpointSeparator, // Chat checkpoint separator color.
  'chat.thinkingShimmer': UI.chat.thinkingShimmer, // Shimmer highlight for thinking/working labels.
}

export const INLINE_CHAT: TIBlock = {
  'inlineChat.background': UI.chat.inline.background, // Background color of the interactive editor widget.
  'inlineChat.foreground': UI.chat.inline.foreground, // Foreground color of the interactive editor widget
  'inlineChat.border': UI.chat.inline.border, // Border color of the interactive editor widget.
  'inlineChat.shadow': UI.chat.inline.shadow, // Shadow color of the interactive editor widget.
  'inlineChatInput.placeholderForeground': UI.chat.inline.input.placeholderForeground, // Foreground color of the interactive editor input placeholder.
  'inlineChatInput.background': UI.chat.inline.input.background, // Background color of the interactive editor input.
  'inlineChatInput.border': UI.chat.inline.input.border, // Border color of the interactive editor input.
  'inlineChatInput.focusBorder': UI.chat.inline.input.focusBorder, // Border color of the interactive editor input when focused.
  'inlineChatDiff.inserted': UI.chat.inline.diff.inserted, // Background color of inserted text in the interactive editor input.
  'inlineChatDiff.removed': UI.chat.inline.diff.removed, // Background color of removed text in the interactive editor input.
}

export const AGENT_SESSION: TIBlock = {
  'agentSessionReadIndicator.foreground': UI.chat.agent.readIndicatorForeground, // Foreground color for the read indicator in an agent session.
  'agentSessionSelectedBadge.border': UI.chat.agent.selectedBadgeBorder, // Border color for the badges in selected agent session items.
  'agentSessionSelectedUnfocusedBadge.border': UI.chat.agent.selectedUnfocusedBadgeBorder, // Border color for the badges in selected agent session items when the view is unfocused.
  'agentStatusIndicator.background': UI.chat.agent.statusIndicatorBackground, // Background color of the agent status indicator in the titlebar.
}

// ===== =========== =====
// ===== INLINE EDIT =====
// ===== =========== =====
// Editor inline edits can be seen when using Copilot to suggest the next change to make.

export const INLINE_EDIT: TIBlock = {
  'inlineEdit.gutterIndicator.background': UI.inlineEdit.gutterIndicator.background, // Background color for the inline edit gutter indicator.
  'inlineEdit.gutterIndicator.primaryBorder': UI.inlineEdit.gutterIndicator.primary.border, // Border color for the primary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.primaryForeground': UI.inlineEdit.gutterIndicator.primary.foreground, // Foreground color for the primary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.primaryBackground': UI.inlineEdit.gutterIndicator.primary.background, // Background color for the primary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.secondaryBorder': UI.inlineEdit.gutterIndicator.secondary.border, // Border color for the secondary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.secondaryForeground': UI.inlineEdit.gutterIndicator.secondary.foreground, // Foreground color for the secondary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.secondaryBackground': UI.inlineEdit.gutterIndicator.secondary.background, // Background color for the secondary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.successfulBorder': UI.inlineEdit.gutterIndicator.successful.border, // Border color for the successful inline edit gutter indicator.
  'inlineEdit.gutterIndicator.successfulForeground': UI.inlineEdit.gutterIndicator.successful.foreground, // Foreground color for the successful inline edit gutter indicator.
  'inlineEdit.gutterIndicator.successfulBackground': UI.inlineEdit.gutterIndicator.successful.background, // Background color for the successful inline edit gutter indicator.

  'inlineEdit.originalBackground': UI.inlineEdit.original.background, // Background color for the original text in inline edits.
  'inlineEdit.originalChangedLineBackground': UI.inlineEdit.original.changedLineBackground, // Background color for the changed lines in the original text of inline edits.
  'inlineEdit.originalChangedTextBackground': UI.inlineEdit.original.changedTextBackground, // Overlay color for the changed text in the original text of inline edits.
  'inlineEdit.originalBorder': UI.inlineEdit.original.border, // Border color for the original text in inline edits.
  'inlineEdit.tabWillAcceptOriginalBorder': UI.inlineEdit.original.tabWillAcceptBorder, // Original border color for the inline edits widget over the original text when tab will accept it.

  'inlineEdit.modifiedBackground': UI.inlineEdit.modified.background, // Background color for the modified text in inline edits.
  'inlineEdit.modifiedChangedLineBackground': UI.inlineEdit.modified.changedLineBackground, // Background color for the changed lines in the modified text of inline edits.
  'inlineEdit.modifiedChangedTextBackground': UI.inlineEdit.modified.changedTextBackground, // Overlay color for the changed text in the modified text of inline edits.
  'inlineEdit.modifiedBorder': UI.inlineEdit.modified.border, // Border color for the modified text in inline edits.
  'inlineEdit.tabWillAcceptModifiedBorder': UI.inlineEdit.modified.tabWillAcceptBorder, // Modified border color for the inline edits widget when tab will accept it.
}

// ===== === =====
// ===== ZED =====
// ===== === =====
// Zed's UI keys. A key with no clear VS Code counterpart carries a literal channel.

// The generic element states, in Zed's own vocabulary.
export const ZED_ELEMENT: TIBlock = {
  'element.background': { color: 'background', luminance: 'r500', transparency: 1 },
  'element.hover': { color: 'background', luminance: 'r500', transparency: 0.8 },
  'element.active': { color: 'accent', luminance: 'r300', transparency: 0.125 },
  'element.selected': { color: 'accent', luminance: 'r300', transparency: 0.25 },
  'element.disabled': { color: 'background', luminance: 'r700', transparency: 0.5 },
  'drop_target.background': UI.list.drop.background,

  'ghost_element.background': { color: 'midground', luminance: 'r300', transparency: 0.05 },
  'ghost_element.hover': { color: 'midground', luminance: 'r300', transparency: 0.1 },
  'ghost_element.active': { color: 'accent', luminance: 'r300', transparency: 0.25 },
  'ghost_element.selected': { color: 'accent', luminance: 'r300', transparency: 0.5 },
  'ghost_element.disabled': { color: 'background', luminance: 'r700', transparency: 0.5 },
}

export const ZED_TEXT: TIBlock = {
  text: UI.global.base.foreground,
  'text.muted': UI.global.base.descriptionForeground,
  'text.placeholder': UI.controls.input.placeholderForeground,
  'text.disabled': UI.global.base.disabledForeground,
  'text.accent': { color: 'accent', luminance: 'r300', transparency: 1 },

  icon: UI.global.base.iconForeground,
  'icon.muted': UI.global.base.descriptionForeground,
  'icon.disabled': UI.global.base.disabledForeground,
  'icon.placeholder': UI.controls.input.placeholderForeground,
  'icon.accent': { color: 'blue', luminance: 'r300', transparency: 1 },
}

// The strips. Zed's toolbar is the breadcrumb strip above the editor.
export const ZED_BARS: TIBlock = {
  'status_bar.background': UI.statusBar.background,
  'title_bar.background': UI.titleBar.active.background,
  'title_bar.inactive_background': UI.titleBar.inactive.background,
  'toolbar.background': UI.editor.breadcrumb.background,

  'tab_bar.background': UI.editor.editorGroupHeader.tabs.background,
  'tab.inactive_background': UI.editor.tab.inactive.background,
  'tab.active_background': UI.editor.tab.active.background,
}

export const ZED_SEARCH: TIBlock = {
  'search.match_background': UI.editor.find.match.highlight.background,
  'search.active_match_background': UI.editor.find.match.background,
}

export const ZED_BORDER: TIBlock = {
  border: { color: 'background', luminance: 'r500', transparency: 1 },
  'border.variant': { color: 'background', luminance: 'r500', transparency: 1 },
  'border.focused': UI.global.base.focusBorder,
  'border.selected': { color: 'accent', luminance: 'r700', transparency: 0.5 },
  'border.transparent': { color: 'midground', luminance: 'r300', transparency: 0 },
  'border.disabled': { color: 'midground', luminance: 'r500', transparency: 0.25 },
}

export const ZED_SCROLLBAR: TIBlock = {
  'scrollbar.thumb.background': UI.global.scrollbar.slider.background,
  'scrollbar.thumb.hover_background': UI.global.scrollbar.slider.hoverBackground,
  'scrollbar.thumb.border': { color: 'midground', luminance: 'r300', transparency: 0 },
  'scrollbar.track.background': UI.global.scrollbar.background,
  'scrollbar.track.border': { color: 'midground', luminance: 'r300', transparency: 0 },
}

// Zed's `panel` is the side dock, not the bottom panel: the project tree lives there.
export const ZED_SURFACE: TIBlock = {
  background: UI.editor.background,
  'surface.background': UI.global.surface.background,
  'elevated_surface.background': UI.widget.editor.background,

  'panel.background': UI.sideBar.background,
  'panel.focused_border': UI.global.base.focusBorder,
  'pane.focused_border': UI.global.base.focusBorder,

  'panel.indent_guide': UI.list.tree.inactiveIndentGuidesStroke,
  'panel.indent_guide_hover': { color: 'foreground', luminance: 'r500', transparency: 0.25 },
  'panel.indent_guide_active': UI.list.tree.indentGuidesStroke,
}

export const ZED_EDITOR: TIBlock = {
  'editor.foreground': UI.editor.foreground,
  'editor.background': UI.editor.background,
  'editor.gutter.background': UI.editor.gutter.background,
  'editor.subheader.background': UI.editor.stickyScroll.background,
  'editor.active_line.background': UI.editor.line.highlight.background,
  'editor.highlighted_line.background': UI.editor.range.highlight.background,

  'editor.line_number': UI.editor.lineNumber.foreground,
  'editor.active_line_number': UI.editor.lineNumber.activeForeground,
  'editor.hover_line_number': { color: 'midground', luminance: 'r300', transparency: 1 },

  'editor.invisible': UI.editor.text.whitespaceForeground,
  'editor.wrap_guide': UI.editor.text.rulerForeground,
  'editor.active_wrap_guide': { color: 'midground', luminance: 'r300', transparency: 0.25 },

  'editor.document_highlight.read_background': UI.editor.word.highlight.background,
  'editor.document_highlight.write_background': UI.editor.word.highlight.strong.background,
}

// The dim slots stay literal.
export const ZED_TERMINAL: TIBlock = {
  'terminal.background': UI.terminal.background,
  'terminal.foreground': UI.terminal.foreground,
  'terminal.bright_foreground': UI.terminal.ansi.brightWhite,
  'terminal.dim_foreground': { color: 'midground', luminance: 'r500', transparency: 1 },

  'terminal.ansi.black': UI.terminal.ansi.black,
  'terminal.ansi.bright_black': UI.terminal.ansi.brightBlack,
  'terminal.ansi.dim_black': { color: 'black', luminance: 'l700', transparency: 1 },

  'terminal.ansi.red': UI.terminal.ansi.red,
  'terminal.ansi.bright_red': UI.terminal.ansi.brightRed,
  'terminal.ansi.dim_red': { color: 'red', luminance: 'l700', transparency: 1 },

  'terminal.ansi.green': UI.terminal.ansi.green,
  'terminal.ansi.bright_green': UI.terminal.ansi.brightGreen,
  'terminal.ansi.dim_green': { color: 'green', luminance: 'l700', transparency: 1 },

  'terminal.ansi.yellow': UI.terminal.ansi.yellow,
  'terminal.ansi.bright_yellow': UI.terminal.ansi.brightYellow,
  'terminal.ansi.dim_yellow': { color: 'yellow', luminance: 'l700', transparency: 1 },

  'terminal.ansi.blue': UI.terminal.ansi.blue,
  'terminal.ansi.bright_blue': UI.terminal.ansi.brightBlue,
  'terminal.ansi.dim_blue': { color: 'blue', luminance: 'l700', transparency: 1 },

  'terminal.ansi.magenta': UI.terminal.ansi.magenta,
  'terminal.ansi.bright_magenta': UI.terminal.ansi.brightMagenta,
  'terminal.ansi.dim_magenta': { color: 'fuchsia', luminance: 'l700', transparency: 1 },

  'terminal.ansi.cyan': UI.terminal.ansi.cyan,
  'terminal.ansi.bright_cyan': UI.terminal.ansi.brightCyan,
  'terminal.ansi.dim_cyan': { color: 'cyan', luminance: 'l700', transparency: 1 },

  'terminal.ansi.white': UI.terminal.ansi.white,
  'terminal.ansi.bright_white': UI.terminal.ansi.brightWhite,
  'terminal.ansi.dim_white': { color: 'white', luminance: 'l700', transparency: 1 },
}

export const ZED_LINK: TIBlock = {
  'link_text.hover': UI.text.link.activeForeground,
}

export const ZED_VERSION_CONTROL: TIBlock = {
  'version_control.added': UI.git.decoration.added,
  'version_control.modified': UI.git.decoration.modified,
  'version_control.deleted': UI.git.decoration.deleted,
  'version_control.word_added': { ...SEMANTICS.git.added, transparency: 0.25 },
  'version_control.word_deleted': { ...SEMANTICS.git.deleted, transparency: 0.25 },
  'version_control.conflict_marker.ours': { ...SEMANTICS.git.added, transparency: 0.1 },
  'version_control.conflict_marker.theirs': { ...SEMANTICS.git.modified, transparency: 0.1 },
}

// Zed's state tokens: each is a foreground, a background, and a border.
export const ZED_STATE: TIBlock = {
  conflict: { ...SEMANTICS.git.conflicted, transparency: 1 },
  'conflict.background': { ...SEMANTICS.git.conflicted, transparency: 0.1 },
  'conflict.border': { ...SEMANTICS.git.conflicted, luminance: 'r700', transparency: 1 },

  created: { ...SEMANTICS.git.added, transparency: 1 },
  'created.background': { ...SEMANTICS.git.added, transparency: 0.1 },
  'created.border': { ...SEMANTICS.git.added, luminance: 'r700', transparency: 1 },

  deleted: { ...SEMANTICS.git.deleted, transparency: 1 },
  'deleted.background': { ...SEMANTICS.git.deleted, transparency: 0.1 },
  'deleted.border': { ...SEMANTICS.git.deleted, luminance: 'r700', transparency: 1 },

  modified: { ...SEMANTICS.git.modified, transparency: 1 },
  'modified.background': { ...SEMANTICS.git.modified, transparency: 0.1 },
  'modified.border': { ...SEMANTICS.git.modified, luminance: 'r700', transparency: 1 },

  renamed: UI.git.decoration.renamed,
  'renamed.background': { ...SEMANTICS.git.renamed, transparency: 0.1 },
  'renamed.border': { ...SEMANTICS.git.renamed, luminance: 'r700', transparency: 1 },

  ignored: { ...SEMANTICS.git.ignored, luminance: 'r500', transparency: 1 },
  'ignored.background': { ...SEMANTICS.git.ignored, luminance: 'r500', transparency: 0.1 },
  'ignored.border': { ...SEMANTICS.git.ignored, transparency: 1 },

  error: { ...SEMANTICS.status.error, transparency: 1 },
  'error.background': { ...SEMANTICS.status.error, transparency: 0.1 },
  'error.border': { ...SEMANTICS.status.error, luminance: 'r700', transparency: 1 },

  warning: { ...SEMANTICS.status.warning, transparency: 1 },
  'warning.background': { ...SEMANTICS.status.warning, transparency: 0.1 },
  'warning.border': { ...SEMANTICS.status.warning, luminance: 'r700', transparency: 1 },

  info: { ...SEMANTICS.status.info, transparency: 1 },
  'info.background': { ...SEMANTICS.status.info, transparency: 0.1 },
  'info.border': { ...SEMANTICS.status.info, luminance: 'r700', transparency: 1 },

  hint: { ...SEMANTICS.status.hint, transparency: 1 },
  'hint.background': { ...SEMANTICS.status.hint, transparency: 0.1 },
  'hint.border': { ...SEMANTICS.status.hint, luminance: 'r700', transparency: 1 },

  success: { ...SEMANTICS.status.success, transparency: 1 },
  'success.background': { ...SEMANTICS.status.success, transparency: 0.1 },
  'success.border': { ...SEMANTICS.status.success, luminance: 'r700', transparency: 1 },

  hidden: { color: 'midground', luminance: 'r500', transparency: 1 },
  'hidden.background': { color: 'midground', luminance: 'r500', transparency: 0.1 },
  'hidden.border': { color: 'midground', luminance: 'r300', transparency: 1 },

  predictive: { color: 'midground', luminance: 'r500', transparency: 1 },
  'predictive.background': { color: 'midground', luminance: 'r500', transparency: 0.1 },
  'predictive.border': { color: 'midground', luminance: 'r300', transparency: 1 },

  unreachable: { color: 'midground', luminance: 'r300', transparency: 1 },
  'unreachable.background': { color: 'midground', luminance: 'r300', transparency: 0.1 },
  'unreachable.border': { color: 'midground', luminance: 'r500', transparency: 1 },
}

// Collaborator colours. An array, not a map: Zed assigns them by join order.
export const ZED_PLAYERS: TIBlock[] = [
  {
    cursor: { color: 'accent', luminance: 'r300', transparency: 1 },
    background: { color: 'accent', luminance: 'r300', transparency: 1 },
    selection: { color: 'accent', luminance: 'r300', transparency: 0.2 },
  },
  {
    cursor: { color: 'special', luminance: 'r300', transparency: 1 },
    background: { color: 'special', luminance: 'r300', transparency: 1 },
    selection: { color: 'special', luminance: 'r300', transparency: 0.2 },
  },
  {
    cursor: { color: 'emerald', luminance: 'r300', transparency: 1 },
    background: { color: 'emerald', luminance: 'r300', transparency: 1 },
    selection: { color: 'emerald', luminance: 'r300', transparency: 0.2 },
  },
  {
    cursor: { color: 'yellow', luminance: 'r300', transparency: 1 },
    background: { color: 'yellow', luminance: 'r300', transparency: 1 },
    selection: { color: 'yellow', luminance: 'r300', transparency: 0.2 },
  },
  {
    cursor: { color: 'violet', luminance: 'r300', transparency: 1 },
    background: { color: 'violet', luminance: 'r300', transparency: 1 },
    selection: { color: 'violet', luminance: 'r300', transparency: 0.2 },
  },
]

// ===== ====== =====
// ===== SYNTAX =====
// ===== ====== =====
// The VS Code token rules, one block per TextMate top-level scope. Rule order is output
// order: TextMate breaks ties between equally specific selectors by taking the later rule.

export const TOKEN_STANDARD: TITokenBlock = {
  Default: { scope: [], token: SYNTAX.standard.default },
  Variable: {
    scope: [
      'variable', //                                                                             variables. Not all languages allow easy identification (and thus markup) of these
      'variable.annotation', //                                                                  The final label in an identifier that is part of an annotation should use the following. For the entire identifier, the meta.path scope should be used. The entire annotation should get meta.annotation.
      'variable.member',
      'variable.readonly',
      'variable.other', //                                                                       other variables, like $some_variables.
      'variable.other.alias',
      'variable.other.member',
      'variable.other.object',
      'variable.other.property',
      'variable.other.property.css',
      'variable.other.readwrite',
      'variable.other.readwrite.global',
      'variable.other.readwrite.instance',
      'variable.other.readwrite.member',
      'variable.other.readwrite.module',
      'variable.fragment.graphql',
      'variable.other.key.toml',
      'punctuation.definition.variable',
    ],
    token: SYNTAX.standard.variable,
  },
  // this, super, self, and the like.
  'Variable Language': {
    scope: ['variable.language'],
    token: SYNTAX.standard.variableLanguage,
  },
  'Variable Constant': {
    scope: ['variable.other.constant', 'variable.other.constant.property', 'variable.other.constant.object', 'entity.name.constant'],
    token: SYNTAX.standard.constant,
  },
  'Variable Enum Member': {
    scope: ['variable.other.enummember'],
    token: SYNTAX.standard.enumMember,
  },
}

export const TOKEN_COMMENT: TITokenBlock = {
  'Comment Line': {
    scope: [
      'comment',
      'comment.line',
      'comment.line.double-slash',
      'comment.line.double-dash',
      'comment.line.number-sign',
      'comment.line.percentage',
      'comment.line.character',
      'punctuation.definition.comment',
      'string.comment',
    ],
    token: SYNTAX.comment.line,
  },
  'Comment Block': {
    scope: [
      'comment.block',
      'comment.block.documentation',
      'unused.comment',
      'wildcard.comment',
      'string.quoted.docstring.multi',
      'string.quoted.docstring.multi.python punctuation.definition.string.begin',
      'string.quoted.docstring.multi.python punctuation.definition.string.end',
      'string.quoted.docstring.multi.python constant.character.escape',
      'punctuation.definition.block', // Necessary
      'meta.toc-list',
    ],
    token: SYNTAX.comment.block,
  },
}

export const TOKEN_ENTITY: TITokenBlock = {
  Entity: {
    scope: [
      'entity.name',
      'entity.name.fragment.graphql',
      'entity.name.impl',
      'entity.name.import',
      'entity.name.section',
      'entity.other',
      'entity.other.inherited-class',
    ],
    token: SYNTAX.entity.base,
  },
  Enum: {
    scope: ['entity.name.enum'],
    token: SYNTAX.entity.enum,
  },
  'Entity Filename': {
    scope: ['entity.name.filename'],
    token: SYNTAX.entity.filename,
  },
  'Support Property': {
    scope: ['support.type.property-name'],
    token: SYNTAX.entity.supportProperty,
  },
  'Object and Array': {
    scope: ['meta.object-literal', 'meta.array', 'meta.structure.dictionary', 'meta.structure.array'],
    token: SYNTAX.entity.objectArray,
  },
  'Packages, Modules and Libraries': {
    scope: [
      'entity.name.namespace',
      'entity.name.package',
      'entity.name.section.toml',
      'entity.name.tag.yaml',
      'entity.name.struct',
      'entity.name.trait',
      'entity.name.union',
    ],
    token: SYNTAX.entity.namespace,
  },
  'Variable Alias': {
    scope: ['variable.other.readwrite.alias'],
    token: SYNTAX.entity.alias,
  },
}

export const TOKEN_CONSTANT: TITokenBlock = {
  Constant: {
    scope: [
      'constant',
      'constant.numeric',
      'constant.numeric.integer',
      'constant.numeric.float',
      'constant.numeric.complex',
      'constant.numeric.hex',
      'constant.character',
      'constant.character.escape',
      'constant.character.string.escape',
      'constant.language',
      'constant.other',
      'constant.regexp',
      'constant.other.date',
      'constant.other.timestamp',
      'support.constant',
    ],
    token: SYNTAX.constant.base,
  },
  // Ruby and Clojure symbols.
  Symbol: {
    scope: ['constant.other.symbol'],
    token: SYNTAX.constant.symbol,
  },
}

export const TOKEN_KEYWORD: TITokenBlock = {
  'Keyword Controls': {
    scope: [
      'keyword',
      'keyword.control',
      'keyword.control.as',
      'keyword.control.conditional',
      'keyword.control.default',
      'keyword.control.import',
      'comment keyword.codetag.notation',
      'comment.block.documentation keyword',
      'comment.block.documentation storage.type.class',
      'keyword.other',
      'keyword.other.unit',
    ],
    token: SYNTAX.keyword.control,
  },
  Label: {
    scope: ['entity.name.label'],
    token: SYNTAX.keyword.label,
  },
  'CSS Selector': {
    scope: ['meta.selector'],
    token: SYNTAX.selector.base,
  },
  Preprocessor: {
    scope: ['keyword.control.directive', 'meta.preprocessor'],
    token: SYNTAX.keyword.preprocessor,
  },
  'Keyword New': {
    scope: ['keyword.control.new', 'keyword.operator.new'],
    token: SYNTAX.keyword.new,
  },
  'Keyword Operators': {
    scope: [
      'keyword.operator',
      'keyword.operator.arithmetic',
      'keyword.operator.assignment',
      'keyword.operator.bitwise',
      'keyword.operator.expression.in',
      'keyword.operator.expression.instanceof',
      'keyword.operator.expression.of',
      'keyword.operator.logical',
      'keyword.operator.negation.regexp',
      'keyword.operator.new',
      'keyword.operator.type',
      'keyword.operator.word',
      'keyword.operator.function.infix',
      'source.js meta.import-equals.external keyword.operator',
      'source.js meta.tag keyword.operator',
    ],
    token: SYNTAX.keyword.operator,
  },
  'Keyword Declaration': {
    scope: [
      'keyword.declaration',
      'keyword.declaration.function',
      'keyword.declaration.class',
      'keyword.declaration.struct',
      'keyword.declaration.enum',
      'keyword.declaration.interface',
      'keyword.declaration.impl',
      'keyword.declaration.namespace',
      'keyword.declaration.module',
      'keyword.declaration.type',
    ],
    token: SYNTAX.keyword.declaration,
  },
}

export const TOKEN_FUNCTION: TITokenBlock = {
  Function: {
    scope: [
      'entity.name.function',
      'entity.name.function.destructor',
      'meta.function-call.object',
      'meta.function-call.php',
      'meta.function-call.static',
      'meta.method-call.java meta.method',
      'meta.method.groovy',
      'support.function.any-method.lua',
      'variable.function',
      'meta.function',
    ],
    token: SYNTAX.function.base,
  },
  Constructor: {
    scope: ['entity.name.function.constructor'],
    token: SYNTAX.function.constructor,
  },
  'Function Parameters': {
    scope: [
      'entity.name.variable.parameter',
      'comment.block.documentation variable',
      'meta.import variable.other.readwrite',
      'meta.variable.assignment.destructured.object.coffee variable',
      'entity.other.attribute-name',
      'meta.at-rule.function variable',
      'meta.at-rule.mixin variable',
      'meta.function.arguments variable.other.php',
      'meta.method.declaration',
      'meta.parameters',
      'meta.selectionset.graphql meta.arguments variable',
      'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
      'variable.parameter',
      'variable.parameter.function',
      'variable.parameter.function-call',
    ],
    token: SYNTAX.function.parameter,
  },
  'CSS Pseudo Selector': {
    scope: ['entity.other.attribute-name.pseudo-class', 'entity.other.attribute-name.pseudo-element'],
    token: SYNTAX.selector.pseudo,
  },
  'CSS attribute parent selectors (&)': {
    scope: ['entity.other.attribute-name.parent-selector'],
    token: SYNTAX.function.parentSelector,
  },
  'Property Access': {
    scope: ['meta.property-access', 'meta.member.access'],
    token: SYNTAX.function.propertyAccess,
  },
}

export const TOKEN_DECORATOR: TITokenBlock = {
  Decorators: {
    scope: ['meta.decorator variable.other.readwrite', 'meta.decorator variable.other.property'],
    token: SYNTAX.decorator.base,
  },
  'Decorator Objects': {
    scope: ['meta.decorator variable.other.object'],
    token: SYNTAX.decorator.object,
  },
}

export const TOKEN_PUNCTUATION: TITokenBlock = {
  Punctuation: {
    scope: [
      'punctuation.accessor',
      'punctuation.section',
      'punctuation.definition.arguments.begin',
      'punctuation.definition.arguments.end',
      'punctuation.definition.entity.begin',
      'punctuation.definition.entity.end',
      'punctuation.definition.type.begin',
      'punctuation.definition.type.end',
      'punctuation.section.scope.begin',
      'punctuation.section.scope.end',
      'punctuation.function.swift',
      'punctuation.separator',
      'punctuation.separator.continuation',
      'punctuation.separator.parameter',
      'punctuation.separator.dictionary.key-value',
      'punctuation.separator.hash',
      'punctuation.separator.inheritance',
      'punctuation.separator.key-value',
      'punctuation.separator.key-value.mapping.yaml',
      'punctuation.separator.namespace',
      'punctuation.separator.pointer-access',
      'punctuation.separator.slice',
      'punctuation.separator.annotation',
      'punctuation.terminator',
      'punctuation.definition.keyword',
      'punctuation.definition.annotation',
      'punctuation.definition.markdown',
      'punctuation.definition.interpolation.begin',
      'punctuation.definition.interpolation.end',
      'punctuation.definition.template-expression.begin',
      'punctuation.definition.template-expression.end',
      'punctuation.definition.character-class.regexp',
      'punctuation.definition.group.capture.regexp',
      'punctuation.definition.group.regexp',
      'punctuation.definition.group.assertion.regexp',
    ],
    token: SYNTAX.punctuation.base,
  },
  Embedded: {
    scope: [
      'punctuation.section.embedded',
      'punctuation.section.embedded.begin.tsx',
      'punctuation.section.embedded.end.tsx',
      'punctuation.section.embedded.begin.jsx',
      'punctuation.section.embedded.end.jsx',
    ],
    token: SYNTAX.punctuation.embedded,
  },
  'Tag Punctuation': {
    scope: ['punctuation.definition.tag', 'punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'entity.name.tag', 'meta.tag.sgml'],
    token: SYNTAX.punctuation.tag,
  },
}

export const TOKEN_STORAGE: TITokenBlock = {
  'Storage Modifier': {
    scope: [
      'storage.modifier',
      'storage.modifier.export',
      'storage.modifier.import',
      'storage.modifier.other',
      'storage.modifier.package',
      'storage.modifier.throws',
      'storage.modifier.visibility',
      'storage.modifier.import',
      'storage.type.java',
    ],
    token: SYNTAX.storage.modifier,
  },
  'Storage Type': {
    scope: [
      'storage',
      'storage.type',
      'keyword.primitive-datatypes.swift',
      'keyword.type.cs',
      'storage.type keyword.declaration.type',
      'storage.type.annotation',
      'storage.type.attribute.swift',
      'storage.type.class keyword.declaration.class',
      'storage.type.c',
      'storage.type.core.rust',
      'storage.type.cs',
      'storage.type.enum keyword.declaration.enum',
      'storage.type.enum.member',
      'storage.type.function keyword.declaration.function',
      'storage.type.generic',
      'storage.type.groovy',
      'storage.type.haskell',
      'storage.type.hint',
      'storage.type.impl keyword.declaration.impl',
      'storage.type.interface keyword.declaration.interface',
      'storage.type.namespace keyword.declaration.namespace',
      'storage.type.objc',
      'storage.type.ocaml',
      'storage.type.package keyword.declaration.package',
      'storage.type.php',
      'storage.type.property',
      'storage.class.std.rust',
      'storage.type.struct keyword.declaration.struct',
      'storage.type.trait keyword.declaration.trait',
      'storage.type.union keyword.declaration.union',
      'source.go storage.type',
      'source.groovy storage.type',
      'source.java storage.type',
      'source.powershell entity.other.attribute-name',
      'meta.implementation storage.type.objc',
      'meta.interface-or-protocol storage.type.objc',
      'meta.return-type.objc',
      'meta.protocol-list.objc',
      'punctuation.definition.template-expression',
    ],
    token: SYNTAX.storage.type,
  },
}

export const TOKEN_STRING: TITokenBlock = {
  String: {
    scope: [
      'string', //                                                         strings
      'string.quoted', //                                                  quoted strings.
      'string.quoted.single', //                                           single quoted strings: 'foo'.
      'string.quoted.double', //                                           double quoted strings: "foo".
      'string.quoted.triple', //                                           triple quoted strings: """Python""".
      'string.quoted.other', //                                            other types of quoting: $'shell', %s{...}.
      'string.unquoted', //                                                for things like here-docs and here-strings.
      'string.interpolated', //                                            strings which are “evaluated”: `date`, $(pwd).
      'string.other', //                                                   other types of strings (should rarely be used).
      'string.template',
      'punctuation.definition.string',
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
      'meta.string-contents.quoted.double punctuation.definition.variable',
      'string.unquoted.heredoc punctuation.definition.string',
      'string punctuation.section.embedded source',
    ],
    token: SYNTAX.string.base,
  },
  'Regular Expression': {
    scope: [
      'source.regexp',
      'string.regexp',
      'string.regexp.character-class',
      'constant.other.character-class.set.regexp',
      'meta.assertion.look-ahead.regexp',
      'string.regexp constant.character.escape',
      'string.regexp keyword.other',
      'string.regexp source.ruby.embedded',
      'string.regexp string.regexp.arbitrary-repetition',
      'string.regexp punctuation.definition.string.begin',
      'string.regexp punctuation.definition.string.end',
    ],
    token: SYNTAX.string.regexp,
  },
  'Regular Expression Escape Characters': {
    scope: 'string.regexp constant.character.escape',
    token: SYNTAX.string.regexpEscape,
  },
}

export const TOKEN_TYPE: TITokenBlock = {
  Types: {
    scope: [
      'entity.name.type',
      'entity.name.type.type-parameter',
      'meta.indexer.mappedtype.declaration entity.name.type',
      'meta.type.parameters entity.name.type',
      'comment.block.documentation entity.name.type',
      'comment.block.documentation entity.name.type punctuation.definition.bracket',
      'support.type entity.name.type',
      'entity.name.interface',
      'entity.name.struct',
      'entity.name.trait',
      'entity.name.union',
      'entity.name.type.module',
      'support.type',
    ],
    token: SYNTAX.type.base,
  },
  Class: {
    scope: ['entity.name.class', 'entity.name.class.forward-decl', 'entity.name.type.class', 'support.class'],
    token: SYNTAX.type.class,
  },
}

export const TOKEN_SUPPORT: TITokenBlock = {
  Support: {
    scope: [
      'support',
      'support.function',
      'support.function.magic',
      'support.module',
      'support.section',
      'support.variable',
      'support.variable.dom',
      'support.variable.property',
      'support.variable.property.dom',
    ],
    token: SYNTAX.support.base,
  },
}

export const TOKEN_INVALID: TITokenBlock = {
  Invalid: { scope: ['invalid', 'markup.error'], token: SYNTAX.invalid.base },
  Broken: { scope: ['invalid.broken'], token: SYNTAX.invalid.broken },
  Illegal: { scope: ['invalid.illegal'], token: SYNTAX.invalid.illegal },
  Deprecated: { scope: ['invalid.deprecated'], token: SYNTAX.invalid.deprecated },
  Unimplemented: { scope: ['invalid.unimplemented'], token: SYNTAX.invalid.unimplemented },
}

// VS Code's markdown grammar emits the beginning.punctuation.definition.* names, not the
// older Sublime ones. Both are targeted.
export const TOKEN_MARKUP: TITokenBlock = {
  Markup: {
    scope: ['markup', 'markup.other', 'text.html.markdown', 'meta.paragraph.markdown', 'meta.paragraph.quarto'],
    token: SYNTAX.markup.base,
  },
  Strings: {
    scope: ['markup.inline.raw.string.quarto', 'markup.inline.raw.string.markdown'],
    token: SYNTAX.markup.string,
  },
  'Math Blocks': {
    scope: ['markup.math.block.markdown', 'markup.math.inline.markdown'],
    token: SYNTAX.markup.math,
  },
  Metadata: {
    scope: ['markup.metadata.markdown', 'meta.frontmatter'],
    token: SYNTAX.markup.metadata,
  },
  'Markdown Syntax Punctuation': {
    scope: [
      'punctuation.definition.heading',
      'punctuation.definition.heading.markdown',
      'punctuation.definition.raw.markdown',
      'punctuation.definition.bold.markdown',
      'punctuation.definition.italic.markdown',
      'punctuation.definition.strikethrough.markdown',
      'beginning.punctuation.definition.quote.markdown',
      'markup.fenced_code.block.markdown punctuation.definition.markdown',
    ],
    token: SYNTAX.markup.punctuation,
  },
  'Heading Wrappers': {
    scope: ['markup.heading.div.quarto', 'markup.div.quarto'],
    token: SYNTAX.markup.headingWrapper,
  },
  'Headers 1-3': {
    scope: [
      'header',
      'markup.heading',
      'markup.heading.setext',
      'heading.1.markdown',
      'heading.1.quarto',
      'heading.2.markdown',
      'heading.2.quarto',
      'heading.3.markdown',
      'heading.3.quarto',
    ],
    token: SYNTAX.markup.heading,
  },
  'Headers 4-6': {
    scope: ['heading.4.markdown', 'heading.4.quarto', 'heading.5.markdown', 'heading.5.quarto', 'heading.6.markdown', 'heading.6.quarto'],
    token: SYNTAX.markup.subheading,
  },
  Table: { scope: ['markup.table'], token: SYNTAX.markup.table },
  Separator: { scope: ['meta.separator', 'meta.separator.markdown'], token: SYNTAX.markup.separator },
  // Only the marker is coloured. markup.list wraps the entire list item including its prose.
  Lists: {
    scope: [
      'punctuation.definition.list.begin',
      'punctuation.definition.list.begin.markdown',
      'beginning.punctuation.definition.list.markdown',
      'markup.list punctuation.definition.list.begin',
    ],
    token: SYNTAX.markup.list,
  },
  Code: {
    scope: [
      'markup.raw',
      'markup.raw.inline',
      'markup.inline.raw',
      'markup.fenced_code.block.markdown',
      'fenced_code.block.language',
      'text.html.markdown markup.inline.raw',
    ],
    token: SYNTAX.markup.code,
  },
  'Quotes and Callouts': { scope: ['markup.quote', 'markup.quote.markdown'], token: SYNTAX.markup.quote },
  Citations: {
    scope: ['markup.cite.markdown', 'markup.cite.pandoc', 'keyword.control.import.reference'],
    token: SYNTAX.markup.citation,
  },
  // The URL itself is underlined; the visible link text is not, so [text](url) does not
  // render as one solid underlined run.
  'Link URI': {
    scope: [
      'markup.underline.link',
      'string.other.link',
      'punctuation.definition.link',
      'string.other.link punctuation.definition.string.begin',
      'string.other.link punctuation.definition.string.end',
    ],
    token: SYNTAX.markup.linkUri,
  },
  'Link Text': {
    scope: [
      'string.other.link.title',
      'string.other.link.title.markdown',
      'string.other.link.description',
      'string.other.link.description.markdown',
      'constant.other.reference.link',
    ],
    token: SYNTAX.markup.linkText,
  },
  References: {
    scope: ['meta.link.reference.markdown', 'meta.link.reference.markdown punctuation.definition.link'],
    token: SYNTAX.markup.reference,
  },
  // The combination rules below set only a style. VS Code resolves foreground and fontStyle
  // independently, so they inherit orange from Italic and Bold while replacing the style.
  Italic: { scope: ['markup.italic'], token: SYNTAX.markup.italic },
  Bold: { scope: ['markup.bold'], token: SYNTAX.markup.bold },
  Underline: { scope: ['markup.underline'], token: SYNTAX.markup.underline },
  Strikethrough: { scope: ['markup.strikethrough'], token: SYNTAX.markup.strikethrough },
  'Bold Italic': { scope: ['markup.italic markup.bold', 'markup.bold markup.italic'], token: SYNTAX.markup.boldItalic },
  'Bold Strikethrough': {
    scope: ['markup.strikethrough markup.bold', 'markup.bold markup.strikethrough'],
    token: SYNTAX.markup.boldStrikethrough,
  },
  'Italic Strikethrough': {
    scope: ['markup.strikethrough markup.italic', 'markup.italic markup.strikethrough'],
    token: SYNTAX.markup.italicStrikethrough,
  },
  'Bold Italic Strikethrough': {
    scope: [
      'markup.strikethrough markup.italic markup.bold',
      'markup.strikethrough markup.bold markup.italic',
      'markup.italic markup.bold markup.strikethrough',
      'markup.bold markup.italic markup.strikethrough',
      'markup.italic markup.strikethrough markup.bold',
      'markup.bold markup.strikethrough markup.italic',
    ],
    token: SYNTAX.markup.boldItalicStrikethrough,
  },
  'Bold Underline': { scope: ['markup.underline markup.bold', 'markup.bold markup.underline'], token: SYNTAX.markup.boldUnderline },
  'Italic Underline': { scope: ['markup.underline markup.italic', 'markup.italic markup.underline'], token: SYNTAX.markup.italicUnderline },
  'Bold Italic Underline': {
    scope: [
      'markup.underline markup.italic markup.bold',
      'markup.italic markup.bold markup.underline',
      'markup.bold markup.italic markup.underline',
      'markup.bold markup.underline markup.italic',
      'markup.italic markup.underline markup.bold',
      'markup.underline markup.bold markup.italic',
    ],
    token: SYNTAX.markup.boldItalicUnderline,
  },
  Diff: { scope: ['meta.diff', 'meta.diff.header'], token: SYNTAX.markup.diff },
  Added: { scope: ['markup.inserted', 'punctuation.definition.inserted'], token: SYNTAX.markup.added },
  Ignored: { scope: ['markup.ignored'], token: SYNTAX.markup.ignored },
  Untracked: { scope: ['markup.untracked'], token: SYNTAX.markup.untracked },
  Modified: { scope: ['markup.changed', 'punctuation.definition.changed'], token: SYNTAX.markup.modified },
  Removed: { scope: ['markup.deleted', 'punctuation.definition.deleted'], token: SYNTAX.markup.removed },
}

// The semantic token selectors.
export const SEMANTIC_TOKENS: TIStyleBlock = {
  // Standard
  variable: SYNTAX.standard.variable,
  property: SYNTAX.standard.variable,

  // Support
  'variable.defaultLibrary': SYNTAX.support.base,

  // Decorators
  decorator: SYNTAX.decorator.base,

  // Packages
  namespace: SYNTAX.entity.namespace,

  // Constants and Literals
  string: SYNTAX.string.base,
  regexp: SYNTAX.string.regexp,
  number: SYNTAX.constant.base,

  // Keywords and Operators
  keyword: SYNTAX.keyword.control,
  operator: SYNTAX.keyword.operator,

  // Comments
  comment: SYNTAX.comment.line,

  // Functions and Methods
  function: SYNTAX.function.base,
  method: SYNTAX.function.base,

  // Variables and Parameters
  parameter: SYNTAX.function.parameter,
  'parameter.label': SYNTAX.function.parameter,
  'parameter.readonly': SYNTAX.function.parameter,

  // Types and Classes
  class: SYNTAX.type.class,
  interface: SYNTAX.type.base,
  type: SYNTAX.type.base,
  typeParameter: SYNTAX.type.base,
  struct: SYNTAX.type.base,
}

// Zed's syntax map. Every key reads a token or a UI leaf; none carries a literal.
export const ZED_SYNTAX: TIStyleBlock = {
  // Comments & Docs
  comment: SYNTAX.comment.line,
  'comment.doc': SYNTAX.comment.block,

  // Strings & Literals
  string: SYNTAX.string.base,
  'string.escape': SYNTAX.constant.base,
  'string.regex': SYNTAX.string.regexp,
  'string.special': SYNTAX.string.base,
  'string.special.symbol': SYNTAX.constant.symbol,
  'text.literal': SYNTAX.markup.code,

  // Number & Constants
  number: SYNTAX.constant.base,
  boolean: SYNTAX.constant.base,
  constant: SYNTAX.constant.base,

  // Keywords & Operators
  keyword: SYNTAX.keyword.control,
  'keyword.import': SYNTAX.keyword.control,
  operator: SYNTAX.keyword.operator,
  preproc: SYNTAX.keyword.preprocessor,

  // Functions & Methods
  function: SYNTAX.function.base,
  attribute: SYNTAX.function.parameter,
  'variable.parameter': SYNTAX.function.parameter,
  constructor: SYNTAX.function.constructor,
  namespace: SYNTAX.entity.namespace,

  // Types & Classes
  type: SYNTAX.type.base,
  enum: SYNTAX.entity.enum,
  variant: SYNTAX.standard.enumMember,

  // Variable & Properties
  variable: SYNTAX.standard.variable,
  'variable.special': SYNTAX.standard.variableLanguage,
  property: SYNTAX.standard.variable,
  label: SYNTAX.keyword.label,
  'variable.builtin': SYNTAX.support.base,

  // Punctuation
  punctuation: SYNTAX.punctuation.base,
  'punctuation.bracket': SYNTAX.punctuation.base,
  'punctuation.delimiter': SYNTAX.punctuation.base,
  'punctuation.list_marker': SYNTAX.markup.list,
  'punctuation.markup': SYNTAX.markup.punctuation,
  'punctuation.special': SYNTAX.punctuation.base,

  // Markup & Tags
  tag: SYNTAX.punctuation.tag,
  title: SYNTAX.markup.heading,
  emphasis: SYNTAX.markup.italic,
  'emphasis.strong': SYNTAX.markup.bold,
  link_text: SYNTAX.markup.linkText,
  link_uri: SYNTAX.markup.linkUri,
  selector: SYNTAX.selector.base,
  'selector.pseudo': SYNTAX.selector.pseudo,

  // Other
  primary: SYNTAX.standard.default,
  embedded: SYNTAX.punctuation.embedded,
  predictive: { color: UI.widget.ghostText.foreground, italic: true },
  hint: { color: UI.editor.inlayHint.foreground },
}

// ===== ===== =====
// ===== THEME =====
// ===== ===== =====
// One call renders both editors for one mode. The only place a channel becomes a hex string.

export const createTheme = (name: string, type: TIMode): { vscode: TIVSTheme; zed: TIZedTheme } => {
  const paint = (leaf: TILeaf): string => resolveLeaf(leaf, type)
  // A deactivated leaf drops its key from the output instead of painting it.
  const live = (leaf: TILeaf): boolean => !('deactivate' in leaf && leaf.deactivate)
  const painted = (block: { [key: string]: TILeaf }) =>
    Object.fromEntries(
      Object.entries(block)
        .filter(([, v]) => live(v))
        .map(([k, v]) => [k, paint(v)]),
    )

  // A token's VS Code settings: foreground when it has a colour, fontStyle when it has a flag.
  const settings = (token: TIToken) => {
    const out: { foreground?: string; fontStyle?: string } = {}
    if (token.color) out.foreground = paint(token.color)
    const fontStyle = renderFontStyle(token)
    if (fontStyle) out.fontStyle = fontStyle
    return out
  }
  // Token blocks in order. An entry with an empty scope is the default rule.
  const tokens = (...blocks: TITokenBlock[]) =>
    blocks.flatMap((block) =>
      Object.entries(block).map(([name, rule]) =>
        rule.scope.length ? { name, scope: rule.scope, settings: settings(rule.token) } : { settings: settings(rule.token) },
      ),
    )
  // Semantic rules carry only a colour.
  const semantic = (block: TIStyleBlock) => Object.fromEntries(Object.entries(block).map(([k, token]) => [k, paint(token.color!)]))
  // A Zed syntax entry: colour, font_weight for bold, font_style for italic.
  const zedSyntax = (block: TIStyleBlock) =>
    Object.fromEntries(
      Object.entries(block).map(([k, token]) => {
        const out: { color?: string; font_weight?: number; font_style?: string } = {}
        if (token.color) out.color = paint(token.color)
        if (token.bold) out.font_weight = 700
        if (token.italic) out.font_style = 'italic'
        return [k, out]
      }),
    )

  const vscode: TIVSTheme = {
    name,
    type,
    semanticHighlighting: true,
    colors: {
      // ===== ============ =====
      // ===== GLOBAL GROUP =====
      // ===== ============ =====
      // Keys that reach every surface in the workbench, the editor included.

      ...painted(GLOBAL_BASE),
      ...painted(GLOBAL_SURFACE),
      ...painted(GLOBAL_WINDOW),
      ...painted(GLOBAL_SCROLLBAR),

      // ===== ============ =====
      // ===== EDITOR GROUP =====
      // ===== ============ =====

      ...painted(EDITOR_BASE),
      ...painted(EDITOR_GROUP),

      // ===== HEADER GROUP =====
      ...painted(EDITOR_GROUP_HEADER),
      ...painted(EDITOR_TABS),
      ...painted(EDITOR_BREADCRUMBS),
      ...painted(EDITOR_STICKY_SCROLL),

      // ===== GUTTER GROUP =====
      ...painted(EDITOR_LINE_NUMBER),
      ...painted(EDITOR_GUTTER),
      ...painted(EDITOR_MINIMAP),
      ...painted(EDITOR_OVERVIEW_RULER),

      // ===== BODY GROUP =====
      ...painted(EDITOR_CURSOR),
      ...painted(EDITOR_GUIDE),
      ...painted(EDITOR_SELECTION),
      ...painted(EDITOR_HIGHLIGHT),
      ...painted(EDITOR_TEXT),
      ...painted(EDITOR_DIAGNOSTIC),
      ...painted(EDITOR_INLAY_HINT),
      ...painted(EDITOR_DEBUG),

      // ===== WIDGET GROUP =====
      ...painted(WIDGET),
      ...painted(SUGGEST_WIDGET),
      ...painted(HOVER_WIDGET),
      ...painted(MARKER_NAVIGATION),
      ...painted(PEEK_VIEW),

      // ===== =============== =====
      // ===== WORKBENCH GROUP =====
      // ===== =============== =====
      // The strips and containers around the editor.

      ...painted(TITLE_BAR),
      ...painted(ACTIVITY_BAR),
      ...painted(SIDE_BAR),
      ...painted(STATUS_BAR),
      ...painted(PANEL),
      ...painted(TERMINAL),
      ...painted(TERMINAL_ANSI),
      ...painted(TERMINAL_SYMBOL_ICON),
      ...painted(BANNER),
      ...painted(NOTIFICATION),
      ...painted(QUICK_INPUT),
      ...painted(LIST),
      ...painted(BADGE),
      ...painted(PROFILES),

      // ===== ============== =====
      // ===== CONTROLS GROUP =====
      // ===== ============== =====

      ...painted(CONTROLS),
      ...painted(INPUT_VALIDATION),
      ...painted(MENU),
      ...painted(COMMAND_CENTER),
      ...painted(KEYBINDING),
      ...painted(ACTION),
      ...painted(TEXT),

      // ===== ============== =====
      // ===== FEATURES GROUP =====
      // ===== ============== =====

      ...painted(GIT),
      ...painted(SCM_GRAPH),
      ...painted(DIFF_EDITOR),
      ...painted(MERGE),
      ...painted(COMMENTS),
      ...painted(SEARCH),
      ...painted(PORTS),
      ...painted(EXTENSIONS),
      ...painted(ERROR_LENS),
      ...painted(DEBUG),
      ...painted(TESTING),
      ...painted(SYMBOL_ICON),
      ...painted(CHARTS),
      ...painted(MARKDOWN_ALERT),
      ...painted(CHAT),
      ...painted(INLINE_CHAT),
      ...painted(AGENT_SESSION),
      ...painted(INLINE_EDIT),

      // ===== =============== =====
      // ===== OVERRIDE GROUP  =====
      // ===== =============== =====
      // Surfaces that paint themselves whether or not the theme says anything.

      ...painted(WELCOME_PAGE),
      ...painted(SETTINGS),
      ...painted(NOTEBOOK),
    },

    // One block per TextMate top-level scope, in this order. All markdown is in MARKUP.
    tokenColors: tokens(
      TOKEN_STANDARD,
      TOKEN_COMMENT,
      TOKEN_ENTITY,
      TOKEN_CONSTANT,
      TOKEN_KEYWORD,
      TOKEN_FUNCTION,
      TOKEN_DECORATOR,
      TOKEN_PUNCTUATION,
      TOKEN_STORAGE,
      TOKEN_STRING,
      TOKEN_TYPE,
      TOKEN_SUPPORT,
      TOKEN_INVALID,
      TOKEN_MARKUP,
    ),

    semanticTokenColors: {
      enabled: true,
      rules: semantic(SEMANTIC_TOKENS),
    },
  }

  const zed: TIZedTheme = {
    name: name,
    appearance: type,
    style: {
      // ===== ======== =====
      // ===== ELEMENTS =====
      // ===== ======== =====

      ...painted(ZED_ELEMENT),
      ...painted(ZED_TEXT),
      ...painted(ZED_BORDER),
      ...painted(ZED_SCROLLBAR),

      // ===== ======== =====
      // ===== SURFACES =====
      // ===== ======== =====

      ...painted(ZED_SURFACE),
      ...painted(ZED_BARS),

      // ===== ====== =====
      // ===== EDITOR =====
      // ===== ====== =====

      ...painted(ZED_EDITOR),
      ...painted(ZED_SEARCH),
      ...painted(ZED_TERMINAL),
      ...painted(ZED_LINK),

      // ===== ===== =====
      // ===== STATE =====
      // ===== ===== =====

      ...painted(ZED_VERSION_CONTROL),
      ...painted(ZED_STATE),

      // ===== =========== =====
      // ===== MULTIPLAYER =====
      // ===== =========== =====

      players: ZED_PLAYERS.map(painted),

      // ===== ====== =====
      // ===== SYNTAX =====
      // ===== ====== =====

      syntax: zedSyntax(ZED_SYNTAX),
    },
  }
  return { vscode, zed }
}
