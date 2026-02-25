import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  // 実際のプロジェクトではSupabaseクライアントを使用してデータを取得します
  // ここではデモ用にプロンプトの設計に基づいたモックデータを返却する構造を模倣します
  // 本番環境では process.env.NEXT_PUBLIC_SUPABASE_URL 等を利用してください
  
  try {
    // fetch logic would go here
    // const { data } = await supabase.from('profiles').select('*').eq('id', siteId).single();
    return {
      id: siteId,
      store_name: 'カフェサイトン3',
      industry: 'カフェ',
      design_atmosphere: 'modern',
      address: '東京都渋谷区神南1-2-3 サイトンビル 1F',
      business_hours: '10:00 - 20:00 (L.O. 19:30)',
      seats_count: '24席 (テラス席あり)',
      price_range: '￥1,000 - ￥2,000',
      instagram_id: 'cafe_siteon3_official',
      line_id: '@siteon3',
      store_strengths: '自家焙煎のスペシャリティコーヒーと、建築家が設計したモダンな空間。',
      menu_items: 'ハンドドリップコーヒー:650,水出しアイスコーヒー:700,季節のフルーツタルト:850,アボカドトースト:1200',
      image_urls: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop'
      ]
    };
  } catch (e) {
    return null;
  }
}