import { Coffee } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Hero({ profile }: { profile: Profile }) {
  const bgImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full bg-[#B45309] text-white animate-bounce">
            <Coffee size={32} />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {profile.store_name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 font-light mb-10">
          {profile.store_strengths || '洗練された空間で、至福の一杯を。'}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/menu" className="px-8 py-4 bg-[#B45309] text-white rounded-full font-semibold hover:bg-[#92400E] transition-all transform hover:scale-105">
            メニューを見る
          </a>
          <a href="/access" className="px-8 py-4 bg-white text-[#0F172A] rounded-full font-semibold hover:bg-slate-100 transition-all transform hover:scale-105">
            アクセス情報
          </a>
        </div>
      </div>
    </section>
  );
}