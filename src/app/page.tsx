import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MenuSection from '@/components/MenuSection';
import Access from '@/components/Access';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-site-id';
  const profile = siteId ? await getStoreProfile(siteId) : null;
  
  if (!profile) return <div className="min-h-screen flex items-center justify-center text-[#3E2723] text-xl font-bold">Store profile not found.</div>;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header profile={profile} />
      <main className="flex-grow">
        <Hero profile={profile} />
        <Features profile={profile} />
        <MenuSection profile={profile} />
        <Access profile={profile} />
        <CTA profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}