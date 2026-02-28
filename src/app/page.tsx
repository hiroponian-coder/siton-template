import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ConceptSection from '@/components/ConceptSection';
import FeaturedMenuPreview from '@/components/FeaturedMenuPreview';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div className="flex items-center justify-center min-h-screen">Loading site configuration...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={profile} />
      <main className="flex-grow">
        <HeroSection profile={profile} />
        <ConceptSection profile={profile} />
        <FeaturedMenuPreview profile={profile} />
        <CtaBanner profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}