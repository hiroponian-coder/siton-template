import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-[#4A3A31]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF6F0]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-[#E8D5B5]/90 text-[#D35400] text-sm font-bold tracking-wider mb-6 shadow-sm border border-[#D35400]/20">
          BAKERY & CAFE
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FAF6F0] mb-6 drop-shadow-md leading-tight">
          毎朝の食卓に、<br className="md:hidden"/>
          <span className="text-[#E8D5B5]">焼きたての幸せ</span>を。
        </h1>
        <p className="text-lg sm:text-xl text-[#FAF6F0]/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
          厳選された小麦と自家製酵母を使用し、職人がひとつひとつ心を込めて焼き上げます。心温まるパンの香りに包まれる時間をお楽しみください。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/products" 
            className="group flex items-center justify-center gap-2 bg-[#D35400] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D35400]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#D35400]/30"
          >
            メニューを見る
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/about" 
            className="flex items-center justify-center bg-[#FAF6F0] text-[#4A3A31] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8D5B5] hover:scale-105 transition-all duration-300 shadow-lg"
          >
            店舗情報
          </Link>
        </div>
      </div>
    </section>
  );
}
