import Link from 'next/link'
import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { resolveIcon } from '@/lib/icons'
import { Instagram, Twitter, MessageCircle } from 'lucide-react'

export default function Header({ profile }: { profile: Profile }) {
  const theme = getTheme()
  const BrandIcon = resolveIcon(theme.navigation.brandIcon)

  return (
    <header className="sticky top-0 z-50 bg-theme-bg/90 backdrop-blur-md border-b border-theme-secondary/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-theme-secondary hover:opacity-80 transition-opacity">
          <BrandIcon className="w-6 h-6" />
          <span className="font-heading text-lg tracking-wider">
            {profile.store_name || 'Store'}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {theme.navigation.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-theme-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-theme-secondary hover:text-theme-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {profile.x_id && (
            <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="text-theme-secondary hover:text-theme-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/R/ti/p/@${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="text-theme-secondary hover:text-theme-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
