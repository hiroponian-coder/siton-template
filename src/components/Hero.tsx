import { Profile } from '@/types/profile';
import { ChevronDown } from 'lucide-react';

export default function Hero({ profile }: { profile: Profile }) {
  const mainImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <div 
        className="absolute inset-0 opacity-60 bg-cover bg-center transition-transform duration-10000 hover:scale-110"
        style={{ backgroundImage: `url(${mainImage})` }}
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-8xl font-bold text-[#FDFDFD] mb-6 tracking-tighter">
          {profile.store_name}
        </h1>
        <p className="text-xl md:text-2xl text-[#FDFDFD]/90 max-w-2xl mx-auto font-light leading-relaxed">
          {profile.store_strengths || '洗練された一杯と、贅沢な時間。'}
        </p>
        <div className="mt-12">
          <div className="inline-block w-px h-24 bg-gradient-to-b from-[#C5A059] to-transparent" />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#FDFDFD] animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}