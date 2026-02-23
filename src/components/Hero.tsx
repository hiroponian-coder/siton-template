import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
          alt="Beautiful Modern Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F2937]/50 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFFFFF] mb-6 tracking-tight drop-shadow-lg">
          最高の<span className="text-[#3B82F6]">住まい</span>を見つける
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
          プロフェッショナルな知見と豊富な物件ネットワークで、<br className="hidden md:block"/>あなたの理想のライフスタイルを実現します。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/properties"
            className="group flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#3B82F6] text-[#FFFFFF] px-8 py-4 rounded-full text-lg font-bold transition-all w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <Search className="h-5 w-5" />
            物件を探す
          </Link>
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-gray-50 text-[#1F2937] px-8 py-4 rounded-full text-lg font-bold transition-all w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            ご相談はこちら
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
