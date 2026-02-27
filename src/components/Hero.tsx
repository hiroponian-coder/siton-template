import { Profile } from '@/types/profile';
import Image from 'next/image';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1600';

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={profile.store_name || 'Cafe Hero'}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
          {profile.store_name}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
          洗練された空間で、至福の一杯を。日常に、極上のひとときを添えるモダンなカフェ体験。
        </p>
        <div className="mt-10">
          <button className="bg-[#C5A059] hover:bg-[#A6864B] text-white px-8 py-4 text-sm tracking-widest transition-all">
            VISIT US
          </button>
        </div>
      </div>
    </section>
  );
}