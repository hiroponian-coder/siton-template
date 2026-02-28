import { Coffee } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Hero({ profile }: { profile: Profile }) {
  const mainImage = profile.image_urls && profile.image_urls.length > 0 
    ? profile.image_urls[0] 
    : 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop';

  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-[#2C3E50]">
      <div className="absolute inset-0 opacity-60">
        <img src={mainImage} alt={profile.store_name || 'Cafe Hero'} className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 text-center px-6">
        <div className="mb-6 flex justify-center">
          <div className="p-3 bg-[#D4A373] rounded-full">
            <Coffee className="text-white" size={32} />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
          {profile.store_name}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
          {profile.store_strengths || '都市の喧騒を忘れる、洗練されたひとときを。'}
        </p>
        <div className="mt-10">
          <a href="#intro" className="inline-block px-8 py-4 bg-[#D4A373] text-white font-semibold rounded-sm hover:bg-[#c19262] transition-colors tracking-widest">
            DISCOVER MORE
          </a>
        </div>
      </div>
    </section>
  );
}