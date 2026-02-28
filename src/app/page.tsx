import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandConcept from '@/components/BrandConcept';
import DynamicFeaturedMenu from '@/components/DynamicFeaturedMenu';
import ModernAmenityFeatures from '@/components/ModernAmenityFeatures';
import LocationAccess from '@/components/LocationAccess';
import NewsletterCTA from '@/components/NewsletterCTA';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) {
    return <div className="flex h-screen items-center justify-center bg-white text-gray-900">Loading the essence of Cafe Sighton 19...</div>;
  }

  return (
    <main className="bg-white text-[#333333] min-h-screen">
      <Header profile={profile} />
      <HeroSection profile={profile} />
      <BrandConcept profile={profile} />
      {profile.menu_items && <DynamicFeaturedMenu profile={profile} />}
      <ModernAmenityFeatures profile={profile} />
      <LocationAccess profile={profile} />
      <NewsletterCTA profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}