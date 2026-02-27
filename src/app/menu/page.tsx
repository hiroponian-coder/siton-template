import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default';
  const profile = await getStoreProfile(siteId);

  if (!profile || !profile.menu_items) return null;

  const menuItems = profile.menu_items.split(',');

  return (
    <main className="bg-[#FDFDFD]">
      <Header profile={profile} />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-light text-center mb-16 tracking-widest text-[#2D2424]">MENU</h1>
        
        <div className="space-y-12">
          <div>
            <h2 className="text-[#C5A059] border-b border-[#C5A059] pb-2 text-sm tracking-widest mb-8">SPECIALTIES</h2>
            <div className="grid gap-8">
              {menuItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline group">
                  <span className="text-xl text-[#333333] group-hover:text-[#C5A059] transition-colors">{item.trim()}</span>
                  <div className="flex-grow border-b border-dotted border-zinc-300 mx-4" />
                  <span className="text-[#2D2424] font-medium italic">Ask</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 p-8 border border-zinc-100 bg-zinc-50 text-center">
          <p className="text-sm text-[#333333]/60">※ 季節により内容が変更となる場合がございます。詳細はスタッフまでお尋ねください。</p>
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}