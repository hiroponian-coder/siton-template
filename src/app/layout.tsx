import './globals.css'
import { getTheme, getThemeCSSVariables } from '@/lib/theme'
import type { Metadata } from 'next'

const theme = getTheme()

export const metadata: Metadata = {
  title: theme.meta.title,
  description: theme.meta.description,
}

function googleFontsUrl(): string {
  const families = new Set([theme.typography.headingFont, theme.typography.bodyFont])
  const params = [...families].map(f => `family=${f.replace(/ /g, '+')}:wght@400;600;700;800`).join('&')
  return `https://fonts.googleapis.com/css2?${params}&display=swap`
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cssVars = getThemeCSSVariables(theme)

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={googleFontsUrl()} />
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
      </head>
      <body className="bg-theme-bg text-theme-text antialiased font-body">
        {children}
      </body>
    </html>
  )
}
