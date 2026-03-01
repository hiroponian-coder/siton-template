import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { Utensils } from 'lucide-react'

export default function FeaturedMenu({ profile }: { profile: Profile }) {
  const theme = getTheme()
  const menuItems = theme.menuItems
  const menuUrls = theme.images.menuUrls ?? []

  // menuItems（写真+名前+金額）があればそちらを優先
  if (menuItems && menuItems.length > 0) {
    const items = menuItems.slice(0, 6)
    return (
      <section className="py-24 px-4 bg-theme-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl text-theme-secondary mb-4">
              {theme.copy.featuredMenuTitle}
            </h2>
            <p className="text-theme-text/70">{theme.copy.featuredMenuSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="bg-theme-surface rounded-2xl shadow-sm border border-theme-secondary/10 hover:shadow-md transition-shadow group overflow-hidden flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.name || ''}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
                  {item.name && (
                    <h3 className="text-lg font-semibold text-theme-text">{item.name}</h3>
                  )}
                  {item.price && (
                    <p className="text-theme-primary font-bold mt-1">{item.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // フォールバック: 旧動作（menu_items テキスト + menuUrls インデックスマッチ）
  if (!profile.menu_items) return null

  const menuList = profile.menu_items
    .split(/[\n,]/)
    .map(m => m.trim())
    .filter(m => m.length > 0)
    .slice(0, 3)

  if (menuList.length === 0) return null

  return (
    <section className="py-24 px-4 bg-theme-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl text-theme-secondary mb-4">
            {theme.copy.featuredMenuTitle}
          </h2>
          <p className="text-theme-text/70">{theme.copy.featuredMenuSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuList.map((item, idx) => {
            const imageUrl = menuUrls[idx]
            return (
              <div key={idx} className="bg-theme-surface rounded-2xl shadow-sm border border-theme-secondary/10 hover:shadow-md transition-shadow group overflow-hidden flex flex-col">
                {imageUrl ? (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center pt-8">
                    <div className="w-16 h-16 rounded-full bg-theme-primary/10 flex items-center justify-center group-hover:bg-theme-primary/20 transition-colors">
                      <Utensils className="w-8 h-8 text-theme-primary" />
                    </div>
                  </div>
                )}
                <div className="p-6 flex-1 flex items-center justify-center text-center">
                  <h3 className="text-lg font-semibold text-theme-text">{item}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
