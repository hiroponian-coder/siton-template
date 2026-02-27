import { Profile } from '@/types/profile';
import { ChevronRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Hero({ profile }: { profile: Profile }) {
  const bgImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200';

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt={profile.store_name || ''} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#111827]/40 backdrop-sepia-[0.2]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {profile.store_name}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {profile.store_strengths || '洗練された空間で味わう至高の一杯'}
        </p>
        <Link 
          href="/reservation" 
          className="inline-flex items-center px-8 py-4 bg-[#C2410C] text-white font-semibold rounded-full hover:bg-[#C2410C]/90 transition-all transform hover:scale-105"
        >
          Book a Table
          <ChevronRight className="ml-2" size={20} />
        </Link>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-white/50 mx-auto"></div>
      </div>
    </section>
  );
}