import { Profile } from '@/types/profile'

export default function RestaurantJsonLd({ profile }: { profile: Profile }) {
  if (!profile.store_name) return null

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: profile.store_name,
  }

  if (profile.address) {
    jsonLd.address = {
      '@type': 'PostalAddress',
      streetAddress: profile.address,
      addressCountry: 'JP',
    }
  }

  if (profile.phone_number) {
    jsonLd.telephone = profile.phone_number
  }

  if (profile.business_hours) {
    jsonLd.openingHours = profile.business_hours
  }

  if (profile.price_range) {
    jsonLd.priceRange = profile.price_range
  }

  if (profile.industry) {
    jsonLd.servesCuisine = profile.industry
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
