import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-id';
  const profile = await getStoreProfile(siteId);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <p className="text-slate-500">Site not found or profile missing.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] text-[#1E293B]">
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-light italic text-[#B45309] mb-4">Concept</h2>
            <p className="text-3xl font-medium leading-relaxed">
              {profile.store_strengths}
            </p>
          </div>
        </section>
        <MenuSection profile={profile} />
        <InfoSection profile={profile} />
        {profile.coupon_info && (
          <section className="py-12 bg-[#B45309] text-white">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-2xl font-bold mb-4">Special Offer</h3>
              <p className="text-lg">{profile.coupon_info}</p>
            </div>
          </section>
        )}
      </main>
      <Footer profile={profile} />
    </div>
  );
}