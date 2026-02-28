import { Profile } from '@/types/profile';

export default function Introduction({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <span className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase mb-4 block animate-in fade-in">
          Our Concept
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12">
          日常の中に、ひとさじの余白を。
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <p className="text-[#2D2D2D] leading-relaxed opacity-80">
              {profile.store_strengths || "カフェサイトン２１は、現代を忙しく生きる人々のための隠れ家です。厳選された豆を使用したこだわりのコーヒーと、モダンで洗練されたインテリアが、あなたに心地よい静寂をもたらします。"}
            </p>
            {profile.target_age && (
              <p className="text-sm italic text-[#C5A059]">
                Suitable for: {profile.target_age}
              </p>
            )}
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-sm group">
             <img 
              src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'}
              alt="Shop Interior"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}