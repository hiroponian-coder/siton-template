import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import MenuSection from '@/components/MenuSection';
import AccessInfo from '@/components/AccessInfo';
import Footer from '@/components/Footer';
import { Profile } from '@/types/profile';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-site';
  const profile = await getStoreProfile(siteId);

  if (!profile) return <div className="flex items-center justify-center min-h-screen">Site not found or profile missing.</div>;

  return (
    <main className="overflow-x-hidden">
      <Header profile={profile} />
      <Hero profile={profile} />
      <Introduction profile={profile} />
      {profile.menu_items && <MenuSection profile={profile} />}
      <AccessInfo profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}