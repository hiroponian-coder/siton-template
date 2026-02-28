import { ArrowRight, Image as ImageIcon, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80';

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageIcon
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-[#D97706] font-semibold tracking-widest mb-4 animate-fade-in">MODERN & MINIMAL</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {profile.store_name}
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            都会の喧騒を離れ、上質なコーヒーと共に<br />贅沢な22分間の休息をあなたに。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/menu" 
              className="px-8 py-4 bg-[#D97706] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#B45309] transition-all transform hover:scale-105"
            >
              MENU VIEW <ArrowRight size={18} />
            </Link>
            {profile.address && (
              <a 
                href="#access" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-center hover:bg-white/20 transition-all"
              >
                ACCESS
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}