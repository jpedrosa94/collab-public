// @ts-expect-error Bun test types are not part of the renderer typecheck.
import { describe, expect, test } from "bun:test";
import { isBusyForeground } from "./terminal-status";

describe("isBusyForeground", () => {
  test("treats missing foreground values as idle", () => {
    expect(isBusyForeground(null)).toBe(false);
    expect(isBusyForeground(undefined)).toBe(false);
    expect(isBusyForeground("")).toBe(false);
  });

  test("treats known shells as idle", () => {
    expect(isBusyForeground("zsh")).toBe(false);
    expect(isBusyForeground("/bin/zsh")).toBe(false);
    expect(isBusyForeground("ZSH")).toBe(false);
    expect(isBusyForeground("powershell.exe")).toBe(false);
    expect(isBusyForeground("C:\\Windows\\System32\\cmd.exe")).toBe(false);
  });

  test("treats non-shell foreground processes as busy", () => {
    expect(isBusyForeground("npm")).toBe(true);
    expect(isBusyForeground("/usr/local/bin/node")).toBe(true);
    expect(isBusyForeground("claude")).toBe(true);
  });

  test("does not substring-match shell names", () => {
    expect(isBusyForeground("zshfoo")).toBe(true);
  });
});
