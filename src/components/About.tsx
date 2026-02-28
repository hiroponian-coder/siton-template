import { Profile } from '@/types/profile';

export default function About({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000'} 
                className="w-full h-full object-cover" 
                alt="About us"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#c5a059] p-8 hidden md:block rounded-2xl">
               <p className="text-white font-bold text-xl leading-snug">
                 Authentic Coffee Experience
               </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-[#c5a059] font-semibold tracking-wider">ABOUT US</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">心が整う、モダンな隠れ家</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {profile.store_strengths || 'カフェサイトン１８は、都会の喧騒から離れた静謐な空間を提供します。厳選された豆を使用したスペシャルティコーヒーと、素材にこだわったスイーツで、あなたの大切な時間を彩ります。'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              {profile.seats_count && (
                <div>
                  <p className="text-sm text-gray-400 mb-1">SEATS</p>
                  <p className="text-2xl font-bold">{profile.seats_count}</p>
                </div>
              )}
              {profile.business_hours && (
                <div>
                  <p className="text-sm text-gray-400 mb-1">OPEN HOURS</p>
                  <p className="text-lg font-bold">{profile.business_hours.split('\n')[0]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}