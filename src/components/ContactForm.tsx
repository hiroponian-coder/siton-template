"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto bg-[#F9FAFB] rounded-3xl p-12 text-center shadow-sm border border-gray-100">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1D4ED8]/10 mb-6">
          <CheckCircle2 className="h-10 w-10 text-[#1D4ED8]" />
        </div>
        <h2 className="text-3xl font-bold text-[#1F2937] mb-4">お問い合わせ完了</h2>
        <p className="text-gray-600 text-lg mb-8">
          お問い合わせいただきありがとうございます。<br />
          担当者より順次ご連絡させていただきます。
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="bg-[#1F2937] hover:bg-[#1D4ED8] text-[#FFFFFF] px-8 py-3 rounded-full font-bold transition-colors"
        >
          新しいお問い合わせを作成
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-[#FFFFFF] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#1F2937] mb-2">お名前 <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                id="name" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-[#1F2937] mb-2">電話番号</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all"
                placeholder="090-1234-5678"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#1F2937] mb-2">メールアドレス <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              id="email" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all"
              placeholder="taro.yamada@example.com"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-bold text-[#1F2937] mb-2">お問い合わせ種別 <span className="text-red-500">*</span></label>
            <select 
              id="type" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all bg-white"
            >
              <option value="">選択してください</option>
              <option value="buy">物件の購入について</option>
              <option value="rent">物件の賃貸について</option>
              <option value="sell">物件の売却査定</option>
              <option value="visit">来店予約</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-[#1F2937] mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
            <textarea 
              id="message" 
              rows={6} 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all resize-none"
              placeholder="具体的なご希望条件やご質問をご記入ください。"
            ></textarea>
          </div>
          
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#3B82F6] text-[#FFFFFF] px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Send className="h-5 w-5" />
              送信する
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              送信することで、当社のプライバシーポリシーに同意したものとみなされます。
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
