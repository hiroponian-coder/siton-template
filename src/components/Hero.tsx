import { ChevronDown } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000';
  
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-in">
          {profile.store_name}
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-8">
          都市の静寂と、洗練された一杯を。
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="bg-[#C5A059] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest hover:bg-[#1A1A1A] transition-all duration-300 w-full md:w-auto shadow-xl hover:shadow-[#C5A059]/20"
          >
            VIEW MENU
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}