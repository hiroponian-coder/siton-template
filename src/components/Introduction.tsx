import { Profile } from '@/types/profile';

export default function Introduction({ profile }: { profile: Profile }) {
  if (!profile.store_strengths && !profile.industry) return null;

  return (
    <section id="intro" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-[#2C3E50]">
              About <span className="text-[#D4A373]">{profile.store_name}</span>
            </h2>
            <p className="text-[#1A1A1A] leading-loose text-lg whitespace-pre-wrap">
              {profile.store_strengths || '私たちは、一杯のコーヒーに魂を込め、心からリラックスできるモダンな空間を提供しています。日常を少しだけ豊かにする特別な体験をお届けします。'}
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] bg-[#2C3E50]/5 overflow-hidden">
               <img 
                src={profile.image_urls && profile.image_urls[1] ? profile.image_urls[1] : 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop'} 
                alt="Interior" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}