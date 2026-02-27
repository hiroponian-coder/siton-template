import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  // In a real application, this would fetch from Supabase.
  // For this demonstration, we return the profile based on the design document.
  return {
    id: siteId,
    store_name: "カフェサイトン13",
    industry: "カフェ",
    design_atmosphere: "modern",
    address: "東京都渋谷区某所",
    business_hours: "10:00 - 20:00 (L.O. 19:30)",
    seats_count: "24席 (カウンター8席, テーブル16席)",
    parking_info: "近隣にコインパーキングあり",
    price_range: "¥1,000 - ¥2,000",
    store_strengths: "スペシャリティコーヒー, 洗練されたモダン空間, 季節のデザート",
    instagram_id: "cafe_seiton13",
    x_id: "cafe_seiton13",
    menu_items: "ドリップコーヒー: 600円\nカフェラテ: 650円\n自家製ティラミス: 700円\n季節のフルーツタルト: 800円",
    image_urls: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200"
    ]
  };
}