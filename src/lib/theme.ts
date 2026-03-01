import { readFileSync } from 'fs'
import { join } from 'path'
import type { SiteTheme } from '@/types/theme'

let cachedTheme: SiteTheme | null = null

function validateTheme(data: unknown): SiteTheme {
  const t = data as Record<string, unknown>
  if (!t || typeof t !== 'object') throw new Error('theme.json: invalid format')

  const colors = t.colors as Record<string, unknown> | undefined
  if (!colors || typeof colors !== 'object') throw new Error('theme.json: missing colors')
  for (const key of ['primary', 'secondary', 'accent', 'background', 'surface', 'text', 'textMuted', 'footer']) {
    if (typeof colors[key] !== 'string') throw new Error(`theme.json: missing colors.${key}`)
  }

  const typography = t.typography as Record<string, unknown> | undefined
  if (!typography || typeof typography !== 'object') throw new Error('theme.json: missing typography')
  if (typeof typography.headingFont !== 'string') throw new Error('theme.json: missing typography.headingFont')
  if (typeof typography.bodyFont !== 'string') throw new Error('theme.json: missing typography.bodyFont')

  const meta = t.meta as Record<string, unknown> | undefined
  if (!meta || typeof meta !== 'object') throw new Error('theme.json: missing meta')

  const sections = t.sections
  if (!Array.isArray(sections)) throw new Error('theme.json: missing sections array')

  // v2 互換: copy が無い theme.json でもパスする（コンポーネント側でフォールバック）
  if (!t.copy || typeof t.copy !== 'object') {
    ;(t as any).copy = {}
  }

  return data as SiteTheme
}

export function getTheme(): SiteTheme {
  if (cachedTheme) return cachedTheme

  const themePath = join(process.cwd(), 'theme.json')
  const raw = readFileSync(themePath, 'utf-8')
  cachedTheme = validateTheme(JSON.parse(raw))
  return cachedTheme
}

const CSS_VALUE_RE = /^[#\w\s(),.'%-]+$/

function sanitizeCSSValue(value: string): string {
  if (CSS_VALUE_RE.test(value)) return value
  return value.replace(/[^#\w\s(),.'%-]/g, '')
}

export function getThemeCSSVariables(theme: SiteTheme): string {
  return `:root {
  --color-primary: ${sanitizeCSSValue(theme.colors.primary)};
  --color-secondary: ${sanitizeCSSValue(theme.colors.secondary)};
  --color-accent: ${sanitizeCSSValue(theme.colors.accent)};
  --color-background: ${sanitizeCSSValue(theme.colors.background)};
  --color-surface: ${sanitizeCSSValue(theme.colors.surface)};
  --color-text: ${sanitizeCSSValue(theme.colors.text)};
  --color-text-muted: ${sanitizeCSSValue(theme.colors.textMuted)};
  --color-footer: ${sanitizeCSSValue(theme.colors.footer)};
  --font-family-heading: '${sanitizeCSSValue(theme.typography.headingFont)}', sans-serif;
  --font-family-body: '${sanitizeCSSValue(theme.typography.bodyFont)}', sans-serif;
  --font-weight-heading: ${theme.typography.headingWeight === 'extrabold' ? '800' : theme.typography.headingWeight === 'bold' ? '700' : '400'};
}`
}
