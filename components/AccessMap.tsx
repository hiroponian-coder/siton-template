import { MapPin, Phone, Clock, Train } from 'lucide-react';

export default function AccessMap() {
  return (
    <section className="py-20 bg-[#E8D5B5]/20 border-t border-[#E8D5B5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          
          {/* Info Section */}
          <div className="lg:w-1/3 p-10 lg:p-12 bg-[#4A3A31] text-[#FAF6F0]">
            <h2 className="text-3xl font-bold mb-8 text-white">店舗情報</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#D35400] p-3 rounded-full shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[#E8D5B5] font-bold mb-1">住所</h3>
                  <p className="leading-relaxed text-white/90">
                    〒100-0001<br />
                    東京都千代田区千代田1-1-1<br />
                    パン屋ビル 1F
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D35400] p-3 rounded-full shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[#E8D5B5] font-bold mb-1">電話番号</h3>
                  <p className="text-white/90">03-0000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D35400] p-3 rounded-full shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[#E8D5B5] font-bold mb-1">営業時間</h3>
                  <p className="text-white/90">
                    8:00 - 18:00<br />
                    <span className="text-sm opacity-80 mt-1 block">※パンがなくなり次第終了</span>
                  </p>
                  <p className="mt-2 text-[#D35400] bg-white/10 inline-block px-2 py-1 rounded text-sm font-bold">
                    定休日: 月曜日
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D35400] p-3 rounded-full shrink-0">
                  <Train size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[#E8D5B5] font-bold mb-1">アクセス</h3>
                  <p className="text-white/90">
                    〇〇駅 東口より徒歩5分
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section (Mock) */}
          <div className="lg:w-2/3 min-h-[400px] relative bg-[#E8D5B5]/40">
            {/* Embedded Google Map (using placeholder iframe for design purposes) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7645498762955!3d35.68123617258705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
