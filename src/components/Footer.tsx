import React from 'react';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';
import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{profile.store_name}</h3>
            <p className="text-gray-400">{profile.address}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#8B5CF6]">Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              {profile.menu_items && <li><a href="/menu" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>}
              <li><a href="/access" className="text-gray-400 hover:text-white transition-colors">Access</a></li>
            </ul>
          </div>
          <div className="flex space-x-4">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#8B5CF6] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {profile.x_id && (
              <a href={`https://x.com/${profile.x_id}`} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#8B5CF6] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {profile.line_id && (
              <a href={`https://line.me/ti/p/${profile.line_id}`} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#8B5CF6] transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}