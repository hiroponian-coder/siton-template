import { Profile } from '@/types';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer({ profile }: { profile: Profile }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3E2723] text-white pt-16 pb-8 px-4 border-t-8 border-[#FDCB6E]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-black text-[#FF6B81] mb-4">
            {profile.store_name || 'Cafe Sighton'}
          </h2>
          {profile.store_strengths && (
            <p className="text-white/80 font-medium leading-relaxed">
              {profile.store_strengths}
            </p>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#FDCB6E] mb-4">Information</h3>
          <ul className="space-y-2 text-white/80 font-medium">
            {profile.address && <li>{profile.address}</li>}
            {profile.business_hours && <li>{profile.business_hours}</li>}
            {profile.contact_method && <li>{profile.contact_method}</li>}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-bold text-[#FDCB6E] mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-[#FF6B81] transition-colors">
                <Instagram size={24} />
              </a>
            )}
            {profile.x_id && (
              <a href={`https://x.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-[#FF6B81] transition-colors">
                <Twitter size={24} />
              </a>
            )}
            {profile.line_id && (
              <a href={`https://line.me/R/ti/p/${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-[#FF6B81] transition-colors">
                <MessageCircle size={24} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/50 font-medium pt-8 border-t border-white/10">
        &copy; {currentYear} {profile.store_name || 'Cafe Sighton'}. All rights reserved.
      </div>
    </footer>
  );
}