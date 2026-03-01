import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { Ticket, Phone } from 'lucide-react'

export default function CallToAction({ profile }: { profile: Profile }) {
  const theme = getTheme()

  // AI生成コピー or レガシーフィールドのどちらかがあれば表示
  const hasCopy = !!(profile.cta_heading ?? theme.copy?.ctaHeading)
  const hasContent = !!(profile.target_actions || profile.coupon_info || profile.contact_method)
  if (!hasCopy && !hasContent) return null

  return (
    <section className="py-20 px-4 bg-theme-secondary text-theme-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl mb-8">{profile.cta_heading ?? theme.copy?.ctaHeading ?? 'お問い合わせ'}</h2>

        {(profile.cta_subtext ?? theme.copy?.ctaSubtext) && (
          <p className="text-lg mb-8 opacity-80">{profile.cta_subtext ?? theme.copy?.ctaSubtext}</p>
        )}

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {profile.target_actions && (
            <p className="text-xl mb-8 font-medium">{profile.target_actions}</p>
          )}

          {profile.coupon_info && (
            <div className="inline-flex items-center gap-3 bg-theme-primary text-white px-6 py-4 rounded-xl mb-8 shadow-lg">
              <Ticket className="w-6 h-6" />
              <span className="font-bold">{profile.coupon_info}</span>
            </div>
          )}

          {profile.contact_method && (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-sm opacity-80 mb-2">{theme.copy?.contactLabel ?? 'ご予約・お問い合わせ'}</div>
              <a
                href={`tel:${profile.contact_method!.replace(/[-\s()]/g, '')}`}
                className="flex items-center gap-3 text-2xl font-bold bg-theme-bg text-theme-secondary px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
                aria-label={`電話: ${profile.contact_method}`}
              >
                <Phone className="w-6 h-6 text-theme-primary" />
                {profile.contact_method}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
