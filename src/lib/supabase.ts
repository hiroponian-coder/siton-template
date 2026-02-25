import { Profile } from '@/types';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // すぐにデプロイして動くように、環境変数が無い場合はダミーデータを返すフォールバック
    return {
      store_name: "カフェサイトン",
      industry: "カフェ",
      design_atmosphere: "pop",
      store_strengths: "手作りケーキが自慢でから",
      menu_items: "季節のフルーツタルト,濃厚ガトーショコラ,自家製プリン,こだわりのドリップコーヒー",
      business_hours: "10:00 - 19:00 (L.O. 18:30) / 定休日: 水曜日",
      address: "東京都渋谷区神宮前X-X-X",
      access_info: "原宿駅から徒歩5分",
      seats_count: "20席（カウンター4席、テーブル16席）",
      price_range: "¥1,000 - ¥2,000",
      target_actions: "Instagramのフォローとご来店をお待ちしております",
      instagram_id: "cafesighton_official",
      image_urls: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"]
    };
  }

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/profiles?id=eq.${siteId}&select=*`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      },
      next: { revalidate: 60 }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data[0] || null;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}