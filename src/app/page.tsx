import { getStoreProfile } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSlider from '@/components/MenuSlider';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-site';
  const profile = await getStoreProfile(siteId);

  if (!profile) {
    return <div className="flex items-center justify-center h-screen">Site not found or profile missing.</div>;
  }

  return (
    <main className="min-h-screen">
      <Navbar profile={profile} />
      
      <Hero profile={profile} />
      
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase block mb-6 animate-fade-in">Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-10">
            一杯のコーヒーが、<br />日常を特別なものに変える。
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            {profile.store_strengths}
            洗練されたモダンな空間で、バリスタが一杯ずつ丁寧に淹れるスペシャリティコーヒーを。素材へのこだわりと、心地よい空間設計が融合した新しいサードプレイスを提案します。
          </p>
        </div>
      </section>

      <MenuSlider profile={profile} />

      {profile.line_id && (
        <section className="py-20 bg-[#D4AF37]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
             <MessageCircle className="text-white mb-6" size={48} strokeWidth={1} />
             <h2 className="text-white text-3xl font-serif mb-4">Official LINE</h2>
             <p className="text-white/90 mb-10 max-w-md">友だち追加で最新情報や限定クーポンをいち早くお届けします。</p>
             <a 
              href={`https://line.me/R/ti/p/${profile.line_id}`} 
              className="bg-[#1A1A1A] text-white px-10 py-4 tracking-[0.2em] font-medium hover:bg-white hover:text-[#1A1A1A] transition-all"
             >
               REGISTER NOW
             </a>
          </div>
        </section>
      )}

      <Location profile={profile} />

      <Footer profile={profile} />
    </main>
  );
}