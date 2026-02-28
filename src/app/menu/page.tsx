import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div>Site not found.</div>;

  const menuItems = profile.menu_items ? profile.menu_items.split('\n') : [];

  return (
    <main className="min-h-screen bg-white">
      <Header profile={profile} />
      
      <section className="bg-[#2d3436] py-32 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 text-sm font-bold tracking-[0.4em] text-[#e17055]">MENU</h1>
          <h2 className="text-4xl font-bold md:text-5xl">お品書き</h2>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="grid gap-16">
            <div>
              <h3 className="mb-10 border-b-2 border-[#e17055] pb-4 text-2xl font-bold text-[#2d3436]">COFFEE & DRINKS</h3>
              <div className="space-y-6">
                {menuItems.map((item, idx) => (
                  <div key={idx} className="flex items-end justify-between border-b border-gray-100 pb-4">
                    <div>
                      <p className="text-lg font-bold text-[#2d3436]">{item.split(',')[0]}</p>
                      <p className="text-sm text-gray-400">Selected from high-quality farms</p>
                    </div>
                    <p className="text-xl font-medium text-[#e17055]">{item.split(',')[1] || '---'}</p>
                  </div>
                ))}
              </div>
            </div>

            {profile.price_range && (
              <div className="rounded-lg bg-[#f9f9f9] p-8">
                <h4 className="mb-4 font-bold text-[#2d3436]">予算目安</h4>
                <p className="text-[#e17055] text-2xl font-bold">{profile.price_range}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}