import { Instagram, Twitter, MessageCircle } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-3xl font-bold mb-8 md:mb-0">
            {profile.store_name}
          </div>
          <div className="flex space-x-6">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-[#B45309] transition-colors">
                <Instagram size={24} />
              </a>
            )}
            {profile.x_id && (
              <a href={`https://twitter.com/${profile.x_id}`} className="hover:text-[#B45309] transition-colors">
                <Twitter size={24} />
              </a>
            )}
            {profile.line_id && (
              <a href={`https://line.me/ti/p/${profile.line_id}`} className="hover:text-[#B45309] transition-colors">
                <MessageCircle size={24} />
              </a>
            )}
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {profile.store_name}. All rights reserved.</p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" className="hover:text-white">HOME</a>
            <a href="/menu" className="hover:text-white">MENU</a>
            <a href="/access" className="hover:text-white">ACCESS</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}