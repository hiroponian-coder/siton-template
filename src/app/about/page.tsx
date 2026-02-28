import { Image as ImageIcon } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default async function AboutPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div>Site not found</div>;

  return (
    <main className="bg-white text-[#333333] min-h-screen">
      <Header profile={profile} />
      
      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
               <div className="relative h-[600px] w-full">
                  <ImageIcon 
                    src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000'}
                    alt="Our Story"
                    fill
                    className="object-cover" />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-[#C4A484] p-12 hidden lg:block">
                  <p className="text-white font-serif italic text-4xl">Est. 2019</p>
               </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-[#C4A484] uppercase tracking-[0.3em] text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8 leading-tight">
                モダンと伝統が交差する、<br />特別な一杯を。
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  「カフェサイトン19」は、2019年に誕生しました。私たちのミッションは、都会の中心にいながら、まるで森の中にいるような深い静寂を感じていただくことです。
                </p>
                <p>
                  厳選されたシングルオリジンの豆、職人の手による抽出、そして細部まで計算されたモダンな空間。これらすべてが一体となり、最高のエクスペリエンスを創り出します。
                </p>
                {profile.store_strengths && (
                  <p className="font-bold text-[#1A1A1A]">
                    {profile.store_strengths}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}