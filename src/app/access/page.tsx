import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import AccessSection from '@/components/AccessSection';
import Footer from '@/components/Footer';

export default async function AccessPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return null;

  return (
    <main className="pt-20">
      <Header profile={profile} />
      <div className="bg-[#1A1A1A] py-20 text-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-black uppercase tracking-widest mb-4">Visit Us</h1>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto" />
        </div>
      </div>
      <AccessSection profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}