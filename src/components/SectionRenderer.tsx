import { getTheme } from '@/lib/theme'
import type { Profile } from '@/types/profile'
import Hero from '@/components/sections/Hero'
import ConceptSection from '@/components/sections/ConceptSection'
import GallerySection from '@/components/sections/GallerySection'
import FeaturedMenu from '@/components/sections/FeaturedMenu'
import FeatureSection from '@/components/sections/FeatureSection'
import CallToAction from '@/components/sections/CallToAction'
import ShopInfo from '@/components/sections/ShopInfo'

const sectionComponents = {
  'hero': Hero,
  'concept': ConceptSection,
  'gallery': GallerySection,
  'featured-menu': FeaturedMenu,
  'features': FeatureSection,
  'cta': CallToAction,
  'shop-info': ShopInfo,
} as const

export default function SectionRenderer({ profile }: { profile: Profile }) {
  const theme = getTheme()
  const visibleSections = theme.sections.filter(s => s.visible)

  // ナビの href → セクション type の逆引きマップを構築
  // 例: href="#menu" がどのセクションを指すか不明な場合に備え、
  // ナビ href のアンカーも追加 ID として付与する
  const navHrefToType = new Map<string, string>()
  for (const item of theme.navigation.items) {
    const anchor = item.href.replace(/^#/, '')
    // 完全一致するセクションがなければ、部分一致で紐付け
    const exact = visibleSections.find(s => s.type === anchor)
    if (!exact) {
      const partial = visibleSections.find(s => s.type.includes(anchor) || anchor.includes(s.type))
      if (partial) navHrefToType.set(partial.type, anchor)
    }
  }

  return (
    <>
      {visibleSections.map((section, index) => {
        const Component = sectionComponents[section.type]
        if (!Component) return null
        const extraAnchor = navHrefToType.get(section.type)
        return (
          <div id={section.type} key={`${section.type}-${index}`} className="scroll-mt-20">
            {extraAnchor && <div id={extraAnchor} className="scroll-mt-20" />}
            <Component profile={profile} />
          </div>
        )
      })}
    </>
  )
}
