import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PhilosophySection from '@/components/PhilosophySection';
import FeaturedMenuPreview from '@/components/FeaturedMenuPreview';
import DynamicCTASection from '@/components/DynamicCTASection';
import AccessInfo from '@/components/AccessInfo';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'cafe-saiton-23';
  const profile = await getStoreProfile(siteId);

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#F9F7F2]">
        <p className="text-[#2C3E50] font-serif text-xl animate-pulse">Initializing Space...</p>
      </div>
    );
  }

  return (
    <main className="bg-[#F9F7F2] min-h-screen">
      <Header profile={profile} />
      <Hero profile={profile} />
      <PhilosophySection profile={profile} />
      {profile.menu_items && <FeaturedMenuPreview profile={profile} />}
      <DynamicCTASection profile={profile} />
      <AccessInfo profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}