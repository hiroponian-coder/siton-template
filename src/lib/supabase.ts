import { Profile } from '@/types/profile';

export async function getStoreProfile(siteId: string): Promise<Profile | null> {
  // This is a placeholder for actual Supabase fetch logic.
  // In a real environment, you would use the Supabase client here.
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profiles/${siteId}`, {
      next: { revalidate: 60 }
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (e) {
    return null;
  }
}