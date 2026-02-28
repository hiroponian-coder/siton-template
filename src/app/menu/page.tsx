import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Coffee } from 'lucide-react';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;
  if (!profile) return null;

  const menuItems = profile.menu_items?.split('\n') || [];

  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-16">
      <Header profile={profile} />
      <div className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Menu</h1>
          <p className="text-[#2D2D2D]/60">スペシャリティコーヒーから季節のデリまで、厳選された品々。</p>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#1A1A1A]/5">
            <div className="space-y-8">
              {menuItems.length > 0 ? menuItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FAFAFA] rounded-full flex items-center justify-center text-[#D4A373]">
                      <Coffee size={20} />
                    </div>
                    <span className="text-lg font-medium text-[#1A1A1A]">{item}</span>
                  </div>
                  <div className="flex-grow border-b border-dotted border-[#1A1A1A]/10 mx-4"></div>
                  <span className="font-bold text-[#1A1A1A]">ASK</span>
                </div>
              )) : (
                <p className="text-center text-gray-400">メニューの準備中です。</p>
              )}
            </div>
            {profile.coupon_info && (
              <div className="mt-16 p-6 bg-[#D4A373]/5 border-2 border-dashed border-[#D4A373]/30 rounded-2xl text-center">
                <h3 className="text-[#D4A373] font-bold text-lg mb-2">Special Offer</h3>
                <p className="text-[#2D2D2D]">{profile.coupon_info}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}