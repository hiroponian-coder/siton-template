import { Profile } from '@/types';
import { CakeSlice } from 'lucide-react';

export default function Hero({ profile }: { profile: Profile }) {
  const bgImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-[#FFF9F5]/40 z-10 backdrop-blur-sm" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="bg-[#FF6B81] text-white p-4 rounded-full mb-6 shadow-xl rotate-12 animate-bounce">
          <CakeSlice size={48} />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-[#3E2723] mb-6 drop-shadow-md leading-tight">
          {profile.store_name || 'Welcome to our Cafe!'}
        </h1>
        {profile.store_strengths && (
          <p className="text-xl md:text-3xl font-bold text-[#FF6B81] bg-white/90 px-8 py-4 rounded-full shadow-lg border-4 border-[#FDCB6E] inline-block">
            {profile.store_strengths}
          </p>
        )}
      </div>
      
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-20 transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]" fill="#FFF9F5">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.31,192,106.64,236.4,96.53,279.35,74.79,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}