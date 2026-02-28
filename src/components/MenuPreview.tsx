import { Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function MenuPreview({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split('\n').slice(0, 4);

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-end justify-between border-b border-gray-100 pb-10 md:flex-row">
          <div className="mb-6 md:mb-0">
            <h2 className="mb-2 text-sm font-bold tracking-[0.3em] text-[#e17055]">MENU</h2>
            <h3 className="text-3xl font-bold text-[#2d3436] md:text-4xl">おすすめメニュー</h3>
          </div>
          <Link href="/menu" className="text-sm font-bold tracking-widest text-[#2d3436] underline decoration-[#e17055] decoration-2 underline-offset-8 transition-opacity hover:opacity-70">
            VIEW ALL MENU
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between border-b border-dashed border-gray-200 py-6">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#2d3436]">{item.split(',')[0]}</span>
                <span className="text-sm text-gray-400">Original Blend</span>
              </div>
              <span className="text-lg font-medium text-[#e17055]">{item.split(',')[1] || '¥---'}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}