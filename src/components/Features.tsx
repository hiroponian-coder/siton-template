import { Profile } from '@/types/profile';
import { Sparkles, Leaf, CupSoda } from 'lucide-react';

export default function Features({ profile }: { profile: Profile }) {
  const strengths = profile.store_strengths?.split(',') || [];
  const icons = [<Sparkles key="s" />, <Leaf key="l" />, <CupSoda key="c" />];

  return (
    <section className="py-20 bg-[#2D2424] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {strengths.map((strength, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center text-[#C5A059]">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-xl font-medium tracking-wide uppercase">Feature {index + 1}</h3>
              <p className="text-white/70 font-light leading-relaxed">
                {strength.trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}