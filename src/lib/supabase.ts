import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  // In a real implementation, this would fetch from Supabase.
  // For now, we mock the logic. Assume NEXT_PUBLIC_SITE_ID matches.
  // This function is meant to be called in Server Components.
  try {
    const mockData: Profile = {
      id: siteId,
      store_name: "カフェサイトン２１",
      industry: "カフェ",
      design_atmosphere: "modern",
      address: "東京都渋谷区神南1-2-3 サイトンビル 1F",
      business_hours: "10:00 - 20:00 (L.O. 19:30)",
      seats_count: "24席",
      price_range: "¥1,000 - ¥2,000",
      instagram_id: "cafe_saiton21",
      store_strengths: "厳選されたシングルオリジン豆と、都会の喧騒を忘れさせる洗練されたモダン空間。",
      menu_items: JSON.stringify([
        { name: "ハンドドリップコーヒー", price: "¥650", category: "Drink" },
        { name: "水出しアイスコーヒー", price: "¥700", category: "Drink" },
        { name: "自家製ティラミス", price: "¥800", category: "Food" },
        { name: "季節のフルーツタルト", price: "¥850", category: "Food" }
      ]),
      image_urls: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"
      ]
    };
    return mockData;
  } catch (e) {
    return null;
  }
}