import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'プレミアムクロワッサン',
    description: 'フランス産発酵バターをたっぷり使用した、サクサクの食感がたまらない当店一番人気。',
    price: '¥320',
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'トラディショナル・バゲット',
    description: '長時間発酵で小麦の旨味を最大限に引き出した、外はカリッと中はもっちりの本格バゲット。',
    price: '¥380',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4,
  },
  {
    id: 3,
    name: '生食パン「極み」',
    description: 'はちみつと生クリームを贅沢に使用。耳まで柔らかく、そのまま食べても美味しい食パン。',
    price: '¥850',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 5,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A3A31] mb-4">おすすめのパン</h2>
          <div className="w-16 h-1 bg-[#D35400] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4A3A31]/80 max-w-2xl mx-auto">
            店主が自信を持ってお届けする、こだわりの一品たち。まずはこれらをぜひお試しください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8D5B5]/30 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[#D35400] font-bold text-sm shadow-sm">
                  {product.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex text-[#D35400] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < product.rating ? "currentColor" : "none"} className={i < product.rating ? "text-[#D35400]" : "text-[#E8D5B5]"} />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#4A3A31] mb-3 group-hover:text-[#D35400] transition-colors">{product.name}</h3>
                <p className="text-[#4A3A31]/70 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-[#D35400] font-bold hover:text-[#D35400]/80 transition-colors border-b-2 border-[#D35400]/30 hover:border-[#D35400] pb-1"
          >
            すべてのメニューを見る
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
