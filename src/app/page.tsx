import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuFeatured from '@/components/MenuFeatured';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Site configuration not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header profile={profile} />
      <Hero profile={profile} />
      <About profile={profile} />
      {profile.menu_items && <MenuFeatured profile={profile} />}
      <CTA profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}