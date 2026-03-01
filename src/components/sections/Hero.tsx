import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { resolveIcon } from '@/lib/icons'

export default function Hero({ profile }: { profile: Profile }) {
  const theme = getTheme()
  // 後方互換: string[] と { category, url }[] の両方に対応
  const heroImage = profile.image_urls?.find(
    (img: any) => typeof img === 'string' || img?.category === 'hero'
  )
  const imageUrl = (typeof heroImage === 'string' ? heroImage : heroImage?.url)
    ?? theme.images.heroUrls[0]
  const BrandIcon = resolveIcon(theme.navigation.brandIcon)

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-theme-secondary">
      {imageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className="absolute inset-0 opacity-20 flex items-center justify-center">
          <BrandIcon className="w-96 h-96 text-theme-bg" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-theme-footer/90 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-theme-bg">
        <h1 className="font-heading text-4xl md:text-6xl mb-6 tracking-wider drop-shadow-lg">
          {profile.store_name || 'Store'}
        </h1>
        {(profile.hero_tagline ?? theme.copy?.heroTagline ?? profile.design_atmosphere) && (
          <p className="text-xl md:text-2xl font-light mb-8 italic text-theme-bg/90 drop-shadow-md">
            {profile.hero_tagline ?? theme.copy?.heroTagline ?? profile.design_atmosphere}
          </p>
        )}
        {(profile.hero_subtitle ?? theme.copy?.heroSubtitle ?? profile.store_strengths) && (
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
            {profile.hero_subtitle ?? theme.copy?.heroSubtitle ?? profile.store_strengths}
          </p>
        )}
      </div>
    </section>
  )
}
