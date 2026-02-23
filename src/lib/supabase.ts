import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

import { Profile } from '../types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
    if (!siteId) return null;
    const { data, error } = await supabase.rpc('get_profile_by_site_id', { p_site_id: siteId });
    if (error) {
        console.error('Failed to fetch store profile:', error);
        return null;
    }
    return data && data.length > 0 ? data[0] : null;
}
