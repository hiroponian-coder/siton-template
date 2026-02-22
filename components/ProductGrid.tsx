import { Star, ShoppingBag } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    category: 'クロワッサン・デニッシュ',
    name: 'プレミアムクロワッサン',
    description: 'フランス産発酵バターをたっぷり使用した、サクサクの食感がたまらない当店一番人気。',
    price: '¥320',
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'ハード系',
    name: 'トラディショナル・バゲット',
    description: '長時間発酵で小麦の旨味を最大限に引き出した、外はカリッと中はもっちりの本格バゲット。',
    price: '¥380',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: '食パン',
    name: '生食パン「極み」',
    description: 'はちみつと生クリームを贅沢に使用。耳まで柔らかく、そのまま食べても美味しい食パン。',
    price: '¥850',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'スイーツパン',
    name: '特製クリームパン',
    description: 'バニラビーンズたっぷりの自家製カスタードクリームを薄皮の生地で包み込みました。',
    price: '¥280',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: '惣菜パン',
    name: '自家製カレーパン',
    description: 'スパイスから調合した本格カレーを、サクサクの生地で包んで揚げました。',
    price: '¥350',
    image: 'https://images.unsplash.com/photo-1623366302587-bcaadd5b512b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'ハード系',
    name: 'カンパーニュ',
    description: 'ライ麦を配合した田舎風パン。チーズやワインとの相性が抜群です。',
    price: '¥600',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    category: 'スイーツパン',
    name: 'シナモンロール',
    description: 'たっぷりのシナモンとブラウンシュガー、上には特製クリームチーズフロスティング。',
    price: '¥340',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    category: 'サンドイッチ',
    name: 'ＢＬＴサンド',
    description: '自家製ベーコン、新鮮なレタスとトマトを、焼きたての食パンでサンドしました。',
    price: '¥550',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export default function ProductGrid() {
  const categories = ['すべて', ...Array.from(new Set(allProducts.map(p => p.category)))];

  return (
    <section className="py-20 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter (Visual only for now) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                idx === 0 
                  ? 'bg-[#D35400] text-white shadow-md' 
                  : 'bg-white text-[#4A3A31] border border-[#E8D5B5] hover:bg-[#E8D5B5]/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8D5B5]/40 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden bg-[#E8D5B5]/20">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#4A3A31]/80 backdrop-blur text-white text-xs px-2 py-1 rounded-md">
                  {product.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow relative">
                <div className="absolute -top-6 right-4 w-12 h-12 bg-[#D35400] text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  <ShoppingBag size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#4A3A31] mb-2 mt-2 group-hover:text-[#D35400] transition-colors line-clamp-1">{product.name}</h3>
                <p className="text-[#4A3A31]/70 text-sm mb-4 flex-grow line-clamp-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#E8D5B5]/30">
                  <span className="text-[#D35400] font-bold text-xl">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
