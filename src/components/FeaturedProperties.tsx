import Link from "next/link";
import { MapPin, Home, BedDouble, Bath } from "lucide-react";

const featuredProperties = [
  {
    id: 1,
    title: "ル・レジデンス青山",
    price: "185,000円/月",
    location: "東京都港区南青山",
    specs: "1LDK / 45㎡",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    tags: ["新築", "駅徒歩5分"]
  },
  {
    id: 2,
    title: "スカイビュータワー新宿",
    price: "85,000,000円",
    location: "東京都新宿区西新宿",
    specs: "3LDK / 82㎡",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    tags: ["売買", "高層階"]
  },
  {
    id: 3,
    title: "グリーンテラス世田谷",
    price: "145,000円/月",
    location: "東京都世田谷区",
    specs: "2LDK / 60㎡",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
    tags: ["ペット可", "駐車場あり"]
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">おすすめ物件</h2>
          <p className="text-[#3B82F6] font-medium">アイビス不動産が厳選した最新の物件情報</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.tags.map(tag => (
                    <span key={tag} className="bg-[#1D4ED8]/90 text-[#FFFFFF] text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">{property.title}</h3>
                <p className="text-2xl font-extrabold text-[#1D4ED8] mb-4">{property.price}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-[#3B82F6]" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Home className="h-4 w-4 text-[#3B82F6]" />
                      <span>{property.specs}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-[#3B82F6]" />
                      <span>ベッドルーム</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-[#3B82F6]" />
                      <span>バスルーム</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gray-50 hover:bg-[#1D4ED8] text-[#1F2937] hover:text-[#FFFFFF] border border-gray-200 hover:border-[#1D4ED8] py-3 rounded-xl font-bold transition-colors duration-300">
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/properties" className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-[#FFFFFF] rounded-full font-bold transition-colors">
            すべての物件を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
