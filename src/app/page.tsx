import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import HeroWithCta from '@/components/HeroWithCta';
import ConceptGrid from '@/components/ConceptGrid';
import DynamicFeaturedMenu from '@/components/DynamicFeaturedMenu';
import StoreProfileSection from '@/components/StoreProfileSection';
import SnsIntegrationBanner from '@/components/SnsIntegrationBanner';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || "seiton13-demo";
  const profile = await getStoreProfile(siteId);

  if (!profile) return <div className="flex items-center justify-center min-h-screen">Site not found.</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={profile} />
      <main className="flex-grow">
        <HeroWithCta profile={profile} />
        <ConceptGrid profile={profile} />
        <DynamicFeaturedMenu profile={profile} />
        <StoreProfileSection profile={profile} />
        <SnsIntegrationBanner profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}