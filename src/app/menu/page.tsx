import { Coffee } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'cafe-saiton-23';
  const profile = await getStoreProfile(siteId);
  if (!profile) return null;

  const menuCategories = [
    { title: 'Coffee', items: profile.menu_items?.split(',').filter(i => i.toLowerCase().includes('コーヒー') || i.toLowerCase().includes('エスプレッソ') || i.toLowerCase().includes('ドリップ')) || [] },
    { title: 'Sweets', items: profile.menu_items?.split(',').filter(i => i.toLowerCase().includes('ティラミス') || i.toLowerCase().includes('スフレ') || i.toLowerCase().includes('ケーキ')) || [] },
    { title: 'Food', items: profile.menu_items?.split(',').filter(i => !i.toLowerCase().includes('コーヒー') && !i.toLowerCase().includes('ケーキ') && !i.toLowerCase().includes('スフレ')) || [] }
  ];

  return (
    <main className="bg-[#F9F7F2] min-h-screen">
      <Header profile={profile} />
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm">MENU</span>
            <h1 className="text-5xl text-[#2C3E50] mt-4 font-serif italic">The Lineup</h1>
          </div>

          <div className="space-y-20">
            {menuCategories.map((cat, idx) => (
              cat.items.length > 0 && (
                <div key={idx}>
                  <h2 className="text-2xl font-serif text-[#2C3E50] border-b border-[#2C3E50]/20 pb-4 mb-8 flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-[#D4AF37]" />
                    {cat.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-baseline group pointer-events-none">
                        <span className="text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors">{item}</span>
                        <div className="flex-grow border-b border-dotted border-[#2C3E50]/20 mx-4 h-0"></div>
                        <span className="text-[#D4AF37] font-serif">Ask</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

          {profile.seasonal_events && (
            <div className="mt-20 p-8 border border-[#D4AF37] bg-white text-center">
              <h3 className="text-xl font-serif text-[#2C3E50] mb-4">Seasonal Specials</h3>
              <p className="text-[#1A1A1A]/70">{profile.seasonal_events}</p>
            </div>
          )}
        </div>
      </section>
      <Footer profile={profile} />
    </main>
  );
}