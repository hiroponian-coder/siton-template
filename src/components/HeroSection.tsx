import { ChevronRight, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function HeroSection({ profile }: { profile: Profile }) {
  const imageUrl = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070';
  
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {profile.store_name || 'Cafe Saiton 26'}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          洗練された静寂と、一杯の至福。都市の喧騒を忘れさせるモダンな空間へ。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/menu" 
            className="px-8 py-4 bg-[#B38B6D] text-white rounded-full font-medium hover:bg-[#a17a5a] transition-all flex items-center group"
          >
            View Menu
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}