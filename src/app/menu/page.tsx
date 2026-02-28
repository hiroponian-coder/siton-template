import { Coffee } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div>Not found</div>;

  const menuItems = profile.menu_items?.split(/[、;；\n]/).filter(i => i.trim() !== '') || [];

  return (
    <main className="bg-white">
      <Navbar profile={profile} />
      <div className="py-24 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Our Menu</h1>
          <p className="text-gray-600">厳選された素材と確かな技術で、最高の一品をお届けします。</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00CDB8]/10 flex items-center justify-center text-[#00CDB8]">
                    <Coffee size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2937]">{item.trim()}</h3>
                    <p className="text-sm text-gray-500">Description of the selected item goes here.</p>
                  </div>
                </div>
                <span className="font-mono font-bold text-[#1F2937]">{profile.price_range || '¥ ---'}</span>
              </div>
            ))}
          </div>

          {profile.coupon_info && (
            <div className="mt-20 p-8 rounded-2xl bg-[#00CDB8]/5 border-2 border-dashed border-[#00CDB8] text-center">
              <h4 className="text-[#00CDB8] font-bold text-xl mb-2">Special Offer</h4>
              <p className="text-[#1F2937] font-medium">{profile.coupon_info}</p>
            </div>
          )}
        </div>
      </section>
      <Footer profile={profile} />
    </main>
  );
}