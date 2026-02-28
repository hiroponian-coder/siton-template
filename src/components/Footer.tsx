import { Instagram, Twitter, MessageCircle, MapPin, Clock, Phone } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">{profile.store_name}</h3>
            <p className="text-gray-500 leading-relaxed">
              {profile.industry || 'Cafe'} | Modern Atmosphere
            </p>
            <div className="flex space-x-4">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#B38B6D] hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {profile.x_id && (
                <a href={`https://twitter.com/${profile.x_id}`} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#B38B6D] hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[#1A1A1A]">Information</h4>
            <ul className="space-y-3">
              {profile.address && (
                <li className="flex items-start text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-[#B38B6D] shrink-0" />
                  <span>{profile.address}</span>
                </li>
              )}
              {profile.business_hours && (
                <li className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-[#B38B6D] shrink-0" />
                  <span>{profile.business_hours}</span>
                </li>
              )}
              {profile.contact_method && (
                <li className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-[#B38B6D] shrink-0" />
                  <span>{profile.contact_method}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[#1A1A1A]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-[#B38B6D]">Home</a></li>
              <li><a href="/menu" className="hover:text-[#B38B6D]">Menu</a></li>
              <li><a href="/about" className="hover:text-[#B38B6D]">About & Access</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[#1A1A1A]">Newsletter</h4>
            <p className="text-sm text-gray-600">イベントや新メニューのお知らせを受け取る</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="flex-1 bg-gray-50 border border-gray-200 px-4 py-2 text-sm rounded-l-md outline-none" />
              <button className="bg-[#1A1A1A] text-white px-4 py-2 text-sm rounded-r-md">Join</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}