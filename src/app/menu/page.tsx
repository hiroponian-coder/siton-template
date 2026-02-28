import { getStoreProfile } from '@/lib/supabase';
import { Profile } from '@/types/profile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MOCK_PROFILE: Profile = {
  store_name: 'カフェサイトン',
  menu_items: 'Single Origin Espresso - ¥650\nSaiton Seasonal Blend - ¥700\nArtisanal Pastry Platter - ¥1,200\nSeasonal Fruit Galette - ¥950\nHand Drip Coffee - ¥750\nOrganic Ceylon Tea - ¥700',
  instagram_id: 'cafe_saiton_demo'
};

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profileFromDb = siteId ? await getStoreProfile(siteId) : null;
  const profile = profileFromDb || MOCK_PROFILE;

  return (
    <main className="bg-[#FAFAFA]">
      <Header profile={profile} />
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center mb-16">Our Menu</h1>
          <div className="bg-white p-8 md:p-16 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 gap-12">
              <div>
                <h2 className="text-[#C5A059] text-sm font-bold tracking-widest border-b border-[#C5A059] pb-4 mb-8 uppercase">Selections</h2>
                <div className="whitespace-pre-wrap leading-loose text-lg font-serif">
                  {profile.menu_items || '現在準備中です。'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer profile={profile} />
    </main>
  );
}