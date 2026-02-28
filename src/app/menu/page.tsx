import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuSection from '@/components/MenuSection';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-site';
  const profile = await getStoreProfile(siteId);

  if (!profile) return <div>Site not found.</div>;

  return (
    <main className="bg-[#FDFDFD]">
      <Header profile={profile} />
      <div className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4">
           <span className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Menu Collection</span>
           <h1 className="text-4xl font-bold text-[#1A1A1A] mb-8">お品書き</h1>
        </div>
        <MenuSection profile={profile} />
        {profile.seasonal_events && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="w-8 h-px bg-[#C5A059] mr-3"></span>
              Seasonal Specials
            </h3>
            <p className="text-[#2D2D2D] opacity-80 leading-relaxed">{profile.seasonal_events}</p>
          </div>
        )}
        {profile.coupon_info && (
           <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-50 rounded-sm mt-8">
              <h3 className="text-xs font-bold text-[#C5A059] mb-2">OFFER</h3>
              <p className="text-[#1A1A1A] font-medium">{profile.coupon_info}</p>
           </div>
        )}
      </div>
      <Footer profile={profile} />
    </main>
  );
}