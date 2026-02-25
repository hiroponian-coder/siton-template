import { Profile } from '@/types';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F5]/90 backdrop-blur-md border-b-4 border-[#FF6B81]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-[#FF6B81]">
          {profile.store_name || 'Cafe Sighton'}
        </div>
        
        <div className="flex items-center gap-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#FF6B81] text-white hover:bg-[#FDCB6E] transition-colors shadow-sm">
              <Instagram size={20} />
            </a>
          )}
          {profile.x_id && (
            <a href={`https://x.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#FF6B81] text-white hover:bg-[#FDCB6E] transition-colors shadow-sm">
              <Twitter size={20} />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/R/ti/p/${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#FF6B81] text-white hover:bg-[#FDCB6E] transition-colors shadow-sm">
              <MessageCircle size={20} />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}