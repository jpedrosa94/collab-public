// Matches the font stack the released build ships. Menlo has no glyphs
// in the private use area, so prompts drawn by Powerlevel10k or Starship
// fall back to tofu without a Nerd Font ahead of it. Families that are
// not installed are skipped by the CSS font fallback chain.
export const DEFAULT_TERMINAL_FONT_FAMILY =
  'MesloLGS NF, Menlo, Monaco, "Courier New", monospace';

export const TERMINAL_FONT_SUGGESTIONS: readonly string[] = [
  "MesloLGS NF",
  "JetBrainsMono Nerd Font",
  "FiraCode Nerd Font",
  "Hack Nerd Font",
  "CaskaydiaCove Nerd Font",
  "SauceCodePro Nerd Font",
  "UbuntuMono Nerd Font",
  "DejaVuSansMono Nerd Font",
  "Iosevka Nerd Font",
  "RobotoMono Nerd Font",
  "JetBrains Mono",
  "Fira Code",
  "Hack",
  "Source Code Pro",
  "IBM Plex Mono",
  "Cascadia Code",
  "Cascadia Mono",
  "SF Mono",
  "Menlo",
  "Monaco",
  "Consolas",
  "DejaVu Sans Mono",
  "Ubuntu Mono",
  "Roboto Mono",
  "Iosevka",
  "Courier New",
];

export function resolveTerminalFontFamily(
  pref: string | null | undefined,
): string {
  const trimmed = pref?.trim();
  return trimmed || DEFAULT_TERMINAL_FONT_FAMILY;
}
