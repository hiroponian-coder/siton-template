import { Award, Feather, Coffee } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function ConceptSection({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={profile.image_urls && profile.image_urls[1] ? profile.image_urls[1] : "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1947"}
                alt="Concept" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#C9A050] p-12 hidden lg:block rounded-xl">
              <Coffee className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-[#C9A050] tracking-[0.2em] uppercase mb-4">Our Concept</h2>
            <h3 className="text-4xl font-bold text-[#1B2E35] mb-8 leading-tight">
              {profile.store_strengths}
            </h3>
            <p className="text-gray-600 leading-loose mb-8">
               都市の喧騒を離れ、静寂と美しさが共鳴する空間。私たちは単なるカフェではなく、お客様の五感を刺激し、心を整える特別な場所を提供します。
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-[#1B2E35]/5 flex items-center justify-center rounded-lg">
                  <Award className="w-6 h-6 text-[#1B2E35]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2E35]">厳選された素材</h4>
                  <p className="text-sm text-gray-500">世界中から選りすぐった豆を独自のプロファイルで焙煎。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-[#1B2E35]/5 flex items-center justify-center rounded-lg">
                  <Feather className="w-6 h-6 text-[#1B2E35]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2E35]">洗練された空間</h4>
                  <p className="text-sm text-gray-500">ミニマリズムに基づいたモダンなインテリアと落ち着いた照明。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}