import { Profile } from '@/types/profile';
import { Coffee, MapPin, Star, Users } from 'lucide-react';

export default function Features({ profile }: { profile: Profile }) {
  const strengths = profile.store_strengths ? profile.store_strengths.split('\n') : ['こだわり抜いた豆', '落ち着くモダン空間', '至福の自家製スイーツ'];

  const icons = [<Coffee key="1" className="h-8 w-8" />, <Star key="2" className="h-8 w-8" />, <Users key="3" className="h-8 w-8" />];

  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-[#e17055]">FEATURES</h2>
          <h3 className="text-3xl font-bold text-[#2d3436] md:text-4xl">当店のこだわり</h3>
        </div>
        
        <div className="grid gap-12 md:grid-cols-3">
          {strengths.map((strength, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#e17055] shadow-xl shadow-[#2d3436]/5">
                {icons[i % icons.length]}
              </div>
              <h4 className="mb-4 text-xl font-bold text-[#2d3436]">{strength}</h4>
              <p className="text-sm leading-relaxed text-gray-500">
                お客様の日常に寄り添う一杯のために、細部までこだわり抜いたサービスを提供いたします。
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}