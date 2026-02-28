import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import MenuHighlight from '@/components/MenuHighlight';
import AccessSection from '@/components/AccessSection';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;
  return {
    title: profile?.store_name ? `${profile.store_name} | 洗練された香りと静寂が交差するモダンカフェ` : 'カフェサイトン２０',
    description: '都会の喧騒を忘れさせるミニマルな空間で、厳選された豆を使用した一杯を提供します。'
  };
}

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  if (!siteId) return <div className="flex items-center justify-center h-screen">Environment variable NEXT_PUBLIC_SITE_ID is missing.</div>;

  const profile = await getStoreProfile(siteId);
  if (!profile) return <div className="flex items-center justify-center h-screen">Site not found or profile missing.</div>;

  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-16">
      <Header profile={profile} />
      <Hero profile={profile} />
      <FeatureSection profile={profile} />
      {profile.menu_items && <MenuHighlight profile={profile} />}
      <AccessSection profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}