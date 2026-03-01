import { connection } from 'next/server';
import { Profile } from '@/types/profile';

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  await connection();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase credentials not found in environment variables.');
    return null;
  }

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/rpc/get_profile_by_site_id`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ p_site_id: siteId }),
        cache: 'no-store'
      });

      if (!res.ok) {
        console.error(`[getStoreProfile] attempt ${attempt}/${MAX_RETRIES} failed: ${res.status} ${res.statusText}`);
        if (attempt < MAX_RETRIES) { await new Promise(r => setTimeout(r, RETRY_DELAY_MS)); continue; }
        return null;
      }

      const data = await res.json();
      if (Array.isArray(data)) {
        return data.length > 0 ? data[0] : null;
      }
      return data || null;
    } catch (err) {
      console.error(`[getStoreProfile] attempt ${attempt}/${MAX_RETRIES} error:`, err);
      if (attempt < MAX_RETRIES) { await new Promise(r => setTimeout(r, RETRY_DELAY_MS)); continue; }
      return null;
    }
  }
  return null;
}