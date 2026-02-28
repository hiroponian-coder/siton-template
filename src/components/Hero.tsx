import { Profile } from '@/types/profile';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt={profile.store_name || 'Cafe'} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24 text-white">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            洗練された空間で<br />味わう至福の一杯
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
            都会の喧騒を忘れ、モダンなインテリアに囲まれながら、{profile.store_name}自慢の厳選された豆を使用したコーヒーと季節のスイーツを。 
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <Link href="/menu" className="inline-flex items-center justify-center bg-[#e17055] px-8 py-4 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#d35400]">
              MENU LIST <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center border-2 border-white bg-transparent px-8 py-4 text-sm font-bold tracking-widest text-white transition-all hover:bg-white hover:text-[#2d3436]">
              OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}