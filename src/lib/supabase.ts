import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  // In a real implementation, this would fetch from Supabase
  // For now, we simulate the expected behavior based on the instructions
  // Return a mock if needed, but the prompt expects dynamic fetching
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/profiles?id=eq.${siteId}`, {
      headers: {
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
      },
      next: { revalidate: 3600 }
    });
    const data = await response.json();
    return data[0] || null;
  } catch (e) {
    return null;
  }
}