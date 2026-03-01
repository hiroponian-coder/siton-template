import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { resolveIcon } from '@/lib/icons'
import { Leaf, Heart } from 'lucide-react'

export default function ConceptSection({ profile }: { profile: Profile }) {
  if (!profile.store_strengths && !profile.design_atmosphere) return null

  const theme = getTheme()
  const BrandIcon = resolveIcon(theme.navigation.brandIcon)
  const conceptImage = theme.images.conceptUrls?.[0]

  return (
    <section className="py-24 px-4 bg-theme-bg">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <BrandIcon className="w-8 h-8 text-theme-primary" />
        </div>
        <h2 className="font-heading text-3xl mb-12 text-theme-secondary">
          {theme.copy?.conceptTitle ?? 'コンセプト'}
        </h2>

        <div className={`flex ${conceptImage ? 'flex-col md:flex-row gap-8 md:gap-12 text-left' : 'justify-center'}`}>
          {conceptImage && (
            <div className="flex-1 rounded-2xl overflow-hidden shadow-sm">
              <img
                src={conceptImage}
                alt=""
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          )}

          <div className={`${conceptImage ? 'flex-1' : 'w-full'}`}>
            <div className="bg-theme-surface p-8 md:p-12 rounded-2xl shadow-sm border border-theme-secondary/5 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-theme-secondary" />

              {profile.design_atmosphere && (
                <div className="mb-10">
                  <h3 className={`flex items-center ${conceptImage ? 'justify-start' : 'justify-center'} gap-2 text-xl font-semibold text-theme-secondary mb-4`}>
                    <Heart className="w-5 h-5 text-theme-primary" />
                    {theme.copy?.conceptSubtitles?.atmosphere ?? '雰囲気'}
                  </h3>
                  <p className="text-theme-text/80 leading-relaxed whitespace-pre-wrap">
                    {profile.design_atmosphere}
                  </p>
                </div>
              )}

              {profile.store_strengths && (
                <div>
                  <h3 className={`flex items-center ${conceptImage ? 'justify-start' : 'justify-center'} gap-2 text-xl font-semibold text-theme-secondary mb-4`}>
                    <Leaf className="w-5 h-5 text-theme-primary" />
                    {theme.copy?.conceptSubtitles?.strength ?? 'こだわり'}
                  </h3>
                  <p className="text-theme-text/80 leading-relaxed whitespace-pre-wrap">
                    {profile.store_strengths}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
