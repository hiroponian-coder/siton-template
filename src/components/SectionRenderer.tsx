import { getTheme } from '@/lib/theme'
import type { Profile } from '@/types/profile'
import Hero from '@/components/sections/Hero'
import ConceptSection from '@/components/sections/ConceptSection'
import FeaturedMenu from '@/components/sections/FeaturedMenu'
import FeatureSection from '@/components/sections/FeatureSection'
import CallToAction from '@/components/sections/CallToAction'
import ShopInfo from '@/components/sections/ShopInfo'

const sectionComponents = {
  'hero': Hero,
  'concept': ConceptSection,
  'featured-menu': FeaturedMenu,
  'features': FeatureSection,
  'cta': CallToAction,
  'shop-info': ShopInfo,
} as const

export default function SectionRenderer({ profile }: { profile: Profile }) {
  const theme = getTheme()
  const visibleSections = theme.sections.filter(s => s.visible)

  return (
    <>
      {visibleSections.map((section, index) => {
        const Component = sectionComponents[section.type]
        if (!Component) return null
        return <Component key={`${section.type}-${index}`} profile={profile} />
      })}
    </>
  )
}
