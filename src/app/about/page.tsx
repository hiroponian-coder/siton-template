import { getStoreProfile } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function AboutPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-site';
  const profile = await getStoreProfile(siteId);

  if (!profile) return null;

  return (
    <main className="min-h-screen">
      <Navbar profile={profile} />
      
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
             <div>
                <span className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase">Our Story</span>
                <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-8 leading-tight">Crafting the Perfect <br />Coffee Experience</h1>
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                  {profile.store_name}は、単なるカフェ以上の存在を目指しています。厳選された豆の個性を最大限に引き出す抽出技術と、視覚からも癒やしを与えるモダンな空間デザイン。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  お客様一人ひとりの大切な時間が、より豊かでクリエイティブなものになるよう、細部にまでこだわったおもてなしを提供いたします。
                </p>
             </div>
             <div className="aspect-square bg-gray-100 overflow-hidden relative">
               <img 
                 src={profile.image_urls?.[1] || profile.image_urls?.[0]}
                 alt="Interior"
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {profile.image_urls?.slice(0, 3).map((url, idx) => (
               <div key={idx} className="aspect-[4/5] overflow-hidden">
                 <img src={url} alt={`Gallery ${idx}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}