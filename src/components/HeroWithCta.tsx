import { Profile } from '@/types/profile';
import Link from 'next/link';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';

export default function HeroWithCta({ profile }: { profile: Profile }) {
  const heroImg = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200';

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {profile.store_name}<br />
          <span className="text-lg md:text-2xl font-light opacity-90">静寂とコーヒーが織りなす現代の隠れ家</span>
        </h1>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          {profile.store_strengths || '洗練されたモダンな空間で、最高の一杯を提供いたします。'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="px-8 py-4 bg-[#B45309] text-white font-semibold rounded hover:bg-[#92400E] transition-all flex items-center justify-center group">
            Explore Menu
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/access" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded hover:bg-white/20 transition-all">
            Find Us
          </Link>
        </div>
      </div>
    </section>
  );
}