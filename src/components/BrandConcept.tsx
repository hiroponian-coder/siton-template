import { Profile } from '@/types/profile';
import { Coffee, Wind, Leaf } from 'lucide-react';

export default function BrandConcept({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#C4A484] uppercase tracking-[0.3em] text-sm mb-4 block">Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1A1A1A] mb-8 leading-tight">
            コーヒーを通して提供する、<br />極上の「静寂」と「創造性」。
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-[#333333] leading-relaxed">
            <div>
              <p className="mb-6">
                カフェサイトン19では、単なる飲料としてのコーヒーではなく、心を開放し新しいアイデアが生まれるための「時間」を提供することを大切にしています。
              </p>
              {profile.store_strengths && (
                <div className="p-6 bg-[#F9F9F9] border-l-4 border-[#C4A484]">
                  <h4 className="font-bold mb-2">Our Strength</h4>
                  <p className="text-sm">{profile.store_strengths}</p>
                </div>
              )}
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Coffee className="shrink-0 text-[#C4A484]" />
                <div>
                  <h3 className="font-semibold mb-1 uppercase tracking-wider text-sm">Quality Beans</h3>
                  <p className="text-sm text-gray-500">世界各地から厳選された、ストーリーのあるスペシャルティ豆のみを使用しています。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Wind className="shrink-0 text-[#C4A484]" />
                <div>
                  <h3 className="font-semibold mb-1 uppercase tracking-wider text-sm">Modern Space</h3>
                  <p className="text-sm text-gray-500">無駄を削ぎ落としたミニマルなインテリアが、集中力とリラックスを両立させます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}