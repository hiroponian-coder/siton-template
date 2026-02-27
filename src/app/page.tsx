import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import Access from '@/components/Access';
import Footer from '@/components/Footer';
import { Link as LinkIcon } from 'lucide-react';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default_site_id';
  const profile = await getStoreProfile(siteId);

  if (!profile) {
    return <div className="flex h-screen items-center justify-center font-sans">Site configuration not found.</div>;
  }

  return (
    <main className="min-h-screen bg-white font-sans text-[#111827]">
      <Header profile={profile} />
      <Hero profile={profile} />
      
      {profile.store_strengths && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-[#C2410C] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Concept</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
              &ldquo;Experience the modern tranquility through every cup.&rdquo;
            </h2>
            <p className="text-[#4B5563] text-lg leading-loose font-light">
              {profile.store_strengths}
            </p>
          </div>
        </section>
      )}

      <MenuPreview profile={profile} />
      <Access profile={profile} />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#C2410C] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">特別な時間を、ここで。</h2>
              <p className="text-white/80 mb-10 max-w-xl mx-auto">
                お一人での作業や、大切な方との語らいに。最適な空間をご用意しております。
              </p>
              <a href="/reservation" className="inline-block bg-white text-[#C2410C] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Reservation
              </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}