import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AccessInfo from '@/components/AccessInfo';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#f8f9fa]">
        <p className="text-[#1a1a1a] font-medium">Site not found or profile missing.</p>
      </div>
    );
  }

  return (
    <main className="bg-[#f8f9fa] min-h-screen text-[#2d2d2d]">
      <Header profile={profile} />
      
      <Hero profile={profile} />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200'}
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
                alt="Concept"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <span className="inline-block py-1 px-4 border border-[#d4a373] text-[#d4a373] rounded-full text-sm font-bold">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {profile.store_name}が提供する<br />洗練された日常
              </h2>
              <p className="text-[#2d2d2d]/80 leading-relaxed text-lg">
                {profile.store_strengths || '一杯のコーヒー、心地よい音楽、そしてミニマルな空間。私たちは単に飲食を提供する場所ではなく、インスピレーションが生まれるキャンバスでありたいと考えています。'}
              </p>
              <div className="pt-4">
                <button className="group flex items-center gap-3 font-bold text-[#1a1a1a] hover:text-[#d4a373] transition-colors">
                  Read Story <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {profile.menu_items && <MenuSection profile={profile} />}

      <AccessInfo profile={profile} />
      
      <Footer profile={profile} />
    </main>
  );
}