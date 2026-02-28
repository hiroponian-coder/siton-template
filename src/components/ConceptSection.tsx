import { Sparkles } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function ConceptSection({ profile }: { profile: Profile }) {
  if (!profile.store_strengths && !profile.design_atmosphere) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#B38B6D]/10 text-[#B38B6D] text-sm font-semibold tracking-wider">
              <Sparkles className="w-4 h-4 mr-2" />
              OUR CONCEPT
            </div>
            <h2 className="text-4xl font-bold text-[#1A1A1A] leading-tight">
              {profile.design_atmosphere === 'modern' ? 'モダンとクラシックが融合する、唯一無二の場所。' : '特別な時間を演出する、こだわりの空間。'}
            </h2>
            <p className="text-lg text-[#2D2D2D] leading-relaxed">
              {profile.store_strengths || '厳選された最高級の豆を使用し、バリスタが一滴一滴丁寧に抽出。私たちは単なるカフェではなく、日常に彩りと安らぎを与えるサードプレイスを目指しています。'}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-[#B38B6D] font-bold text-3xl mb-1">100%</h4>
                <p className="text-sm text-gray-500">Organic Beans</p>
              </div>
              <div>
                <h4 className="text-[#B38B6D] font-bold text-3xl mb-1">No.1</h4>
                <p className="text-sm text-gray-500">Local Favorite</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=2000"
              alt="Interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-[#1A1A1A] p-8 rounded-xl hidden md:block">
              <p className="text-white font-serif italic text-xl">"A moment of peace in a busy world."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}