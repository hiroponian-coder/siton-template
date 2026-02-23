import { MapPin, Navigation } from "lucide-react";

export default function AccessMap() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-[#1F2937] border-b-4 border-[#1D4ED8] pb-4 inline-block">
          アクセス
        </h2>
      </div>
      
      <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-[#1D4ED8] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-[#1F2937] mb-1">本社</p>
                <p className="text-gray-600">〒100-0005</p>
                <p className="text-gray-600">東京都千代田区丸の内1-1-1 アイビスビル 15F</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Navigation className="h-6 w-6 text-[#1D4ED8] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-[#1F2937] mb-1">最寄り駅</p>
                <p className="text-gray-600">JR山手線「東京駅」丸の内北口より徒歩3分</p>
                <p className="text-gray-600">東京メトロ丸ノ内線「東京駅」より徒歩1分</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76454981525882!3d35.68123618019432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f7001%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1680000000000!5m2!1sen!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}
