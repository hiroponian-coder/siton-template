import { Profile } from '@/types/profile';
import { Leaf, Heart, Coffee } from 'lucide-react';

export default function ConceptSection({ profile }: { profile: Profile }) {
  if (!profile.store_strengths && !profile.design_atmosphere) return null;

  return (
    <section className="py-24 px-4 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Coffee className="w-8 h-8 text-[#D47A55]" />
        </div>
        <h2 className="text-3xl font-bold mb-12 text-[#4A332D]">Concept</h2>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#4A332D]/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D47A55] to-[#4A332D]" />
          
          {profile.design_atmosphere && (
            <div className="mb-10">
              <h3 className="flex items-center justify-center gap-2 text-xl font-semibold text-[#4A332D] mb-4">
                <Heart className="w-5 h-5 text-[#D47A55]" />
                空間について
              </h3>
              <p className="text-[#2C1E16]/80 leading-relaxed whitespace-pre-wrap">
                {profile.design_atmosphere}
              </p>
            </div>
          )}
          
          {profile.store_strengths && (
            <div>
              <h3 className="flex items-center justify-center gap-2 text-xl font-semibold text-[#4A332D] mb-4">
                <Leaf className="w-5 h-5 text-[#D47A55]" />
                こだわり
              </h3>
              <p className="text-[#2C1E16]/80 leading-relaxed whitespace-pre-wrap">
                {profile.store_strengths}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}