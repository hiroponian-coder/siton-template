import { Profile } from '@/types/profile';

export default function Concept({ profile }: { profile: Profile }) {
  if (!profile.store_strengths && !profile.design_atmosphere) return null;

  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[#C5A059] font-semibold tracking-widest uppercase text-sm italic">Concept</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              日常の中に、<br />特別な静寂を。
            </h2>
            <p className="text-lg text-[#2D2D2D] leading-relaxed opacity-80">
              {profile.design_atmosphere || 'モダンで洗練された空間の中で、最高品質の豆を使用した一杯を。私たちのカフェは、ただコーヒーを飲む場所ではなく、自分自身と向き合い、感性を研ぎ澄ますためのステージです。'}
            </p>
            {profile.seasonal_events && (
              <div className="p-6 border-l-4 border-[#C5A059] bg-[#1A1A1A]/5">
                <h3 className="font-bold mb-2">Seasonal Note</h3>
                <p className="text-sm text-[#2D2D2D]">{profile.seasonal_events}</p>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
               <img 
                src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000'}
                alt="Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-8 border-[#C5A059] hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}