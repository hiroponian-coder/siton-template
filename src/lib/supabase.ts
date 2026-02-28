import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  try {
    // In a real implementation, this would fetch from Supabase.
    // const { data, error } = await supabase.from('profiles').select('*').eq('id', siteId).single();
    // return data;

    // Mock for demo/skeleton purposes if API is not available
    return {
      id: siteId,
      store_name: 'カフェサイトン23',
      industry: 'カフェ',
      design_atmosphere: 'modern',
      address: '東京都某区洗練町 2-3-1',
      business_hours: '11:00 - 23:00 (L.O. 22:30)',
      menu_items: 'エスプレッソ, 季節のドリップ, 自家製ティラミス, スフレパンケーキ, アボカドトースト',
      store_strengths: '都会の喧騒を離れた23時の静寂、厳選された豆とモダンな空間',
      instagram_id: 'cafe_saiton23',
      line_id: 'saiton23_official',
      image_urls: ['https://images.unsplash.com/photo-1509042239264-ed8b0c2a0974?auto=format&fit=crop&q=80&w=1200']
    };
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}