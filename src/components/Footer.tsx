import { Profile } from '@/types/profile';
import Link from 'next/link';
import { Instagram, Twitter, MessageCircle, Link as LinkIcon } from 'lucide-react';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              {profile.store_name || 'Cafe Sighton 19'}
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              洗練された空間と、厳選されたコーヒー。都会の静寂をデザインする場所、カフェサイトン19。
            </p>
            <div className="flex space-x-6">
              {profile.instagram_id && (
                <Link href={`https://instagram.com/${profile.instagram_id}`} className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </Link>
              )}
              {profile.x_id && (
                <Link href={`https://twitter.com/${profile.x_id}`} className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </Link>
              )}
              {profile.line_id && (
                <Link href={`https://line.me/ti/p/${profile.line_id}`} className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </Link>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#C4A484] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white">Menu</Link></li>
              <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#C4A484] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {profile.address && <li>{profile.address}</li>}
              {profile.business_hours && <li>{profile.business_hours}</li>}
              {profile.contact_method && <li>{profile.contact_method}</li>}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {profile.store_name}. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}