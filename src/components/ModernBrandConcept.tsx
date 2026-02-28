import { Profile } from '@/types/profile';

export default function ModernBrandConcept({ profile }: { profile: Profile }) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-block border-b-2 border-[#A67C52] pb-2">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A67C52]">Our Concept</span>
            </div>
            <h2 className="font-serif text-3xl font-bold leading-snug text-[#2D2D2D] md:text-5xl">
              日常を彩る、<br />特別な一杯の贅沢。
            </h2>
            <p className="max-w-lg leading-relaxed text-[#1A1A1A]/70">
              {profile.store_strengths || "厳選されたコーヒー豆と、洗練されたモダンな空間。私たちが提供するのは、単なる飲み物ではなく、あなたの心に静寂をもたらすひとときです。"}
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1507133750040-4a8f570045af?auto=format&fit=crop&q=80&w=1000'}
              alt="Brand visual"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}