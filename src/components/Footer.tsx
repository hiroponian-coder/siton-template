import Link from "next/link";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-[#FFFFFF] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Building2 className="h-8 w-8 text-[#3B82F6]" />
              <span className="text-2xl font-bold tracking-tight">アイビス不動産</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              私たちは、お客様一人ひとりのライフスタイルに寄り添い、「最高の住まい」を見つけるお手伝いをいたします。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">お問い合わせ</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#3B82F6]" />
                <span>東京都千代田区丸の内1-1-1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#3B82F6]" />
                <span>03-1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#3B82F6]" />
                <span>info@ibis-realestate.example.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">リンク</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-[#3B82F6] transition-colors">ホーム</Link></li>
              <li><Link href="/properties" className="hover:text-[#3B82F6] transition-colors">物件情報</Link></li>
              <li><Link href="/about" className="hover:text-[#3B82F6] transition-colors">会社概要</Link></li>
              <li><Link href="/contact" className="hover:text-[#3B82F6] transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ibis Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
