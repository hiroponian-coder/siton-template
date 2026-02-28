import { Profile } from '@/types/profile';
import { ArrowDown } from 'lucide-react';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000';
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-[#c5a059] font-medium tracking-[0.3em] mb-4 animate-fade-in-up">SINCE 2024</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {profile.store_name}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8 opacity-90">
          洗練された空間で味わう、日常を忘れる一杯。
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
           <a href="/menu" className="px-10 py-4 bg-[#c5a059] text-white rounded-full font-medium hover:bg-[#b08e4d] transition-all">
             VIEW MENU
           </a>
           <a href="/access" className="px-10 py-4 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all">
             OUR STORY
           </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={32} />
      </div>
    </section>
  );
}