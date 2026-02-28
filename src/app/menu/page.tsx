import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile || !profile.menu_items) return null;

  const menuSections = profile.menu_items.split('\n');

  return (
    <main className="min-h-screen pt-20">
      <Header profile={profile} />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">MENU</h1>
            <p className="text-[#c5a059] tracking-widest font-medium">お品書き</p>
          </div>

          <div className="bg-white p-12 shadow-sm rounded-2xl">
            <div className="grid gap-8">
              {menuSections.map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline border-b border-dotted border-gray-200 pb-4">
                  <span className="text-xl font-bold">{item}</span>
                  <span className="text-[#c5a059] font-mono">ASK</span>
                </div>
              ))}
            </div>
            {profile.price_range && (
              <p className="mt-12 text-center text-gray-400 text-sm">
                Price Range: {profile.price_range}
              </p>
            )}
          </div>
        </div>
      </section>

      <CTA profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}