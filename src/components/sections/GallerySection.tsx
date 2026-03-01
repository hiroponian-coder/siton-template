import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'

export default function GallerySection({ profile: _profile }: { profile: Profile }) {
  const theme = getTheme()
  const urls = theme.images.galleryUrls?.filter(Boolean) ?? []

  if (urls.length === 0) return null

  const displayUrls = urls.slice(0, 6)
  const cols = displayUrls.length <= 4 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'

  return (
    <section className="py-24 px-4 bg-theme-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl text-theme-secondary mb-4">
            {theme.copy.galleryTitle}
          </h2>
          {theme.copy.gallerySubtitle && (
            <p className="text-theme-text/70">{theme.copy.gallerySubtitle}</p>
          )}
        </div>

        <div className={`grid ${cols} gap-4`}>
          {displayUrls.map((url, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <img
                src={url}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
