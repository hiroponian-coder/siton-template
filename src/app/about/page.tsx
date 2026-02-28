import { getStoreProfile } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function AboutPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div>Not found</div>;

  return (
    <main className="bg-white">
      <Navbar profile={profile} />
      
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-[#00CDB8] font-bold tracking-widest uppercase mb-4 block">Concept</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-8">
              24時間、あなたの居場所でありたい
            </h1>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                {profile.store_name}は、都会で忙しく過ごす皆様に「第3の場所（サードプレイス）」を提供することを目指して誕生しました。
              </p>
              <p>
                {profile.store_strengths || '私たちは24時間いつでも最高の一杯を提供し、深夜の静寂や朝の活気に寄り添います。'}
              </p>
              <p>
                こだわりのインテリア、選び抜かれたコーヒー豆、そして快適なネットワーク環境。すべての要素は、あなたの作業、休息、そして対話のために設計されています。
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
              <div>
                <h4 className="text-sm text-gray-400 uppercase font-bold mb-2">Interior</h4>
                <p className="text-gray-900 font-bold">{profile.design_atmosphere || 'Modern & Cozy'}</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-400 uppercase font-bold mb-2">Seats</h4>
                <p className="text-gray-900 font-bold">{profile.seats_count || '快適な多目的席'}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src={profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop'} 
              alt="Interior 1" 
              className="rounded-2xl w-full h-80 object-cover"
            />
            <img 
              src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop'} 
              alt="Interior 2" 
              className="rounded-2xl w-full h-80 object-cover mt-8"
            />
          </div>
        </div>
      </section>
      
      <Footer profile={profile} />
    </main>
  );
}