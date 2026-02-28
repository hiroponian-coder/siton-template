import { Profile } from '@/types/profile';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = (profile.image_urls && profile.image_urls.length > 0) 
    ? profile.image_urls[0] 
    : 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070';

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight animate-fade-in-up">
          {profile.store_name}
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          洗練された空間、厳選された素材。{profile.store_strengths || '日常にささやかな贅沢を。'}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/reservation" className="px-10 py-4 bg-[#C5A059] hover:bg-[#B38F4D] text-white font-bold transition-all rounded-sm">
            VIEW MENU
          </a>
          <a href="#access" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white hover:bg-white hover:text-[#1A1A1A] text-white font-bold transition-all rounded-sm">
            ACCESS
          </a>
        </div>
      </div>
    </section>
  );
}