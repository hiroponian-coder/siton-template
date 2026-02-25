import Hero from '@/components/home/Hero';
import Concept from '@/components/home/Concept';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import News from '@/components/home/News';
import { ShieldAlert } from 'lucide-react';

// 本番環境では Supabase からサイトの状態を取得する
async function getSiteStatus(siteId: string) {
    if (!siteId) return { is_blocked: false, is_published: false };

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/sites?id=eq.${siteId}&select=is_blocked,is_published`,
            {
                headers: {
                    'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
                },
                next: { revalidate: 60 } // 1分キャッシュ
            }
        );
        const data = await res.json();
        return data[0] || { is_blocked: false, is_published: false };
    } catch (e) {
        console.error('Failed to fetch site status', e);
        return { is_blocked: false, is_published: false };
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

    if (!siteStatus.is_published) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6"
                style={{ background: 'linear-gradient(135deg, #fdf6ff 0%, #f0f9ff 50%, #fff7f0 100%)' }}>
                <div className="max-w-sm w-full text-center">
                    <div className="text-7xl mb-6 animate-bounce">🐽</div>
                    <h1 className="text-3xl font-bold mb-3" style={{ color: '#7c5cbf' }}>
                        準備中です
                    </h1>
                    <p className="text-lg font-medium mb-2" style={{ color: '#a78bda' }}>
                        もうすぐ公開されます
                    </p>
                    <div className="flex items-center justify-center gap-2 my-6">
                        <div className="h-px w-12 rounded-full" style={{ background: '#d8b4fe' }}></div>
                        <span className="text-sm" style={{ color: '#c4b5fd' }}>✦</span>
                        <div className="h-px w-12 rounded-full" style={{ background: '#d8b4fe' }}></div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#a0aec0' }}>
                        サイトを準備しています。<br />
                        しばらくお待ちください。
                    </p>
                    <p className="mt-10 text-xs" style={{ color: '#d1d5db' }}>
                        Powered by <span style={{ color: '#a78bda' }}>サイトン</span>
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
