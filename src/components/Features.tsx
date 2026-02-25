import { Profile } from '@/types';
import { Heart, Sparkles, Coffee, CakeSlice } from 'lucide-react';

export default function Features({ profile }: { profile: Profile }) {
  if (!profile.store_strengths && !profile.design_atmosphere) return null;

  return (
    <section className="py-20 px-4 bg-[#FFF9F5]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#FF6B81] mb-4 inline-block relative">
            Our Concept
            <span className="absolute -top-4 -right-8 text-[#FDCB6E]">
              <Sparkles size={32} />
            </span>
          </h2>
          <div className="w-24 h-2 bg-[#FDCB6E] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border-4 border-[#FF6B81] relative">
            <div className="absolute -top-6 -left-6 bg-[#FDCB6E] p-4 rounded-full text-white shadow-lg rotate-[-10deg]">
              <Heart size={32} />
            </div>
            {profile.store_strengths && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#FF6B81] mb-2 flex items-center gap-2">
                  <CakeSlice className="inline" size={24}/> お店のこだわり
                </h3>
                <p className="text-[#3E2723] leading-relaxed text-lg font-medium">
                  {profile.store_strengths}
                </p>
              </div>
            )}
            {profile.design_atmosphere && (
              <div>
                <h3 className="text-xl font-bold text-[#FF6B81] mb-2 flex items-center gap-2">
                  <Coffee className="inline" size={24}/> 雰囲気
                </h3>
                <p className="text-[#3E2723] leading-relaxed text-lg font-medium">
                  {profile.design_atmosphere}な空間で、特別な時間をお過ごしください。
                </p>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {profile.image_urls && profile.image_urls.length > 1 ? (
              profile.image_urls.slice(1, 5).map((url, idx) => (
                <div key={idx} className={`rounded-3xl overflow-hidden shadow-lg border-4 border-[#FDCB6E] aspect-square ${idx % 2 === 0 ? 'mt-8' : '-mt-8'}`}>
                  <img src={url} alt="Cafe Photo" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
                </div>
              ))
            ) : (
              <>
                <div className="rounded-3xl shadow-lg border-4 border-[#FDCB6E] aspect-square mt-8 bg-[#FF6B81] flex items-center justify-center text-white">
                  <CakeSlice size={48} />
                </div>
                <div className="rounded-3xl shadow-lg border-4 border-[#FF6B81] aspect-square -mt-8 bg-[#FDCB6E] flex items-center justify-center text-white">
                  <Coffee size={48} />
                </div>
                <div className="rounded-3xl shadow-lg border-4 border-[#FF6B81] aspect-square mt-8 bg-[#FDCB6E] flex items-center justify-center text-white">
                  <Heart size={48} />
                </div>
                <div className="rounded-3xl shadow-lg border-4 border-[#FDCB6E] aspect-square -mt-8 bg-[#FF6B81] flex items-center justify-center text-white">
                  <Sparkles size={48} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}