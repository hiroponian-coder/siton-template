import { Profile } from '@/types/profile';
import { ChevronRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Hero({ profile }: { profile: Profile }) {
  const mainImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 opacity-40">
        <img
          src={mainImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="max-w-2xl">
          <p className="text-[#d4a373] font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in">
            {profile.industry || 'Specialty Coffee'}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            {profile.store_name}<br />
            <span className="text-[#d4a373]">Modern Moment.</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            {profile.store_strengths || '静寂と創造性が交差する、都会の隠れ家。洗練された空間で、究極の一杯をお愉しみください。'}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="bg-[#d4a373] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#c29262] transition-all transform hover:-translate-y-1"
            >
              View Menu <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all transform hover:-translate-y-1"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}