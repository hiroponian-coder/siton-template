import { Profile } from '@/types/profile'
import Link from 'next/link'
import { getTheme } from '@/lib/theme'
import { resolveIcon } from '@/lib/icons'
import { Instagram, Twitter, MessageCircle } from 'lucide-react'

export default function Footer({ profile }: { profile: Profile }) {
  const theme = getTheme()
  const BrandIcon = resolveIcon(theme.navigation.brandIcon)

  return (
    <footer className="bg-theme-footer text-white/80 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="flex items-center gap-2 text-white mb-6">
            <BrandIcon className="w-6 h-6 text-theme-primary" />
            <span className="font-heading text-xl">{profile.store_name || 'Store'}</span>
          </Link>
          {(profile.footer_tagline ?? theme.copy?.footerTagline) ? (
            <p className="text-sm leading-relaxed max-w-xs">{profile.footer_tagline ?? theme.copy?.footerTagline}</p>
          ) : profile.design_atmosphere ? (
            <p className="text-sm leading-relaxed max-w-xs">
              {profile.design_atmosphere.slice(0, 100)}{profile.design_atmosphere.length > 100 ? '...' : ''}
            </p>
          ) : null}
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Explore</h3>
          <ul className="space-y-4">
            {theme.navigation.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-theme-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {(profile.instagram_id || profile.x_id || profile.line_id || profile.contact_method) && (
          <div>
            <h3 className="text-white font-semibold mb-6">Connect</h3>
            {(profile.instagram_id || profile.x_id || profile.line_id) && (
              <div className="flex gap-4 mb-6">
                {profile.instagram_id && (
                  <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-theme-primary hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {profile.x_id && (
                  <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-theme-primary hover:text-white transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {profile.line_id && (
                  <a href={`https://line.me/R/ti/p/@${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-theme-primary hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
            {profile.contact_method && (
              <div className="text-sm">
                <span className="block text-white/50 mb-1">{theme.copy?.contactLabel ?? 'ご予約・お問い合わせ'}</span>
                {profile.contact_method}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} {profile.store_name || 'Store'}. All rights reserved.
        {theme.branding.showPoweredBy && (
          <span className="block mt-2">Powered by サイトン</span>
        )}
      </div>
    </footer>
  )
}
