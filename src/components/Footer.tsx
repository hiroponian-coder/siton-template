import { Instagram, Twitter, MessageCircle } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8">{profile.store_name}</h2>
          <div className="flex space-x-6">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-[#C5A059] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            )}
            {profile.x_id && (
              <a href={`https://twitter.com/${profile.x_id}`} className="hover:text-[#C5A059] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            )}
            {profile.line_id && (
              <a href={`https://line.me/R/ti/p/@${profile.line_id}`} className="hover:text-[#C5A059] transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {profile.store_name}. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}