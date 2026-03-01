import { Profile } from '@/types/profile'
import { getTheme } from '@/lib/theme'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

function extractGoogleMapsEmbedUrl(input: string): string | null {
  // iframe タグから src を抽出
  const srcMatch = input.match(/<iframe[^>]+src=["']([^"']+)["']/)
  const url = srcMatch ? srcMatch[1] : input

  try {
    const parsed = new URL(url)
    if (parsed.protocol === 'https:' && parsed.hostname === 'www.google.com' && parsed.pathname.startsWith('/maps/embed')) {
      return url
    }
  } catch { /* invalid URL */ }
  return null
}

function buildAddressEmbedUrl(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=16`
}

export default function ShopInfo({ profile }: { profile: Profile }) {
  if (!profile.address && !profile.access_info) return null

  const theme = getTheme()
  const userMapsUrl = profile.google_maps_url ? extractGoogleMapsEmbedUrl(profile.google_maps_url) : null
  const mapsUrl = profile.address ? buildAddressEmbedUrl(profile.address) : userMapsUrl
  const showMap = !!mapsUrl

  return (
    <section className="py-24 px-4 bg-theme-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-theme-secondary mb-12 flex items-center justify-center gap-3">
          <MapPin className="w-8 h-8 text-theme-primary" />
          {theme.copy?.storeInfoTitle ?? 'アクセス'}
        </h2>

        <div className="bg-theme-surface rounded-2xl p-8 md:p-12 shadow-sm border border-theme-secondary/10 flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-6">
            {profile.store_name && (
              <div>
                <div className="text-sm text-theme-text/60 mb-1">店舗名</div>
                <div className="text-xl font-bold text-theme-secondary">{profile.store_name}</div>
              </div>
            )}

            {profile.address && (
              <div>
                <div className="text-sm text-theme-text/60 mb-1">住所</div>
                <div className="text-lg text-theme-text">{profile.address}</div>
              </div>
            )}

            {profile.access_info && (
              <div>
                <div className="text-sm text-theme-text/60 mb-1">アクセス</div>
                <div className="text-lg text-theme-text">{profile.access_info}</div>
              </div>
            )}

            {profile.business_hours && (
              <div>
                <div className="text-sm text-theme-text/60 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  営業時間
                </div>
                <div className="text-lg text-theme-text">{profile.business_hours}</div>
              </div>
            )}

            {profile.phone_number && (
              <div>
                <div className="text-sm text-theme-text/60 mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  電話番号
                </div>
                <a href={`tel:${profile.phone_number.replace(/[-\s]/g, '')}`} className="text-lg text-theme-primary font-medium hover:underline">
                  {profile.phone_number}
                </a>
              </div>
            )}

            {profile.address && (
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(profile.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-theme-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity mt-2"
              >
                <Navigation className="w-4 h-4" />
                経路案内
              </a>
            )}
          </div>

          <div className="flex-1 flex items-center justify-center bg-theme-secondary/5 rounded-xl border border-theme-secondary/10 min-h-[250px] overflow-hidden">
            {showMap ? (
              <iframe
                src={mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '250px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
              />
            ) : (
              <div className="text-center text-theme-text/50 p-6">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-theme-secondary/30" />
                <p>Map Location</p>
                {profile.address && <p className="text-sm mt-2 max-w-[200px] mx-auto">{profile.address}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
