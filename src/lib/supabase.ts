import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase credentials not found in environment variables.');
    return null;
  }

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/profiles?id=eq.${siteId}&select=*`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      },
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error('Failed to fetch profile:', res.statusText);
      return null;
    }

    const data = await res.json();
    return data && data.length > 0 ? data[0] : null;
  } catch (err) {
    console.error('Error fetching profile:', err);
    return null;
  }
}