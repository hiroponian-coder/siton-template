import { Profile } from '@/types/profile';
import { Coffee } from 'lucide-react';

export default function Introduction({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Coffee className="mx-auto mb-8 text-[#C5A059]" size={40} />
        <h2 className="text-3xl font-light mb-8 text-[#2D2424]">PHILOSOPHY</h2>
        <p className="text-lg leading-loose text-[#333333]/80">
          {profile.store_name}は、ただコーヒーを提供する場所ではありません。<br />
          私たちが提供するのは「静寂」と「五感の刺激」が共生する、新しい都市のサードプレイスです。<br />
          厳選された豆と、洗練された空間設計が織りなす究極の調和をお楽しみください。
        </p>
      </div>
    </section>
  );
}