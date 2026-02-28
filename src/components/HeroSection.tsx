import { Image as ImageIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Image from 'next/image';

export default function HeroSection({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageIcon
          src={heroImage}
          alt={profile.store_name || 'Cafe Interior'}
          fill
          className="object-cover"
          priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <h1 className="text-5xl md:text-8xl font-light mb-6 tracking-tight animate-fade-in">
          {profile.store_name}
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl text-gray-200 mb-10 leading-relaxed">
          都会の喧騒を離れ、洗練された静寂の中で至高の一杯を。
          モダンな空間が、あなたの感性を呼び覚まします。
        </p>
        <div className="flex gap-4">
          <button className="bg-[#C4A484] hover:bg-[#B39374] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all">
            View Menu
          </button>
          <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 text-sm tracking-widest uppercase transition-all">
            Visit Us
          </button>
        </div>
      </div>
    </section>
  );
}