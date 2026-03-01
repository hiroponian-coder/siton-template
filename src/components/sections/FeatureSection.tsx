import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { Users, Car, Wallet, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export default function FeatureSection({ profile }: { profile: Profile }) {
  const theme = getTheme()

  const features: { icon: LucideIcon; label: string; value: string }[] = []

  if (profile.seats_count) features.push({ icon: Users, label: '座席数', value: profile.seats_count })
  if (profile.parking_info) features.push({ icon: Car, label: '駐車場', value: profile.parking_info })
  if (profile.price_range) features.push({ icon: Wallet, label: '価格帯', value: profile.price_range })
  if (profile.business_hours) features.push({ icon: Clock, label: '営業時間', value: profile.business_hours })

  if (features.length === 0) return null

  return (
    <section className="py-24 px-4 bg-theme-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl text-theme-secondary text-center mb-16">
          {theme.copy?.storeInfoTitle ?? '店舗情報'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-theme-surface p-6 rounded-xl border border-theme-secondary/10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <feature.icon className="w-8 h-8 text-theme-primary mb-4" />
              <div className="text-sm text-theme-text/60 mb-2">{feature.label}</div>
              <div className="text-lg font-medium text-theme-secondary">{feature.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
