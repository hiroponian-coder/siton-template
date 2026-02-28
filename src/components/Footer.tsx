import { Profile } from '@/types/profile';
import { Instagram, Send, Twitter } from 'lucide-react';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{profile.store_name}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              洗練された一杯と、心安らぐ空間を。<br />
              日常の隙間に、贅沢なひとときをご提供します。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">SHOP INFO</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {profile.address && <li>ADDRESS: {profile.address}</li>}
              {profile.business_hours && <li className="whitespace-pre-line">HOURS: {profile.business_hours}</li>}
              {profile.contact_method && <li>CONTACT: {profile.contact_method}</li>}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">FOLLOW US</h3>
            <div className="flex space-x-6">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-[#c5a059] transition-colors"><Instagram /></a>
              )}
              {profile.x_id && (
                <a href={`https://x.com/${profile.x_id}`} className="hover:text-[#c5a059] transition-colors"><Twitter /></a>
              )}
              {profile.line_id && (
                <a href={`https://line.me/ti/p/${profile.line_id}`} className="hover:text-[#c5a059] transition-colors"><Send /></a>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}