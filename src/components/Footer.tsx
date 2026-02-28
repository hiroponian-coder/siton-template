import { Instagram, Twitter, MessageCircle } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1E293B] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">{profile.store_name}</h3>
            <p className="text-slate-400 leading-relaxed">
              モダンな空間とこだわりの一杯。あなたの日常に寄り添うカフェであり続けます。
            </p>
            <div className="flex space-x-6">
              {profile.instagram_id && <Instagram className="hover:text-[#D97706] cursor-pointer" />}
              {profile.x_id && <Twitter className="hover:text-[#D97706] cursor-pointer" />}
              {profile.line_id && <MessageCircle className="hover:text-[#D97706] cursor-pointer" />}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/menu" className="hover:text-white">Menu</a></li>
              <li><a href="#access" className="hover:text-white">Access</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Info</h4>
            <p className="text-slate-400">{profile.address}</p>
            <p className="text-slate-400">{profile.business_hours}</p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}