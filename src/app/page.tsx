import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ConceptSection from '@/components/ConceptSection';
import DynamicMenuPreview from '@/components/DynamicMenuPreview';
import AccessAndMap from '@/components/AccessAndMap';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Site configuration missing.</p>
      </div>
    );
  }

  return (
    <main className="relative">
      <Header profile={profile} />
      <HeroSection profile={profile} />
      {profile.store_strengths && <ConceptSection profile={profile} />}
      {profile.menu_items && <DynamicMenuPreview profile={profile} />}
      <AccessAndMap profile={profile} />
      <Footer profile={profile} />
      <StickyCTA profile={profile} />
    </main>
  );
}