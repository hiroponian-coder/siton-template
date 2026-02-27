import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile || !profile.menu_items) {
    return <div className="py-20 text-center">Menu not available.</div>;
  }

  return (
    <main className="pt-20 bg-[#1A1A1A]">
      <Header profile={profile} />
      <div className="py-12 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-6">
           <h1 className="text-5xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-tighter">Menu List</h1>
           <p className="text-[#2D2D2D]/60">Our current offerings and seasonal selections.</p>
        </div>
      </div>
      <MenuSection profile={profile} />
      {profile.coupon_info && (
        <section className="py-12 bg-[#C5A059] text-[#1A1A1A] text-center">
          <h2 className="text-2xl font-black italic">Special Offer</h2>
          <p className="mt-2 font-medium">{profile.coupon_info}</p>
        </section>
      )}
      <Footer profile={profile} />
    </main>
  );
}