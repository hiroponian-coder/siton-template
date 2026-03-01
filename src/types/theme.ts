export interface SiteTheme {
  version: 1
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textMuted: string
    footer: string
  }
  typography: {
    headingFont: string
    bodyFont: string
    headingWeight: 'normal' | 'bold' | 'extrabold'
  }
  meta: {
    title: string
    description: string
  }
  copy: {
    heroTagline: string | null
    heroSubtitle: string | null
    conceptTitle: string
    conceptSubtitles: { atmosphere: string; strength: string }
    featuredMenuTitle: string
    featuredMenuSubtitle: string
    storeInfoTitle: string
    ctaHeading: string
    ctaSubtext: string | null
    footerTagline: string | null
    contactLabel: string
    galleryTitle: string
    gallerySubtitle: string | null
  }
  sections: Array<{
    type: 'hero' | 'concept' | 'gallery' | 'featured-menu' | 'features' | 'cta' | 'shop-info'
    visible: boolean
  }>
  navigation: {
    items: Array<{ label: string; href: string }>
    brandIcon: string
  }
  images: {
    heroUrls: string[]
    galleryUrls: string[]
    conceptUrls: string[]
    menuUrls: string[]
  }
  menuItems?: Array<{ url: string; name?: string; price?: string }>
  branding: {
    showPoweredBy: boolean
  }
}
