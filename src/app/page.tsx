import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ConceptSection from '@/components/ConceptSection';
import DynamicMenuHighlight from '@/components/DynamicMenuHighlight';
import FeaturesGrid from '@/components/FeaturesGrid';
import GallerySection from '@/components/GallerySection';
import DynamicAccessSection from '@/components/DynamicAccessSection';
import StrategicCTASection from '@/components/StrategicCTASection';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium">Site profile not found.</p>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Header profile={profile} />
      <Hero profile={profile} />
      {profile.store_strengths && <ConceptSection profile={profile} />}
      {profile.menu_items && <DynamicMenuHighlight profile={profile} />}
      <FeaturesGrid profile={profile} />
      {profile.image_urls && profile.image_urls.length > 0 && <GallerySection profile={profile} />}
      <DynamicAccessSection profile={profile} />
      <StrategicCTASection profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}