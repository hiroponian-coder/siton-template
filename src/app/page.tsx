import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ConceptSection from '@/components/ConceptSection';
import FeaturedMenu from '@/components/FeaturedMenu';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';
import ShopInfo from '@/components/ShopInfo';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;
  
  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#2C1E16] bg-[#FDFBF7]">
        <p className="text-xl">Site not found or profile missing.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={profile} />
      <main className="flex-grow">
        <Hero profile={profile} />
        <ConceptSection profile={profile} />
        <FeaturedMenu profile={profile} />
        <FeatureSection profile={profile} />
        <CallToAction profile={profile} />
        <ShopInfo profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}