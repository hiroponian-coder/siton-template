import { Coffee } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div>Site not found.</div>;

  const menuItems = profile.menu_items ? profile.menu_items.split('\n') : [];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header profile={profile} />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-6 tracking-tight">MENU</h1>
          <div className="w-16 h-1 bg-[#D4A373] mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto">
            {menuItems.length > 0 ? (
              <div className="grid gap-8">
                {menuItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-dashed border-[#2C3E50]/20 pb-4">
                    <div className="flex items-center gap-4">
                      <Coffee className="text-[#D4A373]" size={20} />
                      <span className="text-xl font-medium text-[#2C3E50]">{item}</span>
                    </div>
                    <span className="text-[#D4A373] font-bold">ASK</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#1A1A1A]/60">メニューの詳細は店頭にてご確認ください。</p>
            )}
          </div>

          {profile.coupon_info && (
            <div className="mt-20 p-8 border-2 border-[#D4A373] bg-[#D4A373]/5 rounded-lg">
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Special Coupon</h3>
              <p className="text-[#2C3E50]">{profile.coupon_info}</p>
            </div>
          )}
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}