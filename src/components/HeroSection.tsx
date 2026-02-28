import { ChevronDown } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function HeroSection({ profile }: { profile: Profile }) {
  const heroImg = profile.image_urls && profile.image_urls[0] 
    ? profile.image_urls[0] 
    : 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070';

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-[#1B2E35]">
      <div 
        className="absolute inset-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B2E35]/40 to-[#1B2E35]" />
      
      <div className="relative z-10 text-center px-6">
        <span className="inline-block text-[#C9A050] text-sm font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Welcome to Modern Retreat
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {profile.store_name}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {profile.design_atmosphere || '洗練された空間で、特別な一杯を。'}
        </p>
        <div className="mt-12">
          <button className="bg-[#C9A050] text-white px-10 py-4 rounded-full font-bold hover:bg-[#B89040] transition-all transform hover:scale-105">
            Reserve Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8 opacity-50" />
      </div>
    </section>
  );
}