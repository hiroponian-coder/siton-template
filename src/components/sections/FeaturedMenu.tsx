import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { Utensils } from 'lucide-react'

export default function FeaturedMenu({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null

  const theme = getTheme()

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
          {menuList.map((item, idx) => (
            <div key={idx} className="bg-theme-surface rounded-2xl p-8 shadow-sm border border-theme-secondary/10 hover:shadow-md transition-shadow group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-theme-primary/10 flex items-center justify-center mb-6 group-hover:bg-theme-primary/20 transition-colors">
                <Utensils className="w-8 h-8 text-theme-primary" />
              </div>
              <h3 className="text-lg font-semibold text-theme-text">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
