import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Profile } from '@/types/profile';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return null;

  const items = profile.menu_items ? profile.menu_items.split(/[\n,、]/).filter(i => i.trim()) : [];

  return (
    <main className="bg-[#FFFFFF]">
      <Header profile={profile} />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-20">
            <h1 className="text-sm font-bold text-[#C9A050] tracking-[0.3em] uppercase mb-4">Menu List</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2E35]">メニュー一覧</h2>
            <div className="w-12 h-1 bg-[#C9A050] mx-auto mt-8" />
          </header>

          <div className="grid gap-12">
            {items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-baseline border-b border-gray-100 pb-6 group">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#1B2E35] group-hover:text-[#C9A050] transition-colors">{item.trim()}</h3>
                  <p className="text-gray-400 text-sm">厳選された素材を使用した、当店自慢の一品です。</p>
                </div>
                <span className="text-[#1B2E35] font-mono font-bold">{profile.price_range || 'Contact'}</span>
              </div>
            ))}
          </div>

          {profile.coupon_info && (
            <div className="mt-20 p-8 bg-[#1B2E35] rounded-2xl text-white text-center">
              <h3 className="text-xl font-bold mb-4 text-[#C9A050]">Special Coupon</h3>
              <p>{profile.coupon_info}</p>
            </div>
          )}
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}