import { readFileSync } from 'fs'
import { join } from 'path'
import type { SiteTheme } from '@/types/theme'

let cachedTheme: SiteTheme | null = null

export function getTheme(): SiteTheme {
  if (cachedTheme) return cachedTheme

  const themePath = join(process.cwd(), 'theme.json')
  const raw = readFileSync(themePath, 'utf-8')
  cachedTheme = JSON.parse(raw) as SiteTheme
  return cachedTheme
}

export function getThemeCSSVariables(theme: SiteTheme): string {
  return `:root {
  --color-primary: ${theme.colors.primary};
  --color-secondary: ${theme.colors.secondary};
  --color-accent: ${theme.colors.accent};
  --color-background: ${theme.colors.background};
  --color-surface: ${theme.colors.surface};
  --color-text: ${theme.colors.text};
  --color-text-muted: ${theme.colors.textMuted};
  --color-footer: ${theme.colors.footer};
  --font-heading: '${theme.typography.headingFont}', sans-serif;
  --font-body: '${theme.typography.bodyFont}', sans-serif;
}`
}
