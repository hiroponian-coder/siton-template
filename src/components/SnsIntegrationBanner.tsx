import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function SnsIntegrationBanner({ profile }: { profile: Profile }) {
  if (!profile.instagram_id && !profile.x_id && !profile.line_id) return null;

  return (
    <section className="py-12 border-y border-[#262626]/10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="text-sm font-bold text-[#262626]/60 mb-6 tracking-widest uppercase">Follow our moments</p>
        <div className="flex flex-wrap justify-center gap-8">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl font-medium hover:text-[#B45309] transition-colors">
              <Instagram /> @{profile.instagram_id}
            </a>
          )}
          {profile.x_id && (
            <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl font-medium hover:text-[#B45309] transition-colors">
              <Twitter /> @{profile.x_id}
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/R/ti/p/${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl font-medium hover:text-[#B45309] transition-colors">
              <MessageCircle /> LINE Official
            </a>
          )}
        </div>
      </div>
    </section>
  );
}