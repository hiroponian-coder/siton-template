import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CompanyOverview() {
  const features = [
    "地域密着型の豊富な情報網",
    "経験豊富なプロのスタッフ",
    "安心のアフターサポート",
    "透明性の高い料金体系"
  ];

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Our Office"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-[#FFFFFF]">
                <p className="text-2xl font-bold mb-2">アイビス不動産</p>
                <p className="text-gray-200">確かな実績と信頼で、あなたの住まい探しをサポートします。</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
              私たちについて
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              アイビス不動産は、お客様にとって「最高の住まい」を見つけるための強力なパートナーです。単なる物件紹介にとどまらず、将来のライフプランまで見据えた最適なご提案をお約束します。
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#3B82F6] flex-shrink-0" />
                  <span className="text-lg text-[#1F2937] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1D4ED8] font-bold text-lg hover:text-[#3B82F6] transition-colors group"
            >
              会社概要を詳しく見る
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
