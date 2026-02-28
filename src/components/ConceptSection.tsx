import { Coffee, Clock, Heart } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function ConceptSection({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-[#D97706] text-[#D97706] text-xs font-bold rounded-full">
              OUR CONCEPT
            </div>
            <h2 className="text-4xl font-bold text-[#334155] leading-snug">
              「{profile.store_name}」が提案する<br />心地よい日常の切り取り方
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {profile.store_strengths}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F8FAFC] flex items-center justify-center rounded-xl text-[#D97706]">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Specialty Coffee</h4>
                  <p className="text-sm text-slate-500">選び抜かれた豆の香り</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F8FAFC] flex items-center justify-center rounded-xl text-[#D97706]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold">22 Minutes Relax</h4>
                  <p className="text-sm text-slate-500">丁度良い、極上の時間</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100">
            <img 
              src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80'}
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}