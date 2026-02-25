import { Profile } from '@/types/profile';
import { ArrowDown } from 'lucide-react';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-6">
        <h2 className="text-sm tracking-[0.4em] mb-6 animate-fade-in">WELCOME TO OUR SPACE</h2>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 text-center leading-tight">
          {profile.store_name}
        </h1>
        <p className="max-w-2xl text-center text-lg md:text-xl font-light leading-relaxed opacity-90 mb-12">
          {profile.store_strengths || '都会の喧騒を離れた、あなただけのサードプレイスを提供します。'}
        </p>
        <div className="animate-bounce mt-8">
          <ArrowDown size={32} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}