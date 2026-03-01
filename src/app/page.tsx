import { getStoreProfile } from '@/lib/supabase'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionRenderer from '@/components/SectionRenderer'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID
  const profile = siteId ? await getStoreProfile(siteId) : null

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">読み込み中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={profile} />
      <main className="flex-grow">
        <SectionRenderer profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  )
}
