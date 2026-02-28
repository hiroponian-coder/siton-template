import { Coffee, Utensils, IceCream, Info } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return null;

  const menuItems = profile.menu_items ? profile.menu_items.split(/[\n,]+/) : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={profile} />
      <main className="flex-grow">
        <div className="bg-[#1A1A1A] py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR MENU</h1>
          <p className="text-gray-400">こだわりの一杯と、季節を彩るメニュー</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 border-b border-gray-100 pb-8">
                <div className="bg-[#B38B6D]/10 p-3 rounded-lg">
                  {idx % 3 === 0 ? <Coffee className="text-[#B38B6D]" /> : idx % 3 === 1 ? <Utensils className="text-[#B38B6D]" /> : <IceCream className="text-[#B38B6D]" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{item.trim()}</h3>
                  <p className="text-sm text-gray-500">詳細についてはスタッフまでお問い合わせください。</p>
                  <p className="mt-2 font-bold text-[#B38B6D]">{profile.price_range || '¥600〜'}</p>
                </div>
              </div>
            ))}
          </div>

          {profile.coupon_info && (
            <div className="mt-24 p-8 bg-[#F9F9F9] border-2 border-dashed border-[#B38B6D] rounded-2xl">
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-[#B38B6D] mr-2" />
                <h3 className="text-xl font-bold">Special Coupon</h3>
              </div>
              <p className="text-lg">{profile.coupon_info}</p>
            </div>
          )}
        </div>
        <CtaBanner profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}