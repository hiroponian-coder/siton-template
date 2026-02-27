import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  // 実際のプロジェクトではSupabaseクライアントを使用してデータを取得します。
  // ここでは型定義に従ったレスポンスのシミュレーションを行います。
  // 実装例: return (await supabase.from('profiles').select('*').eq('id', siteId).single()).data;
  return {
    id: siteId,
    store_name: 'カフェサイトン１７CF',
    industry: 'カフェ',
    design_atmosphere: 'modern',
    address: '東京都渋谷区神宮前 1-2-3',
    business_hours: '10:00 - 20:00 (L.O. 19:30)',
    menu_items: '["エスプレッソ", "季節のドリップコーヒー", "自家製ティラミス", "アボカドトースト"]',
    store_strengths: '洗練された空間、厳選された豆、熟練のバリスタによる抽出',
    instagram_id: 'cafe_saiton_17cf',
    image_urls: ['https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200']
  };
}