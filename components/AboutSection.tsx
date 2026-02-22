import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const points = [
    "厳選された北海道産小麦を100%使用",
    "自家製天然酵母による深い味わい",
    "添加物不使用で体にも優しい",
    "毎日店内で焼き上げる新鮮なパン"
  ];

  return (
    <section className="py-24 bg-[#E8D5B5]/20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8D5B5]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D35400]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#D35400]/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="パン作りの様子" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 -right-6 lg:right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px] border border-[#E8D5B5]/50 transform -translate-x-6 lg:translate-x-0">
                <p className="text-sm text-[#4A3A31]/80 font-medium mb-1">Since 2024</p>
                <p className="text-lg font-bold text-[#D35400]">心を込めて焼き上げる、毎日の小さな幸せ。</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A3A31] mb-6">
              パン作りへの<span className="text-[#D35400]">こだわり</span>
            </h2>
            <p className="text-[#4A3A31]/80 leading-relaxed text-lg mb-8">
              「GitHub Push Test」では、素材本来の味を活かしたパン作りを心がけています。
              手間暇を惜しまず、じっくりと時間をかけて発酵させた生地が、豊かな風味と独特の食感を生み出します。
              毎日食べても飽きない、そんな日常に寄り添うパンを目指しています。
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-[#E8D5B5] rounded-full p-1 text-[#D35400]">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-[#4A3A31] font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#4A3A31] text-[#FAF6F0] rounded-full font-bold hover:bg-[#D35400] transition-colors duration-300 shadow-md"
            >
              店舗情報を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
