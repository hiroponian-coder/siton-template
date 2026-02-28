import { Profile } from '@/types/profile';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt={profile.store_name || 'Cafe'} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A1A1A]/40" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {profile.store_name}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          {profile.store_strengths || '都会の喧騒を忘れさせる洗練された空間で、至高の一杯を。'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/menu" className="px-8 py-3 bg-[#D4A373] text-white rounded-full font-medium hover:bg-[#c39262] transition-colors flex items-center gap-2">
            View Menu <ArrowRight size={18} />
          </Link>
          <Link href="/access" className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-colors">
            Visit Us
          </Link>
        </div>
      </div>
    </section>
  );
}