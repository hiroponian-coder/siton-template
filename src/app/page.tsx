import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import MenuSection from '@/components/MenuSection';
import AccessSection from '@/components/AccessSection';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#FDFDFD] text-[#1A1A1A] flex-col space-y-4">
        <h1 className="text-xl font-bold">404 | Site Not Found</h1>
        <p className="text-sm opacity-50 uppercase tracking-widest">Check your environment configuration.</p>
      </div>
    );
  }

  return (
    <main className="bg-[#FDFDFD] min-h-screen font-sans selection:bg-[#C5A059] selection:text-white">
      <Header profile={profile} />
      <Hero profile={profile} />
      <Concept profile={profile} />
      {profile.menu_items && <MenuSection profile={profile} />}
      <AccessSection profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}