import { Heart, Leaf, Wheat } from 'lucide-react';

export default function AboutDetails() {
  const features = [
    {
      icon: <Wheat size={32} />,
      title: 'こだわりの小麦',
      description: '北海道産を中心とした国産小麦を100%使用。パンの種類に合わせて数種類の小麦を独自にブレンドし、最適な風味と食感を引き出しています。'
    },
    {
      icon: <Leaf size={32} />,
      title: '自家製天然酵母',
      description: '果物や穀物から起こした自家製酵母を使用。ゆっくりと時間をかけて発酵させることで、奥深い味わいと豊かな香りを持つパンに仕上がります。'
    },
    {
      icon: <Heart size={32} />,
      title: '体に優しい素材',
      description: '保存料や不要な添加物は一切使用していません。バター、塩、砂糖などの副材料も、厳選した自然由来のものだけを使用しています。'
    }
  ];

  return (
    <section className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold text-[#4A3A31] mb-8">私たちのストーリー</h2>
          <div className="text-[#4A3A31]/80 leading-loose space-y-6 text-lg">
            <p>
              「GitHub Push Test」は、小さな街角から始まりました。<br/>
              本当に美味しいパンを、毎日安心して食べてほしい。そんなシンプルな想いが、私たちの出発点です。
            </p>
            <p>
              気温や湿度によって毎日表情を変える生地と対話しながら、<br/>
              一つ一つの工程を丁寧に、真心を込めて焼き上げています。
            </p>
            <p>
              私たちのパンが、あなたの日常に小さな喜びと温もりをもたらすことができますように。
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-[#E8D5B5]/40 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#E8D5B5]/30 rounded-full flex items-center justify-center text-[#D35400] mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#4A3A31] mb-4">{feature.title}</h3>
              <p className="text-[#4A3A31]/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
