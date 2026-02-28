import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import MenuList from '@/components/MenuList';
import StrategicCTASection from '@/components/StrategicCTASection';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return null;

  return (
    <main className="bg-[#F8FAFC]">
      <Header profile={profile} />
      <PageHeader title="Menu" subtitle="厳選された素材が織りなす、至福のひととき" />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <MenuList profile={profile} />
      </div>
      <StrategicCTASection profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}