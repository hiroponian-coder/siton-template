import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Features from '@/components/Features';
import MenuPreview from '@/components/MenuPreview';
import Access from '@/components/Access';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default';
  const profile = await getStoreProfile(siteId);

  if (!profile) return <div className="flex items-center justify-center min-h-screen">Site not found or profile missing.</div>;

  return (
    <main className="overflow-x-hidden">
      <Header profile={profile} />
      <Hero profile={profile} />
      {profile.store_strengths && <Introduction profile={profile} />}
      {profile.store_strengths && <Features profile={profile} />}
      {profile.menu_items && <MenuPreview profile={profile} />}
      <Access profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}