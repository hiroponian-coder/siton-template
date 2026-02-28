import { ArrowRight, Clock } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function HeroSection({ profile }: { profile: Profile }) {
  const bgImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop';

  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage}
          alt="Main visual"
          className="w-full h-full object-cover brightness-[0.7]"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          {profile.business_hours && (
            <div className="inline-flex items-center space-x-2 bg-[#00CDB8] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Clock size={16} />
              <span>{profile.business_hours}</span>
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {profile.store_name || 'Cafe Saiton 24'}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
            {profile.store_strengths || '都会の喧騒を忘れさせる、24時間オープンの洗練されたカフェ空間。最高の一杯と快適な時間を提供します。'}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#00CDB8] hover:bg-[#00B4A2] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:translate-y-[-2px]">
              {profile.target_actions || 'ご来店をお待ちしております'} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}