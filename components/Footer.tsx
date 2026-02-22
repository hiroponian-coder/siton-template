import Link from 'next/link';
import { Croissant, MapPin, Phone, Clock, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4A3A31] text-[#FAF6F0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 text-[#D35400] mb-6">
              <Croissant size={32} />
              <span className="font-bold text-2xl tracking-tight text-[#FAF6F0]">GitHub Push Test</span>
            </Link>
            <p className="text-[#E8D5B5] leading-relaxed mb-6">
              毎日ひとつひとつ丁寧に焼き上げる、こだわりのパン。あなたの日常に、ほんの少しの温もりをお届けします。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#FAF6F0]/10 flex items-center justify-center hover:bg-[#D35400] hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FAF6F0]/10 flex items-center justify-center hover:bg-[#D35400] hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FAF6F0]/10 flex items-center justify-center hover:bg-[#D35400] hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-[#E8D5B5]/30 pb-2 inline-block">クイックリンク</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#E8D5B5] hover:text-[#D35400] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D35400]"></span> ホーム
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#E8D5B5] hover:text-[#D35400] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D35400]"></span> メニュー
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#E8D5B5] hover:text-[#D35400] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D35400]"></span> 店舗情報
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-[#E8D5B5]/30 pb-2 inline-block">店舗情報</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#E8D5B5]">
                <MapPin size={20} className="text-[#D35400] shrink-0 mt-1" />
                <span>〒100-0001<br />東京都千代田区千代田1-1-1<br />パン屋ビル 1F</span>
              </li>
              <li className="flex items-center gap-3 text-[#E8D5B5]">
                <Phone size={20} className="text-[#D35400] shrink-0" />
                <span>03-0000-0000</span>
              </li>
              <li className="flex items-start gap-3 text-[#E8D5B5]">
                <Clock size={20} className="text-[#D35400] shrink-0 mt-1" />
                <span>火〜日: 8:00 - 18:00<br />月曜定休</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#E8D5B5]/20 text-center text-[#E8D5B5]/60 text-sm">
          <p>&copy; {new Date().getFullYear()} GitHub Push Test. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
