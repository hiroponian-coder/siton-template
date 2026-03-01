import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { Ticket, Phone } from 'lucide-react'

export default function CallToAction({ profile }: { profile: Profile }) {
  if (!profile.target_actions && !profile.coupon_info && !profile.contact_method) return null

  const theme = getTheme()

  return (
    <section className="py-20 px-4 bg-theme-secondary text-theme-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold mb-8">{theme.copy.ctaHeading}</h2>

        {theme.copy.ctaSubtext && (
          <p className="text-lg mb-8 opacity-80">{theme.copy.ctaSubtext}</p>
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
              <div className="text-sm opacity-80 mb-2">{theme.copy.contactLabel}</div>
              <div className="flex items-center gap-3 text-2xl font-bold bg-theme-bg text-theme-secondary px-8 py-4 rounded-full shadow-lg">
                <Phone className="w-6 h-6 text-theme-primary" />
                {profile.contact_method}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
