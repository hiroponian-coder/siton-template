import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  // In a real implementation, this would fetch from Supabase
  // Using a mock fetch for demonstration but structured for the actual environment
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/profiles?id=eq.${siteId}`, {
      headers: {
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
      },
      next: { revalidate: 60 }
    });
    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}