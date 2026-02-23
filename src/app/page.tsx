import Hero from '@/components/home/Hero';
import Concept from '@/components/home/Concept';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import News from '@/components/home/News';
import { ShieldAlert } from 'lucide-react';

// 本番環境では Supabase からサイトの状態を取得する
async function getSiteStatus(siteId: string) {
    if (!siteId) return { is_blocked: false };

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/sites?id=eq.${siteId}&select=is_blocked`,
            {
                headers: {
                    'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
                },
                next: { revalidate: 60 } // 1分キャッシュ
            }
        );
        const data = await res.json();
        return data[0] || { is_blocked: false };
    } catch (e) {
        console.error('Failed to fetch site status', e);
        return { is_blocked: false };
    }
}

export default async function Home() {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const siteStatus = await getSiteStatus(siteId || '');

    if (siteStatus.is_blocked) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center">
                    <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldAlert className="h-8 w-8 text-rose-600" />
                    </div>
                    <h1 className="text-2xl font-bold mb-4">このサイトは現在<br />ご利用いただけません</h1>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        管理者によって公開が一時停止されています。<br />
                        再開までしばらくお待ちください。
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Hero />
            <Concept />
            <FeaturedMenu />
            <News />
        </div>
    );
}
