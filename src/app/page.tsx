import { getStoreProfile } from '@/lib/supabase';
import { Profile } from '@/types/profile';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import AccessSection from '@/components/AccessSection';
import Footer from '@/components/Footer';

// Mock data for fallback since env might not be set in this demo
const MOCK_PROFILE: Profile = {
  store_name: 'カフェサイトン',
  industry: 'カフェ31',
  address: '東京都渋谷区神宮前 4-X-X',
  business_hours: 'Mon-Sun: 09:00 - 20:00 (L.O. 19:30)',
  store_strengths: '熟練のバリスタによるハンドドリップと、五感を刺激するモダンな空間。',
  menu_items: 'Single Origin Espresso - ¥650\nSaiton Seasonal Blend - ¥700\nArtisanal Pastry Platter - ¥1,200\nSeasonal Fruit Galette - ¥950',
  instagram_id: 'cafe_saiton_demo',
  image_urls: ['https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=2070']
};

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  // For demo purposes, we use MOCK_PROFILE if siteId lookup fails
  const profileFromDb = siteId ? await getStoreProfile(siteId) : null;
  const profile = profileFromDb || MOCK_PROFILE;

  if (!profile) return <div className="flex items-center justify-center min-h-screen">Site not found.</div>;

  return (
    <main className="min-h-screen flex flex-col">
      <Header profile={profile} />
      <Hero profile={profile} />
      
      {/* Brand Story Section */}
      <section className="py-32 px-4 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-[#C5A059] mb-6 uppercase">Philosophy</h2>
          <p className="text-2xl md:text-4xl font-serif italic text-[#1A1A1A] leading-relaxed">
            「日常を美しく、感性を豊かに」<br className="hidden md:block"/>
            私たちはただコーヒーを提供するだけでなく、<br className="hidden md:block"/>
            新しいアイデアが生まれるサードプレイスを目指しています。
          </p>
        </div>
      </section>

      <MenuPreview profile={profile} />
      
      {profile.store_strengths && (
        <section className="py-24 bg-[#1A1A1A] text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-[#C5A059] text-4xl font-serif italic">01</div>
              <h4 className="text-xl font-bold">Quality</h4>
              <p className="text-gray-400">世界中から厳選した豆を、最適な焙煎で。</p>
            </div>
            <div className="space-y-4">
              <div className="text-[#C5A059] text-4xl font-serif italic">02</div>
              <h4 className="text-xl font-bold">Space</h4>
              <p className="text-gray-400">静寂と温もりが同居する、モダンなインテリア。</p>
            </div>
            <div className="space-y-4">
              <div className="text-[#C5A059] text-4xl font-serif italic">03</div>
              <h4 className="text-xl font-bold">Culture</h4>
              <p className="text-gray-400">地域のアートや音楽が交差する、刺激的な場所。</p>
            </div>
          </div>
        </section>
      )}

      <AccessSection profile={profile} />

      <section className="py-32 bg-white flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Experience the Finest.</h2>
        <p className="mb-12 text-gray-500">至高の一杯と共に、静かなひとときを。</p>
        <a href="/reservation" className="px-16 py-5 bg-[#C5A059] text-white font-bold tracking-widest hover:bg-[#1A1A1A] transition-all duration-500">
          RESERVE A TABLE
        </a>
      </section>

      <Footer profile={profile} />
    </main>
  );
}