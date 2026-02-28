import { Profile } from '@/types/profile';
import Image from 'next/image';

export default function Hero({ profile }: { profile: Profile }) {
  const imageUrl = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#2C3E50]">
      <div className="absolute inset-0 opacity-60">
        <img src={imageUrl} alt="Hero background" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-light text-[#F9F7F2] mb-6 tracking-tight leading-tight">
          {profile.store_name}
        </h1>
        <div className="h-px w-24 bg-[#D4AF37] mx-auto mb-8" />
        <p className="text-lg md:text-xl text-[#F9F7F2]/90 font-light tracking-widest uppercase">
          {profile.industry || 'Exclusive Cafe Experience'}
        </p>
        {profile.store_strengths && (
          <p className="mt-8 text-[#F9F7F2]/80 max-w-2xl mx-auto leading-relaxed italic">
            "{profile.store_strengths}"
          </p>
        )}
      </div>
    </section>
  );
}