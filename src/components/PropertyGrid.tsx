import { MapPin, Home } from "lucide-react";

const allProperties = [
  { id: 1, title: "ル・レジデンス青山", price: "185,000円/月", location: "東京都港区南青山", specs: "1LDK / 45㎡", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800", tags: ["新築", "駅徒歩5分"] },
  { id: 2, title: "スカイビュータワー新宿", price: "85,000,000円", location: "東京都新宿区西新宿", specs: "3LDK / 82㎡", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", tags: ["売買", "高層階"] },
  { id: 3, title: "グリーンテラス世田谷", price: "145,000円/月", location: "東京都世田谷区", specs: "2LDK / 60㎡", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800", tags: ["ペット可", "駐車場あり"] },
  { id: 4, title: "パークサイド代々木", price: "160,000円/月", location: "東京都渋谷区代々木", specs: "2LDK / 55㎡", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800", tags: ["公園隣接"] },
  { id: 5, title: "リバーサイド品川", price: "65,000,000円", location: "東京都品川区", specs: "2LDK / 70㎡", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800", tags: ["売買", "リノベーション済"] },
  { id: 6, title: "アーバンフラット中目黒", price: "130,000円/月", location: "東京都目黒区上目黒", specs: "1LDK / 40㎡", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", tags: ["デザイナーズ"] },
];

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {allProperties.map((property) => (
        <div key={property.id} className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group flex flex-col">
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
          
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">{property.title}</h3>
            <p className="text-2xl font-extrabold text-[#1D4ED8] mb-4">{property.price}</p>
            
            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4 text-[#3B82F6]" />
                <span className="text-sm">{property.location}</span>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                <div className="flex items-center gap-1.5">
                  <Home className="h-4 w-4 text-[#3B82F6]" />
                  <span>{property.specs}</span>
                </div>
              </div>
            </div>
            
            <button className="mt-auto w-full bg-gray-50 hover:bg-[#1D4ED8] text-[#1F2937] hover:text-[#FFFFFF] border border-gray-200 hover:border-[#1D4ED8] py-3 rounded-xl font-bold transition-colors duration-300">
              詳細を見る
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
