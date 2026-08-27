// @ts-expect-error Bun test types are not part of the renderer typecheck.
import { describe, expect, test } from "bun:test";
import {
  DEFAULT_TERMINAL_FONT_FAMILY,
  TERMINAL_FONT_SUGGESTIONS,
  resolveTerminalFontFamily,
} from "./terminal-font";

describe("resolveTerminalFontFamily", () => {
  test("uses the default when the preference is unset", () => {
    expect(resolveTerminalFontFamily(undefined)).toBe(
      DEFAULT_TERMINAL_FONT_FAMILY,
    );
  });

  test("uses the default when the preference is null", () => {
    expect(resolveTerminalFontFamily(null)).toBe(DEFAULT_TERMINAL_FONT_FAMILY);
  });

  test("uses the default for an empty string", () => {
    expect(resolveTerminalFontFamily("")).toBe(DEFAULT_TERMINAL_FONT_FAMILY);
  });

  test("uses the default for whitespace", () => {
    expect(resolveTerminalFontFamily(" \t\n ")).toBe(
      DEFAULT_TERMINAL_FONT_FAMILY,
    );
  });

  test("keeps a single font family", () => {
    expect(resolveTerminalFontFamily("MesloLGS NF")).toBe("MesloLGS NF");
  });

  test("keeps a comma-separated font list", () => {
    expect(resolveTerminalFontFamily('"MesloLGS NF", monospace')).toBe(
      '"MesloLGS NF", monospace',
    );
  });

  test("trims surrounding whitespace without changing internal spacing", () => {
    expect(resolveTerminalFontFamily('  "JetBrains Mono",  monospace  ')).toBe(
      '"JetBrains Mono",  monospace',
    );
  });
});

describe("TERMINAL_FONT_SUGGESTIONS", () => {
  test("is non-empty", () => {
    expect(TERMINAL_FONT_SUGGESTIONS.length).toBeGreaterThan(0);
  });

  test("contains no duplicates", () => {
    expect(new Set(TERMINAL_FONT_SUGGESTIONS).size).toBe(
      TERMINAL_FONT_SUGGESTIONS.length,
    );
  });

  test("contains only trimmed, non-empty entries", () => {
    for (const family of TERMINAL_FONT_SUGGESTIONS) {
      expect(family).not.toBe("");
      expect(family).toBe(family.trim());
    }
  });

  test("includes the primary Nerd Font family", () => {
    expect(TERMINAL_FONT_SUGGESTIONS).toContain("MesloLGS NF");
  });
});
