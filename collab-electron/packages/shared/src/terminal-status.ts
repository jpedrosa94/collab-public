const SHELLS = new Set([
  "zsh",
  "bash",
  "sh",
  "fish",
  "dash",
  "ksh",
  "pwsh",
  "powershell",
  "cmd",
]);

export function isBusyForeground(
  foreground: string | null | undefined,
): boolean {
  const value = foreground?.trim();
  if (!value) return false;

  const basename = value.split(/[\\/]/).pop()?.toLowerCase();
  if (!basename) return false;

  return !SHELLS.has(basename.replace(/\.exe$/, ""));
}
