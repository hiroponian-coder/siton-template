import { Profile } from '@/types/profile';
import { Instagram, MapPin } from 'lucide-react';

export default function CTA({ profile }: { profile: Profile }) {
  return (
    <section className="py-20 bg-[#c5a059]">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {profile.target_actions || '心地よい時間を、ここで。'}
        </h2>
        <p className="text-lg mb-10 opacity-90">
          最新情報はSNSでも発信しています。皆様のご来店を心よりお待ちしております。
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {profile.instagram_id && (
            <a 
              href={`https://instagram.com/${profile.instagram_id}`} 
              className="flex items-center gap-2 bg-white text-[#c5a059] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              <Instagram size={20} />
              Instagram
            </a>
          )}
          <a 
            href="/access" 
            className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
          >
            <MapPin size={20} />
            Access Map
          </a>
        </div>
      </div>
    </section>
  );
}