import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  // In a real implementation, this would fetch from Supabase.
  // For now, we simulate the structure based on the prompt requirements.
  // Replace this with your actual Supabase client logic.
  const mockProfile: Profile = {
    id: siteId,
    store_name: "カフェサイトン15",
    industry: "カフェ",
    design_atmosphere: "modern",
    address: "東京都渋谷区神宮前 1-2-3 サイトンビル 1F",
    business_hours: "10:00 - 20:00 (L.O. 19:30)",
    menu_items: "自家焙煎コーヒー, 季節のフルーツタルト, 自家製スコーン, クラフトコーラ",
    store_strengths: "熟練のバリスタによる抽出, 厳選されたスペシャリティコーヒー豆, 都会の喧騒を忘れる静寂な空間",
    instagram_id: "cafe_saiton15",
    image_urls: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1600"]
  };
  
  return mockProfile;
}